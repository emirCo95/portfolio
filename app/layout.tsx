import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Emir Cokrlija',
  description: 'My personal portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
