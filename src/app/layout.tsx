import clsx from 'clsx';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eyesight Test',
  description: 'Eyesight Test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={clsx(inter.className, 'w-full h-full')}>{children}</body>
    </html>
  );
}
