import type { Metadata, Viewport } from 'next';
import PageTransition from '../components/PageTransition';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spaceborn',
  description: 'The Android of drone autonomy through simulation-first intelligence.',
  icons: {
    icon: 'https://res.cloudinary.com/dq9x4mk1y/image/upload/w_256,h_256,c_fill/v1782859776/WhatsApp_Image_2026-06-30_at_19.48.56_g8owa7.jpg',
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#010101' },
    { media: '(prefers-color-scheme: dark)', color: '#010101' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

