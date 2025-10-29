// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { WebVitals } from '@/components/performance/WebVitals';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://truyens.pro'),
  title: {
    default: 'Boris Truyens - Webontwikkelaar & Digital Consultant',
    template: '%s | Boris Truyens'
  },
  description: 'Professionele webontwikkeling en digitale oplossingen. Specialist in Next.js, React, en moderne web technologieën. Van concept tot lancering.',
  keywords: [
    'webontwikkelaar',
    'web developer',
    'Next.js',
    'React',
    'TypeScript',
    'webdesign',
    'e-commerce',
    'digitale oplossingen',
    'België',
    'Leuven',
    'freelancer'
  ],
  authors: [{ name: 'Boris Truyens', url: 'https://truyens.pro' }],
  creator: 'Boris Truyens',
  publisher: 'Boris Truyens',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    alternateLocale: ['en_US', 'fr_BE'],
    url: 'https://truyens.pro',
    siteName: 'Boris Truyens - Webontwikkelaar',
    title: 'Boris Truyens - Webontwikkelaar & Digital Consultant',
    description: 'Professionele webontwikkeling en digitale oplossingen. Specialist in Next.js, React, en moderne web technologieën.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Boris Truyens - Webontwikkelaar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boris Truyens - Webontwikkelaar & Digital Consultant',
    description: 'Professionele webontwikkeling en digitale oplossingen. Specialist in Next.js, React, en moderne web technologieën.',
    images: ['/og-image.jpg'],
    creator: '@boristruyens',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://truyens.pro',
    languages: {
      'nl-BE': 'https://truyens.pro/nl',
      'en-US': 'https://truyens.pro/en',
      'fr-BE': 'https://truyens.pro/fr',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme') || 'light';
                const bgColor = theme === 'dark' ? '#111827' : '#ffffff';
                
                document.documentElement.classList.add(theme);
                document.documentElement.style.backgroundColor = bgColor;
                document.documentElement.style.setProperty('--overscroll-bg', bgColor);
                
                if (document.body) {
                  document.body.classList.add(theme);
                  document.body.style.backgroundColor = bgColor;
                }
              } catch (e) {
                document.documentElement.classList.add('light');
                document.documentElement.style.backgroundColor = '#ffffff';
                if (document.body) {
                  document.body.classList.add('light');
                  document.body.style.backgroundColor = '#ffffff';
                }
              }
            `,
          }}
        />
      </head>
      <body className={inter.className + ' scroll-smooth'}>
        <WebVitals />
        <ThemeProvider
          defaultTheme="light"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
