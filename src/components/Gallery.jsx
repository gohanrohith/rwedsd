import { useState, useRef, useEffect } from 'react';
import { GALLERY, COUPLE } from '../config';
import OrnamentDivider from './OrnamentDivider';
import BlurFade from './ui/BlurFade';

export default function Gallery() {
  const [cur, setCur] = useState(0);
  const touchX  = useRef(0);
  const total   = GALLERY.length;

  const go   = i  => setCur(((i % total) + total) % total);
  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [cur]);

  return (
    <section className="py-24 px-6" style={{ background: '#F5EFE0' }}>
      <BlurFade inView delay={0} duration={0.65} inViewMargin="-60px">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest mb-3"
               style={{ color: '#8B0000', letterSpacing: '.28em' }}>
              Pre-Wedding
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: '#2C2C2C' }}>
              Our Love Story
            </h2>
            <OrnamentDivider className="mt-4 max-w-xs mx-auto" />
          </div>

          {/* Slider */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl mb-5"
            style={{ border: '1.5px solid rgba(212,175,55,.35)' }}
            onTouchStart={e => { touchX.current = e.changedTouches[0].clientX; }}
            onTouchEnd={e => {
              const dx = touchX.current - e.changedTouches[0].clientX;
              if (Math.abs(dx) > 45) dx > 0 ? next() : prev();
            }}
          >
            <div className="gallery-track" style={{ transform: `translateX(-${cur * 100}%)` }}>
              {GALLERY.map((item, i) => (
                <div key={i} className="gallery-slide">
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={`Couple photo ${i + 1}`}
                      className="w-full object-cover"
                      style={{ height: 'clamp(260px,50vw,400px)' }}
                    />
                    <div className="absolute inset-0"
                         style={{ background: 'linear-gradient(180deg,transparent 55%,rgba(26,67,50,.8) 100%)' }} />
                    <p className="absolute bottom-5 inset-x-0 text-center font-serif text-2xl italic px-6"
                       style={{ color: '#FDFBF7' }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {[{ dir: -1, pos: 'left-3', pts: '15,18 9,12 15,6' }, { dir: 1, pos: 'right-3', pts: '9,18 15,12 9,6' }].map(btn => (
              <button
                key={btn.dir}
                onClick={() => go(cur + btn.dir)}
                className={`absolute ${btn.pos} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110`}
                style={{ background: 'rgba(253,251,247,.92)' }}
                aria-label={btn.dir < 0 ? 'Previous' : 'Next'}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C"
                     strokeWidth="2.2" strokeLinecap="round">
                  <polyline points={btn.pts} />
                </svg>
              </button>
            ))}

            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
              {GALLERY.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    height: 8, borderRadius: i === cur ? 4 : '50%',
                    width: i === cur ? 22 : 8,
                    background: i === cur ? '#D4AF37' : 'rgba(255,255,255,.5)',
                    transition: 'all .3s', border: 'none', padding: 0, cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>

          <p className="text-center font-serif text-xl italic mt-2" style={{ color: '#1A4332' }}>
            Share your moments with{' '}
            <span style={{ color: '#D4AF37' }}>{COUPLE.hashtag}</span>
          </p>

        </div>
      </BlurFade>
    </section>
  );
}
