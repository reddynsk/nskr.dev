// Hero v2 — "running figurines" + rich ambient animations
// Three layers composited live on one canvas:
//   1. Soft gradient mesh (mouse parallax)
//   2. Floating geometric "glyphs" (AI tokens, matrices, circuits)
//   3. Silhouette figures running across the scene (mascots)
//   4. Grid floor with perspective + scanlines
function HeroCanvas({ dark = true }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf = 0, W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas);

    // Mouse parallax
    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      tmx = (e.clientX - r.left) / r.width;
      tmy = (e.clientY - r.top) / r.height;
    };
    window.addEventListener('mousemove', onMove);

    // Runners — each is a little silhouette figure that runs across horizontally.
    const makeRunner = (init = false) => ({
      x: init ? Math.random() * W : -40 - Math.random() * 200,
      y: 0.68 + Math.random() * 0.28,       // normalized height (0..1) — lower band only
      speed: 40 + Math.random() * 90,        // px/sec
      scale: 0.28 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2,    // gait phase
      hue: Math.floor(Math.random() * 360),
      dir: Math.random() > 0.5 ? 1 : -1,
      opacity: 0.25 + Math.random() * 0.5,
    });
    let runners = Array.from({ length: 9 }, () => makeRunner(true));

    // Glyphs — floating geometric tokens
    const GLYPH_KINDS = ['triangle', 'circle', 'plus', 'square', 'hex', 'dots', 'bracket'];
    const makeGlyph = () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      size: 10 + Math.random() * 34,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      kind: GLYPH_KINDS[Math.floor(Math.random() * GLYPH_KINDS.length)],
      hue: Math.floor(Math.random() * 360),
      opacity: 0.2 + Math.random() * 0.35,
      pulse: Math.random() * Math.PI * 2,
    });
    const glyphs = Array.from({ length: 22 }, makeGlyph);

    // Starfield (faint depth dots)
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random(), y: Math.random() * 0.55,
      r: Math.random() * 1.2 + 0.3,
      tw: Math.random() * Math.PI * 2,
    }));

    const drawRunner = (r, t) => {
      const y = r.y * H;
      const s = r.scale;
      const cx = r.x, cy = y;
      const leg = Math.sin(t * 8 + r.phase) * 8 * s;
      const arm = Math.sin(t * 8 + r.phase + Math.PI) * 9 * s;
      const bob = Math.abs(Math.sin(t * 8 + r.phase)) * 2 * s;

      ctx.save();
      ctx.translate(cx, cy + bob);
      ctx.scale(r.dir, 1);
      const col = dark
        ? `hsla(${r.hue}, 70%, 72%, ${r.opacity})`
        : `hsla(${r.hue}, 60%, 35%, ${r.opacity * 0.85})`;
      ctx.strokeStyle = col;
      ctx.fillStyle = col;
      ctx.lineWidth = 2.2 * s;
      ctx.lineCap = 'round';

      // head
      ctx.beginPath();
      ctx.arc(0, -30 * s, 5.5 * s, 0, Math.PI * 2);
      ctx.fill();
      // body
      ctx.beginPath();
      ctx.moveTo(0, -24 * s);
      ctx.lineTo(0, -4 * s);
      ctx.stroke();
      // legs
      ctx.beginPath();
      ctx.moveTo(0, -4 * s);
      ctx.lineTo(leg, 12 * s);
      ctx.moveTo(0, -4 * s);
      ctx.lineTo(-leg, 12 * s);
      ctx.stroke();
      // arms
      ctx.beginPath();
      ctx.moveTo(0, -20 * s);
      ctx.lineTo(arm, -10 * s);
      ctx.moveTo(0, -20 * s);
      ctx.lineTo(-arm, -10 * s);
      ctx.stroke();

      // trail
      ctx.strokeStyle = col;
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      for (let i = 1; i < 6; i++) {
        ctx.moveTo(-i * 10 * s, 12 * s - i * 0.3);
        ctx.lineTo(-i * 10 * s - 6 * s, 12 * s - i * 0.3);
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawGlyph = (g, t) => {
      const x = g.x * W, y = g.y * H;
      const pulse = 0.8 + Math.sin(t * 1.2 + g.pulse) * 0.2;
      const alpha = g.opacity * pulse;
      const col = dark
        ? `hsla(${g.hue}, 80%, 75%, ${alpha})`
        : `hsla(${g.hue}, 60%, 40%, ${alpha})`;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(g.rot);
      ctx.strokeStyle = col;
      ctx.fillStyle = col;
      ctx.lineWidth = 1.4;
      const sz = g.size * pulse;
      switch (g.kind) {
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -sz / 2); ctx.lineTo(sz / 2, sz / 2); ctx.lineTo(-sz / 2, sz / 2); ctx.closePath();
          ctx.stroke();
          break;
        case 'circle':
          ctx.beginPath(); ctx.arc(0, 0, sz / 2, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.arc(0, 0, sz / 4, 0, Math.PI * 2); ctx.stroke();
          break;
        case 'plus':
          ctx.beginPath();
          ctx.moveTo(0, -sz / 2); ctx.lineTo(0, sz / 2);
          ctx.moveTo(-sz / 2, 0); ctx.lineTo(sz / 2, 0); ctx.stroke();
          break;
        case 'square':
          ctx.strokeRect(-sz / 2, -sz / 2, sz, sz);
          ctx.strokeRect(-sz / 4, -sz / 4, sz / 2, sz / 2);
          break;
        case 'hex': {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            const px = Math.cos(a) * sz / 2, py = Math.sin(a) * sz / 2;
            if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.closePath(); ctx.stroke();
          break;
        }
        case 'dots':
          for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
            ctx.beginPath(); ctx.arc(i * sz / 3, j * sz / 3, 1.3, 0, Math.PI * 2); ctx.fill();
          }
          break;
        case 'bracket':
          ctx.beginPath();
          ctx.moveTo(-sz / 2, -sz / 2); ctx.lineTo(-sz / 2 - 4, -sz / 2); ctx.lineTo(-sz / 2 - 4, sz / 2); ctx.lineTo(-sz / 2, sz / 2);
          ctx.moveTo(sz / 2, -sz / 2); ctx.lineTo(sz / 2 + 4, -sz / 2); ctx.lineTo(sz / 2 + 4, sz / 2); ctx.lineTo(sz / 2, sz / 2);
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    let t0 = performance.now(), lastT = t0;
    const loop = () => {
      const now = performance.now();
      const t = (now - t0) / 1000;
      const dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;

      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      ctx.clearRect(0, 0, W, H);

      // Gradient orbs (parallax)
      const g1 = ctx.createRadialGradient(W * (0.25 + mx * 0.08), H * (0.3 + my * 0.08), 0, W * 0.25, H * 0.3, Math.max(W, H) * 0.55);
      g1.addColorStop(0, dark ? 'rgba(139, 92, 246, 0.28)' : 'rgba(180, 140, 255, 0.25)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(W * (0.78 - mx * 0.08), H * (0.55 - my * 0.06), 0, W * 0.78, H * 0.55, Math.max(W, H) * 0.55);
      g2.addColorStop(0, dark ? 'rgba(6, 182, 212, 0.26)' : 'rgba(80, 200, 220, 0.24)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);

      const g3 = ctx.createRadialGradient(W * 0.5, H * 1.05, 0, W * 0.5, H * 1.05, Math.max(W, H) * 0.7);
      g3.addColorStop(0, dark ? 'rgba(255, 122, 69, 0.25)' : 'rgba(255, 140, 100, 0.22)');
      g3.addColorStop(1, 'transparent');
      ctx.fillStyle = g3; ctx.fillRect(0, 0, W, H);

      // Stars
      ctx.fillStyle = dark ? 'rgba(230, 240, 255, .7)' : 'rgba(20, 20, 50, .5)';
      for (const s of stars) {
        const tw = 0.5 + Math.sin(t * 2 + s.tw) * 0.5;
        ctx.globalAlpha = tw * 0.8;
        ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Perspective grid floor
      const horizon = H * 0.62;
      ctx.strokeStyle = dark ? 'rgba(200, 210, 255, 0.1)' : 'rgba(40, 50, 100, 0.12)';
      ctx.lineWidth = 1;
      // vertical lines converging
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(W / 2 + i * 60, horizon);
        ctx.lineTo(W / 2 + i * W, H + 20);
        ctx.stroke();
      }
      // horizontal lines — spacing grows with distance
      for (let i = 1; i <= 10; i++) {
        const p = Math.pow(i / 10, 2.2);
        const y = horizon + p * (H - horizon);
        ctx.globalAlpha = 1 - p * 0.4;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Glyphs
      for (const g of glyphs) {
        g.x += g.vx; g.y += g.vy; g.rot += g.rotSpeed;
        if (g.x < 0 || g.x > 1) g.vx *= -1;
        if (g.y < 0 || g.y > 1) g.vy *= -1;
        drawGlyph(g, t);
      }

      // Runners
      for (const r of runners) {
        r.x += r.speed * r.dir * dt;
        if (r.dir === 1 && r.x > W + 60) {
          Object.assign(r, makeRunner(false));
          r.x = -40;
        } else if (r.dir === -1 && r.x < -60) {
          Object.assign(r, makeRunner(false));
          r.dir = -1;
          r.x = W + 40;
        }
        drawRunner(r, t);
      }

      // Scan beam
      const beamY = ((t * 0.12) % 1.4 - 0.2) * H;
      const beamGrad = ctx.createLinearGradient(0, beamY - 100, 0, beamY + 100);
      beamGrad.addColorStop(0, 'transparent');
      beamGrad.addColorStop(0.5, dark ? 'rgba(180, 200, 255, 0.05)' : 'rgba(40, 80, 180, 0.04)');
      beamGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = beamGrad; ctx.fillRect(0, beamY - 100, W, 200);

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      ro.disconnect();
    };
  }, [dark]);

  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />;
}

window.HeroCanvas = HeroCanvas;
