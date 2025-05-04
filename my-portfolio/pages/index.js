import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        py: 8,
        color: 'text.primary',
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add text shadow for better visibility
        }}
      >
        Welcome to my Portfolio
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Subtle text shadow
          color: 'text.secondary',
        }}
      >
        I’m a Senior Cloud Engineer passionate about Azure Cloud Engineering with experience in DevOps. Explore my projects, learn about me, and feel free to get in touch.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 4,
        }}
      >
        <Link href="/about" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.4rem',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)', // Add hover animation
              },
            }}
          >
            About Me
          </Button>
        </Link>
        <Link href="/experience" passHref>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              margin: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.4rem',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)', // Add hover animation
              },
            }}
          >
            Experience
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.4rem',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)', // Add hover animation
              },
            }}
          >
            Contact Me
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
