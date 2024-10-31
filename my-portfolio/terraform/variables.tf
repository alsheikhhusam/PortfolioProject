# Input Variables
variable "gcp_credentials_file" {
  description = "Location of GCP Service Account Credentials File"
}

variable "project_id" {
  description = "GCP Project ID"
}

variable "region" {
  default     = "us-central1"
}

variable "container_image" {
  description = "Container Image"
}
