import { Box } from '@mui/material';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ pt: '68px', minHeight: '100vh' }}>
        {children}
      </Box>
    </>
  );
}
