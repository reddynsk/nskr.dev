// GhibliScene — painted sunset backdrop (no character figure)
// Layers: sun halo → god rays → distant mountains → mid hills → near hills → trees → grass → leaves → dust
function GhibliScene({ parallaxX = 0, parallaxY = 0 }) {
  const px = parallaxX * 8;
  const py = parallaxY * 6;

  return (
    <svg
      viewBox="0 0 1600 900"
      className="ghibli-svg"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="gs-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff5d6" stopOpacity="1" />
          <stop offset="40%" stopColor="#ffd08a" stopOpacity=".8" />
          <stop offset="100%" stopColor="#ff9a55" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gs-rays" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5d6" stopOpacity=".35" />
          <stop offset="100%" stopColor="#fff5d6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gs-mnt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6d3d6a" />
          <stop offset="100%" stopColor="#3a1f3f" />
        </linearGradient>
        <linearGradient id="gs-hills-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2846" />
          <stop offset="100%" stopColor="#1f1330" />
        </linearGradient>
        <linearGradient id="gs-hills-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1024" />
          <stop offset="100%" stopColor="#0a0614" />
        </linearGradient>
      </defs>

      {/* Sun halo — large soft glow */}
      <g className="gs-sun-wrap" style={{ transform: `translate(${px * 0.2}px, ${py * 0.2}px)` }}>
        <circle cx="1080" cy="420" r="420" fill="url(#gs-sun)" />
        <circle cx="1080" cy="420" r="90" fill="#fff3c4" opacity=".95" className="gs-sun-core" />
      </g>

      {/* God rays — subtle vertical beams */}
      <g className="gs-rays" opacity=".5">
        <rect x="900" y="120" width="40" height="600" fill="url(#gs-rays)" transform="rotate(8 920 400)" />
        <rect x="1060" y="100" width="60" height="680" fill="url(#gs-rays)" transform="rotate(-4 1090 440)" />
        <rect x="1220" y="120" width="40" height="620" fill="url(#gs-rays)" transform="rotate(12 1240 420)" />
      </g>

      {/* Distant mountains */}
      <g style={{ transform: `translate(${px * 0.1}px, ${py * 0.05}px)` }}>
        <path
          d="M0 560 L120 500 L220 530 L360 460 L520 510 L660 470 L820 500 L960 450 L1120 490 L1280 460 L1440 500 L1600 480 L1600 900 L0 900 Z"
          fill="url(#gs-mnt)"
          opacity=".7"
        />
      </g>

      {/* Mid hills */}
      <g style={{ transform: `translate(${px * 0.3}px, ${py * 0.15}px)` }}>
        <path
          d="M0 660 Q 180 600 340 640 T 680 620 T 1020 650 T 1360 615 T 1600 650 L 1600 900 L 0 900 Z"
          fill="url(#gs-hills-mid)"
        />
        {/* Tree silhouettes on ridge */}
        <g fill="#18112a" opacity=".85">
          <path d="M280 640 l-4 -22 -6 20 Z" />
          <path d="M340 632 l-5 -28 -7 25 Z" />
          <path d="M420 628 l-4 -20 -6 18 Z" />
          <path d="M780 628 l-5 -26 -7 23 Z" />
          <path d="M860 632 l-4 -22 -6 19 Z" />
          <path d="M1180 624 l-5 -30 -7 27 Z" />
          <path d="M1260 628 l-4 -22 -6 19 Z" />
        </g>
      </g>

      {/* Near hills */}
      <g style={{ transform: `translate(${px * 0.6}px, ${py * 0.3}px)` }}>
        <path
          d="M0 770 Q 200 720 420 750 T 820 740 T 1240 760 T 1600 740 L 1600 900 L 0 900 Z"
          fill="url(#gs-hills-near)"
        />
      </g>

      {/* Foreground grass strokes */}
      <g className="gs-grass" style={{ transform: `translate(${px * 0.9}px, ${py * 0.4}px)` }}>
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i * 27) + (i % 3) * 9;
          const h = 14 + ((i * 13) % 18);
          return (
            <path
              key={i}
              d={`M${x} 880 Q ${x + 2} ${880 - h / 2} ${x + 1} ${880 - h}`}
              stroke="#1a0f22"
              strokeWidth="1.6"
              fill="none"
              style={{ transformOrigin: `${x}px 880px` }}
              className="gs-grass-blade"
            />
          );
        })}
      </g>

      {/* Drifting leaves */}
      <g className="gs-leaves">
        {[
          { x: 180, y: 240, d: 0 },
          { x: 420, y: 340, d: -1.5 },
          { x: 760, y: 180, d: -.8 },
          { x: 1180, y: 300, d: -2.3 },
          { x: 1420, y: 220, d: -3.2 },
          { x: 320, y: 520, d: -1.1 },
          { x: 640, y: 460, d: -2.6 },
          { x: 1080, y: 560, d: -.4 },
        ].map((l, i) => (
          <ellipse
            key={i}
            cx={l.x}
            cy={l.y}
            rx="4.5"
            ry="2.2"
            fill="#ffb07a"
            opacity=".7"
            style={{ animationDelay: `${l.d}s` }}
          />
        ))}
      </g>

      {/* Dust motes */}
      <g className="gs-dust" opacity=".6">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 53) % 1600}
            cy={260 + (i * 37) % 420}
            r={.8 + (i % 3) * .4}
            fill="#fff6d6"
            style={{ animationDelay: `${-(i * 0.3)}s` }}
          />
        ))}
      </g>

      {/* Atmospheric haze at horizon */}
      <rect x="0" y="540" width="1600" height="200" fill="#ffb07a" opacity=".08" />
    </svg>
  );
}

// Keep backward-compat: anything importing GhibliCharacter gets the scene
const GhibliCharacter = GhibliScene;

window.GhibliScene = GhibliScene;
window.GhibliCharacter = GhibliCharacter;
