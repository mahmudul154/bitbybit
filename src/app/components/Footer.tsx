// src/app/components/Footer.tsx

export default function Footer() {
  return (
    // --- FIX 1: Removed `hidden md:block` to make the footer visible on all screen sizes ---
    <footer className=" border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col items-center gap-4">

          {/* --- FIX 2: Added new links and updated hover colors --- */}
          <div className="flex items-center gap-4">
            
            {/* Facebook */}
            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"
               className="h-9 w-9 rounded-full border border-slate-700 bg-slate-800 text-slate-300 grid place-items-center transition-colors  hover:text-indigo-500 ">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 9H15V6h-1.5C11.57 6 11 7.09 11 8.5V10H9v3h2v7h3v-7h2.1l.4-3H14v-1c0-.55.45-1 1-1z" />
              </svg>
            </a>

           
            
            {/* WhatsApp */}
            <a href="#" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"
               className="h-9 w-9 rounded-full border border-slate-700 bg-slate-800 text-slate-300 grid place-items-center transition-colors hover:text-indigo-500 ">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.05 20.5c-1.53 0-3.03-.4-4.36-1.15l-.31-.18l-3.22.84l.86-3.14l-.2-.32c-.82-1.34-1.25-2.87-1.25-4.45c0-4.6 3.74-8.34 8.34-8.34c2.28 0 4.41.89 5.9 2.37c1.48 1.48 2.37 3.62 2.37 5.9c0 4.6-3.74 8.34-8.34 8.34zm4.52-6.2c-.25-.12-1.47-.72-1.7-.8c-.23-.08-.39-.12-.56.12c-.17.25-.64.8-.79.97c-.15.17-.29.19-.54.06c-.25-.12-1.05-.39-2-1.23c-.74-.66-1.23-1.48-1.38-1.73c-.15-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.42c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42c-.14 0-.3 0-.46 0c-.17 0-.43.06-.66.31c-.23.25-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.76 2.68 4.27 3.77c.6.25 1.07.4 1.22.42c.3.04.57.02.78-.06c.24-.1.72-.29.82-.58c.1-.29.1-.54.06-.66c-.04-.12-.17-.2-.42-.32z" />
              </svg>
            </a>

           
          </div>

          <p className="text-slate-400 text-sm">
         
          </p>

        </div>
      </div>
    </footer>
  )
}