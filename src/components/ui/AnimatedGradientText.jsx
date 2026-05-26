export default function AnimatedGradientText({ children, className = '' }) {
  return (
    <span
      className={`relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-1.5 ${className}`}
      style={{
        background: 'rgba(212,175,55,.1)',
        border: '1px solid transparent',
        backgroundClip: 'padding-box',
      }}
    >
      {/* Animated gradient border */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: 1,
          background: 'linear-gradient(90deg, #D4AF37, #8B0000, #1A4332, #D4AF37)',
          backgroundSize: '300% 100%',
          animation: 'gradient-shift 4s linear infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }}
      />
      {children}
    </span>
  );
}
