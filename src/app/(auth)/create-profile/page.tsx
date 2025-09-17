// src/app/(auth)/create-profile/page.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/app/context/AuthContext'
import { updateProfile } from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage, auth } from '@/lib/firebase'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { isFirebaseError } from '@/app/lib/utils'

export default function CreateProfilePage() {
  const { refreshUser } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [displayName, setDisplayName] = useState('');
  const [institution, setInstitution] = useState('');
  const [hscBatch, setHscBatch] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      if (currentUser.displayName) setDisplayName(currentUser.displayName);
      if (currentUser.photoURL) setPhotoPreview(currentUser.photoURL);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setError('You must be logged in to create a profile.');
      return;
    }
    if (!displayName || !institution || !hscBatch) {
      setError('Please fill out all the required fields.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      let photoURL = currentUser.photoURL;

      if (photoFile) {
        const storageRef = ref(storage, `profile-pictures/${currentUser.uid}/${photoFile.name}`);
        const snapshot = await uploadBytes(storageRef, photoFile);
        photoURL = await getDownloadURL(snapshot.ref);
      }

      await updateProfile(currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });

      await refreshUser();
      
      router.push('/profile');
      
    } catch (err) {
      console.error("Error creating profile:", err);
      if (isFirebaseError(err)) {
        setError('Failed to save profile. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
      setIsLoading(false); // Only stop loading on error
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <Link href="/" className="flex items-baseline text-4xl font-extrabold animate-slow-pulse">
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              BitByBit
            </span>
          </Link>
        </div>

        {/* --- UI ADJUSTMENT: Centered Text --- */}
        <div className="text-center">
            <h1 className="mt-8 text-2xl font-bold text-slate-50">আপনার প্রোফাইল সেটআপ করুন</h1>
            <p className="mt-2 text-sm text-slate-400">আপনার একাউন্ট প্রায় তৈরি! এই তথ্যগুলো অন্যদের আপনাকে চিনতে সাহায্য করবে।</p>
        </div>

        <form onSubmit={handleProfileSave} className="mt-8 space-y-6">
          <div className="flex justify-center">
            <label htmlFor="photo-upload" className="sr-only">Upload profile picture</label>
            <input 
              id="photo-upload"
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
            />
            <button 
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="relative h-24 w-24 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center group bg-slate-800"
            >
              {photoPreview ? (
                <Image src={photoPreview} alt="Profile Preview" fill className="rounded-full object-cover" />
              ) : (
                <span className="text-xs text-slate-500">ছবি আপলোড</span>
              )}
              <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="text-white" />
              </div>
            </button>
          </div>

          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-300">পুরো নাম</label>
            <input 
              id="fullName" 
              type="text" 
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              placeholder="আপনার পুরো নাম" 
              className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>
          
          <div>
            <label htmlFor="institution" className="mb-2 block text-sm font-medium text-slate-300">শিক্ষা প্রতিষ্ঠান</label>
            <input 
              id="institution" 
              type="text" 
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              required
              placeholder="আপনার কলেজের নাম" 
              className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>

          <div>
            <label htmlFor="hscBatch" className="mb-2 block text-sm font-medium text-slate-300">এইচএসসি ব্যাচ</label>
            <input 
              id="hscBatch" 
              type="number" 
              value={hscBatch}
              onChange={(e) => setHscBatch(e.target.value)}
              required
              placeholder="e.g., 2025" 
              className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>

          {error && <p className="text-red-500 text-center text-xs">{error}</p>}
          <button type="submit" disabled={isLoading} className="btn-primary-lg w-full disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? 'সেভ হচ্ছে...' : 'সেভ করে এগিয়ে যান'}
          </button>
        </form>
      </div>
    </div>
  )
}