'use client'

import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import { FEATURES, JOBS, MCQ_TESTS, WRITTEN_TESTS, TOPICS, PREVIOUS_SOLVES,  POSTS } from '@/app/data/site'
import { bnDifficulty, formatDate, getCountdown, pillForDifficulty } from './lib/utils'

type Mode = 'MCQ' | 'Written'

// The TimeCell component is defined here as in your code
function TimeCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 min-w-[70px]">
      <div className="text-xl font-extrabold text-slate-50">{value.toString().padStart(2, '0')}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  )
}

export default function Page() {
  const [mode, setMode] = useState<Mode>('MCQ')
  const [activeTopic, setActiveTopic] = useState('math')
  const liveExamDate = useMemo(() => new Date(Date.now() + 1000 * 60 * 60 * 24 * 8 + 1000 * 60 * 20), [])
  const [countdown, setCountdown] = useState(getCountdown(liveExamDate))
  
  // --- THIS IS THE ONLY LOGIC CHANGE ---
  // State to prevent hydration errors from the timer
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  // --- END OF LOGIC CHANGE ---

  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown(liveExamDate)), 1000)
    return () => clearInterval(t)
  }, [liveExamDate])

  return (
    <>
      <Hero />

      {/* Features */}
      <Section id="features" title="প্রস্তুতির পূর্ণাঙ্গ সমাধান" subtitle="বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং ভর্তিচ্ছুদের জন্য গোছানো একটি প্ল্যাটফর্ম।">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {FEATURES.map((f) => (
            <div key={f.key} className="group rounded-xl border border-slate-800 bg-slate-900 p-4 hover:shadow-lg transition">
              <div className="text-2xl">{f.emoji}</div>
              <div className="mt-2 font-semibold text-slate-50">{f.title}</div>
              <div className="text-sm text-slate-400">{f.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Admission Info */}
      <Section id="circulars" title="ভর্তি তথ্য" subtitle="সকল বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং গুচ্ছের ভর্তি বিজ্ঞপ্তি এক জায়গায়।">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {JOBS.map((job) => (
            <div key={job.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <span className={`rounded-md px-2 py-1 text-xs font-bold border ${job.type === 'Engineering' ? 'bg-sky-950 text-sky-300 border-sky-800' : 'bg-indigo-950 text-indigo-300 border-indigo-800'}`}>
                  {job.type === 'Engineering' ? 'ইঞ্জিনিয়ারিং' : 'পাবলিক ভার্সিটি'}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-slate-50">{job.title}</h3>
              <div className="mt-1 text-sm text-slate-400 flex flex-wrap gap-3">
                <span>📍 {job.location}</span>
                <span>⏰ আবেদন শেষ তারিখ {formatDate(job.deadline)}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-700 bg-slate-800 text-slate-300 px-2 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="btn-secondary">সার্কুলার দেখুন</button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Practice */}
      <Section id="exams" title="প্র্যাকটিস পরীক্ষা" subtitle="এমসিকিউ/লিখিত বদলান। সময়ভিত্তিক ও অ্যানালিটিক্স-সহ।">
        <div className="inline-flex rounded-lg border border-slate-800 bg-slate-900 p-1">
          <button onClick={() => setMode('MCQ')} className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${mode === 'MCQ' ? 'bg-indigo-500 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>এমসিকিউ</button>
          <button onClick={() => setMode('Written')} className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${mode === 'Written' ? 'bg-indigo-500 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>লিখিত</button>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(mode === 'MCQ' ? MCQ_TESTS : WRITTEN_TESTS).map((t) => (
            <div key={t.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:shadow-lg transition">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-50">{t.title}</h3>
                <span className={`text-xs font-bold rounded-full px-2 py-1 border ${pillForDifficulty(t.difficulty)}`}>{bnDifficulty(t.difficulty)}</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{t.questions}টি প্রশ্ন • {t.duration} মিনিট</p>
              <div className="mt-4 flex gap-2">
                <Link href={`/quiz?quizId=${t.id}`} className="btn-secondary">
                  পরীক্ষা দিন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Topic-wise */}
      <Section id="topics" title="বিষয়ভিত্তিক অনুশীলন" subtitle="একেকটা বিষয়ে নিজের দক্ষতা ঝালিয়ে নিন।">
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTopic(t.key)}
              className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${activeTopic === t.key ? 'bg-indigo-950 text-indigo-300 border-indigo-800' : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h3 className="font-semibold text-slate-50">এক্সপার্টদের তৈরি প্রশ্নসেট — {TOPICS.find(x => x.key === activeTopic)?.name}</h3>
          <ul className="mt-2 list-disc pl-6 text-slate-400">
            <li>কুইক টেস্ট (১৫টি প্রশ্ন • ১২ মিনিট)</li>
            <li>স্ট্যান্ডার্ড মডেল টেস্ট (৩০টি প্রশ্ন • ২৫ মিনিট)</li>
            <li>চ্যাপ্টার ফাইনাল (৫০টি প্রশ্ন • ৪৫ মিনিট)</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <button className="btn-secondary">স্ট্যান্ডার্ড টেস্ট শুরু</button>
            <button className="btn-secondary">কাস্টমাইজ করুন</button>
          </div>
        </div>
      </Section>

      {/* Live */}
      <Section id="live" title="লাইভ মডেল টেস্ট" subtitle="হাজারো শিক্ষার্থীর সাথে রিয়েল-টাইম প্রতিযোগিতা।">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-slate-50">BitByBit ন্যাশনাল মডেল টেস্ট ২০২২৪</h3>
            <p className="text-sm text-slate-400 mt-1">শুরু হতে বাকি</p>
            {/* --- THIS IS THE ONLY UI CHANGE --- */}
            <div className="mt-3 flex gap-3">
              {hasMounted ? (
                <>
                  <TimeCell label="দিন" value={countdown.days} />
                  <TimeCell label="ঘণ্টা" value={countdown.hours} />
                  <TimeCell label="মিনিট" value={countdown.minutes} />
                  <TimeCell label="সেকেন্ড" value={countdown.seconds} />
                </>
              ) : (
                <>
                  {/* Render placeholders on the server and initial client render */}
                  <TimeCell label="দিন" value={0} />
                  <TimeCell label="ঘণ্টা" value={0} />
                  <TimeCell label="মিনিট" value={0} />
                  <TimeCell label="সেকেন্ড" value={0} />
                </>
              )}
            </div>
            {/* --- END OF UI CHANGE --- */}
            <div className="mt-4 flex gap-2">
              <button className="btn-secondary">ফ্রি রেজিস্ট্রেশন</button>
              <button className="btn-secondary">পরীক্ষার নিয়মাবলি</button>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <ul className="list-disc pl-5 text-slate-400 space-y-1">
              <li>🧩 ১০০টি এমসিকিউ • ৬০ মিনিট</li>
              <li>📊 লাইভ লিডারবোর্ড ও অ্যানালিটিক্স</li>
              <li>🏆 সেরা ১০০ জনের জন্য আকর্ষণীয় পুরস্কার</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Previous solves */}
      <Section id="previous" title="বিগত বছরের প্রশ্ন ও সমাধান" subtitle="প্রতিটি প্রশ্নের বিস্তারিত ব্যাখ্যা ও সমাধান।">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PREVIOUS_SOLVES.map((ps) => (
            <div key={ps.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-50">{ps.exam}</h3>
              <p className="mt-1 text-sm text-slate-400">{ps.year} • {ps.questions}টি প্রশ্ন</p>
              <div className="mt-4 flex gap-2">
                <button className="btn-secondary">সমাধান দেখুন</button>
              </div>
            </div>
          ))}
        </div>
      </Section>
   
      {/* Blog */}
      <Section id="blog" title="টিপস ও ব্লগ" subtitle="সঠিক স্ট্র্যাটেজি, সময় ব্যবস্থাপনা ও অনুপ্রেরণামূলক লেখা।">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POSTS.map((p) => (
            <div key={p.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-50">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">লেখক: {p.author} • {p.read} পড়া</p>
              <button className="mt-4 btn-secondary">এখনই পড়ুন</button>
            </div>
          ))}
        </div>
      </Section>

      {/* Subscribe CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center">
          <p className="text-sm font-semibold text-slate-50">{`ভর্তি বিজ্ঞপ্তি, লাইভ পরীক্ষার আপডেট ও গুরুত্বপূর্ণ টিপস সরাসরি আপনার ইনবক্সে।`}</p>
        
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="আপনার ইমেইল লিখুন" className="w-full sm:w-80 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 placeholder:text-slate-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="btn-primary-lg">সাবস্ক্রাইব করুন</button>
          </div>
        </div>
      </div>


    </>
  );
}