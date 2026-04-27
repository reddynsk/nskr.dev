// Shared sections wireframed — About, Featured, Grid, Timeline, Skills, Contact
// Each is a vertical module used after the hero.

function SectionAbout() {
  return (
    <div style={{ padding: '80px 60px', position: 'relative' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 14 }}>◆ 01 / ABOUT</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: 'Kalam, cursive', fontSize: 42, lineHeight: 1.15, fontWeight: 700, color: WF.ink, letterSpacing: '-.02em' }}>
            Engineer by trade, <span style={{ fontStyle: 'italic', color: WF.accent }}>tinkerer</span> by habit. I build the boring infra that makes the <span style={{ textDecoration: 'underline wavy' }}>magic</span> work.
          </div>
          <SLines count={4} widths={[96, 92, 88, 60]} style={{ marginTop: 28 }} />
          <SLines count={3} widths={[94, 80, 70]} style={{ marginTop: 18 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SPlaceholder label="portrait / b&w" tall />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontFamily: 'Space Mono, monospace', fontSize: 10 }}>
            {[['based', 'sf, ca'], ['prev', 'anthropic / stripe'], ['study', 'stanford cs'], ['stack', 'py · ts · cuda']].map(([k, v]) => (
              <div key={k} style={{ border: `1px solid ${WF.ink3}`, padding: '8px 10px' }}>
                <div style={{ color: WF.ink2 }}>{k}</div>
                <div style={{ color: WF.ink, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SAnno style={{ position: 'absolute', top: 70, right: 80, transform: 'rotate(3deg)' }}>lines fade in on scroll ↓</SAnno>
    </div>
  );
}

function SectionFeatured() {
  const projects = [
    { tag: 'LLM INFRA', title: 'Concord', meta: '2025 · retrieval engine · rust' },
    { tag: 'APPLIED ML', title: 'Helix', meta: '2024 · agent framework · python' },
    { tag: 'PRODUCT', title: 'Mira', meta: '2023 · voice copilot · ts + go' },
  ];
  return (
    <div style={{ padding: '80px 60px', background: WF.paper2, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
        <div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 14 }}>◆ 02 / FEATURED</div>
          <div style={{ fontFamily: 'Kalam, cursive', fontSize: 42, fontWeight: 700, color: WF.ink, letterSpacing: '-.02em' }}>Selected work</div>
        </div>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2 }}>03 featured / 24 total →</div>
      </div>

      {projects.map((p, i) => (
        <div key={p.title} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1.4fr 80px', gap: 32, padding: '32px 0', borderTop: `1px solid ${WF.ink3}`, alignItems: 'center' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 14, color: WF.ink2 }}>0{i + 1}</div>
          <div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.accent, letterSpacing: '.15em', marginBottom: 6 }}>{p.tag}</div>
            <div style={{ fontFamily: 'Kalam, cursive', fontSize: 36, fontWeight: 700, color: WF.ink, lineHeight: 1 }}>{p.title}</div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, marginTop: 6 }}>{p.meta}</div>
          </div>
          <SPlaceholder label={`${p.title.toLowerCase()} / video loop`} style={{ height: 140 }} />
          <div style={{ fontFamily: 'Kalam, cursive', fontSize: 20, color: WF.ink2, textAlign: 'right' }}>→</div>
        </div>
      ))}
      <div style={{ borderTop: `1px solid ${WF.ink3}` }} />
      <SAnno style={{ position: 'absolute', bottom: 60, right: 80, transform: 'rotate(-2deg)' }}>row hover → video<br/>plays inline, title shifts</SAnno>
    </div>
  );
}

