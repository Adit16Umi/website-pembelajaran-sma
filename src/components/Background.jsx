const PARTICLE_COUNT = 26;

export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora__blob aurora__blob--1" />
      <span className="aurora__blob aurora__blob--2" />
      <span className="aurora__blob aurora__blob--3" />
      <span className="aurora__grid" />
      <span className="aurora__batik" />
    </div>
  );
}

export function Particles() {
  const dots = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    size: 4 + ((i * 13) % 9),
    delay: `${-((i * 7) % 30)}s`,
    duration: `${20 + ((i * 11) % 26)}s`,
    alt: i % 2 === 0,
  }));

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className={`particles__dot ${d.alt ? 'particles__dot--alt' : ''}`}
          style={{
            left: d.left,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}
