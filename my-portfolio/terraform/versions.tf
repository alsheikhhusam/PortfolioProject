terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 6.34.0"
    }
  }

  backend "gcs" {
    bucket = "terraform-state-bucket-5868"
    prefix = "production/terraform"
  }
}

# Providers
provider "google" {
  project = var.project_id
  region  = var.region

  #* Only needed locally for authentication - not in CI/CD
  # credentials = file(var.gcp_credentials_file_path)
}