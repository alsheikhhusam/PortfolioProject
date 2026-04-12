import { createTheme } from '@mui/material/styles';

export function createAppTheme(mode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? '#38bdf8' : '#0284c7' },
      secondary: { main: isDark ? '#a78bfa' : '#7c3aed' },
      background: {
        default: isDark ? '#0f172a' : '#f1f5f9',
        paper: isDark ? '#1e293b' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f1f5f9' : '#0f172a',
        secondary: isDark ? '#94a3b8' : '#475569',
      },
      divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", Arial, sans-serif',
      h1: { fontSize: '2.75rem', fontWeight: 700, letterSpacing: '-0.03em' },
      h2: { fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em' },
      h3: { fontSize: '1.5rem', fontWeight: 600 },
      h4: { fontSize: '1.25rem', fontWeight: 600 },
      h5: { fontSize: '1rem', fontWeight: 600 },
      h6: { fontSize: '0.875rem', fontWeight: 600 },
      body1: { fontSize: '1rem', lineHeight: 1.7 },
      body2: { fontSize: '0.875rem', lineHeight: 1.6 },
      button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.01em' },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 8, padding: '10px 24px' },
          outlined: {
            borderWidth: '1.5px',
            '&:hover': { borderWidth: '1.5px' },
          },
        },
      },
      MuiChip: { styleOverrides: { root: { borderRadius: 8 } } },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.15)',
              },
              '&:hover fieldset': {
                borderColor: isDark ? 'rgba(56,189,248,0.5)' : 'rgba(2,132,199,0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDark ? '#38bdf8' : '#0284c7',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: isDark ? '#38bdf8' : '#0284c7',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
}

// Default export for backwards compatibility
export default createAppTheme('dark');
