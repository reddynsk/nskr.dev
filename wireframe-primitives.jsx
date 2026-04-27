// Sketchy wireframe primitives — polished grayscale, hand-drawn feel.
// Fonts: Caveat for labels/notes, Kalam for body, Space Mono for code/type-ish.

const WF = {
  ink: 'var(--wf-ink)',
  ink2: 'var(--wf-ink-2)',
  ink3: 'var(--wf-ink-3)',
  paper: 'var(--wf-paper)',
  paper2: 'var(--wf-paper-2)',
  line: 'var(--wf-line)',
  accent: 'var(--wf-accent)',
};

// Sketchy box — hand-drawn rectangle using SVG with a slight roughness
function SBox({ children, style, fill, stroke, dashed, radius = 4, thick = 1.5 }) {
  return (
    <div style={{
      position: 'relative',
      border: `${thick}px ${dashed ? 'dashed' : 'solid'} ${stroke || WF.ink}`,
      borderRadius: radius,
      background: fill || 'transparent',
      ...style,
    }}>{children}</div>
  );
}

// Placeholder "image / video" box with diagonal stripes
function SPlaceholder({ label = 'image', style, tall, ratio }) {
  const h = ratio ? undefined : (tall ? 220 : 140);
  return (
    <div style={{
      position: 'relative',
      height: h,
      aspectRatio: ratio,
      width: '100%',
      border: `1.5px solid ${WF.ink}`,
      borderRadius: 4,
      background: `repeating-linear-gradient(135deg, transparent 0 10px, rgba(0,0,0,.04) 10px 11px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      ...style,
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={WF.ink} strokeWidth="1" strokeDasharray="2 3" opacity=".35"/>
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={WF.ink} strokeWidth="1" strokeDasharray="2 3" opacity=".35"/>
      </svg>
      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2, background: WF.paper, padding: '2px 6px', position: 'relative', letterSpacing: '.02em' }}>{label}</span>
    </div>
  );
}

// Wavy / text-line placeholder
function SLines({ count = 3, widths, style }) {
  const ws = widths || Array.from({ length: count }, (_, i) => 100 - i * 8 - Math.random() * 6);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {ws.map((w, i) => (
        <div key={i} style={{ height: 6, width: `${w}%`, borderRadius: 3, background: WF.ink3 }} />
      ))}
    </div>
  );
}

// Heading-scale line
function SHead({ w = 60, h = 14, style }) {
  return <div style={{ height: h, width: `${w}%`, borderRadius: 3, background: WF.ink, ...style }} />;
}

// Circular annotation bubble
function SAnno({ children, style, color }) {
  return (
    <div style={{
      display: 'inline-flex',
      fontFamily: 'Caveat, cursive',
      fontSize: 16,
      color: color || WF.accent,
      lineHeight: 1.1,
      ...style,
    }}>{children}</div>
  );
}

// Hand-drawn arrow (SVG, points from->to in local coords)
function SArrow({ from, to, style, curve = 0.3, color }) {
  const [x1, y1] = from; const [x2, y2] = to;
  const mx = (x1 + x2) / 2 + (y2 - y1) * curve;
  const my = (y1 + y2) / 2 - (x2 - x1) * curve;
  const c = color || WF.accent;
  return (
    <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%', overflow: 'visible', ...style }}>
      <path d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d={`M${x2},${y2} l-8,-3 M${x2},${y2} l-3,-8`} fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round"
        transform={`rotate(${Math.atan2(y2 - my, x2 - mx) * 180 / Math.PI + 135}, ${x2}, ${y2})`} />
    </svg>
  );
}

// Circled number marker
function SMarker({ n, style, color }) {
  return (
    <div style={{
      width: 22, height: 22, borderRadius: '50%',
      border: `1.5px solid ${color || WF.accent}`,
      color: color || WF.accent,
      fontFamily: 'Caveat, cursive', fontSize: 15, fontWeight: 700,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>{n}</div>
  );
}

// Nav bar wireframe
function SNav({ variant = 'horizontal' }) {
  if (variant === 'vertical') {
    return (
      <div style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 14, zIndex: 5 }}>
        {['home','work','about','blog','contact'].map(l => (
          <div key={l} style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, writingMode: 'vertical-rl', letterSpacing: '.2em', textTransform: 'uppercase' }}>{l}</div>
        ))}
      </div>
    );
  }
  if (variant === 'dots') {
    return (
      <div style={{ position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 5, alignItems: 'center' }}>
        <div style={{ fontFamily: 'Caveat, cursive', fontSize: 20, color: WF.ink, fontWeight: 700 }}>ns.</div>
        <div style={{ width: 24, height: 1, background: WF.ink3, margin: '0 8px' }} />
        {['work','about','blog','contact'].map(l => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Kalam, cursive', fontSize: 13, color: WF.ink2 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: WF.ink3 }} />{l}
          </div>
        ))}
      </div>
    );
  }
  // horizontal default
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '22px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
      <div style={{ fontFamily: 'Caveat, cursive', fontSize: 22, color: WF.ink, fontWeight: 700 }}>ns.<span style={{ color: WF.accent }}>dev</span></div>
      <div style={{ display: 'flex', gap: 22, fontFamily: 'Kalam, cursive', fontSize: 13, color: WF.ink2 }}>
        {['work','about','writing','contact'].map(l => <span key={l}>{l}</span>)}
      </div>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2, border: `1px solid ${WF.ink}`, padding: '6px 10px', borderRadius: 3 }}>hire me →</div>
    </div>
  );
}

// Annotation note stuck to a wireframe edge
function SNote({ children, style, color = 'accent' }) {
  const c = color === 'accent' ? WF.accent : WF.ink2;
  return (
    <div style={{
      fontFamily: 'Caveat, cursive', fontSize: 15,
      color: c, lineHeight: 1.15,
      ...style,
    }}>{children}</div>
  );
}

// Frame chrome — the browser-like outline around a wireframe page
function SFrame({ children, label, width, height, scrollable = true }) {
  return (
    <div style={{ width, height, display: 'flex', flexDirection: 'column', background: WF.paper, position: 'relative' }}>
      {/* faux browser bar */}
      <div style={{ height: 24, borderBottom: `1px solid ${WF.line}`, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6, flexShrink: 0, background: WF.paper2 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', border: `1px solid ${WF.ink2}` }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Space Mono, monospace', fontSize: 9, color: WF.ink3 }}>{label}</div>
      </div>
      <div style={{ flex: 1, overflow: scrollable ? 'auto' : 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { WF, SBox, SPlaceholder, SLines, SHead, SAnno, SArrow, SMarker, SNav, SNote, SFrame });
