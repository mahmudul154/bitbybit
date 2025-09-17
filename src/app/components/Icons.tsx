// src/app/components/Icons.tsx

import React from 'react';

type IconProps = React.HTMLAttributes<SVGElement>;

// --- Home Icons ---
export const HomeIconOutline = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);
export const HomeIconSolid = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

// --- Test/Exams Icons ---
export const TestIconOutline = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
export const TestIconSolid = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.75A3.75 3.75 0 009 3H5.625zM12.75 12a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5h-2.25z" clipRule="evenodd" />
    <path d="M14.25 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v.375c0 1.036-.84 1.875-1.875 1.875h-.375a3.75 3.75 0 01-3.75-3.75V3.375z" />
  </svg>
);

// --- Live Icons ---
export const LiveIconOutline = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.043A5.25 5.25 0 017.5 15h.001M2.25 8.25A5.25 5.25 0 002.25 9v.001M16.5 18.75A5.25 5.25 0 0015.75 18h-.001M21.75 9A5.25 5.25 0 0021.75 8.25v-.001M12 11.25a.75.75 0 01.75.75v.001a.75.75 0 01-1.5 0V12a.75.75 0 01.75-.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.966 8.966 0 01-5.908-2.122 1.5 1.5 0 012.336-2.003 5.213 5.213 0 007.144 0 1.5 1.5 0 012.336 2.003A8.966 8.966 0 0112 21z" />
  </svg>
);
export const LiveIconSolid = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.25 11.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V6zM12 15a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM6 12.75a.75.75 0 000-1.5H8.25a.75.75 0 000 1.5H6zM15 12a.75.75 0 01.75.75h2.25a.75.75 0 010 1.5H15.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

// --- Profile Icons ---
export const ProfileIconOutline = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
export const ProfileIconSolid = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  </svg>
);
// src/app/components/Icons.tsx

// ... (your other icon components like HomeIcon, etc.)

// --- ADD THIS NEW ICON COMPONENT ---
export const XCircleIcon = (props: React.HTMLAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);