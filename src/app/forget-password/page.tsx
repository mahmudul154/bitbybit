// src/app/forgot-password/page.tsx
'use client'

import Link from 'next/link'
import React from 'react'

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <div className="flex items-baseline text-4xl font-extrabold animate-slow-pulse">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              BitByBit
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-center text-2xl font-bold text-slate-50">পাসওয়ার্ড ভুলে গেছেন?</h1>
        <p className="mt-2 text-center text-sm text-slate-400">চিন্তার কারণ নেই। আপনার মোবাইল নম্বর দিন, আমরা আপনাকে সাহায্য করবো।</p>

        <div className="mt-8 space-y-4">
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">আপনার রেজিস্টার্ড মোবাইল নম্বর</label>
            <input id="phone" type="tel" placeholder="017xxxxxxxx" className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button className="btn-primary-lg w-full">রিসেট কোড পাঠান</button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          <Link href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">লগইন পেজে ফিরে যান</Link>
        </p>
      </div>
    </div>
  )
}