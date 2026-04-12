import { Container, Typography, Box, Chip, Link } from '@mui/material';
import { motion } from 'motion/react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TranslateIcon from '@mui/icons-material/Translate';
import { useThemeMode } from '../src/context/ThemeContext';

const workExperience = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Revature',
    duration: '01/2022 – 03/2022',
    responsibilities: [
      'Streamlined software development processes by creating efficient CI/CD pipelines using Jenkins, incorporating static code analysis and ensuring high-availability deployments',
      'Enhanced application monitoring and observability through the implementation of Prometheus, Grafana, and a Metrics API',
      'Managed and optimized Google Kubernetes Engine (GKE) and Google Compute Engine (GCE) resources',
      'Automated infrastructure provisioning using Terraform scripts to create Kubernetes and Compute Engine environments',
      'Fostered collaboration and communication between development and operations teams to streamline workflows and improve efficiency',
      'Secured cloud resources by configuring GCP service accounts and managing access controls',
    ],
  },
  {
    id: 2,
    title: 'Senior Cloud Engineer',
    company: 'LTIMindtree',
    duration: '04/2022 – 05/2025',
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
    title: 'Cloud Operations Admin',
    company: 'Inspira Financial',
    duration: '06/2025 – Present',
    responsibilities: [
      'Manage and optimize Azure cloud infrastructure, ensuring high availability, scalability, and cost efficiency across environments',
      'Upgrade existing servers and decommission legacy servers, improving infrastructure reliability and maintaining compliance with organizational standards',
      'Maintain and enhance CI/CD pipelines to streamline code integration, automate testing, and accelerate deployment cycles',
      'Diagnose and resolve critical issues in development, staging, and production environments, minimizing downtime and service interruptions',
      'Implement end-to-end monitoring solutions using Datadog, enabling proactive issue detection and performance optimization',
      'Improve release management processes by refining deployment workflows and reducing release times through automation and process optimization',
      'Collaborate with cross-functional teams to enhance operational reliability, drive continuous improvement, and support incident response initiatives',
    ],
  },
];

const certificates = [
  {
    name: 'CKA Certified Kubernetes Administrator',
    url: 'https://www.credly.com/badges/559818c8-1cd4-408d-b5ce-240909533396',
  },
  {
    name: 'AZ-104 Microsoft Azure Administrative Associate',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/HusamAlSheikh-5264/277FEFC03D3706F8?sharingId=39C651685B6997D9',
  },
  {
    name: 'AZ-900 Microsoft Azure Fundamentals',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/HusamAlSheikh-5264/2288C16DA2EAD72E?sharingId=39C651685B6997D9',
  },
  {
    name: 'AI-900 Microsoft Azure AI Fundamentals',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/HusamAlSheikh-5264/88BD6435182EA6E7?sharingId=39C651685B6997D9',
  },
];

const languages = ['Arabic (Native or Bilingual Proficiency)'];

export default function Experience() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const primaryColor = isDark ? '#38bdf8' : '#0284c7';
  const primaryAlpha8 = isDark ? 'rgba(56,189,248,0.08)' : 'rgba(2,132,199,0.08)';
  const primaryAlpha20 = isDark ? 'rgba(56,189,248,0.2)' : 'rgba(2,132,199,0.2)';
  const primaryAlpha30 = isDark ? 'rgba(56,189,248,0.3)' : 'rgba(2,132,199,0.3)';

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="h1" sx={{ mb: 1 }}>Work Experience</Typography>
        <Box sx={{ width: 56, height: 4, backgroundColor: 'primary.main', borderRadius: 2, mb: 7 }} />
      </motion.div>

      {/* Timeline */}
      <Box sx={{ position: 'relative', mb: 10 }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 12, md: 20 },
            top: 8,
            bottom: 8,
            width: 2,
            backgroundColor: 'divider',
            borderRadius: 1,
          }}
        />

        {workExperience.slice().reverse().map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 3, md: 5 },
                mb: 4,
                pl: { xs: '44px', md: '60px' },
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 6, md: 14 },
                  top: 20,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: primaryColor,
                  border: '2px solid',
                  borderColor: 'background.default',
                  boxShadow: `0 0 0 3px ${primaryAlpha20}`,
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  flex: 1,
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    borderColor: primaryAlpha30,
                    boxShadow: `0 4px 24px ${isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'}`,
                  },
                }}
              >
                {/* Card header */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    mb: 0.75,
                  }}
                >
                  <Typography variant="h3" sx={{ color: 'primary.main' }}>
                    {job.title}
                  </Typography>
                  <Chip
                    label={job.duration}
                    size="small"
                    sx={{
                      backgroundColor: primaryAlpha8,
                      color: 'primary.main',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      border: `1px solid ${primaryAlpha20}`,
                      height: 26,
                    }}
                  />
                </Box>

                <Typography variant="h5" color="text.secondary" sx={{ mb: 3, fontWeight: 500 }}>
                  {job.company}
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                  {job.responsibilities.map((r, idx) => (
                    <Box component="li" key={idx} sx={{ mb: 1 }}>
                      <Typography variant="body1" color="text.secondary">
                        {r}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
          <WorkspacePremiumIcon sx={{ color: 'primary.main', fontSize: '1.75rem' }} />
          <Typography variant="h2">Certifications</Typography>
        </Box>
        <Box sx={{ width: 56, height: 4, backgroundColor: 'primary.main', borderRadius: 2, mb: 4 }} />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 2,
            mb: 10,
          }}
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
            >
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      borderColor: primaryAlpha30,
                      boxShadow: `0 4px 20px ${isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'}`,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500, color: 'text.primary', lineHeight: 1.4 }}
                  >
                    {cert.name}
                  </Typography>
                  <OpenInNewIcon sx={{ color: 'primary.main', fontSize: '1rem', flexShrink: 0 }} />
                </Box>
              </Link>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
          <TranslateIcon sx={{ color: 'secondary.main', fontSize: '1.75rem' }} />
          <Typography variant="h2">Languages</Typography>
        </Box>
        <Box sx={{ width: 56, height: 4, backgroundColor: 'secondary.main', borderRadius: 2, mb: 4 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {languages.map((lang) => (
            <Chip
              key={lang}
              label={lang}
              variant="outlined"
              color="secondary"
              sx={{ fontSize: '0.9rem', fontWeight: 500, px: 1, py: 2.5, borderRadius: '10px' }}
            />
          ))}
        </Box>
      </motion.div>

    </Container>
  );
}
