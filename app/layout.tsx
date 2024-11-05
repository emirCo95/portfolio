import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar';
import { montserrat } from './ui/fonts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Emir Cokrlija',
  description: "Emir's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
