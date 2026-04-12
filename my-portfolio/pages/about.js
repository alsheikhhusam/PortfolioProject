import { Container, Typography, Box, Avatar, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { useThemeMode } from '../src/context/ThemeContext';

const skills = [
  'Azure',
  'Google Cloud Platform',
  'Incident Management',
  'Release Management',
  'SRE',
  'DevOps',
  'Docker',
  'Kubernetes',
  'Git',
  'Terraform',
  'Bicep',
  'CI/CD',
  'Datadog',
  'Grafana',
  'Loki',
  'Prometheus',
  'Promtail',
  'KQL',
  'PostgreSQL',
  'MySQL',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerSkills = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const startYear = 2022;
  const yearsExperience = new Date().getFullYear() - startYear;

  const cardSx = {
    p: 4,
    borderRadius: 3,
    backgroundColor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider',
    height: '100%',
    transition: 'border-color 0.25s ease',
    '&:hover': {
      borderColor: isDark ? 'rgba(56,189,248,0.25)' : 'rgba(2,132,199,0.25)',
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 3, md: 4 },
            mb: 3,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Avatar
                alt="Husam Alsheikh"
                src="/TestPFP.png"
                sx={{
                  width: 120,
                  height: 120,
                  border: '2.5px solid',
                  borderColor: 'primary.main',
                  boxShadow: isDark
                    ? '0 0 0 4px rgba(56,189,248,0.1)'
                    : '0 0 0 4px rgba(2,132,199,0.1)',
                }}
              />
            </motion.div>
          </Box>
          <Box>
            <Typography variant="h1" sx={{ mb: 0.5, lineHeight: 1.1 }}>
              Husam Alsheikh
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 400 }}>
              World&apos;s most dedicated engineer!
            </Typography>
          </Box>
        </Box>

        {/* Accent divider */}
        <Box
          sx={{
            width: 56,
            height: 4,
            backgroundColor: 'primary.main',
            borderRadius: 2,
            mb: 7,
          }}
        />
      </motion.div>

      {/* Two-column cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          mb: 3,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={cardSx}>
            <Typography
              variant="h3"
              sx={{ mb: 2.5, color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Senior Cloud Engineer with a passion for all things cloud-based. With over{' '}
              {yearsExperience} years of experience, I specialize in Azure Cloud Engineering
              and helping businesses achieve scalable and secure cloud solutions. I am also
              experienced in high-level incident management, ensuring rapid resolution and
              system reliability in critical situations.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={cardSx}>
            <Typography
              variant="h3"
              sx={{ mb: 2.5, color: 'secondary.main' }}
            >
              Beyond Work
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Outside of work, I enjoy exploring new technologies, gaming, and spending time
              with family. I am always eager to connect with like-minded individuals and
              collaborate on exciting ventures.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
            Skills &amp; Technologies
          </Typography>

          <motion.div
            variants={staggerSkills}
            initial="hidden"
            animate="visible"
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
              {skills.map((skill) => (
                <motion.div key={skill} variants={skillItem} transition={{ duration: 0.25 }}>
                  <motion.div whileHover={{ scale: 1.09, y: -2 }} whileTap={{ scale: 0.94 }}>
                    <Chip
                      label={skill}
                      variant="outlined"
                      color="primary"
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        px: 0.5,
                        borderRadius: '8px',
                        cursor: 'default',
                        transition: 'background-color 0.2s, color 0.2s',
                        '&:hover': {
                          backgroundColor: isDark
                            ? 'rgba(56,189,248,0.1)'
                            : 'rgba(2,132,199,0.08)',
                        },
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </motion.div>

    </Container>
  );
}
