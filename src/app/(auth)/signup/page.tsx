// src/app/(auth)/signup/page.tsx
'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.657-3.356-11.303-8h-6.571c3.356 8.464 11.791 14 20.874 14z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C41.139 36.315 44 30.65 44 24c0-1.341-.138-2.65-.389-3.917z" />
  </svg>
);

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/create-profile');
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError("This email address is already in use.");
      } else {
        setError("Failed to create an account. Please try again.");
      }
      console.error(err);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    setError('');
    try {
      await signInWithPopup(auth, provider);
      router.push('/create-profile');
    } catch (err: any) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError("Failed to sign up with Google.");
        console.error(err);
      }
    }
  };
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 py-12">
      <div className="w-full max-w-sm">
        
        <div className="flex justify-center">
          <Link href="/" className="flex items-baseline text-4xl font-extrabold animate-slow-pulse">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              BitByBit
            </span>
          </Link>
        </div>

        <h1 className="mt-8 text-center text-2xl font-bold text-slate-50">নতুন একাউন্ট খুলুন</h1>
        <p className="mt-2 text-center text-sm text-slate-400">সেরা প্রস্তুতির জগতে আপনাকে স্বাগতম!</p>

        <form onSubmit={handleSignUp} className="mt-8 space-y-4">
          <button type="button" onClick={handleGoogleSignUp} className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700">
            <GoogleIcon />
            <span>গুগল দিয়ে চালিয়ে যান</span>
          </button>
          
          <div className="flex items-center">
            <hr className="w-full border-slate-700" />
            <span className="px-3 text-xs text-slate-500">অথবা</span>
            <hr className="w-full border-slate-700" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">ইমেইল এড্রেস</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="name@example.com" 
              className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">পাসওয়ার্ড দিন (কমপক্ষে ৬ অক্ষর)</label>
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="••••••••" 
              className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>

          {error && <p className="text-red-500 text-center text-xs">{error}</p>}
          <button type="submit" className="btn-primary-lg w-full">সাইন আপ</button>
        </form>

        {/* --- THIS IS THE CORRECTED LINE --- */}
        <p className="mt-6 text-center text-sm text-slate-400">
          আপনার কি একাউন্ট আছে?{' '}
          <Link href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">লগইন করুন</Link>
        </p>
        
      </div>
    </div>
  )
}