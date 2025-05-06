// Private Virtual Network and Subnetwork for Grafana
resource "google_compute_network" "grafana-vpc-network" {
    name = var.vpc_network_name
    auto_create_subnetworks = false
}

// Subnetwork for Grafana
resource "google_compute_subnetwork" "grafana-subnetwork" {
    name          = var.subnetwork_name
    ip_cidr_range = "10.0.1.0/24"
    region = var.region
    network = google_compute_network.grafana-vpc-network.self_link
    private_ip_google_access = true
}

// Service Account for grafana
resource "google_service_account" "grafana-monitoring-sa" {
    account_id   = "grafana-monitoring-sa"
    display_name = var.grafana_service_account_name
    project      = var.project_id
}

// IAM Role for Grafana
resource "google_project_iam_member" "grafana-monitoring-role" {
    project = var.project_id
    role    = "roles/monitoring.viewer"
    member  = "serviceAccount:${google_service_account.grafana-monitoring-sa.email}"
}
resource "google_project_iam_member" "grafana-storage-viewer-role" {
    project = var.project_id
    role    = "roles/storage.objectViewer"
    member  = "serviceAccount:${google_service_account.grafana-monitoring-sa.email}"
}
resource "google_project_iam_member" "grafana-cloud-logging-role" {
    project = var.project_id
    role = "roles/logging.viewer"
    member = "serviceAccount:${google_service_account.grafana-monitoring-sa.email}"
}


// VM for Grafana
resource "google_compute_instance" "grafana-vm" {
    name     = var.vm_name
    machine_type = var.vm_size
    zone    = var.zone

    deletion_protection = false

    tags = ["grafana", "private"]

    boot_disk {
        initialize_params {
            image = "debian-cloud/debian-11"
            size = 20
        }
    }

    network_interface {
        subnetwork = google_compute_subnetwork.grafana-subnetwork.self_link
        access_config {
            
        }
    }

    #! Reminder to change end-of-line to LF in VSCode before deploying
    #! Linux VM will not accept CRLF line endings in the startup script below
    metadata = {
      startup-script = <<-SCRIPT
            #!/bin/bash
            #* Exit immediately if a command exits with a non-zero status
            set -e

            #* Print each command before executing it - Logging/Debugging assist
            set -x
            
            #* Install Grafana
            apt-get update
            apt-get install -y apt-transport-https software-properties-common wget
            mkdir -p /etc/apt/keyrings/
            wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
            echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
            apt-get update
            apt-get install -y grafana

            #* Enable and start Grafana service
            systemctl daemon-reload
            systemctl start grafana-server
            systemctl enable grafana-server
        SCRIPT
    }

    service_account {
        email = google_service_account.grafana-monitoring-sa.email
        scopes = ["cloud-platform"]
    }

    allow_stopping_for_update = true
}

// Firewall Rule - Allow SSH
resource "google_compute_firewall" "allow-ssh" {
    name = "allow-ssh"
    network = google_compute_network.grafana-vpc-network.name
    allow {
        protocol = "tcp"
        ports    = ["22"]
    }

    source_ranges = [var.private_ip, "35.235.240.0/20"]
    target_tags   = ["grafana"]
}

// Firewall Rule - Allow Grafana to communicate with cloud run service by opening port 3000
resource "google_compute_firewall" "allow-grafana" {
    name = "allow-grafana"
    network = google_compute_network.grafana-vpc-network.name
    allow {
        protocol = "tcp"
        ports    = ["3000"]
    }

    source_ranges = [var.private_ip, "10.0.1.0/24"]
    target_tags   = ["grafana"]
}

// Cloud Run Service - Deploying the web application
resource "google_cloud_run_v2_service" "webapp-terraform" {
    name     = var.cloud_run_name
    location = var.region

    deletion_protection = false

    template {
        containers {
            // Artifact Registry URL for the container image
            image = "us-central1-docker.pkg.dev/portfolioproject-7841/cloud-run-source-deploy-portfolio/portfolio@sha256:be5a9ab6913b6504e2d9eb3268db18026ed90f4d5af8ebb870b9bb9ba0a54ff2"
        }
    }
}

// IAM Policy - Allow unauthenticated invocations to the Cloud Run service
resource "google_cloud_run_v2_service_iam_policy" "no-auth" {
    name = google_cloud_run_v2_service.webapp-terraform.name
    project = google_cloud_run_v2_service.webapp-terraform.project
    location = google_cloud_run_v2_service.webapp-terraform.location

    policy_data = data.google_iam_policy.public_iam_policy.policy_data
}

// Grant the special principalId "allUsers" access to the service via the IAM policy
data google_iam_policy "public_iam_policy" {
    binding {
        role = "roles/run.invoker"
        members = [
            "allUsers",
        ]
    }
}