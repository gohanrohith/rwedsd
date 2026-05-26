export default function ScrollArrow({ color = '#D4AF37' }) {
  return (
    <div className="scroll-bounce w-full text-center relative z-10 pt-8 pb-1">
      <svg width="20" height="26" viewBox="0 0 20 26" fill="none" className="mx-auto" style={{ opacity: 0.6 }}>
        <line x1="10" y1="1" x2="10" y2="19" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <polyline points="4,13 10,20 16,13" fill="none" stroke={color}
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
