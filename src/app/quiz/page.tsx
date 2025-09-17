// src/app/quiz/page.tsx
'use client' // This page must be a client component to read URL params

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LoadingScreen from '@/app/components/LoadingScreen';
import QuizComponent from './QuizComponent';

// Create a new component to safely use the hook
function QuizPageContent() {
  const searchParams = useSearchParams();
  const quizId = searchParams.get('quizId');

  // If for some reason the quizId is missing from the URL, show an error
  if (!quizId) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
        Error: Quiz ID not found in URL.
      </div>
    );
  }

  // If the quizId exists, render the QuizComponent and pass the id as a prop
  return <QuizComponent quizId={quizId} />;
}

export default function QuizPage() {
  return (
    // The Suspense boundary will show the loading screen while useSearchParams is working
    <Suspense fallback={<LoadingScreen />}>
      <QuizPageContent />
    </Suspense>
  );
}