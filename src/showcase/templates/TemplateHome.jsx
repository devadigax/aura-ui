import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Button, Card, Badge, Avatar } from '../../index';

const features = [
  { icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>, title: 'Glass-First Design', desc: 'Premium glassmorphism aesthetics powered by CSS custom properties and backdrop-filter — no extra setup required.', color: '#6366f1' },
  { icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></>, title: 'Dark Mode Built-in', desc: 'Switch themes with a single attribute. Every component adapts automatically with smooth transitions.', color: '#a855f7' },
  { icon: <><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></>, title: 'Accessible by Default', desc: 'WAI-ARIA compliant, keyboard navigable, and screen-reader friendly. Inclusivity is never an afterthought.', color: '#22c55e' },
  { icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>, title: 'Bootstrap-Compatible API', desc: 'Familiar class names and props mean you can adopt Aura UI incrementally alongside existing Bootstrap projects.', color: '#f97316' },
  { icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>, title: 'Fully Responsive', desc: 'Every layout and component is mobile-first with intelligent breakpoint handling out of the box.', color: '#14b8a6' },
  { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, title: 'Zero Dependencies', desc: 'Absolutely no third-party runtime dependencies. Just React and your CSS — nothing extra to install or maintain.', color: '#ec4899' },
];

const testimonials = [
  { name: 'Sarah Jenkins', role: 'Lead Frontend Engineer', avatar: '30', text: 'Aura UI shaved weeks off our design system build. The glass aesthetic is exactly what we needed for our SaaS platform.' },
  { name: 'Marcus Chen', role: 'Full-Stack Developer', avatar: '45', text: 'Finally a React component library that looks stunning without fighting with CSS specificity. Dark mode just works.' },
  { name: 'Priya Sharma', role: 'UI/UX Designer & Dev', avatar: '61', text: 'The glassmorphism components look incredible in both light and dark mode. My clients are always blown away.' },
];

const pricingPlans = [
  { name: 'Free', price: '$0', period: 'forever', features: ['26+ Components', '9 Page Templates', 'Dark Mode', 'Community Support'], cta: 'Get Started', variant: 'outline-primary', highlight: false },
  { name: 'Pro', price: '$49', period: 'per year', features: ['Everything in Free', '50+ Components', 'Priority Support', 'Custom Themes', 'Figma Kit'], cta: 'Start Free Trial', variant: 'primary', highlight: true },
  { name: 'Team', price: '$129', period: 'per year', features: ['Everything in Pro', 'Unlimited Seats', 'Design Reviews', 'Slack Support', 'Early Access'], cta: 'Contact Sales', variant: 'outline-primary', highlight: false },
];

const code = `
import { Button, Card, Badge, Avatar } from 'aura-ui';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <header className="glass page-header text-center mb-5">
        <Badge variant="primary" pill>Now available: v4.0</Badge>
        <h1 className="fw-black display-4 mt-3">Build Glassmorphic UIs at Lightning Speed</h1>
        <p className="text-muted">Premium React component library powered by glassmorphism.</p>
        <div className="d-flex gap-3 justify-content-center mt-4">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="outline-primary" size="lg">View Docs</Button>
        </div>
      </header>
      {/* ... Features, Testimonials, Pricing ... */}
    </div>
  );
}
`;