function SectionGrid() {
  return (
    <div style={{ padding: '80px 60px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 14 }}>◆ 03 / ALL WORK</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
        <div style={{ fontFamily: 'Kalam, cursive', fontSize: 38, fontWeight: 700 }}>Everything else</div>
        <div style={{ display: 'flex', gap: 8, fontFamily: 'Space Mono, monospace', fontSize: 10 }}>
          {['all', 'llm', 'vision', 'infra', 'web'].map((t, i) => (
            <div key={t} style={{ border: `1px solid ${i === 0 ? WF.ink : WF.ink3}`, padding: '5px 10px', color: i === 0 ? WF.ink : WF.ink2, background: i === 0 ? WF.paper2 : 'transparent' }}>{t}</div>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <SPlaceholder label={`project_${i + 4}.mp4`} style={{ height: 160 }} />
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'Kalam, cursive', fontSize: 20, fontWeight: 700 }}>Project {i + 4}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: WF.ink2 }}>2025</div>
            </div>
            <SLines count={1} widths={[75]} style={{ marginTop: 6 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTimeline() {
  const items = [
    { year: '2025', role: 'Staff ML Engineer', where: 'Anthropic', note: 'retrieval, evals, infra' },
    { year: '2023', role: 'Senior ML Eng', where: 'Stripe', note: 'fraud + risk modeling' },
    { year: '2021', role: 'ML Engineer', where: 'Scale AI', note: 'data pipelines, labeling tools' },
    { year: '2019', role: 'SWE Intern', where: 'Google Brain', note: 'research infra' },
  ];
  return (
    <div style={{ padding: '80px 60px', background: WF.paper2, position: 'relative' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 14 }}>◆ 04 / TIMELINE</div>
      <div style={{ fontFamily: 'Kalam, cursive', fontSize: 42, fontWeight: 700, marginBottom: 40 }}>The journey, condensed</div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 80, top: 0, bottom: 0, width: 1, background: WF.ink3 }} />
        {items.map((it, i) => (
          <div key={it.year} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 30, padding: '22px 0', position: 'relative' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 14, color: WF.ink }}>{it.year}</div>
            <div style={{ position: 'absolute', left: 75, top: 28, width: 11, height: 11, borderRadius: '50%', background: WF.paper2, border: `1.5px solid ${i === 0 ? WF.accent : WF.ink}` }} />
            <div>
              <div style={{ fontFamily: 'Kalam, cursive', fontSize: 24, fontWeight: 700 }}>{it.role}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, marginTop: 2 }}>@ {it.where}</div>
            </div>
            <div style={{ fontFamily: 'Kalam, cursive', fontSize: 16, color: WF.ink2 }}>{it.note}</div>
          </div>
        ))}
      </div>
      <SAnno style={{ position: 'absolute', top: 70, right: 80, transform: 'rotate(-2deg)' }}>dot pulses → current<br/>line draws as you scroll</SAnno>
    </div>
  );
}

