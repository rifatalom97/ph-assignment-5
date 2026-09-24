
const layers = [
  { y: 250, from: "#6d28d9", to: "#2563eb" },
  { y: 190, from: "#7c3aed", to: "#3b82f6" },
  { y: 130, from: "#a21caf", to: "#6366f1" },
  { y: 70, from: "#db2777", to: "#8b5cf6" },
];

export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 380" className="w-full max-w-md drop-shadow-2xl" aria-hidden="true">
      <defs>
        {layers.map((l, i) => (
          <linearGradient key={i} id={`g${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={l.from} />
            <stop offset="1" stopColor={l.to} />
          </linearGradient>
        ))}
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e879f9" stopOpacity=".55" />
          <stop offset="1" stopColor="#e879f9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="200" rx="190" ry="170" fill="url(#glow)" />
      {layers.map((l, i) => (
        <g key={i} className="origin-center">
          {/* side faces */}
          <path d={`M60 ${l.y} L200 ${l.y + 70} L200 ${l.y + 92} L60 ${l.y + 22}Z`} fill={l.from} opacity=".9" />
          <path d={`M340 ${l.y} L200 ${l.y + 70} L200 ${l.y + 92} L340 ${l.y + 22}Z`} fill={l.to} opacity=".8" />
          {/* top face */}
          <path d={`M200 ${l.y - 70} L340 ${l.y} L200 ${l.y + 70} L60 ${l.y}Z`} fill={`url(#g${i})`} stroke="#f5d0fe" strokeOpacity=".6" />
          {/* circuitry */}
          <path d={`M130 ${l.y} L200 ${l.y - 35} L270 ${l.y} M200 ${l.y + 35} L200 ${l.y - 35}`} stroke="#f0abfc" strokeOpacity=".7" strokeWidth="2" fill="none" />
          <rect x="185" y={l.y - 8} width="30" height="16" rx="3" fill="#fdf4ff" opacity=".85" />
        </g>
      ))}
      <text x="200" y="76" textAnchor="middle" fontSize="18" fontWeight="800" fill="#6b21a8">DS</text>
    </svg>
  );
}