// src/app/components/MobileNav.tsx

'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ClipboardList, Gamepad2, Trophy, User } from 'lucide-react';
import { useAuth } from '@/app/context/AuthContext';

// Define the type for the props clearly at the top
type NavLinkProps = {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

// --- THIS IS THE FIX ---
// The component now correctly uses the NavLinkProps type
const NavLink = ({ href, icon: Icon, label, isActive, onClick }: NavLinkProps) => {
  const baseClasses = 'flex flex-col items-center justify-center gap-1 rounded-lg p-2 transition-colors duration-200 w-16';
  const activeClasses = 'text-indigo-400';
  const inactiveClasses = 'text-slate-400 hover:bg-slate-800';

  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-[10px] font-medium">{label}</span>
    </a>
  );
};

export default function MobileNav() {
  const [activeLink, setActiveLink] = useState('home');
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'exams', 'game', 'olympic']; 
      let currentSection = 'home';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - window.innerHeight / 2) {
          currentSection = id;
        }
      }
      setActiveLink(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileHref = user ? '/profile' : '/login';

  const navItems = [
    { id: 'home', href: '#home', icon: Home, type: 'link', label: 'হোম' },
    { id: 'exams', href: '#exams', icon: ClipboardList, type: 'link', label: 'টেস্ট' },
    { id: 'game', href: '#game', icon: Gamepad2, type: 'link', label: 'গেম' },
    { id: 'olympic', href: '#olympic', icon: Trophy, type: 'link', label: 'অলিম্পিয়াড' },
    { id: 'profile', href: '#profile', icon: User, type: 'pageLink', label: 'প্রোফাইল' }, 
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-md items-center justify-around">
        {navItems.map((item) => {
          if (item.type === 'pageLink') {
            return (
              <Link key={item.id} href={item.href} className="flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-slate-400 hover:bg-slate-800 w-16">
                <item.icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          }
          return (
            <NavLink 
              key={item.id}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={activeLink === item.id}
              onClick={() => setActiveLink(item.id)}
            />
          )
        })}
      </div>
    </nav>
  );
}