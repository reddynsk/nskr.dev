// Four hero variations for the AI engineer portfolio.
// Each is a self-contained wireframe "screen" at 1200x760 (desktop).
// Placeholder video/animation is represented with striped boxes + annotations
// describing the intended motion.

// ─────────────────────────────────────────────────────────────
// V1 — FULL-BLEED VIDEO HERO (Cinematic)
// Large video fills viewport, text overlay, scroll-scrub reveals next section
// ─────────────────────────────────────────────────────────────
function HeroV1() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: WF.paper, overflow: 'hidden' }}>
      <SNav />
      {/* Full-bleed video placeholder */}
      <div style={{ position: 'absolute', inset: '70px 32px 32px' }}>
        <div style={{
          width: '100%', height: '100%',
          border: `1.5px solid ${WF.ink}`,
          borderRadius: 4,
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(0,0,0,.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(0,0,0,.06) 0%, transparent 50%),
            repeating-linear-gradient(135deg, transparent 0 14px, rgba(0,0,0,.04) 14px 15px)
          `,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* faux abstract shapes to imply generative AI visuals */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="30" cy="45" r="18" fill="none" stroke={WF.ink2} strokeWidth=".2" strokeDasharray=".5 .8" />
            <circle cx="32" cy="48" r="22" fill="none" stroke={WF.ink3} strokeWidth=".15" strokeDasharray=".3 .5" />
            <circle cx="28" cy="42" r="26" fill="none" stroke={WF.ink3} strokeWidth=".1" />
            <path d="M 10 70 Q 30 50, 50 65 T 90 55" fill="none" stroke={WF.ink2} strokeWidth=".2" />
            <path d="M 5 75 Q 35 55, 55 70 T 95 60" fill="none" stroke={WF.ink3} strokeWidth=".15" />
          </svg>

          {/* Text overlay, left-aligned, big type */}
          <div style={{ position: 'absolute', left: 50, bottom: 80, maxWidth: 640 }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2, letterSpacing: '.15em', marginBottom: 16 }}>
              AI ENGINEER · 2019—NOW
            </div>
            <div style={{ fontFamily: 'Kalam, cursive', fontSize: 62, fontWeight: 700, lineHeight: 1, color: WF.ink, letterSpacing: '-.02em' }}>
              Teaching machines<br/>to <span style={{ color: WF.accent, fontStyle: 'italic' }}>think</span> clearly.
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ border: `1.5px solid ${WF.ink}`, padding: '8px 14px', borderRadius: 3, fontFamily: 'Kalam, cursive', fontSize: 14 }}>see the work ↓</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2 }}>/ 24 projects</div>
            </div>
          </div>

          {/* Corner meta */}
          <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, textAlign: 'right', lineHeight: 1.6 }}>
            REEL · 2026<br/>00:00 / 01:24
          </div>
          <div style={{ position: 'absolute', bottom: 20, right: 24, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: WF.accent }} />
            LIVE · AUTOPLAY · MUTED
          </div>
        </div>
      </div>

      {/* Annotation callouts */}
      <SAnno style={{ position: 'absolute', top: 84, left: 380, transform: 'rotate(-3deg)' }}>
        ↓ full-bleed generative video loop, 6s seamless
      </SAnno>
      <SAnno style={{ position: 'absolute', bottom: 180, right: 40, transform: 'rotate(2deg)', textAlign: 'right' }}>
        text scrambles on load →<br/>letters settle word-by-word
      </SAnno>
      <SAnno style={{ position: 'absolute', bottom: 40, left: 50, color: WF.ink2, transform: 'rotate(-1deg)' }}>
        scroll scrubs video timeline ↓
      </SAnno>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 — SPLIT HERO (Video right, content left)
// Smaller confined video, more editorial feel, bold type on the left
// ─────────────────────────────────────────────────────────────
function HeroV2() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: WF.paper, overflow: 'hidden' }}>
      <SNav variant="dots" />

      <div style={{ position: 'absolute', inset: '90px 40px 40px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40 }}>
        {/* LEFT: oversized editorial type */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 0' }}>
          <div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 20 }}>
              ◆ PORTFOLIO / 2026
            </div>
            <div style={{ fontFamily: 'Kalam, cursive', fontWeight: 700, fontSize: 78, lineHeight: .95, color: WF.ink, letterSpacing: '-.03em' }}>
              Nikhil<br/>
              <span style={{ fontStyle: 'italic', color: WF.ink2 }}>Sakaria</span>
            </div>
            <div style={{ marginTop: 24, fontFamily: 'Kalam, cursive', fontSize: 18, lineHeight: 1.4, color: WF.ink2, maxWidth: 380 }}>
              AI engineer building systems that reason, retrieve, and reply — from LLM infra to applied ML.
            </div>
          </div>
          <div>
            <SLines count={1} widths={[40]} style={{ marginBottom: 14 }} />
            <div style={{ display: 'flex', gap: 14, fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2 }}>
              <span>SF · REMOTE</span><span>·</span><span>EST 2019</span><span>·</span><span>v4.0</span>
            </div>
          </div>
        </div>

        {/* RIGHT: video panel with scrub bar */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            flex: 1,
            border: `1.5px solid ${WF.ink}`,
            borderRadius: 4,
            background: `repeating-linear-gradient(45deg, transparent 0 14px, rgba(0,0,0,.05) 14px 15px)`,
            position: 'relative', overflow: 'hidden',
          }}>
            {/* fake neural-net lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 200" preserveAspectRatio="none">
              {[40,80,120,160].map(x => [40,80,120,160].map(y => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill={WF.ink2} />
              )))}
              {[40,80,120,160].map(x1 => [40,80,120,160].map(y1 => [40,80,120,160].map(y2 => (
                <line key={`${x1}-${y1}-${y2}`} x1={x1} y1={y1} x2={x1+40} y2={y2} stroke={WF.ink3} strokeWidth=".3" />
              )))).flat()}
            </svg>
            <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'Space Mono, monospace', fontSize: 9, color: WF.ink2, background: WF.paper, padding: '3px 6px' }}>
              NEURAL_VIS.MP4
            </div>
            <div style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'Space Mono, monospace', fontSize: 9, color: WF.ink2, background: WF.paper, padding: '3px 6px' }}>
              ▶ 0:00 · 1:24
            </div>
          </div>
          {/* scrub bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 10, height: 10, border: `1.5px solid ${WF.ink}`, borderRadius: '50%' }} />
            <div style={{ flex: 1, height: 2, background: WF.ink3, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '22%', background: WF.accent }} />
              <div style={{ position: 'absolute', left: '22%', top: '50%', transform: 'translate(-50%,-50%)', width: 10, height: 10, borderRadius: '50%', background: WF.accent }} />
            </div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2 }}>01/24</div>
          </div>
        </div>
      </div>

      <SAnno style={{ position: 'absolute', top: 260, left: 540, transform: 'rotate(-4deg)' }}>
        ← editorial type, scramble<br/>on enter; italic word morphs
      </SAnno>
      <SAnno style={{ position: 'absolute', top: 130, right: 60, color: WF.ink2, transform: 'rotate(3deg)' }}>
        framed video, scrub bar ↓<br/>controls featured projects
      </SAnno>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V3 — TERMINAL HERO (Playful code-aesthetic)
// Chat/terminal interface with typed text; video runs as ASCII in background
// ─────────────────────────────────────────────────────────────
function HeroV3() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: WF.paper, overflow: 'hidden' }}>
      {/* top status bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '14px 24px', display: 'flex', justifyContent: 'space-between', fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, borderBottom: `1px solid ${WF.line}` }}>
        <span>~ / portfolio / v4 — zsh</span>
        <span style={{ display: 'flex', gap: 18 }}>
          <span>work</span><span>about</span><span>writing</span><span>contact</span>
        </span>
        <span>●●●</span>
      </div>

      {/* ASCII video background */}
      <div style={{ position: 'absolute', inset: '46px 0 0', fontFamily: 'Space Mono, monospace', fontSize: 10, lineHeight: 1.1, color: WF.ink3, padding: 24, whiteSpace: 'pre', opacity: .55, pointerEvents: 'none', overflow: 'hidden' }}>
{`· · · · · ∘ ∘ ∘ ○ ○ ○ ● ● ● ○ ○ ∘ ∘ · · · · · · · · · · ·
· · · ∘ ∘ ○ ○ ● ● ◉ ◉ ◎ ◉ ◉ ● ● ○ ○ ∘ · · · · · · · · · ·
· ∘ ○ ○ ● ◉ ◎ ╱╲╱╲╱╲╱╲ ◎ ◉ ● ○ ○ ∘ · · · · · · · · · · ·
∘ ○ ● ◉ ◎ ╱ ░▒▓█▓▒░ ╲ ◎ ◉ ● ○ ∘ · · · · · · · · · · · · ·
○ ● ◎ ╱ ░▒▓███▓▒░ ╲ ◎ ● ○ ∘ · · · · · · · · · · · · · · ·
● ◎ ░▒▓███████▓▒░ ◎ ● ∘ · · · · · · · · · · · · · · · · ·
◉ ░▒▓██████████▓▒░ ◉ · · · · · · · · · · · · · · · · · · ·
● ◎ ░▒▓███████▓▒░ ◎ ● ∘ · · · · · · · · · · · · · · · · ·
○ ● ◎ ╲ ░▒▓███▓▒░ ╱ ◎ ● ○ ∘ · · · · · · · · · · · · · · ·
∘ ○ ● ◉ ◎ ╲ ░▒▓█▓▒░ ╱ ◎ ◉ ● ○ ∘ · · · · · · · · · · · · ·`}
      </div>

      {/* Terminal card */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 680, border: `1.5px solid ${WF.ink}`, borderRadius: 4, background: WF.paper, boxShadow: '6px 6px 0 rgba(0,0,0,.08)' }}>
        <div style={{ padding: '8px 12px', borderBottom: `1px solid ${WF.line}`, display: 'flex', alignItems: 'center', gap: 6 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', border: `1px solid ${WF.ink2}` }} />)}
          <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2 }}>nikhil@dev — ~/portfolio</div>
        </div>
        <div style={{ padding: 22, fontFamily: 'Space Mono, monospace', fontSize: 13, color: WF.ink, lineHeight: 1.7 }}>
          <div style={{ color: WF.ink2 }}>$ whoami</div>
          <div>nikhil sakaria · ai engineer</div>
          <div style={{ color: WF.ink2, marginTop: 6 }}>$ cat intro.md</div>
          <div style={{ fontFamily: 'Kalam, cursive', fontSize: 22, lineHeight: 1.3, margin: '10px 0', color: WF.ink }}>
            I build <span style={{ background: WF.accent, color: WF.paper, padding: '0 6px' }}>retrieval</span>, <span style={{ textDecoration: 'underline', textDecorationStyle: 'wavy' }}>reasoning</span>, and <span style={{ fontStyle: 'italic' }}>realtime</span> ML systems.
          </div>
          <div style={{ color: WF.ink2, marginTop: 14 }}>$ ls projects/ --featured</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, marginTop: 6 }}>
            {['llm-infra/','rag-engine/','vision-pipe/','edge-ml/','chat-sdk/','dataset-ops/'].map(p => (
              <div key={p} style={{ color: WF.accent }}>{p}</div>
            ))}
          </div>
          <div style={{ color: WF.ink2, marginTop: 14 }}>$ _<span style={{ display: 'inline-block', width: 8, height: 14, background: WF.ink, marginLeft: 2, verticalAlign: 'middle' }} /></div>
        </div>
      </div>

      <SAnno style={{ position: 'absolute', top: 80, left: 40, transform: 'rotate(-2deg)' }}>
        ← ASCII-art video loops<br/>in background @ .5 opacity
      </SAnno>
      <SAnno style={{ position: 'absolute', bottom: 60, right: 60, transform: 'rotate(2deg)', textAlign: 'right', color: WF.ink2 }}>
        typed output animates line-by-line<br/>cursor blinks, bash-style
      </SAnno>
      <SAnno style={{ position: 'absolute', top: 230, right: 40, transform: 'rotate(-3deg)', color: WF.accent }}>
        hover a project<br/>→ inline preview pops ↓
      </SAnno>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V4 — MASKED TYPOGRAPHY HERO (Experimental)
// Huge text acts as a window into the video; video only shows through the letters
// ─────────────────────────────────────────────────────────────
function HeroV4() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: WF.paper, overflow: 'hidden' }}>
      <SNav variant="vertical" />

      {/* Small meta line top-right */}
      <div style={{ position: 'absolute', top: 28, right: 32, display: 'flex', gap: 18, fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2 }}>
        <span>v4.2026</span>
        <span>◆</span>
        <span>available for contracts</span>
      </div>

      {/* Massive masked headline */}
      <div style={{ position: 'absolute', left: 100, right: 40, top: 120, bottom: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'Kalam, cursive', fontWeight: 700, fontSize: 180, lineHeight: .85, letterSpacing: '-.04em', color: 'transparent', WebkitTextStroke: `1.5px ${WF.ink}`, position: 'relative' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* simulate a letter filled with video */}
            <span style={{
              background: `repeating-linear-gradient(135deg, ${WF.ink} 0 2px, ${WF.ink2} 2px 5px, transparent 5px 8px, ${WF.ink3} 8px 11px)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: WF.ink,
              WebkitTextStroke: '0',
            }}>AI</span>
          </div>
          <br/>
          <span style={{ fontStyle: 'italic' }}>engineer</span>
          <br/>
          <span style={{ color: WF.accent, WebkitTextStroke: '0' }}>/</span>
          <span> builder</span>
        </div>
      </div>

      {/* bottom info strip */}
      <div style={{ position: 'absolute', bottom: 32, left: 100, right: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ maxWidth: 300, fontFamily: 'Kalam, cursive', fontSize: 14, lineHeight: 1.4, color: WF.ink2 }}>
          Seven years shipping ML into production. Currently thinking about agents that do things, not just say them.
        </div>
        <div style={{ display: 'flex', gap: 22, fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, letterSpacing: '.1em' }}>
          <div>
            <div style={{ color: WF.ink }}>24</div>
            <div>PROJECTS</div>
          </div>
          <div>
            <div style={{ color: WF.ink }}>4</div>
            <div>PAPERS</div>
          </div>
          <div>
            <div style={{ color: WF.ink }}>18</div>
            <div>TALKS</div>
          </div>
          <div>
            <div style={{ color: WF.accent }}>↓</div>
            <div>SCROLL</div>
          </div>
        </div>
      </div>

      <SAnno style={{ position: 'absolute', top: 160, right: 60, transform: 'rotate(4deg)' }}>
        video plays INSIDE<br/>the letters only →
      </SAnno>
      <SAnno style={{ position: 'absolute', bottom: 110, left: 500, transform: 'rotate(-3deg)', color: WF.ink2 }}>
        parallax: text stays,<br/>video scrubs on scroll
      </SAnno>
    </div>
  );
}

Object.assign(window, { HeroV1, HeroV2, HeroV3, HeroV4 });
