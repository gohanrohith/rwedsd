export default function Ripple({
  mainCircleSize = 160,
  mainCircleOpacity = 0.18,
  numCircles = 6,
  className = '',
}) {
  return (
    <div
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
      style={{ maskImage: 'linear-gradient(to bottom, white 30%, transparent 100%)' }}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 90;
        const opacity = Math.max(0, mainCircleOpacity - i * 0.022);
        return (
          <div
            key={i}
            className="absolute rounded-full ripple-ring"
            style={{
              width: size,
              height: size,
              opacity,
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${2.4 + i * 0.35}s`,
              borderStyle: i === numCircles - 1 ? 'dashed' : 'solid',
              borderWidth: 1,
              borderColor: `rgba(212,175,55,${0.1 + i * 0.045})`,
              background: 'rgba(212,175,55,0.025)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%) scale(1)',
            }}
          />
        );
      })}
    </div>
  );
}
