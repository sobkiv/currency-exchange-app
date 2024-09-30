import Box from '@mui/material/Box';
import { Providers } from '../providers/providers';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

// /** @type {import('next').Metadata} */
// export const metadata = {
//   metadataBase: new URL('https://aicrunch.io'),
//   title: 'AI tools, news, guides, updates',
//   description:
//     'Access the most extensive AI database. Utilize our intelligent AI search to discover the optimal AI tools for any specific use case.',
//   openGraph: OPEN_GRAPH,
//   twitter: {
//     site: '@aicrunchio',
//     siteId: '1701202137399668736',
//     card: 'summary_large_image',
//     title: 'AI Crunch: handpicked AI tools library',
//     images: [
//       {
//         url: PAGE_OG_IMAGE,
//         alt: 'AI Crunch: handpicked AI tools library',
//       },
//     ],
//     description:
//       'Access the most extensive AI database. Utilize our intelligent AI search to discover the optimal AI tools for any specific use case.',
//   },
// };

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
