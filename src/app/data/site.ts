// src/data/site.ts

export type Feature = {
  key: string
  emoji: string
  title: string
  desc: string
}

export const FEATURES: Feature[] = [
  {
    key: 'live',
    emoji: '🔴',
    title: 'লাইভ মডেল টেস্ট',
    desc: 'হাজারো শিক্ষার্থীর সাথে নিজের প্রস্তুতি যাচাই করুন।',
  },
  {
    key: 'qbank',
    emoji: '📚',
    title: 'বিষয়ভিত্তিক প্রশ্নব্যাংক',
    desc: 'পদার্থ, রসায়ন, গণিত ও অন্যান্য বিষয়ে হাজারো প্রশ্ন।',
  },
  {
    key: 'analytics',
    emoji: '📊',
    title: 'প্রশ্ন সমাধান ও অ্যানালিটিক্স',
    desc: 'প্রতিটি পরীক্ষার পর নিজের শক্তি ও দুর্বলতা জানুন।',
  },
  {
    key: 'lecture',
    emoji: '📝',
    title: 'লেকচার শিট ও ভিডিও',
    desc: 'সেরা শিক্ষকদের গোছানো লেকচার ম্যাটেরিয়াল।',
  },
  {
    key: 'previous',
    emoji: '⏳',
    title: 'বিগত বছরের প্রশ্ন',
    desc: 'ঢাবি, বুয়েট, মেডিকেল সহ সকল পরীক্ষার প্রশ্ন সমাধান।',
  },
]

export type Job = {
  id: number
  type: 'Engineering' | 'Public University'
  title: string
  location: string
  deadline: Date
  tags: string[]
}

export const JOBS: Job[] = [
  {
    id: 1,
    type: 'Engineering',
    title: 'বুয়েট ভর্তি বিজ্ঞপ্তি ২০২৪',
    location: 'ঢাকা বিশ্ববিদ্যালয়, বুয়েট',
    deadline: new Date('2024-09-25'),
    tags: ['ইঞ্জিনিয়ারিং', 'আর্কিটেকচার'],
  },
  {
    id: 2,
    type: 'Public University',
    title: 'ঢাকা বিশ্ববিদ্যালয় (ক ইউনিট) বিজ্ঞপ্তি',
    location: 'ঢাকা,চট্টগ্রাম,রাজশাহী',
    deadline: new Date('2024-10-10'),
    tags: ['বিজ্ঞান', 'ফার্মেসি', 'বায়োটেকনোলজি'],
  },
  {
    id: 3,
    type: 'Engineering',
    title: 'ইঞ্জিনিয়ারিং গুচ্ছ (চুয়েট, কুয়েট, রুয়েট)',
    location: 'চট্টগ্রাম, খুলনা, রাজশাহী',
    deadline: new Date('2024-09-30'),
    tags: ['ইঞ্জিনিয়ারিং', 'UGC'],
  },
]

type Difficulty = 'Easy' | 'Medium' | 'Hard'

// --- THIS IS THE ADJUSTED PART ---
// The 'id' property is now a string to match our quiz system
export type Test = {
  id: string 
  title: string
  difficulty: Difficulty
  questions: number
  duration: number // in minutes
}

// The 'id' values now match the keys in your quizzes.ts file
export const MCQ_TESTS: Test[] = [
  { 
    id: 'physics-thermo-1', // THIS ID NOW MATCHES YOUR QUIZ DATA
    title: 'পদার্থবিজ্ঞান: তাপমাত্রা ও থার্মোমিতি', 
    difficulty: 'Medium', 
    questions: 7, 
    duration: 5 
  },
  { 
    id: 'chemistry-organic-1', // Assuming this is the ID for your second quiz
    title: 'রসায়ন (জৈব যৌগ) স্পেশাল টেস্ট', 
    difficulty: 'Hard', 
    questions: 30, // Example
    duration: 25 // Example
  },
  { 
    id: 'math-calculus-1', // Example for a third quiz
    title: 'গণিত (ক্যালকুলাস) কুইক টেস্ট', 
    difficulty: 'Easy', 
    questions: 20, // Example
    duration: 15 // Example
  },
]

// The WRITTEN_TESTS can also be updated to use string IDs for future-proofing
export const WRITTEN_TESTS: Test[] = [
  { id: 'buet-written-1', title: 'বুয়েট লিখিত মডেল টেস্ট', difficulty: 'Hard', questions: 10, duration: 90 },
  { id: 'math-written-1', title: 'উচ্চতর গণিত লিখিত অনুশীলন', difficulty: 'Medium', questions: 8, duration: 60 },
  { id: 'physics-written-1', title: 'পদার্থবিজ্ঞান লিখিত অনুশীলন', difficulty: 'Medium', questions: 8, duration: 60 },
]
// --- END OF ADJUSTED PART ---


export const TOPICS: { key: string; name: string }[] = [
  { key: 'math', name: 'গণিত' },
  { key: 'physics', name: 'পদার্থবিজ্ঞান' },
  { key: 'chemistry', name: 'রসায়ন' },
  { key: 'bangla', name: 'বাংলা' },
  { key: 'english', name: 'English' },
]

export const PREVIOUS_SOLVES = [
  { id: 1, exam: 'ঢাকা বিশ্ববিদ্যালয় ক ইউনিট', year: 2023, questions: 60 },
  { id: 2, exam: 'BUET ভর্তি পরীক্ষা', year: 2023, questions: 60 },
  { id: 3, exam: 'IUT ভর্তি পরীক্ষা', year: 2022, questions: 100 },
]

export const VIDEOS = [
  { id: 1, youtubeId: 'dQw4w9WgXcQ', title: 'ভেক্টর অধ্যায়ের শর্টকাট টেকনিক' },
  { id: 2, youtubeId: 'GaZia_MRH4E', title: 'জৈব যৌগ মনে রাখার সহজ উপায়' },
  { id: 3, youtubeId: '2Vv-BfVoq4g', title: 'ত্রিকোণমিতি: সূত্র ছাড়াই সমাধান' },
]

export const POSTS = [
  { id: 1, title: 'শেষ মুহূর্তের প্রস্তুতি: করণীয় ও বর্জনীয়', author: 'শিক্ষক প্যানেল', read: '৫ মিনিট' },
  { id: 2, title: 'BUET ভর্তি পরীক্ষার স্ট্র্যাটেজি', author: 'আসিফ মাহমুদ (CSE, BUET)', read: '৮ মিনিট' },
  { id: 3, title: 'পরীক্ষার আগের রাতে মানসিক চাপ কমানোর উপায়', author: 'ডাঃ মেহতাজ', read: '৬ মিনিট' },
]