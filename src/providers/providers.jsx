'use client';
import { ThemeProvider } from './theme-provider';
import ReactQueryProvider from './react-query-provider';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
};
