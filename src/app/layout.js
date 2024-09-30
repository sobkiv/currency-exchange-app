import Box from '@mui/material/Box';
import { Providers } from '@/providers/providers';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <Box component="body" sx={{ textRendering: 'optimizeLegibility' }}>
        <Providers>{children}</Providers>
      </Box>
    </html>
  );
}
