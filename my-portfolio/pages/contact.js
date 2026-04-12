import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Link, Alert, Collapse } from '@mui/material';
import { motion } from 'motion/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { useThemeMode } from '../src/context/ThemeContext';

export default function Contact() {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [responseSeverity, setResponseSeverity] = useState('success');
  const [errors, setErrors] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResponseMessage(data.message);
      setResponseSeverity(res.ok ? 'success' : 'error');
      setShowMessage(true);
      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      }
    } catch {
      setResponseMessage('Something went wrong. Please try again later.');
      setResponseSeverity('error');
      setShowMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showMessage) {
      const hideTimer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(hideTimer);
    }
  }, [showMessage]);

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="h1" sx={{ mb: 1 }}>Get In Touch</Typography>
        <Box sx={{ width: 56, height: 4, backgroundColor: 'primary.main', borderRadius: 2, mb: 3 }} />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Looking to connect or get in touch? Reach out via LinkedIn or fill out the contact form below.
        </Typography>

        {/* LinkedIn quick link */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', marginBottom: '40px' }}>
          <Link
            href="https://www.linkedin.com/in/husam-alsheikh/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: 2,
                border: '1.5px solid',
                borderColor: isDark ? 'rgba(56,189,248,0.25)' : 'rgba(2,132,199,0.25)',
                color: 'primary.main',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'background-color 0.2s',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(56,189,248,0.06)' : 'rgba(2,132,199,0.06)',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: '1.1rem' }} />
              Connect on LinkedIn
            </Box>
          </Link>
        </motion.div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            noValidate
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                autoComplete="name"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                autoComplete="email"
              />
            </Box>

            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              fullWidth
              multiline
              rows={5}
            />

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                endIcon={<SendIcon />}
                sx={{ py: 1.5, fontSize: '1rem' }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </motion.div>
          </Box>

          {/* Response message */}
          <Collapse in={showMessage} timeout={400}>
            <Box sx={{ mt: 3 }}>
              <Alert
                severity={responseSeverity}
                onClose={() => setShowMessage(false)}
                sx={{ borderRadius: 2 }}
              >
                {responseMessage}
              </Alert>
            </Box>
          </Collapse>
        </Box>
      </motion.div>

    </Container>
  );
}
