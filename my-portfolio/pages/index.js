import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useThemeMode } from '../src/context/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const ctaButtons = [
  { href: '/about', label: 'About Me', variant: 'contained', color: 'primary' },
  { href: '/experience', label: 'Experience', variant: 'outlined', color: 'primary' },
  { href: '/contact', label: 'Contact', variant: 'outlined', color: 'secondary' },
];

export default function Home() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient orb — top right */}
      <motion.div
        animate={{ y: [0, -22, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(2,132,199,0.06) 0%, transparent 70%)',
          top: '-5%',
          right: '-5%',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient orb — bottom left */}
      <motion.div
        animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
          bottom: '5%',
          left: '-3%',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle dot grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">

          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <Typography
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                mb: 2.5,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              SENIOR CLOUD ENGINEER
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '3.75rem', md: '5.25rem' },
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                mb: 2.5,
                background: isDark
                  ? 'linear-gradient(135deg, #f1f5f9 25%, #64748b 100%)'
                  : 'linear-gradient(135deg, #0f172a 25%, #475569 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Husam<br />Alsheikh
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                flexWrap: 'wrap',
                mb: 4,
              }}
            >
              {['Azure', 'DevOps', 'SRE', 'Incident Management'].map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'primary.main',
                    backgroundColor: isDark ? 'rgba(56,189,248,0.08)' : 'rgba(2,132,199,0.08)',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(56,189,248,0.2)' : 'rgba(2,132,199,0.2)',
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 5,
                maxWidth: '520px',
                lineHeight: 1.8,
                fontSize: '1.05rem',
              }}
            >
              Passionate about building scalable, resilient cloud infrastructure.
              I help teams move faster with confidence through solid DevOps practices and reliable incident management.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {ctaButtons.map((btn) => (
                <motion.div key={btn.href} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link href={btn.href} passHref>
                    <Button
                      variant={btn.variant}
                      color={btn.color}
                      sx={{ px: 3.5, py: 1.25, fontSize: '0.95rem' }}
                    >
                      {btn.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </Box>
          </motion.div>

        </motion.div>
      </Container>
    </Box>
  );
}
