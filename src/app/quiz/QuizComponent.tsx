// src/app/quiz/QuizComponent.tsx
'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getQuizById, Quiz, QuizQuestion } from '@/app/data/quizzes';
import LoadingScreen from '@/app/components/LoadingScreen';
import { getBengaliChoiceLetter } from '@/app/lib/utils';

const TIME_LIMIT_SECONDS = 300;
const NEGATIVE_MARKING = 0.25;

// --- ChoiceButton Component ---
type ChoiceButtonProps = {
  choice: string;
  index: number;
  isSelected: boolean;
  isCorrect?: boolean;
  userAnswer?: string | null;
  isDisabled: boolean;
  onClick: () => void;
};

const ChoiceButton = ({ choice, index, isSelected, isCorrect, userAnswer, isDisabled, onClick }: ChoiceButtonProps) => {
  const isFinished = userAnswer !== undefined;
  const isTheCorrectAnswer = isCorrect;
  const wasSelectedIncorrectly = isSelected && !isCorrect;

  let stateClasses = 'border-slate-700 bg-slate-800 hover:bg-slate-700'; // Default
  
  if (isFinished) {
    if (isTheCorrectAnswer) stateClasses = 'border-green-600 bg-green-500/20 text-white';
    else if (wasSelectedIncorrectly) stateClasses = 'border-red-600 bg-red-500/20 text-white';
  } else if (isSelected) {
    stateClasses = 'border-indigo-500 bg-indigo-500/80 text-white';
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center w-full text-left p-3 rounded-lg border transition-colors ${stateClasses} ${!isDisabled && 'cursor-pointer'}`}
    >
      <div className="flex items-center justify-center h-6 w-6 rounded-full border border-current text-sm mr-3">
        {getBengaliChoiceLetter(index)}
      </div>
      <span>{choice}</span>
    </button>
  );
};

// --- Main Quiz Component ---
export default function QuizComponent({ quizId }: { quizId: string }) {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();

    const [quizData, setQuizData] = useState<Quiz | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [skippedAnswers, setSkippedAnswers] = useState(0);
    const [negativeMark, setNegativeMark] = useState(0);
    const [incorrectlyAnswered, setIncorrectlyAnswered] = useState<QuizQuestion[]>([]);
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
    const [quizState, setQuizState] = useState<'running' | 'finished' | 'review'>('running');

    useEffect(() => {
        if (quizId) {
            const data = getQuizById(quizId);
            if (data) {
                setQuizData(data);
                setSelectedAnswers(new Array(data.questions.length).fill(null));
            } else { router.replace('/'); }
        }
    }, [quizId, router]);
    
    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/login');
        }
    }, [user, authLoading, router]);

    const handleAnswerSelect = (questionIndex: number, choice: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[questionIndex] = choice;
        setSelectedAnswers(newAnswers);
    };

    const finishQuiz = useCallback(() => {
        if (!quizData) return;
        let finalScore = 0;
        let correctCount = 0;
        let incorrectCount = 0;
        let skippedCount = 0;
        const wrongQuestions: QuizQuestion[] = [];

        quizData.questions.forEach((q, index) => {
            const userAnswer = selectedAnswers[index];
            if (userAnswer === q.correctAnswer) {
                finalScore += q.points;
                correctCount++;
            } else if (userAnswer !== null) {
                finalScore -= NEGATIVE_MARKING;
                incorrectCount++;
                wrongQuestions.push(q);
            } else {
                skippedCount++;
            }
        });
        
        setScore(finalScore);
        setCorrectAnswers(correctCount);
        setIncorrectAnswers(incorrectCount);
        setSkippedAnswers(skippedCount);
        setNegativeMark(incorrectCount * NEGATIVE_MARKING);
        setIncorrectlyAnswered(wrongQuestions);
        setQuizState('finished');
    }, [quizData, selectedAnswers]);

    useEffect(() => {
        if (quizState !== 'running' || !quizData) return;
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) { 
                    clearInterval(timer); 
                    finishQuiz(); 
                    return 0; 
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [quizState, quizData, finishQuiz]);
    
    if (authLoading || !quizData) {
        return <LoadingScreen />;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    if (quizState === 'finished' || quizState === 'review') {
        const isReviewing = quizState === 'review';
        return (
            <div className="min-h-screen bg-[#0D1224] text-white p-4 sm:p-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold">{isReviewing ? "উত্তর পর্যালোচনা" : "পরীক্ষা শেষ!"}</h1>
                      <p className="mt-2 text-lg text-slate-300">{quizData.title}</p>
                    </div>

                    <div className="mt-8 bg-[#12182C] border border-[#23293D] p-6 rounded-2xl">
                        <h2 className="text-l font-bold text-center mb-4">পারফরম্যান্স ওভারভিউ</h2>
                        <div className="space-y-3 text-base">
                            <div className="flex justify-between items-center"><span className="text-slate-300">মোট প্রশ্ন:</span><span className="font-semibold text-slate-50">{quizData.questions.length} টি</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-300">সঠিক উত্তর:</span><span className="font-semibold text-green-400">{correctAnswers} টি</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-300">ভুল উত্তর:</span><span className="font-semibold text-red-400">{incorrectAnswers} টি</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-300">স্কিপড:</span><span className="font-semibold text-slate-400">{skippedAnswers} টি</span></div>
                            <div className="flex justify-between items-center border-t border-slate-700 pt-3 mt-3"><span className="text-slate-300">নেগেটিভ মার্ক:</span><span className="font-semibold text-red-400">-{negativeMark.toFixed(2)}</span></div>
                            <div className="flex justify-between items-center text-lg bg-slate-800/50 p-3 rounded-lg"><span className="font-bold text-slate-50">আপনার চূড়ান্ত স্কোর:</span><span className="font-bold text-yellow-400">{score.toFixed(2)} / {quizData.questions.length}</span></div>
                        </div>
                    </div>

                    {!isReviewing && incorrectlyAnswered.length > 0 && (
                      <div className="mt-8 bg-[#12182C] border border-[#23293D] p-6 rounded-2xl">
                        <h2 className="text-xl font-bold text-center mb-4 text-red-400">ভুল উত্তর বিশ্লেষণ</h2>
                        <div className="space-y-4 text-sm">
                          {incorrectlyAnswered.map((q) => (
                            <div key={q.number} className="border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                              <p className="text-slate-200">({q.number}) {q.question}</p>
                              <p className="mt-2 text-green-400"><span className="font-semibold">সঠিক উত্তর:</span> {q.correctAnswer}</p>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-center mt-4 text-slate-500">এই প্রশ্নগুলো আপনার প্রোফাইলে সেভ করা হয়েছে রিভিশনের জন্য।</p>
                      </div>
                    )}

                    {!isReviewing && (
                        <div className="text-center mt-8">
                            <button onClick={() => setQuizState('review')} className="btn-secondary">সম্পূর্ণ পর্যালোচনা করুন</button>
                        </div>
                    )}
                    
                    {isReviewing && (
                      <div className="space-y-8 mt-10">
                          {quizData.questions.map((q, index) => (
                              <div key={q.number} className="bg-[#12182C] border border-[#23293D] p-4 rounded-lg">
                                  <p className="text-lg">({q.number}) {q.question}</p>
                                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {q.choices.map((choice, choiceIndex) => (
                                          <ChoiceButton
                                              key={choiceIndex}
                                              choice={choice}
                                              index={choiceIndex}
                                              isSelected={selectedAnswers[index] === choice}
                                              isCorrect={q.correctAnswer === choice}
                                              userAnswer={selectedAnswers[index]}
                                              isDisabled={true}
                                              onClick={() => {}}
                                          />
                                      ))}
                                  </div>
                                  <div className="mt-4 p-3 bg-slate-800/50 rounded-lg text-sm text-slate-300 border border-slate-700">
                                      <p><span className="font-semibold text-slate-50">আপনার উত্তর:</span> {selectedAnswers[index] ?? 'দেওয়া হয়নি'}</p>
                                      <p className="mt-2"><span className="font-semibold text-slate-50">ব্যাখ্যা:</span> {q.explanation}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                    )}
                    <div className="text-center mt-10">
                        <Link href="/" className="btn-primary-lg">হোমপেজে ফিরে যান</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0D1224] text-white p-4 sm:p-8">
            <div className="w-full max-w-2xl mx-auto">
                <div className="sticky top-0 z-10 bg-[#0D1224] py-4 mb-6 flex justify-between items-center">
                    <h1 className="text-xl font-bold">{quizData.title}</h1>
                    <div className="text-lg font-semibold bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">
                        সময় বাকি: {minutes}:{('0' + seconds).slice(-2)}
                    </div>
                </div>
                <div className="space-y-10 pb-24">
                    {quizData.questions.map((q, index) => (
                        <div key={q.number} id={`question-${q.number}`} className="bg-[#12182C] border border-[#23293D] p-6 rounded-2xl">
                            <p className="text-lg text-slate-50">({q.number}) {q.question}</p>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {q.choices.map((choice, choiceIndex) => (
                                    <ChoiceButton
                                        key={choiceIndex}
                                        choice={choice}
                                        index={choiceIndex}
                                        isSelected={selectedAnswers[index] === choice}
                                        isDisabled={quizState !== 'running'}
                                        onClick={() => handleAnswerSelect(index, choice)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0D1224] via-[#0D1224] to-transparent">
                    <div className="max-w-2xl mx-auto">
                        <button onClick={finishQuiz} className="btn-primary-lg w-full">পরীক্ষা শেষ করুন</button>
                    </div>
                </div>
            </div>
        </div>
    );
}