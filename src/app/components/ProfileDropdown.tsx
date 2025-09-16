// src/app/components/ProfileDropdown.tsx
'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LogOut, User as UserIcon } from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ProfileDropdown() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!user) {
    return null;
  }

  // Fallback for avatar if no photoURL exists
  const avatarLetter = user.email ? user.email.charAt(0).toUpperCase() : '?';

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* --- THIS IS THE UPDATED BUTTON --- */}
        {/* It no longer shows the display name, only the avatar */}
        <Menu.Button className="flex items-center rounded-full bg-slate-800 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700">
          <div className="relative h-9 w-9 rounded-full">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt={'Profile picture'}
                fill
                className="rounded-full object-cover"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center rounded-full bg-indigo-500">
                {avatarLetter}
              </span>
            )}
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-700 rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-slate-200'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <UserIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  {/* --- TEXT TRANSLATED --- */}
                  আমার প্রোফাইল
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-slate-200'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <LogOut className="mr-2 h-5 w-5" aria-hidden="true" />
                  {/* --- TEXT TRANSLATED --- */}
                  সাইন আউট
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}