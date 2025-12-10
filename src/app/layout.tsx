import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CookieConsent from '@/components/ui/CookieConsent';
import SocialProofWidget from '@/components/ui/SocialProofWidget';

export const metadata: Metadata = {
  title: 'Arian Data | Software & AI Solutions',
  description: 'Arian Dadeh Hooshmand Caspian - Leading software and artificial intelligence company delivering innovative solutions for modern businesses.',
  keywords: ['AI', 'Artificial Intelligence', 'Software Development', 'Machine Learning', 'Data Analytics', 'Arian Data'],
  authors: [{ name: 'Arian Data' }],
  creator: 'Arian Data',
  publisher: 'Arian Data',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Arian Data',
    title: 'Arian Data | Software & AI Solutions',
    description: 'Leading software and artificial intelligence company delivering innovative solutions for modern businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arian Data | Software & AI Solutions',
    description: 'Leading software and artificial intelligence company delivering innovative solutions for modern businesses.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BackToTop />
            <CookieConsent />
            <SocialProofWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
