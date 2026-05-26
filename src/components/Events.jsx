import { EVENTS } from '../config';
import OrnamentDivider from './OrnamentDivider';
import BlurFade from './ui/BlurFade';
import ShimmerButton from './ui/ShimmerButton';
import ScrollArrow from './ui/ScrollArrow';

function MapIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

/* Darken a hex color slightly for gradient end */
function darken(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, (n >> 16) - 30);
  const g = Math.max(0, ((n >> 8) & 0xff) - 30);
  const b = Math.max(0, (n & 0xff) - 30);
  return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

function EventCard({ ev }) {
  const card = (
    <div
      className={`event-card relative rounded-2xl overflow-hidden border shadow-sm ${ev.fullWidth ? 'md:flex' : ''}`}
      style={{ borderColor: ev.featured ? 'rgba(212,175,55,.4)' : 'rgba(212,175,55,.22)' }}
    >
      {/* Gradient header */}
      <div
        className={`relative flex flex-col items-center justify-center gap-2 ${ev.fullWidth ? 'h-48 md:h-auto md:w-2/5 flex-shrink-0' : 'h-44'}`}
        style={{ background: ev.gradient }}
      >
        <span style={{ fontSize: '3rem' }} aria-hidden="true">{ev.icon}</span>
        <p className="font-serif text-xl italic font-light text-white" style={{ opacity: .9 }}>{ev.name}</p>

        {ev.featured && (
          <div className="absolute top-3 right-3">
            <span className="font-sans text-xs font-semibold uppercase px-3 py-1 rounded-full"
                  style={{ background: '#D4AF37', color: '#8B0000' }}>Main Event</span>
          </div>
        )}

        <div className="absolute bottom-3 left-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full"
                style={{ background: ev.badgeBg, color: ev.badgeColor }}>
            {ev.badge}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col justify-center flex-1" style={{ background: '#FDFBF7' }}>
        <h3 className="font-serif text-2xl font-medium mb-1" style={{ color: '#2C2C2C' }}>{ev.name}</h3>
        <p className="font-sans text-xs mb-5" style={{ color: '#8B0000' }}>{ev.date}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2.5">
            <span style={{ color: '#D4AF37', marginTop: 1 }}>🕐</span>
            <p className="font-sans text-sm" style={{ color: '#555' }}>
              {ev.time}{ev.note ? ` — ${ev.note}` : ''}
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span style={{ color: '#D4AF37', marginTop: 1 }}>📍</span>
            <div>
              <p className="font-sans text-sm" style={{ color: '#555' }}>{ev.venue}</p>
              {ev.address && (
                <p className="font-sans text-xs mt-0.5" style={{ color: '#999' }}>{ev.address}</p>
              )}
            </div>
          </div>
          {ev.feast && (
            <div className="flex items-start gap-2.5">
              <span style={{ color: '#D4AF37', marginTop: 1 }}>🍽️</span>
              <p className="font-sans text-sm" style={{ color: '#555' }}>{ev.feast}</p>
            </div>
          )}
        </div>

        <ShimmerButton
          href={ev.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          background={`linear-gradient(135deg, ${ev.btnColor}, ${darken(ev.btnColor)})`}
          className={`py-2.5 px-5 rounded-xl text-sm ${ev.fullWidth ? 'w-full sm:w-52' : 'w-full'}`}
        >
          <MapIcon /> View on Google Maps
        </ShimmerButton>
      </div>
    </div>
  );

  if (ev.fullWidth) return <div className="md:col-span-2">{card}</div>;
  return card;
}

export default function Events() {
  return (
    <section className="py-24 px-6" style={{ background: '#FDFBF7' }}>
      <BlurFade inView delay={0} duration={0.65} inViewMargin="-60px">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest mb-3"
               style={{ color: '#8B0000', letterSpacing: '.28em' }}>
              Join the Celebration
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: '#2C2C2C' }}>
              Wedding Events
            </h2>
            <OrnamentDivider className="mt-4 max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENTS.map(ev => <EventCard key={ev.id} ev={ev} />)}
          </div>

        </div>
      </BlurFade>
      <ScrollArrow />
    </section>
  );
}
