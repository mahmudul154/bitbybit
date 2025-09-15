// src/app/components/MobileNav.tsx

'use client'

import React, { useState } from 'react';
// Using a simple, high-quality icon library
import { Home, ClipboardList, RadioTower, User } from 'lucide-react';

type NavLinkProps = {
  href: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
};

// A simplified NavLink with a modern "pill" highlight for the active state
const NavLink = ({ href, icon: Icon, isActive, onClick }: NavLinkProps) => {
  const baseClasses = 'flex items-center justify-center p-2 px-4 rounded-full transition-all duration-200';
  
  const activeClasses = 'bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400';
  
  const inactiveClasses = 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800';

  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {/* Smaller, more refined icon size */}
      <Icon className="h-5 w-5" />
      <span className="sr-only">{href}</span>
    </a>
  );
};

export default function MobileNav() {
  // We keep track of the active link with a simple click state
  const [activeLink, setActiveLink] = useState('home');

  // NOTE: The complex useEffect for scroll detection has been removed for simplicity and reliability.
  
  const navItems = [
    { id: 'home', href: '#', icon: Home },
    { id: 'exams', href: '#exams', icon: ClipboardList },
    { id: 'live', href: '#live', icon: RadioTower },
    { id: 'profile', href: '#profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-full max-w-md items-center justify-around">
        {navItems.map((item) => (
          <NavLink 
            key={item.id}
            href={item.href}
            icon={item.icon}
            isActive={activeLink === item.id}
            onClick={() => setActiveLink(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}