// src/app/components/AppShell.tsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // This array correctly lists all pages that need a minimal, focused layout
  const cleanRoutes = ['/login', '/signup', '/forgot-password', '/create-profile', '/quiz']
  
  const isCleanLayout = cleanRoutes.includes(pathname)

  // --- THIS IS THE CORRECTED LOGIC ---
  if (isCleanLayout) {
    // For auth and quiz pages, we render ONLY the page's content.
    // This hides the top Navbar, the Footer, AND the bottom MobileNav.
    return (
      <main className="flex-grow bg-slate-950">{children}</main>
    )
  }

  // For all other pages (like the homepage), render the standard full layout
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-slate-900">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}