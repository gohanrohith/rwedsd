/** 8-petal lotus mandala for corner accents */
export function MandalaCorner({ size = 52, style = {} }) {
  const cx = size / 2, cy = size / 2, r = size / 2;
  const petals8 = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" style={style}>
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r - 2} fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      {/* 8 petals */}
      {petals8.map(deg => {
        const rad = (deg * Math.PI) / 180;
        const px = cx + (r * 0.45) * Math.sin(rad);
        const py = cy - (r * 0.45) * Math.cos(rad);
        return (
          <ellipse
            key={deg}
            cx={px} cy={py}
            rx={r * 0.18} ry={r * 0.34}
            fill="#D4AF37"
            opacity="0.7"
            transform={`rotate(${deg} ${px} ${py})`}
          />
        );
      })}
      {/* Inner 8 petals (smaller, offset 22.5deg) */}
      {petals8.map(deg => {
        const a = deg + 22.5;
        const rad = (a * Math.PI) / 180;
        const px = cx + (r * 0.28) * Math.sin(rad);
        const py = cy - (r * 0.28) * Math.cos(rad);
        return (
          <ellipse
            key={a}
            cx={px} cy={py}
            rx={r * 0.12} ry={r * 0.22}
            fill="#8B0000"
            opacity="0.6"
            transform={`rotate(${a} ${px} ${py})`}
          />
        );
      })}
      {/* Center dot */}
      <circle cx={cx} cy={cy} r={r * 0.14} fill="#D4AF37" />
      <circle cx={cx} cy={cy} r={r * 0.07} fill="#FDFBF7" />
    </svg>
  );
}

/** Flat dhol drum icon */
export function DholIcon({ size = 64 }) {
  const w = size, h = size * 0.75;
  const cx = w / 2, cy = h / 2;
  const bodyW = w * 0.55, bodyH = h * 0.45;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      {/* Drum body */}
      <ellipse cx={cx} cy={cy} rx={bodyW} ry={bodyH} fill="#8B0000" />
      {/* Left drum face */}
      <ellipse cx={cx - bodyW + 6} cy={cy} rx="10" ry={bodyH} fill="#F5EFE0" stroke="#D4AF37" strokeWidth="2" />
      {/* Right drum face */}
      <ellipse cx={cx + bodyW - 6} cy={cy} rx="10" ry={bodyH} fill="#F5EFE0" stroke="#D4AF37" strokeWidth="2" />
      {/* Gold bands */}
      <line x1={cx - bodyW + 14} y1={cy - bodyH * 0.7} x2={cx + bodyW - 14} y2={cy - bodyH * 0.7}
        stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - bodyW + 14} y1={cy + bodyH * 0.7} x2={cx + bodyW - 14} y2={cy + bodyH * 0.7}
        stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      {/* Rope lacing */}
      {[-0.4, -0.1, 0.2].map((t, i) => (
        <line key={i}
          x1={cx + t * bodyW * 0.8} y1={cy - bodyH * 0.65}
          x2={cx + (t + 0.3) * bodyW * 0.8} y2={cy + bodyH * 0.65}
          stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"
        />
      ))}
      {/* Left stick */}
      <line x1={cx - bodyW - 4} y1={cy - h * 0.3} x2={cx - bodyW + 10} y2={cy + h * 0.1}
        stroke="#2C2C2C" strokeWidth="3" strokeLinecap="round"
        className="dhol-stick-l"
        style={{ transformOrigin: `${cx - bodyW + 10}px ${cy + h * 0.1}px` }}
      />
      {/* Right stick */}
      <line x1={cx + bodyW + 4} y1={cy - h * 0.3} x2={cx + bodyW - 10} y2={cy + h * 0.1}
        stroke="#2C2C2C" strokeWidth="3" strokeLinecap="round"
        className="dhol-stick-r"
        style={{ transformOrigin: `${cx + bodyW - 10}px ${cy + h * 0.1}px` }}
      />
    </svg>
  );
}
