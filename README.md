# My Portfolio Website

This is my personal portfolio website built with **Next.js** and deployed on **Google Cloud Run**. It serves as a showcase of my technical skills, projects, and professional experience. The project is intentionally over-engineered to highlight my capabilities in cloud infrastructure, DevOps, and modern web development.

##### Note: Using GCP instead of Azure as first it is cheaper, and second I am already very familiar with Azure and I wanted a challenge with a not so familiar platform.

## Features

- Built with Next.js for optimized performance and SEO
- Deployed using Google Cloud Run
- Automated CI/CD pipeline with GitHub Actions
- Infrastructure as Code (IaC) using Terraform
- Cloudflare for domain management and security
- Monitoring and logging with Grafana, Prometheus, and Loki
- Containerized development with Docker

## Technology Stack

**Frontend:** Next.js, React, Material-UI
<br>
**Backend:** Node.js
<br>
**Cloud & DevOps:** Google Cloud Run, Docker, Terraform
<br>
**CI/CD:** GitHub Actions, Cloudflare
<br>
**Monitoring & Logging:** Grafana, Prometheus, Loki
<br>
**Security:** Cloudflare WAF, Bot Protection

## Different Deployment Types

1. First method is creating a google cloud run service via the console/portal and through a service account hook it up to github actions and have it update the revision everytime there is a push to the main branch via a CI/CD pipeline.
    - This is pretty straight forward and although aside from the initial setup everything is automated and everytime I do a code revision or update, my site gets updated just by pushing the changes.
    - Good method for small scale projects or testing, not for enterprise or prod.
2. Second is deploying my infrastructure via IaC using Terraform. The first method is too direct and not the devops way to do things as it's primarly used in non-enterprise means or for small scale testing.
    - I declaratively define the state of the infrastructure and have it worry about how to achieve it.
    - I deploy the cloud run service, a vm for grafana, and a few service accounts for managing identities and authentication.
    - Good method for prod and enterprise as it leverages IaC to automate and standardize infrastructure, improve collaboration and scalability, reduce human error and improve security. 
3. *Next way I will deploy this site is via Kubernetes as I enjoy working with it - InProgress*

<br>

***Note: This site is still under development and is not yet complete.***

## Plans Ahead

- **~~Implement a back button for easier navigation~~**
- **Add Particles.js to the background**
- **~~Implement monitoring via a Grafana Dashboard~~**
- **~~Implement Prometheus for log aggregation in connection with Grafana for data Visualization~~**
- **Improve Site Security**
- **Improve Site Resiliency**
- **Implement Light/Dark mode toggle**
- **Improve Contact Form**
- **Site Performance Improvements**
- **Interactive Resume Viewer and Downloader**
- **Add Project Roadmap and Progress Tracking**
