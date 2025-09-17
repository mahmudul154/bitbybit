// src/app/profile/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/app/components/LoadingScreen';
import Image from 'next/image';
import { BookOpen, ClipboardCheck, Edit, Star } from 'lucide-react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ProgressChart from '@/app/components/ProgressChart'; 
import { BarChart2 } from 'lucide-react';// Import our new chart

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      };
      fetchUserData();
    }
  }, [user]);

  if (loading || !user) {
    if (!loading && !user) router.replace('/login');
    return <LoadingScreen />;
  }

  // --- Placeholder Data & Calculations ---
  const examsTaken = userData?.examsTaken || 0;
  const highestScore = userData?.highestScore || 0;
  // Assuming each exam is out of 10 for percentage calculation
  const totalPossibleScore = (userData?.examsTaken || 0) * 10; 
  const averageScore = totalPossibleScore > 0 
    ? Math.round((userData.totalScore / totalPossibleScore) * 100)
    : 0;
  
  const displayName = user.displayName || "New User";
  const email = user.email || "No email provided";
  const avatarLetter = email.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- DASHBOARD LAYOUT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* --- LEFT COLUMN: Profile & Revision --- */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Profile Header Card */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="relative h-24 w-24 rounded-full mx-auto">
                {user.photoURL ? (
                  <Image src={user.photoURL} alt="Profile" fill className="rounded-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold">
                    {avatarLetter}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-2xl font-bold text-slate-50">{displayName}</h1>
              <p className="text-sm text-slate-400">{email}</p>
              <div className="mt-2 text-xs text-slate-500">
                <span>Notre Dame College</span> • <span>HSC 2025</span>
              </div>
              <button className="btn-secondary mt-4 w-full flex items-center justify-center gap-2">
                <Edit size={16} />
                প্রোফাইল এডিট করুন
              </button>
            </div>

            {/* Revision Card */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <BookOpen className="mx-auto h-10 w-10 text-slate-600" />
              <h2 className="mt-3 text-lg font-semibold text-slate-200">রিভিশনের জন্য প্রশ্ন</h2>
              <p className="mt-2 text-sm text-slate-400">
                আপনার ভুল করা প্রশ্নগুলো এখানে সেভ করা আছে।
              </p>
              <p className="mt-2 text-xl font-bold text-indigo-400">12 টি প্রশ্ন</p>
            </div>
            
          </div>

          {/* --- RIGHT COLUMN: Progress Dashboard --- */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-slate-50">আপনার অগ্রগতি</h2>
            <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
              
              {/* Unique Progress Chart */}
              <div className="shrink-0">
                <ProgressChart averageScore={averageScore} highestScore={highestScore} />
              </div>
              
              {/* Stats Breakdown */}
              <div className="w-full space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg"><Star className="h-5 w-5 text-yellow-400"/></div>
                  <div>
                    <p className="text-sm text-slate-400">সর্বোচ্চ স্কোর</p>
                    <p className="font-bold text-lg text-white">{highestScore.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg"><ClipboardCheck className="h-5 w-5 text-blue-400"/></div>
                  <div>
                    <p className="text-sm text-slate-400">মোট পরীক্ষা দিয়েছেন</p>
                    <p className="font-bold text-lg text-white">{examsTaken}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky-500/10 rounded-lg"><BarChart2 className="h-5 w-5 text-sky-400"/></div>
                  <div>
                    <p className="text-sm text-slate-400">গড় স্কোর</p>
                    <p className="font-bold text-lg text-white">{averageScore}%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}