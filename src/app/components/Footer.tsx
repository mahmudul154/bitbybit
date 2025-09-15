// src/app/components/Footer.tsx

export default function Footer() {
  return (
    // This class ensures the footer is hidden on mobile and visible on desktop
    <footer className="hidden md:block border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Brand Section - Updated */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-500 text-white grid place-items-center font-extrabold">Bit</div>
              <span className="font-extrabold text-slate-900">ByBit</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার সেরা প্রস্তুতি প্ল্যাটফর্ম।
            </p>
          </div>

          {/* Quick links - Updated */}
          <div>
            <h4 className="font-semibold text-slate-900">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a className="hover:text-indigo-600 transition-colors" href="#features">ফিচার</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#circulars">ভর্তি তথ্য</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#exams">পরীক্ষা</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#videos">ভিডিও</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#blog">ব্লগ</a></li>
            </ul>
          </div>

          {/* Contact - Updated */}
          <div>
            <h4 className="font-semibold text-slate-900">যোগাযোগ</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-6.5-4.5-6.5-10A6.5 6.5 0 1118.5 11c0 5.5-6.5 10-6.5 10z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <span>অবস্থান: ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <a href="mailto:contact@bitbybit.com" className="hover:text-indigo-600 transition-colors">contact@bitbybit.com</a>
              </li>
            </ul>
          </div>

          {/* Socials - Updated */}
          <div>
            <h4 className="font-semibold text-slate-900">সোশ্যাল মিডিয়া</h4>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"
                 className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-800 grid place-items-center hover:border-indigo-300 hover:text-indigo-600 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13.5 9H15V6h-1.5C11.57 6 11 7.09 11 8.5V10H9v3h2v7h3v-7h2.1l.4-3H14v-1c0-.55.45-1 1-1z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube"
                 className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-800 grid place-items-center hover:border-indigo-300 hover:text-indigo-600 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6z" />
                  <path d="M21 8.5s-.1-1.7-.69-2.45C19.6 5 18.67 5 18.25 5H5.75C5.33 5 4.4 5 3.69 6.05 3.1 6.8 3 8.5 3 8.5v3s.1 1.7.69 2.45C4.4 15 5.33 15 5.75 15h12.5c.42 0 1.35 0 2.06-1.05.59-.75.69-2.45.69-2.45v-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar - Updated */}
        <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
         
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-indigo-600 transition-colors"></a>
            <a href="/privacy" className="hover:text-indigo-600 transition-colors"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}