import { forwardRef } from 'react';

const ShimmerButton = forwardRef(function ShimmerButton({
  href,
  background,
  className = '',
  style = {},
  children,
  ...props
}, ref) {
  const Tag = href ? 'a' : 'button';
  const bg = background || 'linear-gradient(135deg, #25D366, #128C7E)';

  return (
    <Tag
      ref={ref}
      href={href}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold font-sans text-white shadow-md transition-transform hover:scale-[1.03] active:scale-[.97] ${className}`}
      style={{ background: bg, ...style }}
      {...props}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.32) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer-sweep 2.4s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Tag>
  );
});

export default ShimmerButton;
