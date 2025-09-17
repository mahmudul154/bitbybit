// src/app/components/LoadingScreen.tsx
'use client'

import { LoaderCircle } from 'lucide-react'; // Import a modern loader icon

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <div className="flex items-center gap-3 text-lg font-semibold text-slate-400">
        
        {/* The spinning icon */}
        <LoaderCircle className="h-8 w-8 animate-spin text-indigo-400" />
        
        {/* The loading text */}
       

      </div>
    </div>
  );
}