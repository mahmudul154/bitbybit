// src/app/components/Navbar.tsx
'use client'

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const { user, loading } = useAuth();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        
        <Link href="/" className="flex items-baseline text-2xl font-extrabold">
          <span className="text-shadow-white">
            BitByBit
          </span>
        </Link>

        {/* Centered Links (Desktop Only) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#" onClick={scrollToTop} className="hover:text-indigo-500 transition-colors">হোম</a>
          <a href="#exams" className="hover:text-indigo-500 transition-colors">প্র্যাকটিস টেস্ট</a>
          <a href="#topics" className="hover:text-indigo-500 transition-colors">অলিম্পিয়াড</a>
          <a href="#live" className="hover:text-indigo-500 transition-colors">গেম</a>
          <a href="#previous" className="hover:text-indigo-500 transition-colors">প্রশ্নব্যাংক</a>
        </div>

        {/* --- THIS IS THE CORRECTED RIGHT-SIDE LOGIC --- */}
        <div className="ml-auto flex items-center">
          {/* Show a placeholder while loading to prevent flicker */}
          {loading && (
            <div className="h-9 w-24 rounded-full bg-slate-800 animate-pulse"></div>
          )}

          {/* After loading, show either Profile or Login buttons */}
          {!loading && (
            <>
              {user ? (
                // If USER IS LOGGED IN, show the Profile Dropdown
                <ProfileDropdown />
              ) : (
                // If USER IS LOGGED OUT, show the Login/Sign Up buttons
                <>
                  {/* Desktop Buttons */}
                  <div className="hidden md:flex items-center gap-3">
                    <Link href="/login" className="btn-secondary">লগ ইন</Link>
                    <Link href="/signup" className="btn-primary-lg">সাইন আপ</Link>
                  </div>
                  
                  {/* Mobile Button */}
                  <div className="md:hidden">
                    <Link href="/login" className="btn-secondary text-xs px-3 py-1.5">
                      লগইন / সাইন আপ
                    </Link>
                  </div>
                </>
              )}
            </>
          )}
        </div>

      </div>
    </nav>
  )
}