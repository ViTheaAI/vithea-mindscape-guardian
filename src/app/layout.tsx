import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://vithea.online'),
  title: {
    default: 'ViThea | Independent AI Technology & Software Solutions',
    template: '%s | ViThea'
  },
  description:
    'ViThea is an independent AI technology company developing practical software solutions, intelligent applications, and automation tools for businesses and organizations.',
  keywords: [
    'AI solutions',
    'AI software development',
    'AI technology company',
    'custom AI solutions',
    'AI application development',
    'workflow automation',
    'custom software development',
    'AI integration',
    'AI prototype',
    'AI proof of concept',
    'data-powered applications'
  ],
  authors: [{ name: 'ViThea' }],
  creator: 'ViThea',
  publisher: 'ViThea',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vithea.online',
    siteName: 'ViThea',
    title: 'ViThea | Independent AI Technology & Software Solutions',
    description:
      'Building practical AI solutions for a changing world. Practical technology built around people, problems, and possibilities.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ViThea AI Technology'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViThea | Independent AI Technology & Software Solutions',
    description:
      'Building practical AI solutions for a changing world. Practical technology built around people, problems, and possibilities.',
    images: ['/og-image.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#070b14] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-sky-500 selection:text-slate-950">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
