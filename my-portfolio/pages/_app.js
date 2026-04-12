import { useState, useMemo, useCallback } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import { createAppTheme } from '../src/theme.js';
import Layout from '../src/components/Layout';
import { ThemeContext } from '../src/context/ThemeContext';

export default function MyApp({ Component, pageProps = {} }) {
  const [mode, setMode] = useState('dark');

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const themeContextValue = useMemo(() => ({ mode, toggleTheme }), [mode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
