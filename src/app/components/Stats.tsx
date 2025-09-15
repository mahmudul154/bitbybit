// src/app/components/Stats.tsx

export function StatsRow() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-3">
      <Stat num="২,১০০+" label="এমসিকিউ" />
      <Stat num="১৫০+" label="লিখিত প্রশ্ন" />
      <Stat num="৯৮%" label="সন্তুষ্টি" />
    </div>
  )
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    // Permanent dark theme styles
    <div className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-left">
      <div className="text-lg font-extrabold text-slate-50">{num}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  )
}