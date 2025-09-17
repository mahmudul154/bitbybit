// src/lib/utils.ts

// Countdown Timer Logic
export function getCountdown(targetDate: Date) {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

// Format date to Bengali locale
export function formatDate(date: Date) {
  return date.toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Convert difficulty to Bengali
export function bnDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard') {
  const map = {
    Easy: 'সহজ',
    Medium: 'মাঝারি',
    Hard: 'কঠিন',
  }
  return map[difficulty]
}
// src/lib/utils.ts

// ... (your other functions like formatDate, etc.)

export const getBengaliChoiceLetter = (index: number): string => {
  const letters = ['ক', 'খ', 'গ', 'ঘ'];
  return letters[index] || '';
};

// Get Tailwind CSS classes for difficulty pill
export function pillForDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard') {
  const map = {
    Easy: 'bg-teal-50 text-teal-700 border-teal-100',
    Medium: 'bg-blue-50 text-blue-700 border-blue-100',
    Hard: 'bg-red-50 text-red-700 border-red-100',
  }
  return map[difficulty]
}
// src/lib/utils.ts

// A type guard to check if an error is a FirebaseError
export const isFirebaseError = (err: unknown): err is { code: string; message: string } => {
  return typeof err === 'object' && err !== null && 'code' in err && 'message' in err;
};