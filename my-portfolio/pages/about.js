import { Container, Typography, Box, Avatar, Grid2, Chip } from '@mui/material';

export default function About() {
  const skills = [
    'Azure',
    'GCP',
    'CI/CD Pipelines',
    'Terraform',
    'Kubernetes',
    'Docker',
    'Python',
    'DevOps',
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Avatar
          alt="Profile Picture"
          src="/TestPFP.png"
          sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }}
        />
        <Typography variant="h2" gutterBottom>
          Husam Alsheikh
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Senior Cloud Engineer | Azure Specialist | Tech Enthusiast
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          I’m Husam Alsheikh, a Senior Cloud Engineer with a passion for all things cloud-based.
          With over 3 years of experience, I specialize in Azure Cloud Engineering and helping
          businesses achieve scalable and secure cloud solutions.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          My Skills
        </Typography>
        <Grid2 container spacing={2}>
          {skills.map((skill) => (
            <Grid2 key={skill} xs="auto">
            <Chip label={skill} color="primary" variant="outlined" />
          </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box>
        <Typography variant="h4" gutterBottom>
          Beyond Work
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Outside of work, I enjoy exploring new technologies, gaming, and spending time with family.
          I am always eager to connect with like-minded individuals and collaborate on exciting ventures.
        </Typography>
      </Box>
    </Container>
  );
}
