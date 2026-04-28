// Sections for the full portfolio site — Narra Suryakoushik Reddy (nskr.dev)
// Premium cinematic feel, smooth transitions, dark-first with light toggle.

const S = SITE_DATA;

// ─────────────── NAV ───────────────
function NavBar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#top" className="logo">
        <span className="logo-mark">◆</span>
        <span className="logo-text">NSKR</span>
      </a>
      <div className="nav-links">
        {['about', 'skills', 'experience', 'work', 'writing', 'contact'].map(l => (
          <a key={l} href={`#${l}`}>{l}</a>
        ))}
      </div>
      <div className="nav-actions">
        <button className="theme-btn" onClick={onToggleDark} aria-label="toggle theme">
          {dark ? '☾' : '☀'}
        </button>
        <a href={S.resume} target="_blank" className="nav-cta">Resume ↗</a>
      </div>
    </nav>
  );
}

// ─────────────── HERO ───────────────
function Hero({ dark }) {
  const y = useScrollY();
  const p = Math.min(1, y / 600);

  // mouse-reactive tilt on the content block (rAF-throttled to avoid re-render storm)
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    let raf = 0, tx = 0, ty = 0, pending = false;
    const on = (e) => {
      const w = window.innerWidth, h = window.innerHeight;
      tx = (e.clientX / w - 0.5) * 8;
      ty = (e.clientY / h - 0.5) * 8;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(() => { pending = false; setTilt({ x: tx, y: ty }); });
      }
    };
    window.addEventListener('mousemove', on);
    return () => { window.removeEventListener('mousemove', on); cancelAnimationFrame(raf); };
  }, []);

  // live clock
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // rotating "now running" phrases — matches the figurines on screen
  const RUNNING_PHRASES = [
    'fine-tuning a RAG pipeline',
    'wiring up an MCP tool',
    'chasing a bug through 14 n8n nodes',
    'teaching an agent to stop apologizing',
    'refactoring yesterday\u2019s prompt',
    'shipping a side quest',
  ];
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPhraseIdx((i) => (i + 1) % RUNNING_PHRASES.length), 2800);
    return () => clearInterval(id);
  }, []);

  // word strip
  const WORDS = ['AGENTIC', 'AUTOMATION', 'RAG', 'PIPELINES', 'AI', 'ENGINEERED', 'AGENTIC', 'AUTOMATION', 'RAG', 'PIPELINES', 'AI', 'ENGINEERED'];

  return (
    <section className="hero hero-v5" id="top">
      {/* code rain backdrop */}
      <div
        className="hero-v5-bg"
        style={{
          transform: `translateY(${y * 0.12}px)`,
          opacity: 1 - p * 0.4,
        }}
      >
        <div className="v5-grid" />
        <div className="v5-rain"><CodeRain /></div>
        <div className="v5-vignette" />
        <div className="v5-noise" />
      </div>

      {/* META TOP */}
      <div className="v5-meta-tl">
        <span className="v5-dot" /> SYS · ONLINE
        <span className="v5-sep">/</span>
        {now.toLocaleTimeString('en-US', { hour12: false })} IST
      </div>

      <a href={S.resumeUrl || '#'} className="v5-meta-tr" target="_blank" rel="noreferrer">
        <span>RESUME</span><span className="v5-arrow">↗</span>
      </a>

      {/* TERMINAL PROMPT (oversized) */}
      <div
        className="v5-prompt"
        style={{
          transform: `translate(${tilt.x * 1.5}px, ${tilt.y * 1.5}px)`,
        }}
      >
        <span className="v5-prompt-pre">~ /nskr</span>
        <span className="v5-prompt-arrow">▸</span>
        <span className="v5-prompt-cmd">build agentic_</span>
        <span className="v5-caret" />
      </div>

      {/* GIANT EDITORIAL HEADLINE */}
      <div
        className="v5-content"
        style={{
          transform: `translateY(${y * 0.08}px)`,
          opacity: 1 - p * 1.2,
        }}
      >
        <h1 className="v5-title">
          <span className="v5-line"><FadeWords text="AI engineer." stagger={70} /></span>
          <span className="v5-line v5-line-italic"><FadeWords text="Automation craftsman." delay={220} stagger={70} /></span>
          <span className="v5-line v5-line-outline"><FadeWords text="Open source by default." delay={460} stagger={70} /></span>
        </h1>

        <div className="v5-meta-row">
          <div className="v5-meta-col">
            <span className="v5-meta-key">NAME</span>
            <span className="v5-meta-val">Narra Suryakoushik Reddy</span>
          </div>
          <div className="v5-meta-col">
            <span className="v5-meta-key">ROLE</span>
            <span className="v5-meta-val">{S.role}</span>
          </div>
          <div className="v5-meta-col">
            <span className="v5-meta-key">STACK</span>
            <span className="v5-meta-val">n8n · LangChain · Python · RAG</span>
          </div>
          <div className="v5-meta-col">
            <span className="v5-meta-key">BASED</span>
            <span className="v5-meta-val">{S.location}</span>
          </div>
        </div>

        <div className="v5-ctas">
          <a href={`mailto:${S.email}`} className="v5-cta v5-cta-primary">
            <span className="v5-cta-label">Start a project</span>
            <span className="v5-cta-arrow">→</span>
          </a>
          <a href="#work" className="v5-cta v5-cta-ghost">
            <span className="v5-cta-dot" /> See the work
          </a>
        </div>
      </div>

      {/* WORD STRIP — bottom marquee */}
      <div className="v5-strip">
        <div className="v5-strip-track">
          {[...WORDS, ...WORDS].map((w, i) => (
            <span key={i} className="v5-strip-item">
              <span className="v5-strip-mark">✦</span>{w}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM-RIGHT HUD */}
      <div className="v5-hud">
        <div className="v5-hud-row">
          <span className="v5-hud-key">NOW</span>
          <span className="v5-hud-val" key={phraseIdx}>{RUNNING_PHRASES[phraseIdx]}</span>
        </div>
        <div className="v5-hud-row v5-hud-scroll">
          <span className="v5-hud-key">SCROLL</span>
          <span className="v5-hud-bar"><span className="v5-hud-bar-fill" style={{ height: `${p * 100}%` }} /></span>
        </div>
      </div>
    </section>
  );
}

// CodeRain — falling glyph columns (canvas-free, pure CSS)
function CodeRain() {
  const columns = 28;
  const glyphs = '01∆◆◇○●▢▣▲▼←→↑↓§¶≈≠≡∞∇∂'.split('');
  return (
    <div className="rain-cols">
      {Array.from({ length: columns }).map((_, i) => {
        const col = [];
        const len = 14 + (i % 4) * 4;
        for (let j = 0; j < len; j++) {
          col.push(glyphs[(i * 13 + j * 7) % glyphs.length]);
        }
        return (
          <div
            key={i}
            className="rain-col"
            style={{
              left: `${(i * 100) / columns}%`,
              animationDelay: `${-(i * 0.5) % 8}s`,
              animationDuration: `${10 + (i % 5) * 2}s`,
            }}
          >
            {col.map((g, j) => (
              <span key={j} style={{ opacity: 1 - j / col.length }}>{g}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ─────────────── MARQUEE ───────────────
function Marquee() {
  const items = ['n8n', 'LangChain', 'Python', 'RAG', 'MCP', 'FastAPI', 'React', 'PyTorch', 'AWS', 'Docker', 'PostgreSQL', 'Redis', 'TypeScript'];
  const row = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item"><span className="marquee-dot">●</span> {t}</span>
        ))}
      </div>
    </div>
  );
}

// ─────────────── ABOUT ───────────────
function About() {
  return (
    <section className="section about" id="about">
      <Stamp style={{ top: '180px', right: '6%', transform: 'rotate(-8deg)' }}>// shipped 2024</Stamp>
      <Stamp style={{ bottom: '120px', left: '4%', transform: 'rotate(5deg)' }}>// remote ok</Stamp>
      <SectionHeader num="01" label="About" bleed="§ ABOUT — ABOUT" bleedStyle="solid" />
      <div className="about-grid">
        <div>
          <h2 className="h-display">
            <FadeWords text="I build AI agents that" stagger={60} />
            <br/>
            <FadeWords text="do the boring things" delay={200} stagger={60} style={{ color: 'var(--accent)', fontStyle: 'italic' }} />
            <br/>
            <FadeWords text="so humans don't have to." delay={400} stagger={60} />
          </h2>
        </div>
        <div className="about-right">
          <Reveal delay={200}>
            <p className="lead">
              My work lives at the intersection of LLMs, automation, and real-world infrastructure. I turn messy manual workflows into reliable agentic systems — the kind that run while teams sleep.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p>
              Currently exploring RAG pipelines, MCP tools, and the craft of making AI agents feel less like demos and more like dependable teammates.
            </p>
          </Reveal>
          <div className="stats-row">
            {[
              { n: 20, suf: '+', l: 'API integrations' },
              { n: 40, suf: '%', l: 'Manual work cut' },
              { n: 98, suf: '%', l: 'Workflow success' },
              { n: 16, suf: '', l: 'Projects shipped' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={500 + i * 80} className="stat">
                <div className="stat-n"><CountUp to={s.n} suffix={s.suf} /></div>
                <div className="stat-l">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ num, label, right, bleed, bleedStyle }) {
  // bleed: text to render as a huge type-bleed label above the section header
  // bleedStyle: 'solid' | 'outline'
  return (
    <>
      {bleed ? (
        <div className={`section-bleed ${bleedStyle === 'outline' ? 'is-outline' : 'is-solid'}`}>
          <div className="section-bleed-text">{bleed}</div>
        </div>
      ) : null}
      <div className="section-header">
        <div className="section-label">
          <span className="section-num">{num}</span>
          <span className="section-bar" />
          <span className="section-name"><Scramble text={label} duration={900} /></span>
        </div>
        {right}
      </div>
    </>
  );
}

function Stamp({ children, style }) {
  return <div className="rk-stamp" style={style}>{children}</div>;
}

// ─────────────── FEATURED WORK ───────────────
function Featured() {
  const [active, setActive] = React.useState(0);
  const p = S.featuredProjects;
  return (
    <section className="section featured" id="work">
      <SectionHeader num="04" label="Featured Work" bleed="FEATURED · WORK" bleedStyle="outline" right={<a className="section-link" href="#grid">all projects →</a>} />
      <div className="featured-list">
        {p.map((proj, i) => (
          <ProjectRow key={proj.id} p={proj} i={i} onHover={() => setActive(i)} active={active === i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ p, i, onHover, active }) {
  const [ref, shown] = useReveal({ threshold: 0.2 });
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      ref={ref}
      onMouseEnter={onHover}
      className="proj-row"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(60px)',
        transition: 'all 1000ms cubic-bezier(.2,.7,.2,1)',
      }}>
      <div className="proj-row-index">0{i + 1}</div>
      <div className="proj-row-title">
        <div className="proj-period mono-sm">{p.period}</div>
        <h3 className="proj-name">{p.title}</h3>
        <div className="proj-tagline">{p.tagline}</div>
      </div>
      <div className="proj-row-preview">
        <div className="proj-preview-inner">
          <ProjectArtwork id={p.id} />
          <div className="proj-preview-overlay">
            <div className="mono-sm">{p.tags.slice(0, 4).join(' · ')}</div>
          </div>
        </div>
      </div>
      <div className="proj-row-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

// Abstract animated artwork per project id
function ProjectArtwork({ id }) {
  if (id === 'llm-council') {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="llm-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8b5cf6"/><stop offset="1" stopColor="#06b6d4"/>
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#llm-g)" opacity=".22"/>
        {[
          [50, 40, '#a78bfa'], [100, 30, '#22d3ee'], [150, 42, '#f97316'], [100, 80, '#f43f5e'],
        ].map(([x, y, c], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill={c} opacity=".9">
              <animate attributeName="r" values="14;17;14" dur={`${2.5 + i * .3}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={x} cy={y} r="22" fill="none" stroke={c} strokeWidth="1" opacity=".5">
              <animate attributeName="r" values="22;32;22" dur={`${3 + i * .3}s`} repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".5;0;.5" dur={`${3 + i * .3}s`} repeatCount="indefinite"/>
            </circle>
          </g>
        ))}
        <path d="M50,40 L100,30 L150,42 L100,80 Z" fill="none" stroke="white" strokeWidth=".6" opacity=".5" strokeDasharray="2 3"/>
      </svg>
    );
  }
  if (id === 'dance-pose') {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#0b0f1a"/>
        {Array.from({ length: 33 }).map((_, i) => {
          const x = 100 + Math.cos(i / 33 * Math.PI * 2) * 40 + (i % 7 - 3) * 5;
          const y = 60 + Math.sin(i / 33 * Math.PI * 2) * 28 + (i % 5 - 2) * 4;
          return <circle key={i} cx={x} cy={y} r="1.6" fill="#22d3ee">
            <animate attributeName="cy" values={`${y};${y + 4};${y}`} dur={`${1 + (i % 5) * .2}s`} repeatCount="indefinite"/>
          </circle>;
        })}
        <g stroke="#22d3ee" strokeWidth=".6" opacity=".5" fill="none">
          <line x1="80" y1="50" x2="120" y2="50"/><line x1="100" y1="50" x2="100" y2="75"/>
          <line x1="100" y1="75" x2="85" y2="95"/><line x1="100" y1="75" x2="115" y2="95"/>
        </g>
      </svg>
    );
  }
  if (id === 'arise') {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#1a1410"/>
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={20 + i * 12} y={30 + (i % 3) * 8} width="10" height={50 + (i % 4) * 10} fill="#f97316" opacity={.3 + (i % 5) * .15}>
            <animate attributeName="height" values={`${50 + (i % 4) * 10};${70 + (i % 4) * 10};${50 + (i % 4) * 10}`} dur={`${2 + (i % 3)}s`} repeatCount="indefinite"/>
          </rect>
        ))}
        <text x="100" y="105" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity=".6">96% MATCH</text>
      </svg>
    );
  }
  return <div className="artwork artwork-default" />;
}

// Abstract animated artwork for "More Projects" cards — keyed by title
function MoreProjectArt({ title, idx }) {
  // Deep Facial Verification — siamese face match grid
  if (title.includes('Facial')) {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#0d1218"/>
        {/* two face boxes with feature points */}
        {[40, 130].map((cx, k) => (
          <g key={k}>
            <rect x={cx} y="30" width="40" height="50" rx="3" fill="none" stroke="#f97316" strokeWidth="1" opacity=".7"/>
            {Array.from({ length: 8 }).map((_, i) => {
              const px = cx + 6 + (i % 4) * 9;
              const py = 38 + Math.floor(i / 4) * 18 + (i % 3) * 4;
              return <circle key={i} cx={px} cy={py} r="1.4" fill="#22d3ee">
                <animate attributeName="opacity" values=".4;1;.4" dur={`${1.5 + i * .1}s`} repeatCount="indefinite"/>
              </circle>;
            })}
          </g>
        ))}
        {/* connecting lines (siamese) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1={70 + (i % 3) * 4} y1={42 + i * 8} x2={130 + (i % 3) * 4} y2={42 + i * 8}
                stroke="#f97316" strokeWidth=".5" strokeDasharray="2 2" opacity=".6">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1.2s" repeatCount="indefinite"/>
          </line>
        ))}
        <text x="100" y="105" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity=".55">SIM 0.97</text>
      </svg>
    );
  }
  // Autonomous Disaster Response Agent — radar pulse
  if (title.includes('Disaster')) {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#1a0f08"/>
        {[20, 35, 50].map((r, i) => (
          <circle key={i} cx="100" cy="60" r={r} fill="none" stroke="#f97316" strokeWidth=".8" opacity={.6 - i * .15}>
            <animate attributeName="r" values={`${r};${r + 12};${r}`} dur={`${2 + i * .4}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values={`${.6 - i * .15};0;${.6 - i * .15}`} dur={`${2 + i * .4}s`} repeatCount="indefinite"/>
          </circle>
        ))}
        <circle cx="100" cy="60" r="3" fill="#f97316"/>
        {/* sweep line */}
        <line x1="100" y1="60" x2="160" y2="60" stroke="#22d3ee" strokeWidth="1" opacity=".7">
          <animateTransform attributeName="transform" type="rotate" from="0 100 60" to="360 100 60" dur="3s" repeatCount="indefinite"/>
        </line>
        {/* incident dots */}
        {[[70, 40], [140, 80], [120, 35]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#ef4444">
            <animate attributeName="opacity" values=".3;1;.3" dur={`${1.2 + i * .3}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </svg>
    );
  }
  // Omarchy — terminal lines
  if (title.includes('Omarchy')) {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#0a0f0a"/>
        {[
          '$ omarchy --launch',
          '> menu: [apps]',
          '> menu: [system]',
          '> menu: [power]',
          '$ _',
        ].map((txt, i) => (
          <text key={i} x="14" y={28 + i * 16} fill={i === 4 ? '#22c55e' : '#86efac'} fontSize="9" fontFamily="monospace" opacity={.5 + i * .1}>
            {txt}
            {i === 4 ? <animate attributeName="opacity" values=".3;1;.3" dur="1s" repeatCount="indefinite"/> : null}
          </text>
        ))}
        <rect x="14" y="100" width="170" height="1" fill="#22c55e" opacity=".5"/>
      </svg>
    );
  }
  // nskr.me — abstract typography portfolio
  if (title.includes('nskr')) {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#fef7e6"/>
        <text x="100" y="78" fill="#0a0a0a" fontSize="62" fontFamily="'Archivo Black', sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="-2">
          nskr
        </text>
        <text x="100" y="78" fill="none" stroke="#f97316" strokeWidth=".5" fontSize="62" fontFamily="'Archivo Black', sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="-2" opacity=".7">
          <animate attributeName="opacity" values=".3;.9;.3" dur="2.5s" repeatCount="indefinite"/>
          nskr
        </text>
        <line x1="20" y1="92" x2="180" y2="92" stroke="#0a0a0a" strokeWidth=".5"/>
        <text x="20" y="105" fill="#0a0a0a" fontSize="7" fontFamily="monospace" opacity=".7">// PERSONAL · 2025</text>
      </svg>
    );
  }
  // n8n Workflow — node graph
  if (title.includes('n8n')) {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#0f0a1a"/>
        {/* nodes */}
        {[[30, 60], [80, 35], [80, 85], [130, 60], [170, 60]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 10} y={y - 8} width="20" height="16" rx="3" fill="#a855f7" opacity=".85">
              <animate attributeName="opacity" values=".5;1;.5" dur={`${1.5 + i * .2}s`} repeatCount="indefinite"/>
            </rect>
            <circle cx={x - 10} cy={y} r="2" fill="#22d3ee"/>
            <circle cx={x + 10} cy={y} r="2" fill="#22d3ee"/>
          </g>
        ))}
        {/* connecting wires */}
        {[
          ['M 40 60 Q 60 60 70 35', 0],
          ['M 40 60 Q 60 60 70 85', .3],
          ['M 90 35 Q 110 35 120 60', .6],
          ['M 90 85 Q 110 85 120 60', .9],
          ['M 140 60 L 160 60', 1.2],
        ].map(([d, delay], i) => (
          <path key={i} d={d} fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity=".7">
            <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.2s" repeatCount="indefinite" begin={`${delay}s`}/>
          </path>
        ))}
      </svg>
    );
  }
  // RAG Playground — document chunks + retrieval
  if (title.includes('RAG')) {
    return (
      <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="120" fill="#0f1410"/>
        {/* document chunks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 20 + col * 22;
          const y = 22 + row * 24;
          const highlighted = i === 2 || i === 6 || i === 9;
          return (
            <g key={i}>
              <rect x={x} y={y} width="18" height="18" rx="2" fill={highlighted ? '#f97316' : '#22c55e'} opacity={highlighted ? .9 : .25}>
                {highlighted ? <animate attributeName="opacity" values=".4;1;.4" dur={`${1.5 + i * .1}s`} repeatCount="indefinite"/> : null}
              </rect>
              {/* lines inside chunk */}
              <line x1={x + 2} y1={y + 5} x2={x + 14} y2={y + 5} stroke="#fff" strokeWidth=".4" opacity=".5"/>
              <line x1={x + 2} y1={y + 9} x2={x + 12} y2={y + 9} stroke="#fff" strokeWidth=".4" opacity=".5"/>
              <line x1={x + 2} y1={y + 13} x2={x + 14} y2={y + 13} stroke="#fff" strokeWidth=".4" opacity=".5"/>
            </g>
          );
        })}
        {/* query node */}
        <circle cx="170" cy="60" r="8" fill="#22d3ee">
          <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="170" y="63" fill="#0f1410" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="700">Q</text>
        {/* retrieval lines */}
        {[[60, 30], [128, 54], [82, 78]].map(([x, y], i) => (
          <line key={i} x1="162" y1="60" x2={x} y2={y} stroke="#f97316" strokeWidth=".7" opacity=".7" strokeDasharray="2 2">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1s" repeatCount="indefinite"/>
          </line>
        ))}
      </svg>
    );
  }
  // fallback — animated gradient with glyph (current behavior)
  return (
    <svg className="artwork" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`fb-${idx}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`oklch(60% 0.18 ${(idx * 60) % 360})`}/>
          <stop offset="1" stopColor={`oklch(50% 0.2 ${(idx * 60 + 120) % 360})`}/>
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill={`url(#fb-${idx})`}/>
      <text x="100" y="78" fill="#fff" fontSize="56" fontFamily="'Comic Neue', cursive" textAnchor="middle" opacity=".75">{title.charAt(0)}</text>
    </svg>
  );
}

// ─────────────── ALL PROJECTS GRID ───────────────
function AllProjects() {
  return (
    <section className="section grid-sec" id="grid">
      <SectionHeader num="05" label="More Projects" bleed="MORE · MORE · MORE" bleedStyle="solid" right={<span className="mono-sm muted">{S.otherProjects.length + S.featuredProjects.length} total</span>} />
      <div className="proj-grid">
        {S.otherProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60} className="proj-card-wrap">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="proj-card">
              <div className="proj-card-art proj-card-art-svg">
                <MoreProjectArt title={p.title} idx={i} />
              </div>
              <div className="proj-card-body">
                <div className="mono-sm muted">{p.period}</div>
                <div className="proj-card-title">{p.title}</div>
                <div className="proj-card-tag">{p.tagline}</div>
                <div className="proj-card-chips">
                  {p.tags.slice(0, 3).map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─────────────── EXPERIENCE ───────────────
function CompanyLogo({ src, name }) {
  const [ok, setOk] = React.useState(true);
  const initials = name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  if (!src || !ok) {
    return <div className="exp-logo exp-logo-fallback" aria-label={name}>{initials}</div>;
  }
  return <img className="exp-logo" src={src} alt={`${name} logo`} onError={() => setOk(false)} />;
}

function Experience() {
  return (
    <section className="section exp" id="experience">
      <SectionHeader num="03" label="Experience" bleed="EXPERIENCE" bleedStyle="outline" />
      <div className="exp-list">
        {S.experience.map((e, i) => {
          const hasRoles = Array.isArray(e.roles) && e.roles.length > 0;
          return (
            <Reveal key={e.company + i} delay={i * 120} className="exp-item">
              <div className="exp-period mono-sm">{e.period}</div>
              <div className="exp-line" />
              <div className="exp-body">
                <div className="exp-head">
                  <CompanyLogo src={e.logo} name={e.company} />
                  <div className="exp-head-text">
                    <h3 className="exp-co-name">{e.company}</h3>
                    <div className="exp-meta mono-sm">
                      {e.type}{e.location ? ` · ${e.location}` : ''}
                    </div>
                  </div>
                </div>
                {hasRoles ? (
                  <ul className="exp-roles">
                    {e.roles.map((r, j) => (
                      <li key={j} className="exp-role-item">
                        <span className="exp-role-dot" />
                        <div className="exp-role-body">
                          <h4 className="exp-role">{r.role}</h4>
                          <div className="exp-role-period mono-sm">{r.period}</div>
                          {r.highlights && r.highlights.length > 0 && (
                            <ul className="exp-hl">
                              {r.highlights.slice(0, 5).map((h, k) => <li key={k}>{h}</li>)}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <h4 className="exp-role">{e.role}</h4>
                    <ul className="exp-hl">
                      {(e.highlights || []).slice(0, 5).map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </>
                )}
                {e.tags && e.tags.length > 0 && (
                  <div className="exp-chips">
                    {e.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────── SKILLS ───────────────
function Skills() {
  const groups = Object.entries(S.skills);
  return (
    <section className="section skills" id="skills">
      <Stamp style={{ top: '160px', right: '5%', transform: 'rotate(7deg)' }}>// production-tested</Stamp>
      <SectionHeader num="02" label="Stack" bleed="STACK · STACK" bleedStyle="solid" />
      <div className="skills-grid">
        {groups.map(([group, items], i) => (
          <Reveal key={group} delay={i * 80} className="skill-group">
            <div className="skill-group-title">{group}</div>
            <div className="skill-items">
              {items.map(it => (
                <span key={it} className="skill-pill">{it}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─────────────── WRITING ───────────────
function Writing() {
  return (
    <section className="section writing" id="writing">
      <SectionHeader num="06" label="Writing" bleed="WRITING · NOTES" bleedStyle="outline" right={<a className="section-link" href="https://www.nskr.dev/blog" target="_blank">all posts →</a>} />
      <div className="writing-list">
        {S.posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <a href="#" className="post">
              {p.isNew && <span className="new-badge">NEW</span>}
              <div className="post-date mono-sm">{p.date}</div>
              <div className="post-title">{p.title}</div>
              <div className="post-excerpt">{p.excerpt}</div>
              <div className="post-more mono-sm">read →</div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─────────────── EDUCATION + CERTS ───────────────
function EduCerts() {
  return (
    <section className="section edu">
      <SectionHeader num="07" label="Education & Certs" bleed="EDU · CERTS" bleedStyle="solid" />
      <div className="edu-grid">
        <div>
          <div className="subhead">Education</div>
          {S.education.map((e, i) => (
            <Reveal key={e.school} delay={i * 80} className="edu-item">
              <div className="mono-sm muted">{e.period}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-note">{e.note}</div>
            </Reveal>
          ))}
        </div>
        <div>
          <div className="subhead">Certifications</div>
          {S.certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="edu-item">
              <div className="mono-sm muted">{c.date}</div>
              <div className="edu-degree">{c.title}</div>
              <div className="edu-school">{c.issuer}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────── CONTACT ───────────────
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div>
          <div className="section-label">
            <span className="section-num">08</span>
            <span className="section-bar" />
            <span className="section-name">Contact</span>
          </div>
          <h2 className="h-huge">
            <FadeWords text="Got a hard" stagger={80}/>
            <br/>
            <FadeWords text="problem?" delay={200} stagger={80} style={{ fontStyle: 'italic', color: 'var(--accent)' }} />
            <br/>
            <FadeWords text="Let's build it." delay={400} stagger={80} />
          </h2>
          <a href={`mailto:${S.email}`} className="contact-email">
            <Scramble text={S.email} duration={1400} /> <span className="arr">→</span>
          </a>
        </div>
        <div className="contact-right">
          <div className="subhead">Elsewhere</div>
          {S.socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                <span>{s.label}</span>
                <span className="social-url mono-sm">{s.url.replace('https://', '').replace('mailto:', '')}</span>
                <span className="arr">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="mono-sm">© 2026 · {S.name}</div>
        <div className="mono-sm muted">Built with care · coffee · ◆</div>
      </footer>
    </section>
  );
}

// ─────────────── HERO V6 — Vortex / Viktor Oddy style ───────────────
function HeroV6() {
  // marquee thumbs — pulled from your project tags / featured projects
  const PROJECTS = S.featuredProjects.concat(S.otherProjects.slice(0, 5));
  const THUMBS = PROJECTS.map((p, i) => ({
    title: p.title,
    tags: (p.tags || []).slice(0, 3).join(' · '),
    hue: [22, 260, 188, 12, 320, 80, 200, 40][i % 8],
    glyph: ['◆','◇','○','●','▲','▼','■','□'][i % 8],
  }));
  const row = [...THUMBS, ...THUMBS];

  // parallax for the social/avatar block
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="hero-v6" id="top">
      <div className="v6-inner">
        {/* Logo / wordmark */}
        <div className="v6-fade" style={{ animationDelay: '0.1s' }}>
          <div className="v6-logo">Narra Reddy</div>
        </div>

        {/* tagline (mono) */}
        <div className="v6-fade" style={{ animationDelay: '0.2s' }}>
          <div className="v6-tagline">The studio practice of NSKR</div>
        </div>

        {/* main heading — sans + serif italic mix */}
        <h1 className="v6-heading v6-fade" style={{ animationDelay: '0.3s' }}>
          <span className="v6-line">Build the <span className="v6-serif">next wave</span>,</span>
          <span className="v6-line">the <span className="v6-serif">agentic way.</span></span>
        </h1>

        {/* Body copy — three short paragraphs */}
        <div className="v6-body v6-fade" style={{ animationDelay: '0.4s' }}>
          <p>I spent the last two years inside production AI workflows — from real‑time pose detection to e‑commerce automations that saved teams 15+ hours every week.</p>
          <p>The studio is deliberately small. I lead the engineering on every project, backed by the open‑source tooling I trust: n8n, LangChain, Python, and a pile of MCP tools.</p>
          <p>Projects start at a focused two‑week sprint.</p>
        </div>

        {/* CTA pair */}
        <div className="v6-ctas v6-fade" style={{ animationDelay: '0.5s' }}>
          <a href={`mailto:${S.email}`} className="v6-btn v6-btn-primary">Start a chat</a>
          <a href="#work" className="v6-btn v6-btn-secondary">View projects</a>
        </div>

        {/* tiny availability row */}
        <div className="v6-avail v6-fade" style={{ animationDelay: '0.6s' }}>
          <span className="v6-dot" />
          <span>Open for projects · {S.location}</span>
        </div>
      </div>

      {/* infinite marquee strip */}
      <div className="v6-marquee">
        <div className="v6-marquee-track">
          {row.map((t, i) => (
            <div key={i} className="v6-thumb" style={{ '--hue': t.hue }}>
              <div className="v6-thumb-bg">
                <span className="v6-thumb-glyph">{t.glyph}</span>
                <span className="v6-thumb-grid" />
              </div>
              <div className="v6-thumb-meta">
                <span className="v6-thumb-title">{t.title}</span>
                <span className="v6-thumb-tags">{t.tags}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom-left mini stat block */}
      <div
        className="v6-stat"
        style={{ transform: `translateY(${Math.min(scrollY * 0.2, 60)}px)` }}
      >
        <div className="v6-stat-num">7+</div>
        <div className="v6-stat-label">years writing<br/>production code</div>
      </div>
    </section>
  );
}

Object.assign(window, { NavBar, Hero, HeroV6, HeroV7, Marquee, About, Featured, AllProjects, Experience, Skills, Writing, EduCerts, Contact });

// ─────────────── HERO V7 — Olivia/Vortex bold orange ───────────────
function HeroV7() {
  const SKILLS = [
    'n8n', 'LangChain', 'Python', 'RAG', 'MCP', 'FastAPI',
    'PyTorch', 'TensorFlow', 'Docker', 'AWS', 'LangGraph', 'OpenCV',
    'Redis', 'PostgreSQL', 'TypeScript', 'React', 'Bedrock', 'Ollama',
  ];
  const row = [...SKILLS, ...SKILLS];

  const [boost, setBoost] = React.useState(false);
  const [videoOk, setVideoOk] = React.useState(true);

  // staged intro: 0=initial, 1=headline, 2=watermark, 3=portrait, 4=ambient (mono blocks)
  const [stage, setStage] = React.useState(0);
  React.useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 250);   // headline rises
    const t2 = setTimeout(() => setStage(2), 1050);  // watermark blooms
    const t3 = setTimeout(() => setStage(3), 1850);  // portrait slides in
    const t4 = setTimeout(() => setStage(4), 2350);  // mono blocks + marquee
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <section className="hero-v7" id="top" data-stage={stage}>
      <div className="v7-topbar">
        <div className="v7-brand">◆ NSKR</div>
        <nav className="v7-nav">
          <a href="#work">PROJECTS</a>
          <a href="#writing">BLOG</a>
          <a href="#about">ABOUT</a>
          <a href={S.resume} target="_blank" rel="noreferrer">RESUME</a>
        </nav>
        <a href={`mailto:${S.email}`} className="v7-hire">
          // HIRE ME <span className="v7-hire-circle">↗</span>
        </a>
      </div>

      <div className="v7-watermark" aria-hidden="true">
        <span className="v7-watermark-word">REDDY</span>
      </div>

      <div className="v7-portrait">
        <img className="v7-avatar" src="avatar.png?v=2" alt="Reddy" />
      </div>

      <h1 className="v7-headline" aria-label="AI Engineer">
        <span className="v7-headline-line">AI ENGINEER</span>
      </h1>

      <div className="v7-tagline">
        <div>// AUTOMATIONS THAT SHIP</div>
        <div className="v7-tagline-indent">WHILE YOU SLEEP</div>
      </div>

      <div className="v7-bio">
        <div>// I'M REDDY — AN AI AUTOMATION ENGINEER</div>
        <div className="v7-bio-indent">BUILDING AGENTIC SYSTEMS WITH n8n,</div>
        <div>LANGCHAIN, PYTHON · OPEN TO PROJECTS.</div>
      </div>

      <div
        className={`v7-marquee ${boost ? 'boost' : ''}`}
        onMouseEnter={() => setBoost(true)}
        onMouseLeave={() => setBoost(false)}
      >
        <div className="v7-marquee-track">
          {row.map((s, i) => (
            <span key={i} className="v7-marquee-item">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  // Stylized silhouette — head, headphones/glasses, shoulders
  return (
    <svg className="v7-silhouette" viewBox="0 0 600 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="v7sg" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity=".22" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* shoulders + body */}
      <path
        d="M 60 800 L 60 660 Q 90 580 180 540 Q 230 520 240 480 Q 245 460 240 440 L 360 440 Q 355 460 360 480 Q 370 520 420 540 Q 510 580 540 660 L 540 800 Z"
        fill="rgba(0,0,0,.18)"
      />
      {/* neck */}
      <path d="M 250 470 L 250 410 L 350 410 L 350 470 Q 320 480 300 480 Q 280 480 250 470 Z" fill="rgba(0,0,0,.22)" />
      {/* head */}
      <ellipse cx="300" cy="290" rx="120" ry="150" fill="rgba(0,0,0,.25)" />
      {/* hair top */}
      <path d="M 180 240 Q 200 140 300 130 Q 400 140 420 240 Q 410 200 380 195 Q 340 185 300 195 Q 260 185 220 195 Q 190 200 180 240 Z" fill="rgba(0,0,0,.32)" />
      {/* glasses bar */}
      <rect x="195" y="280" width="210" height="42" rx="20" fill="rgba(255,255,255,.55)" />
      <rect x="200" y="285" width="92" height="32" rx="14" fill="rgba(255,255,255,.85)" />
      <rect x="308" y="285" width="92" height="32" rx="14" fill="rgba(255,255,255,.85)" />
      {/* highlight */}
      <ellipse cx="300" cy="280" rx="220" ry="280" fill="url(#v7sg)" />
    </svg>
  );
}
