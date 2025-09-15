// src/app/components/Chip.tsx

export default function Chip({ text, href, className = '' }: { text: string; href?: string; className?: string }) {
  // Styles are now permanently set for the dark theme
  const cls = `
    rounded-2xl 
    border border-slate-700 
    bg-slate-800/80 
    backdrop-blur 
    px-4 py-2 
    text-sm font-semibold text-slate-200 
    shadow-sm 
    transition-colors 
    ${className} 
    ${ href ? 'hover:bg-slate-700' : '' }
  `

  // The rendering logic remains the same
  return href ? (
    <a href={href} aria-label={text} title={text} className={cls}>{text}</a>
  ) : (
    <div className={cls}>{text}</div>
  )
}