export default function TemplateHome() {
  return (
    <TemplateLayout title="Home (Landing)" sourceCode={code} hideHeader>
      {/* ── Hero ── */}
      <header className="glass mb-5" style={{ padding: 'clamp(3rem, 6vw, 5rem) 2.5rem', textAlign: 'center', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-60px', right: '-80px', width: '360px', height: '360px', background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="badge-group justify-content-center mb-4" style={{ position: 'relative', zIndex: 1 }}>
          <Badge variant="primary" pill>Now available: v4.0</Badge>
          <Badge variant="success" pill>Open Source</Badge>
          <Badge variant="info" pill>React</Badge>
        </div>

        <h1 className="fw-black mb-4" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-2px',
          background: 'linear-gradient(135deg, var(--accent), #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative',
          zIndex: 1,
        }}>
          Build Glassmorphic UIs<br />at Lightning Speed
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
          Aura UI is a premium, open-source React component library built on glassmorphism principles. Zero dependencies, dark mode ready, Bootstrap-compatible.
        </p>

        <div className="hstack gap-3 justify-content-center flex-wrap mb-5" style={{ position: 'relative', zIndex: 1 }}>
          <Button variant="primary" size="lg">Get Started Free</Button>
          <Button variant="outline-primary" size="lg">View Documentation →</Button>
        </div>

        {/* Social Proof / Stats */}
        <div className="hstack gap-5 justify-content-center flex-wrap" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
          {[['26+', 'Components'], ['9', 'Templates'], ['0', 'Dependencies'], ['4.9★', 'Rating']].map(([val, lbl]) => (
            <div key={lbl} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '0.3rem' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </header>

      {/* ── Trusted By ── */}
      <section className="glass p-4 mb-5 text-center">
        <p className="text-muted fw-medium mb-4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Trusted by developers at</p>
        <div className="hstack gap-5 justify-content-center flex-wrap" style={{ opacity: 0.5, filter: 'grayscale(1)' }}>
          {['Vercel', 'Netlify', 'Supabase', 'PlanetScale', 'Railway'].map(name => (
            <span key={name} className="fw-black" style={{ fontSize: '1.1rem', letterSpacing: '-0.5px' }}>{name}</span>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mb-5">
        <div className="text-center mb-5">
          <Badge variant="primary" pill className="mb-3">Features</Badge>
          <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-1px' }}>Everything you need,<br />nothing you don't</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '520px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Carefully crafted components that cover every scenario in a modern web application.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.25rem' }}>
          {features.map(({ icon, title, desc, color }) => (
            <Card key={title} glass>
              <Card.Body className="p-4">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${color}18`, border: `1px solid ${color}38`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <h5 className="fw-bold mb-2">{title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="glass p-5 mb-5" style={{ borderRadius: '16px' }}>
        <div className="text-center mb-5">
          <Badge variant="info" pill className="mb-3">Quick Start</Badge>
          <h2 className="fw-black mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.5px' }}>Up and running in minutes</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { step: '01', title: 'Install', desc: 'npm install @devadigax/aura-ui', code: true },
            { step: '02', title: 'Import', desc: "import '@devadigax/aura-ui/style.css'", code: true },
            { step: '03', title: 'Use', desc: "import { Button } from '@devadigax/aura-ui'", code: true },
            { step: '04', title: 'Ship', desc: 'Deploy your stunning glass UI to production.', code: false },
          ].map(({ step, title, desc, code: isCode }) => (
            <div key={step}>
              <div className="mx-auto mb-3" style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="fw-black" style={{ fontSize: '1rem', color: 'var(--accent)' }}>{step}</span>
              </div>
              <h6 className="fw-bold mb-2">{title}</h6>
              {isCode
                ? <code style={{ fontSize: '0.78rem', color: 'var(--accent)', background: 'rgba(99,102,241,0.08)', padding: '0.3rem 0.6rem', borderRadius: 6, display: 'inline-block' }}>{desc}</code>
                : <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>{desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mb-5">
        <div className="text-center mb-5">
          <Badge variant="success" pill className="mb-3">Testimonials</Badge>
          <h2 className="fw-black" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.5px' }}>Loved by developers</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.25rem' }}>
          {testimonials.map(({ name, role, avatar, text }) => (
            <Card key={name} glass>
              <Card.Body className="p-4">
                <div className="text-warning mb-3">
                  {'★★★★★'.split('').map((s, i) => <span key={i} style={{ fontSize: '1rem' }}>{s}</span>)}
                </div>
                <p className="mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>"{text}"</p>
                <div className="d-flex align-items-center gap-3">
                  <Avatar src={`https://i.pravatar.cc/150?u=${avatar}`} size="sm" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: '0.875rem' }}>{name}</div>
                    <div className="text-muted" style={{ fontSize: '0.78rem' }}>{role}</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="mb-5">
        <div className="text-center mb-5">
          <Badge variant="warning" pill className="mb-3">Pricing</Badge>
          <h2 className="fw-black mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.5px' }}>Simple, transparent pricing</h2>
          <p className="text-muted" style={{ fontSize: '1rem' }}>Start free. Upgrade when you're ready.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.25rem', alignItems: 'start' }}>
          {pricingPlans.map(({ name, price, period, features: planFeatures, cta, variant, highlight }) => (
            <Card key={name} glass style={{ position: 'relative', border: highlight ? '2px solid var(--accent)' : undefined, transform: highlight ? 'scale(1.02)' : undefined }}>
              {highlight && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
                  <Badge variant="primary" pill>Most Popular</Badge>
                </div>
              )}
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-1">{name}</h5>
                <div className="mb-4">
                  <span className="fw-black" style={{ fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>{price}</span>
                  <span className="text-muted ms-1" style={{ fontSize: '0.85rem' }}>/{period}</span>
                </div>
                <div className="d-flex flex-column gap-2 mb-4">
                  {planFeatures.map(f => (
                    <div key={f} className="d-flex align-items-center gap-2">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: '0.875rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Button variant={variant} className="w-100">{cta}</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section className="glass text-center p-5 mb-4" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.07) 100%)' }}>
        <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', letterSpacing: '-0.5px' }}>
          Ready to build something beautiful?
        </h2>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '480px', fontSize: '1.05rem' }}>
          Join thousands of developers shipping premium glassmorphism UIs faster than ever before.
        </p>
        <div className="hstack gap-3 justify-content-center flex-wrap">
          <Button variant="primary" size="lg">Start Building Free</Button>
          <Button variant="outline-primary" size="lg">View on GitHub →</Button>
        </div>
      </section>
    </TemplateLayout>
  );
}
