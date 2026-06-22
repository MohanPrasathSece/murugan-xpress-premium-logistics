/**
 * Murugan Xpress Logo
 * Inline SVG so it scales perfectly and honours the brand colours.
 * The Vel (Murugan's sacred spear) is the central motif.
 */
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      aria-label="Murugan Xpress logo"
    >
      <defs>
        <linearGradient id="lg-navy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f1f4a" />
        </linearGradient>
        <linearGradient id="lg-vel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <filter id="lg-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f1f4a" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Background disc */}
      <circle cx="60" cy="60" r="58" fill="url(#lg-navy)" filter="url(#lg-shadow)" />
      <circle cx="60" cy="60" r="55" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />

      {/* ── Vel blade (elongated diamond pointing up) ── */}
      <path d="M60 13 L69 39 L60 50 L51 39 Z" fill="url(#lg-vel)" />
      {/* Blade highlight */}
      <line x1="60" y1="15" x2="60" y2="48" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1" />

      {/* Shaft */}
      <rect x="58.5" y="49" width="3" height="40" rx="1.5" fill="#e2e8f0" />

      {/* Butt cap (small tapered point) */}
      <path d="M60 89 L63 96 L60 107 L57 96 Z" fill="#e2e8f0" />

      {/* ── Lotus / chakra ring at centre of shaft ── */}
      {/* 8 short petals radiating from shaft centre */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x2 = 60 + Math.sin(rad) * 11;
        const y2 = 69 - Math.cos(rad) * 11;
        return (
          <line
            key={i}
            x1="60" y1="69"
            x2={x2} y2={y2}
            stroke="#dc2626"
            strokeWidth={i % 2 === 0 ? 2 : 1.2}
            strokeLinecap="round"
            opacity={i % 2 === 0 ? 0.9 : 0.5}
          />
        );
      })}
      {/* Centre dot */}
      <circle cx="60" cy="69" r="3" fill="#dc2626" />

      {/* ── Speed / motion streaks (logistics energy) ── */}
      <line x1="34" y1="52" x2="51" y2="58" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="29" y1="59" x2="51" y2="63" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3" />
      <line x1="86" y1="52" x2="69" y2="58" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="91" y1="59" x2="69" y2="63" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3" />
    </svg>
  );
}
