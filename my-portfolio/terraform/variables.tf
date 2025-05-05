// Input Variables

variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Deployment Region"
  type        = string
}

variable "name" {
  description = "Deployment Name"
  type        = string
}

variable "gcp_artifact_registry_repo" {
  description = "GCP Artifact Registry Repo Name"
  type        = string
}

variable "gcp_credentials_file_path" {
  description = "Path to GCP credentials file"
  type        = string
  
}