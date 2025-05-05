output "cloud_run_url" {
  value = google_cloud_run_v2_service.webapp-terraform.uri
}

output "vm_ip" {
  value = google_compute_instance.grafana-vm-instance.network_interface[0].network_ip
}