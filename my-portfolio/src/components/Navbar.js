import { Box, Container, IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useThemeMode } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.82)' : 'rgba(241, 245, 249, 0.85)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 1.75,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
              <Box
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'primary.main',
                  letterSpacing: '-0.02em',
                  fontFamily: '"Inter", sans-serif',
                  userSelect: 'none',
                }}
              >
                HA
              </Box>
            </motion.div>
          </Link>

          {/* Right side: nav links + toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3.5 } }}>
            {navLinks.map((link, i) => {
              const isActive = router.pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link href={link.href} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        color: isActive ? 'primary.main' : 'text.secondary',
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '0.9rem',
                        letterSpacing: '0.01em',
                        transition: 'color 0.2s ease',
                        position: 'relative',
                        pb: 0.5,
                        cursor: 'pointer',
                        '&:hover': { color: 'text.primary' },
                        ...(isActive && {
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'primary.main',
                            borderRadius: '2px',
                          },
                        }),
                      }}
                    >
                      {link.label}
                    </Box>
                  </Link>
                </motion.div>
              );
            })}

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: 15 }}>
                  <IconButton
                    onClick={toggleTheme}
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
                    }}
                  >
                    {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                  </IconButton>
                </motion.div>
              </Tooltip>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </motion.header>
  );
}
