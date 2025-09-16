// src/app/data/quizzes.ts

// 1. Define the structure for questions and quizzes
export type QuizQuestion = {
  number: number;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

// 2. Your first quiz's data
const physicsQuiz: Quiz = {
  id: 'physics-thermo-1', // A simple ID for the URL
  title: 'পদার্থবিজ্ঞান টেস্ট: তাপমাত্রা ও থার্মোমিতি',
  questions: [
    { "number": 1, "question": "কোন তাপমাত্রায় সেলসিয়াস ও ফারেনহাইট স্কেলে পাঠ একই পাওয়া যায়?", "choices": ["0°", "40°", "-40°", "100°"], "correctAnswer": "-40°", "explanation": "ধরা যাক, নির্ণেয় তাপমাত্রা x। প্রশ্নমতে, C = F = x। আমরা জানি, C/5 = (F-32)/9। মান বসিয়ে পাই, x/5 = (x-32)/9 ⇒ 9x = 5x - 160 ⇒ 4x = -160 ⇒ x = -40°।", "points": 1 },
    { "number": 2, "question": "ফারেনহাইট ও কেলভিন স্কেলে কোন একই মান পাওয়া যায়?", "choices": ["-40", "273", "574.25", "কোনটিই নয়"], "correctAnswer": "574.25", "explanation": "ধরা যাক, নির্ণেয় তাপমাত্রা x। প্রশ্নমতে, F = K = x। আমরা জানি, (F-32)/9 = (K-273)/5। মান বসিয়ে পাই, (x-32)/9 = (x-273)/5 ⇒ 5x - 160 = 9x - 2457 ⇒ 4x = 2297 ⇒ x = 574.25।", "points": 1 },
    { "number": 3, "question": "68°F তাপমাত্রা কত ডিগ্রী সেলসিয়াসের সমান?", "choices": ["24°C", "32°C", "10°C", "20°C"], "correctAnswer": "20°C", "explanation": "সেলসিয়াস ও ফারেনহাইট স্কেলের সম্পর্ক সূত্রটি হলো: C/5 = (F-32)/9। এখানে F = 68°। সুতরাং, C/5 = (68-32)/9 ⇒ C/5 = 36/9 ⇒ C/5 = 4 ⇒ C = 20°C।", "points": 1 },
    { "number": 4, "question": "কোন বস্তুর তাপমাত্রা 40° সেন্টিগ্রেড হলে ফারেনহাইট স্কেলে উহার তাপমাত্রা কত হবে?", "choices": ["98°F", "104°F", "130°F", "200°F"], "correctAnswer": "104°F", "explanation": "সম্পর্ক সূত্রটি হলো: F = (9C/5) + 32। এখানে C = 40°। সুতরাং, F = (9 × 40/5) + 32 ⇒ F = 72 + 32 = 104°F।", "points": 1 },
    { "number": 5, "question": "ফারেনহাইট স্কেলে কোন তাপমাত্রা সেলসিয়াস স্কেলের পাঠের দ্বিগুণ?", "choices": ["160°F", "80°F", "320°F", "212°F"], "correctAnswer": "320°F", "explanation": "ধরা যাক, সেলসিয়াস স্কেলের পাঠ C = x, তাহলে ফারেনহাইট স্কেলের পাঠ F = 2x। আমরা জানি, C/5 = (F-32)/9। মান বসিয়ে পাই, x/5 = (2x-32)/9 ⇒ 9x = 10x - 160 ⇒ x = 160°C। সুতরাং ফারেনহাইট স্কেলে তাপমাত্রা হবে F = 2x = 320°F।", "points": 1 },
    { "number": 6, "question": "সেলসিয়াস স্কেলে 1° তাপমাত্রা বৃদ্ধি পেলে ফারেনহাইট স্কেলে কত ডিগ্রী বৃদ্ধি পাবে?", "choices": ["1°F", "1.5°F", "1.8°F", "2.0°F"], "correctAnswer": "1.8°F", "explanation": "তাপমাত্রার পরিবর্তনের ক্ষেত্রে সেলসিয়াস ও ফারেনহাইট স্কেলের সম্পর্ক হলো ΔC/5 = ΔF/9। যদি ΔC = 1°C হয়, তবে ΔF = (9/5) × ΔC = 1.8°F।", "points": 1 },
    { "number": 7, "question": "সূর্য পৃষ্ঠের তাপমাত্রা 6000 K, সেলসিয়াস স্কেলে কত?", "choices": ["5720°C", "6273°C", "5727°C", "6000°C"], "correctAnswer": "5727°C", "explanation": "কেলভিন ও সেলসিয়াস স্কেলের সম্পর্ক হলো C = K - 273.15। এখানে K = 6000 K। সুতরাং, C = 6000 - 273 = 5727°C।", "points": 1 },
  ]
};

// 3. Central lookup object for all quizzes
const quizzes: { [key: string]: Quiz } = {
  'physics-thermo-1': physicsQuiz,
  // To add a new quiz, define it above and add it here like:
  // 'chemistry-1': chemistryQuiz,
};

// 4. Function to get a quiz by its ID
export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes[id];
};