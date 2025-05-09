output "cloud_run_url" {
  value = google_cloud_run_v2_service.webapp-terraform.uri
}

output "vm_ip" {
  value = "http://${google_compute_instance.grafana-vm.network_interface[0].access_config[0].nat_ip}:3000"
}

output "domain_mapping_dns_records" {
  value = google_cloud_run_domain_mapping.custom_domain_mapping.status[0].resource_records
}