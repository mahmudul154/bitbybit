// src/app/layout.tsx

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';

const geistSans = GeistSans;
const geistMono = GeistMono;

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
    // No theme-related attributes needed on <html>
    <html lang="en">
      {/* The body's base font classes are applied here. The dark theme colors come from globals.css */}
      <body className={`${geistSans.className} ${hindSiliguri.className} flex flex-col min-h-screen`}>
        {/* No ThemeProvider wrapper is needed */}
        
        <Navbar />

        {/* This main tag provides the dark gradient background for all pages */}
  <main className="flex-grow bg-slate-900">
          {children}
        </main>
        
        <MobileNav />
      </body>
    </html>
  );
}