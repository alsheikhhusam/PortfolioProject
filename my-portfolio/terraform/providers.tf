# Providers
provider "google" {
  project = var.project_id
  region  = var.region

  #* Only needed locally for authentication - not in CI/CD
  # credentials = file(var.gcp_credentials_file_path)
}