// src/app/providers.tsx
'use client'

import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // This list correctly identifies all pages needing a minimal layout
  const cleanRoutes = ['/login', '/signup', '/forgot-password', '/create-profile', '/quiz']
  const isCleanLayout = cleanRoutes.includes(pathname)

  return (
    <AuthProvider>
      {isCleanLayout ? (
        // --- THIS IS THE CORRECTED LOGIC ---
        // For auth and quiz pages, we now render ONLY the page's content.
        // The MobileNav has been removed from here.
        <main className="flex-grow">{children}</main>
      ) : (
        // For all other pages, render the full, standard app layout
        <>
          <Navbar />
          <main className="flex-grow bg-slate-900">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </>
      )}
    </AuthProvider>
  )
}