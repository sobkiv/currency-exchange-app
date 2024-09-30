'use client';

import { ThemeProvider } from './theme-provider';
import { SnackbarProvider } from './snackbar-provider';
import ReactQueryProvider from './react-query-provider';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
