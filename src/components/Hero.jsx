import { COUPLE, WEDDING } from '../config';
import OrnamentDivider from './OrnamentDivider';
import FlatElephant from './FlatElephant';
import Particles from './ui/Particles';
import SparklesText from './ui/SparklesText';
import AnimatedGradientText from './ui/AnimatedGradientText';

const CORNERS = [
  { style: { top: 0, left: 0 } },
  { style: { top: 0, right: 0,  transform: 'scaleX(-1)' } },
  { style: { bottom: 0, left: 0,  transform: 'scaleY(-1)' } },
  { style: { bottom: 0, right: 0, transform: 'scale(-1,-1)' } },
];

function CornerSVG({ style }) {
  return (
    <svg
      viewBox="0 0 80 80" fill="none"
      style={{ position: 'absolute', width: 140, height: 140, opacity: .26, pointerEvents: 'none', ...style }}
    >
      <path d="M5,5 Q46,5 46,46" stroke="#D4AF37" strokeWidth="1" fill="none" />
      <path d="M5,5 Q5,46 46,46" stroke="#D4AF37" strokeWidth="1" fill="none" />
      <line x1="5" y1="5" x2="28" y2="5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="5" y1="5" x2="5" y2="28" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8"  cy="8"  r="2.2" fill="#D4AF37" opacity=".7" />
      <circle cx="22" cy="5"  r="1.4" fill="#D4AF37" opacity=".5" />
      <circle cx="5"  cy="22" r="1.4" fill="#D4AF37" opacity=".5" />
      <path d="M16,16 Q32,16 32,32" stroke="#D4AF37" strokeWidth=".8" fill="none" opacity=".4" />
      <path d="M16,16 Q16,32 32,32" stroke="#D4AF37" strokeWidth=".8" fill="none" opacity=".4" />
    </svg>
  );
}

function LotusFloat({ style, cls }) {
  return (
    <div className={cls} style={{ position: 'absolute', pointerEvents: 'none', userSelect: 'none', ...style }}>
      <svg width="72" height="72" viewBox="0 0 60 60">
        {[0, 60, 120].map(r => (
          <ellipse key={r} cx="30" cy="30" rx="10" ry="22"
            fill="#D4AF37" transform={`rotate(${r} 30 30)`} opacity=".45" />
        ))}
        {[30, 90, 150].map(r => (
          <ellipse key={r} cx="30" cy="30" rx="10" ry="22"
            fill="#E8751A" transform={`rotate(${r} 30 30)`} opacity=".3" />
        ))}
        <circle cx="30" cy="30" r="7" fill="#D4AF37" opacity=".85" />
        <circle cx="30" cy="30" r="4" fill="#F0D060" opacity=".7" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 18% 38%, rgba(232,117,26,.09) 0%, transparent 58%),' +
          'radial-gradient(ellipse at 82% 18%, rgba(139,0,0,.06) 0%, transparent 52%),' +
          '#FDFBF7',
      }}
    >
      {/* Gold particle field — replaces static dot-pattern */}
      <Particles quantity={80} color="#D4AF37" size={0.5} staticity={60} ease={60} />

      {CORNERS.map((c, i) => <CornerSVG key={i} style={c.style} />)}
      <LotusFloat cls="float-a" style={{ top: 36, left: 28 }} />
      <LotusFloat cls="float-b" style={{ top: 36, right: 28 }} />

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 text-center px-6 max-w-xl mx-auto w-full">

        {/* Lotus badge */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl"
            style={{ background: 'rgba(253,251,247,.95)', border: '1.5px solid #D4AF37' }}
          >
            <span style={{ fontSize: '2.2rem' }}>🪷</span>
          </div>
        </div>

        <p className="font-sans text-xs uppercase tracking-widest mb-5"
           style={{ color: '#1A4332', letterSpacing: '.28em' }}>
          Together with their families
        </p>

        {/* Groom name with sparkles */}
        <h1 className="font-serif font-light leading-none"
            style={{ fontSize: 'clamp(4rem,14vw,7rem)', color: '#2C2C2C' }}>
          <SparklesText text={COUPLE.groom.firstName} sparklesCount={6} />
        </h1>

        <div className="flex items-center justify-center gap-3 my-4" style={{ maxWidth: 220, margin: '1rem auto' }}>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg,transparent,#D4AF37)' }} />
          <span className="font-serif text-3xl italic" style={{ color: '#D4AF37' }}>&amp;</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
        </div>

        {/* Bride name with sparkles */}
        <h1 className="font-serif font-light leading-none"
            style={{ fontSize: 'clamp(4rem,14vw,7rem)', color: '#2C2C2C' }}>
          <SparklesText text={COUPLE.bride.firstName} sparklesCount={6} />
        </h1>

        <p className="font-serif text-xl md:text-2xl italic font-light mt-7 mb-2"
           style={{ color: '#8B0000' }}>
          {COUPLE.tagline}
        </p>

        <p className="font-sans text-sm font-medium uppercase tracking-widest mt-4"
           style={{ color: '#1A4332', letterSpacing: '.22em' }}>
          {WEDDING.displayDate}
        </p>

        {/* Animated nakshatra/lagnam pill */}
        <div className="flex justify-center mt-3 mb-1">
          <AnimatedGradientText className="font-sans text-xs" style={{ color: '#1A4332', letterSpacing: '.06em' }}>
            <span style={{ color: '#D4AF37', fontSize: '.6rem' }}>✦</span>
            <span style={{ color: '#1A4332' }}>{WEDDING.nakshatra}</span>
            <span style={{ color: '#D4AF37', fontSize: '.6rem' }}>✦</span>
          </AnimatedGradientText>
        </div>

        <p className="font-sans text-xs mt-2" style={{ color: '#777' }}>{WEDDING.venue}</p>
        <p className="font-sans text-xs mt-0.5" style={{ color: '#AAA' }}>{WEDDING.address}</p>

        <OrnamentDivider className="mt-8 max-w-xs mx-auto" />
      </div>

      {/* Flat elephants — bottom corners */}
      <div className="absolute bottom-0 left-0 hidden sm:block" style={{ opacity: 0.82 }}>
        <FlatElephant size={150} flip={false} />
      </div>
      <div className="absolute bottom-0 right-0 hidden sm:block" style={{ opacity: 0.82 }}>
        <FlatElephant size={150} flip={true} />
      </div>

      {/* Scroll indicator — in flow so it never overlaps content */}
      <div className="scroll-bounce relative z-10 w-full text-center pb-10 pt-2">
        <p className="font-sans text-xs uppercase tracking-widest mb-3"
           style={{ color: '#1A4332', letterSpacing: '.2em', opacity: .6 }}>
          Scroll to Explore
        </p>
        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" className="mx-auto">
          <line x1="10" y1="1" x2="10" y2="19" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
          <polyline points="4,13 10,20 16,13" fill="none" stroke="#D4AF37"
            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
