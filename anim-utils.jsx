// Animation utilities — IntersectionObserver-based reveals, scramble text, count-up
// All pure JS hooks to attach to components.

function useReveal(options = {}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(!!options.immediate);
  React.useEffect(() => {
    if (options.immediate) { setShown(true); return; }
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const tryShow = () => {
      if (cancelled) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) { setShown(true); return true; }
      return false;
    };
    // Check immediately, then again after layout settles (rAF), in case the first call
    // ran before the parent had laid out and rect was 0×0 at top-left.
    if (tryShow()) return;
    const raf = requestAnimationFrame(() => { tryShow(); });
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: options.threshold || 0.05, rootMargin: options.rootMargin || '0px 0px -5% 0px' });
    io.observe(el);
    // Safety net: if observer hasn't fired in 1500ms, force show (prevents permanently
    // invisible content if IO misbehaves under heavy initial render load).
    const fallback = setTimeout(() => { if (!cancelled) setShown(true); }, 1500);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return [ref, shown];
}

// Scramble text effect — cycles through random chars then settles
function Scramble({ text, duration = 1200, delay = 0, className, style }) {
  const [display, setDisplay] = React.useState(text);
  const [ref, shown] = useReveal();
  React.useEffect(() => {
    if (!shown) return;
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let raf, start;
    const t = setTimeout(() => {
      start = performance.now();
      const queue = Array.from(text).map((c, i) => ({
        from: chars[Math.floor(Math.random() * chars.length)],
        to: c,
        startP: Math.random() * 0.4,
        endP: 0.4 + Math.random() * 0.5,
      }));
      const step = () => {
        const p = Math.min(1, (performance.now() - start) / duration);
        let out = '';
        for (const q of queue) {
          if (p >= q.endP) out += q.to;
          else if (p < q.startP) out += q.from;
          else {
            if (Math.random() < 0.28) q.from = chars[Math.floor(Math.random() * chars.length)];
            out += q.from;
          }
        }
        setDisplay(out);
        if (p < 1) raf = requestAnimationFrame(step);
        else setDisplay(text);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [shown, text, duration, delay]);
  return <span ref={ref} className={className} style={style}>{display}</span>;
}

// Word-by-word fade-in for headings
function FadeWords({ text, delay = 0, stagger = 60, className, style, as: Tag = 'span' }) {
  const [ref, shown] = useReveal();
  const words = text.split(' ');
  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span
            className={'rv-word' + (shown ? ' is-shown' : '')}
            style={{ '--rv-delay': (delay + i * stagger) + 'ms' }}
          >{w}</span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </Tag>
  );
}

// Count up
function CountUp({ to, suffix = '', duration = 1400, style }) {
  const [ref, shown] = useReveal();
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf;
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to]);
  return <span ref={ref} style={style}>{n}{suffix}</span>;
}

// Generic reveal wrapper with translate + fade
function Reveal({ children, delay = 0, y = 40, style, className }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={(className || '') + ' rv-reveal' + (shown ? ' is-shown' : '')}
      style={{ '--rv-y': y + 'px', '--rv-delay': delay + 'ms', ...style }}
    >{children}</div>
  );
}

// Hook to track scroll progress within an element
function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return y;
}

Object.assign(window, { Scramble, FadeWords, CountUp, Reveal, useScrollY, useReveal });
