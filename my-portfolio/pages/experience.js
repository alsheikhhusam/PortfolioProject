import { Container, Typography, Box, Divider, Link, Button } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const workExperience = [
    {
    id: 1,
    title: 'Cloud Operations Admin',
    company: 'Inspira Financial',
    duration: '06/2025 - Present',
    responsibilities: [
      'Manage and optimize Azure cloud infrastructure, ensuring high availability, scalability, and cost efficiency across environments',
      'Upgrade existing servers and decommission legacy servers, improving infrastructure reliability and maintaining compliance with organizational standards',
      'Maintain and enhance CI/CD pipelines to streamline code integration, automate testing, and accelerate deployment cycles',
      'Diagnose and resolve critical issues in development, staging, and production environments, minimizing downtime and service interruptions',
      'Implement end-to-end monitoring solutions using Datadog, enabling proactive issue detection and performance optimization',
      'Improve release management processes by refining deployment workflows and reducing release times through automation and process optimization',
      'Collaborate with cross-functional teams to enhance operational reliability, drive continuous improvement, and support incident response initiatives'
    ]
  },
  {
    id: 2,
    title: 'Senior Cloud Engineer',
    company: 'LTIMindtree',
    duration: '04/2022 - 05/2025',
    responsibilities: [
      'Troubleshoot and resolve complex technical issues related to Azure Core Services, including Networking, Compute and Storage',
      'Implement time-sensitive mitigation strategies to minimize customer impact and conduct thorough root cause analyses',
      'Coordinate and manage the incident response team while maintaining 100% SLA',
      'Develop and maintain incident response plans',
      'Writing documentation on manuals, help guides, and other support material on new processes',
      'Train new members on essential skills, practices and guidelines within the team',
    ],
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Revature',
    duration: '01/2021 - 03/2022',
    responsibilities: [
      'Streamlined software development processes by creating efficient CI/CD pipelines using Jenkins, incorporating static code analysis and ensuring high-availability deployments',
      'Enhanced application monitoring and observability through the implementation of Prometheus, Grafana, and a Metrics API',
      'Managed and optimized Google Kubernetes Engine (GKE) and Google Compute Engine (GCE) resources',
      'Automated infrastructure provisioning using Terraform scripts to create Kubernetes and Compute Engine environments',
      'Fostered collaboration and communication between development and operations teams to streamline workflows and improve efficiency',
      'Secured cloud resources by configuring GCP service accounts and managing access controls',
    ],
  }
];

const certificates = [
  { name: 'CKA Certified Kubernetes Administrator', url: null },
  { name: 'AZ-104 Microsoft Azure Administrative Associate', url: 'https://learn.microsoft.com/api/credentials/share/en-us/HusamAlSheikh-5264/277FEFC03D3706F8?sharingId=39C651685B6997D9' },
  { name: 'AZ-900 Microsoft Azure Fundamentals', url: 'https://learn.microsoft.com/api/credentials/share/en-us/HusamAlSheikh-5264/2288C16DA2EAD72E?sharingId=39C651685B6997D9' },
  { name: 'AI-900 Microsoft Azure AI Fundamentals', url: 'https://learn.microsoft.com/api/credentials/share/en-us/HusamAlSheikh-5264/88BD6435182EA6E7?sharingId=39C651685B6997D9' }
];

const languages = [
  'Arabic (Native or Bilingual Proficiency)'
];

export default function Experience() {
  // Handle back button click
  const router = useRouter();
  const handleBackClick = () => {
      router.back();
  }
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Back Button */}
      <Box sx={{ mb: 4 }}>
          <Button
              variant="outlined"
              color="primary"
              onClick={handleBackClick}
              startIcon={<ArrowBackIcon />}
          >
          </Button>
      </Box>
            
      {/* Work Experience Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
        >
          Work Experience
        </Typography>
        <Divider sx={{ mb: 4 }} />
        {workExperience.map((job) => (
          <Box key={job.id} sx={{ mb: 4 }}>
            <Typography variant="h3" color="secondary.main" fontWeight="bold">
              {job.title}
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {job.company} <span style={{ marginLeft: '0.5rem' }}>{job.duration}</span>
            </Typography>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {job.responsibilities.map((responsibility, index) => (
                <li key={responsibility.length + index}>
                  <Typography variant="body1" color="text.secondary">
                    {responsibility}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>

      {/* Certificates Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
        >
          Certificates
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Box>
          {certificates.map((certificate, index) => (
            <Typography
              key={certificate.name.length + index}
              variant="body1"
              sx={{ mb: 1, color: 'text.secondary' }}
            >
              {certificate.url ? (
                <Link
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  underline="hover"
                >
                  • {certificate.name}
                </Link>
              ) : (
                  <span>
                    • {certificate.name}
                    <span style={{ marginLeft: '0.5rem', fontStyle: 'italic', color: 'gray' }}>- in progress</span>
                  </span>
              )}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Languages Section */}
      <Box>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
        >
          Languages
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Box>
          {languages.map((language, index) => (
            <Typography
              key={language.length + index}
              variant="body1"
              sx={{ mb: 1, color: 'text.secondary' }}
            >
              • {language}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
