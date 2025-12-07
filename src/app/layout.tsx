import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';

export const metadata: Metadata = {
  title: 'Arian Data | Software & AI Solutions',
  description: 'Arian Dadeh Hooshmand Caspian - Leading software and artificial intelligence company delivering innovative solutions for modern businesses.',
  keywords: ['AI', 'Artificial Intelligence', 'Software Development', 'Machine Learning', 'Data Analytics', 'Arian Data'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
