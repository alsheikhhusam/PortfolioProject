// Input Variables

variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Deployment Region"
  type        = string
}

variable "zone" {
  description = "GCP Deployment Zone"
  type        = string
  default     = "us-central1-a"
}

variable "cloud_run_name" {
  description = "Deployment Name"
  type        = string
}

variable "gcp_artifact_registry_url" {
  description = "GCP Artifact Registry URL"
  type        = string
}

# variable "gcp_credentials_file_path" {
#   description = "Path to GCP credentials file"
#   type        = string
# }

variable "vpc_network_name" {
  description = "Name of the VPC network"
  type        = string
}

variable "subnetwork_name" {
  description = "Name of the subnetwork"
  type        = string
}

variable "vm_name" {
  description = "Name of the VM instance"
  type        = string
}

variable "grafana_service_account_name" {
  description = "Name of the grafana monitoring service account"
  type        = string
  
}

variable "vm_size" {
  description = "Size of the VM instance"
  type        = string
  default     = "e2-micro"
}

variable "private_ip" {
  description = "my own personal IP address to allow SSH access to the VM"
  type        = string
}