import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppConfig } from '@/utils/AppConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DeepLunch',
  description: 'Unlock A Better Afternoon',
  icons: AppConfig.iconUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
