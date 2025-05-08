terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.34"
    }
  }

  backend "gcs" {
    bucket = "terraform-state-bucket-5868"
    prefix = "production/terraform"
  }
}