function SectionSkills() {
  const groups = [
    { label: 'ml / ai', items: ['pytorch', 'transformers', 'RAG', 'evals', 'CUDA'] },
    { label: 'backend', items: ['rust', 'go', 'python', 'postgres', 'kafka'] },
    { label: 'infra', items: ['k8s', 'terraform', 'aws', 'gcp', 'ray'] },
    { label: 'tools', items: ['ts', 'react', 'figma', 'linear', 'vim'] },
  ];
  return (
    <div style={{ padding: '80px 60px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 14 }}>◆ 05 / STACK</div>
      <div style={{ fontFamily: 'Kalam, cursive', fontSize: 42, fontWeight: 700, marginBottom: 32 }}>What I reach for</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {groups.map(g => (
          <div key={g.label}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2, letterSpacing: '.15em', borderBottom: `1px solid ${WF.ink3}`, paddingBottom: 8, marginBottom: 12 }}>{g.label.toUpperCase()}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {g.items.map(it => (
                <div key={it} style={{ fontFamily: 'Kalam, cursive', fontSize: 18, color: WF.ink, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: WF.ink3 }} />{it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionContact() {
  return (
    <div style={{ padding: '100px 60px', background: WF.ink, color: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.accent, letterSpacing: '.2em', marginBottom: 14 }}>◆ 06 / CONTACT</div>
      <div style={{ fontFamily: 'Kalam, cursive', fontWeight: 700, fontSize: 90, lineHeight: .95, letterSpacing: '-.03em', color: WF.paper }}>
        Got a hard<br/>
        <span style={{ fontStyle: 'italic', color: WF.accent }}>problem?</span><br/>
        Let&apos;s talk.
      </div>
      <div style={{ display: 'flex', gap: 40, marginTop: 48, alignItems: 'baseline' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 14, color: WF.paper, borderBottom: `1.5px solid ${WF.accent}`, paddingBottom: 4 }}>hello@ns.dev →</div>
        <div style={{ display: 'flex', gap: 18, fontFamily: 'Kalam, cursive', fontSize: 16, color: WF.paper2 }}>
          <span>twitter</span><span>github</span><span>linkedin</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 24, right: 32, fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.paper2 }}>
        © 2026 · nikhil sakaria · built with ♥ and coffee
      </div>
      <SAnno style={{ position: 'absolute', top: 100, right: 100, color: WF.accent, transform: 'rotate(4deg)' }}>
        email link hover:<br/>text scrambles →
      </SAnno>
    </div>
  );
}

// Stitch together a long scrolling page for the focus view
function FullPage({ hero: Hero }) {
  return (
    <div style={{ width: '100%', background: WF.paper, color: WF.ink }}>
      <div style={{ width: '100%', height: 760, position: 'relative' }}><Hero /></div>
      <SectionAbout />
      <SectionFeatured />
      <SectionGrid />
      <SectionTimeline />
      <SectionSkills />
      <SectionContact />
    </div>
  );
}

// Mobile version — narrow, one-column
function MobileHero() {
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      {/* status */}
      <div style={{ padding: '14px 20px 8px', display: 'flex', justifyContent: 'space-between', fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.ink2 }}>
        <span>9:41</span><span>● ● ▰</span>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
        <div style={{ fontFamily: 'Caveat, cursive', fontSize: 22, fontWeight: 700 }}>ns.<span style={{ color: WF.accent }}>dev</span></div>
        <div style={{ width: 22, height: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ height: 1.5, background: WF.ink }} />
          <div style={{ height: 1.5, background: WF.ink, width: '70%', alignSelf: 'flex-end' }} />
        </div>
      </div>

      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.accent, letterSpacing: '.2em' }}>◆ AI ENGINEER</div>
        <div style={{ fontFamily: 'Kalam, cursive', fontSize: 42, fontWeight: 700, lineHeight: .95, marginTop: 12, letterSpacing: '-.02em' }}>
          Teaching<br/>machines to<br/><span style={{ fontStyle: 'italic', color: WF.accent }}>think.</span>
        </div>
      </div>

      {/* phone hero video, contained */}
      <div style={{ margin: '24px 20px 0', height: 200, border: `1.5px solid ${WF.ink}`, borderRadius: 4, position: 'relative', overflow: 'hidden', background: `repeating-linear-gradient(135deg, transparent 0 12px, rgba(0,0,0,.04) 12px 13px)` }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="25" fill="none" stroke={WF.ink2} strokeWidth=".3" strokeDasharray=".5 1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke={WF.ink3} strokeWidth=".2" />
        </svg>
        <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: 'Space Mono, monospace', fontSize: 9, background: WF.paper, padding: '2px 6px', color: WF.ink2 }}>hero.mp4 / autoplay</div>
      </div>

      <div style={{ padding: '20px' }}>
        <SLines count={3} widths={[95, 90, 60]} />
        <div style={{ marginTop: 20, border: `1.5px solid ${WF.ink}`, padding: '12px 14px', borderRadius: 3, display: 'flex', justifyContent: 'space-between', fontFamily: 'Kalam, cursive', fontSize: 14 }}>
          see the work <span>↓</span>
        </div>
      </div>

      {/* mini featured row */}
      <div style={{ padding: '20px', borderTop: `1px solid ${WF.line}`, marginTop: 8 }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: WF.accent, letterSpacing: '.2em' }}>◆ FEATURED</div>
        {['Concord', 'Helix', 'Mira'].map((p, i) => (
          <div key={p} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 60px', gap: 12, padding: '14px 0', borderBottom: `1px solid ${WF.ink3}`, alignItems: 'center' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: WF.ink2 }}>0{i + 1}</div>
            <div>
              <div style={{ fontFamily: 'Kalam, cursive', fontSize: 20, fontWeight: 700 }}>{p}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: WF.ink2 }}>2025 · llm infra</div>
            </div>
            <SPlaceholder label="" style={{ height: 40 }} />
          </div>
        ))}
      </div>

      <SAnno style={{ position: 'absolute', top: 200, right: 20, transform: 'rotate(4deg)', fontSize: 13 }}>
        scramble<br/>on load
      </SAnno>
    </div>
  );
}

Object.assign(window, { SectionAbout, SectionFeatured, SectionGrid, SectionTimeline, SectionSkills, SectionContact, FullPage, MobileHero });
