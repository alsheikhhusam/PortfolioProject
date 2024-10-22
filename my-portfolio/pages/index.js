import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h2" gutterBottom>
            Welcome to My Portfolio
      </Typography>

      <Typography variant="body1" component="p">
            Explore my projects, read my blog, and feel free to get in touch!
      </Typography>

      <Link href="/about" passHref>
        <Button variant="contained" color="primary" sx={{ m: 2 }}>
            About Me
        </Button>
      </Link>

      <Link href="/projects" passHref>
        <Button variant="contained" color="primary" sx={{ m: 2 }}>
            View Projects
        </Button>
      </Link>

      <Link href="/contact" passHref>
        <Button variant="contained" color="primary" sx={{ m: 2 }}>
            Contact
        </Button>
      </Link>
    </Container>
  );
}
