import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Badge, Avatar, Button, Divider } from '../../index';

const stats = [
  { val: '2019', label: 'Founded' },
  { val: '50K+', label: 'Developers' },
  { val: '26+', label: 'Components' },
  { val: '100%', label: 'Open Source' },
];

const values = [
  { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, title: 'Speed', desc: 'We obsess over performance. Every component is optimized to be fast, lightweight, and render-efficient.' },
  { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, title: 'Quality', desc: 'From pixel-perfect design tokens to accessible ARIA patterns — quality is non-negotiable in everything we ship.' },
  { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, title: 'Community', desc: 'We build in public, ship in the open, and genuinely care about every GitHub issue and discussion thread.' },
];

const team = [
  { name: 'Alex Rivera',   role: 'Founder & CEO',    img: '30', twitter: '@alexrivera', bio: 'Previously led frontend at Figma. Passionate about design systems and accessible UI.' },
  { name: 'Jamie Chen',    role: 'Head of Design',    img: '45', twitter: '@jamiechen',  bio: '10 years designing at scale. Figma expert and the brain behind Aura\'s glassmorphism language.' },
  { name: 'Taylor Smith',  role: 'Lead Engineer',     img: '52', twitter: '@taylordev',  bio: 'React core contributor. Obsessed with bundle size, tree-shaking, and pixel-perfect animations.' },
  { name: 'Jordan Lee',    role: 'Product Manager',   img: '61', twitter: '@jordanlee',  bio: 'Shipped product at Notion and Linear. Keeps the roadmap focused and the team shipping.' },
  { name: 'Casey Park',    role: 'DevRel Engineer',   img: '71', twitter: '@caseypark',  bio: 'Makes sure every developer has a great first experience. Writes the docs, runs the workshops.' },
  { name: 'Morgan Wells',  role: 'Accessibility Lead',img: '83', twitter: '@morganwells', bio: 'WCAG advocate. Ensures every component is keyboard-navigable and screen-reader friendly.' },
];

const milestones = [
  { year: '2019', text: 'Aura UI started as an internal design system at a fintech startup.' },
  { year: '2021', text: 'Open-sourced on GitHub. Reached 1,000 stars in the first month.' },
  { year: '2023', text: 'v4.0 launched with glassmorphism-first architecture and zero dependencies.' },
  { year: '2024', text: '50,000 developers. 9 page templates. Community-driven component proposals.' },
];

const code = `import { Card, Badge, Avatar, Button } from 'aura-ui';

export default function AboutPage() {
  return (
    <div>
      {/* Mission Hero */}
      <section className="glass text-center p-5 mb-5">
        <Badge variant="primary" pill>Our Story</Badge>
        <h1 className="fw-black mt-3">Built by developers, for developers</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          We believe great UI tools should be beautiful, accessible, and joyful to use.
        </p>
      </section>
      {/* Stats, Values, Team, Timeline... */}
    </div>
  );
}
`;

export default function TemplateAbout() {
  return (
    <TemplateLayout title="About Us" sourceCode={code} hideHeader>

      {/* ── Mission Hero ── */}
      <section className="glass mb-5 text-center" style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', borderRadius: 16, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '260px', height: '260px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Badge variant="primary" pill className="mb-4">Our Story</Badge>
        <h1 className="fw-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Built by developers,<br/>
          <span style={{ background: 'linear-gradient(135deg, var(--accent), #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>for developers</span>
        </h1>
        <p className="text-muted mx-auto mb-5" style={{ maxWidth: '620px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          We believe great UI tools should be beautiful, accessible, and genuinely joyful to use. Aura UI was born out of frustration with bloated libraries that make you fight the framework.
        </p>
        {/* Stats strip */}
        <div className="hstack gap-5 justify-content-center flex-wrap" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          {stats.map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '0.3rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="mb-5">
        <div className="text-center mb-4">
          <Badge variant="info" pill className="mb-3">What We Stand For</Badge>
          <h2 className="fw-black" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.5px' }}>Our core values</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {values.map(({ icon, title, desc }, i) => (
            <Card key={i} glass>
              <Card.Body className="p-4">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <h5 className="fw-bold mb-2">{title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="glass p-5 mb-5" style={{ borderRadius: 16 }}>
        <div className="text-center mb-5">
          <Badge variant="warning" pill className="mb-3">History</Badge>
          <h2 className="fw-black" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.5px' }}>Our journey so far</h2>
        </div>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
          <div className="d-flex flex-column gap-4">
            {milestones.map(({ year, text }) => (
              <div key={year} className="d-flex gap-4 align-items-start" style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2rem', top: '4px', width: 16, height: 16, borderRadius: '50%', background: 'var(--accent)', border: '3px solid var(--glass-bg)', zIndex: 1 }} />
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <span className="badge badge-primary badge-pill fw-bold" style={{ fontSize: '0.85rem', minWidth: '54px', textAlign: 'center' }}>{year}</span>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="mb-5">
        <div className="text-center mb-5">
          <Badge variant="success" pill className="mb-3">The Team</Badge>
          <h2 className="fw-black mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.5px' }}>Meet the people behind Aura UI</h2>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>A small, fully remote team of engineers and designers who care deeply about craft.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {team.map(({ name, role, img, twitter, bio }) => (
            <Card key={name} glass>
              <Card.Body className="p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Avatar src={`https://i.pravatar.cc/150?u=${img}`} size="lg" style={{ width: 56, height: 56, flexShrink: 0 }} />
                  <div>
                    <h6 className="fw-bold mb-0">{name}</h6>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>{role}</span>
                  </div>
                </div>
                <p className="text-muted mb-3" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{bio}</p>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{twitter}</span>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="glass text-center p-5" style={{ borderRadius: 16, background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.06))' }}>
        <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>We're hiring 👋</h2>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '460px' }}>
          We're a small team with huge ambitions. If you care about beautiful, accessible software — let's talk.
        </p>
        <div className="hstack gap-3 justify-content-center flex-wrap">
          <Button variant="primary" size="lg">View Open Roles</Button>
          <Button variant="outline-primary" size="lg">Say Hello</Button>
        </div>
      </section>
    </TemplateLayout>
  );
}
