# Resources
resource "google_cloud_run_service" "portfolio" {
    name     = "portfolio-web"
    location = var.region

    template {
        metadata {
            annotations = {
                "autoscaling.knative.dev/minScale" = "1"
            }
        }

        spec {
            containers {
                image = "us-central1-docker.pkg.dev/${var.project_id}/${var.gcp_artifact_registry_repo}/portfolio:latest"

                resources {
                    limits = {
                        memory = "512Mi"
                        cpu    = "1"
                    }
                }
            }
        }
    }


    traffic {
    percent         = 100
    latest_revision = true
  }
}

# resource "google_cloud_run_domain_mapping" "portfolio_mapping" {
#     name        = "husamalsheikh.info"
#     location    = var.region

#     metadata {
#         namespace = google_cloud_run_service.portfolio.metadata[0].namespace
#     }

#     spec {
#         route_name = google_cloud_run_service.portfolio.status[0].url
#     }
# }