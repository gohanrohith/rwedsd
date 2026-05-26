export default function BorderBeam({
  colorFrom = '#D4AF37',
  colorTo = '#8B0000',
  duration = 10,
  borderWidth = 1.5,
  className = '',
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}
    >
      {/* Rotating conic gradient creates the traveling beam */}
      <div
        style={{
          position: 'absolute',
          inset: '-150%',
          background: `conic-gradient(from 0deg, transparent 60%, ${colorFrom} 70%, ${colorTo} 80%, transparent 88%)`,
          animation: `beam-spin ${duration}s linear infinite`,
        }}
      />
      {/* Mask: show only the border ring, hide the interior */}
      <div
        style={{
          position: 'absolute',
          inset: borderWidth,
          borderRadius: 'inherit',
          background: 'var(--beam-bg)',
        }}
      />
    </div>
  );
}
