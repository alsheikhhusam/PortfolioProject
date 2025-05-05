# Resources

resource "google_cloud_run_v2_service" "webapp-terraform" {
    name     = var.name
    location = var.region

    deletion_protection = false

    template {
        containers {
            // Artifact Registry URL for the container image
            image = "us-central1-docker.pkg.dev/portfolioproject-7841/cloud-run-source-deploy-portfolio/portfolio@sha256:be5a9ab6913b6504e2d9eb3268db18026ed90f4d5af8ebb870b9bb9ba0a54ff2"
        }
    }
}

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