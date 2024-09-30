import { useMemo } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeConfig } from '@/shared/config/theme/theme-config';

export function ThemeProvider({ children }) {
  // useMemo is here for future dark mode or others custom props
  const theme = useMemo(() => {
    const customTheme = createTheme(themeConfig);

    return responsiveFontSizes(customTheme, { variants: [] });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
