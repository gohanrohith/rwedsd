export default function OrnamentDivider({ color = '#D4AF37', className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,transparent,${color})` }} />
      <span style={{ color, fontSize: '1rem', lineHeight: 1 }}>✦</span>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${color},transparent)` }} />
    </div>
  );
}
