export default function FlatElephant({ flip = false, size = 160 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 160 160"
      style={{ transform: flip ? 'scaleX(-1)' : 'none', display: 'block' }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="80" cy="105" rx="52" ry="40" fill="#1A4332" />
      {/* Head */}
      <circle cx="112" cy="72" r="32" fill="#1A4332" />
      {/* Ear */}
      <ellipse cx="125" cy="65" rx="14" ry="18" fill="#8B0000" />
      <ellipse cx="124" cy="65" rx="9"  ry="12" fill="#1A4332" />
      {/* Trunk - curves down then curls up */}
      <path
        d="M130,88 Q148,108 138,128 Q128,148 118,138 Q112,130 120,120"
        stroke="#1A4332" strokeWidth="14" fill="none" strokeLinecap="round"
      />
      <path
        d="M130,88 Q148,108 138,128 Q128,148 118,138 Q112,130 120,120"
        stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round"
      />
      {/* Eye */}
      <circle cx="119" cy="66" r="4" fill="#FDFBF7" />
      <circle cx="120" cy="66" r="2.2" fill="#2C2C2C" />
      <circle cx="121" cy="65" r="0.8" fill="#FDFBF7" />
      {/* Tusk */}
      <path d="M126,82 Q142,86 140,96" stroke="#F5EFE0" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Decorative howdah cloth */}
      <rect x="54" y="74" width="52" height="28" rx="4" fill="#8B0000" />
      <rect x="54" y="74" width="52" height="5"  rx="2" fill="#D4AF37" />
      <rect x="54" y="97" width="52" height="5"  rx="2" fill="#D4AF37" />
      {/* Cloth tassel fringe */}
      {[58,64,70,76,82,88,94,100].map(x => (
        <line key={x} x1={x} y1="102" x2={x-2} y2="114" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {/* Forehead jewel */}
      <polygon points="112,52 116,60 108,60" fill="#D4AF37" />
      <circle cx="112" cy="56" r="3" fill="#F5EFE0" />
      {/* Legs */}
      <rect x="44"  y="132" width="18" height="22" rx="6" fill="#1A4332" />
      <rect x="68"  y="132" width="18" height="22" rx="6" fill="#1A4332" />
      <rect x="92"  y="132" width="18" height="22" rx="6" fill="#1A4332" />
      {/* Toe lines */}
      <line x1="47" y1="153" x2="59" y2="153" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="71" y1="153" x2="83" y2="153" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="95" y1="153" x2="107" y2="153" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Gold chain anklet */}
      <line x1="44" y1="142" x2="62" y2="142" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <line x1="68" y1="142" x2="86" y2="142" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      {/* Gold outline head */}
      <circle cx="112" cy="72" r="32" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Marigold garland on forehead */}
      {[100,106,112,118,124].map((x, i) => (
        <circle key={x} cx={x} cy={i % 2 === 0 ? 46 : 50} r="3.5" fill={i % 2 === 0 ? '#D4AF37' : '#8B0000'} />
      ))}
    </svg>
  );
}
