import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" gutterBottom>
      Welcome to my Portfolio
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        I’m a Senior Cloud Engineer passionate about Azure Cloud Engineering with experience in DevOps. Explore my projects, learn about me, and feel free to get in touch.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link href="/about" passHref>
          <Button variant="contained" color="primary">About Me</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button variant="contained" color="secondary">My Projects</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button variant="contained" color="primary">Contact Me</Button>
        </Link>
      </Box>
    </Container>
  );
}
