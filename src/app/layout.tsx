// src/app/layout.tsx

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { Providers } from './providers'; // 1. Import the new Providers component

const geistSans = GeistSans;
const hindSiliguri = Hind_Siliguri({
    weight: ['400', '500', '600', '700'],
    subsets: ['bengali', 'latin'],
});

export const metadata: Metadata = {
    title: 'BitByBit - University & Engineering Admission',
    description: 'A unified practice platform for university and engineering admission tests in Bangladesh.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${hindSiliguri.className} flex flex-col min-h-screen`}>
        {/* 2. Wrap the children with the Providers component */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}