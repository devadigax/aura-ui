import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../../index';

const components = [
  { slug: 'buttons',      label: 'Buttons',       desc: 'Solid, outline, ghost, icon, size & loading variants.',        color: '#6366f1' },
  { slug: 'cards',        label: 'Cards',          desc: 'Composable glass cards with header, body, and footer.',         color: '#a855f7' },
  { slug: 'modals',       label: 'Modals',         desc: 'Accessible dialogs with size variants and scroll lock.',        color: '#ec4899' },
  { slug: 'alerts',       label: 'Alerts',         desc: 'Contextual alert messages with dismissal support.',             color: '#22c55e' },
  { slug: 'badges',       label: 'Badges',         desc: 'Compact badges, pills, dots and solid variants.',               color: '#eab308' },
  { slug: 'forms',        label: 'Forms',          desc: 'Inputs, selects, checkboxes, switches, and input groups.',      color: '#06b6d4' },
  { slug: 'tables',       label: 'Tables',         desc: 'Glass-styled data tables with hover and responsive support.',   color: '#f97316' },
  { slug: 'accordion',    label: 'Accordion',      desc: 'Animated collapse panels and standalone collapse toggle.',      color: '#8b5cf6' },
  { slug: 'progress',     label: 'Progress',       desc: 'Progress bars in all variants, including animated gradient.',   color: '#10b981' },
  { slug: 'spinners',     label: 'Spinners',       desc: 'Border, grow, dots, and ring loading indicators.',              color: '#f43f5e' },
  { slug: 'toasts',       label: 'Toasts',         desc: 'Auto-dismissing notification toasts for every context.',        color: '#14b8a6' },
  { slug: 'navs',         label: 'Navs & Tabs',    desc: 'Pills, border tabs, underline nav, and navbar styles.',         color: '#6366f1' },
  { slug: 'dropdown',     label: 'Dropdown',       desc: 'Click-triggered dropdown menus with sections and icons.',       color: '#a855f7' },
  { slug: 'list-group',   label: 'List Group',     desc: 'Default, numbered, and action-enabled list groups.',            color: '#ec4899' },
  { slug: 'pagination',   label: 'Pagination',     desc: 'Page navigation with pill and size variants.',                  color: '#22c55e' },
  { slug: 'breadcrumb',   label: 'Breadcrumb',     desc: 'Hierarchical breadcrumb navigation with chevron dividers.',     color: '#eab308' },
  { slug: 'placeholders', label: 'Placeholders',   desc: 'Skeleton loading states with shimmer and wave animations.',     color: '#06b6d4' },
  { slug: 'tooltips',     label: 'Tooltips',       desc: 'CSS-only directional tooltip hints on any element.',            color: '#f97316' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <header className="glass page-header mb-5" style={{ padding: '4rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="badge-group justify-content-center mb-3">
          <span className="badge badge-primary badge-pill">v1.0</span>
          <span className="badge badge-success badge-pill">Open Source</span>
          <span className="badge badge-info badge-pill">React</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          marginBottom: '.75rem',
          background: 'linear-gradient(135deg, var(--accent), #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Aura UI
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 2rem' }}>
          A zero-dependency glassmorphism component library for React — Bootstrap-compatible class names, dark mode, accessible.
        </p>
        <div className="hstack gap-3 justify-content-center flex-wrap">
          <Link to="/components/buttons">
            <Button variant="primary" size="lg">Explore Components</Button>
          </Link>
          <a href="https://github.com/devadigax/aura-ui" target="_blank" rel="noreferrer">
            <Button variant="outline-primary" size="lg">GitHub →</Button>
          </a>
        </div>

        {/* Stats row */}
        <div className="hstack gap-4 justify-content-center flex-wrap mt-5" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          {[['18+', 'Components'], ['0', 'Dependencies'], ['100%', 'CSS Custom Props'], ['Dark', 'Mode Ready']].map(([val, lbl]) => (
            <div key={lbl} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)' }}>{val}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Quick Install */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>Quick Start</h2>
        <div className="code-block" style={{ fontSize: '0.875rem' }}>
          <span className="cb-comment"># Install</span>{'\n'}
          npm install aura-ui{'\n\n'}
          <span className="cb-comment"># Import</span>{'\n'}
          {'import { Button, Card, Modal } from '}<span className="cb-string">'aura-ui'</span>;{'\n'}
          {'import '}<span className="cb-string">'aura-ui/style.css'</span>;
        </div>
      </section>

      {/* Component Grid */}
      <section>
        <h2 className="fw-bold mb-4" style={{ fontSize: '1.3rem' }}>All Components</h2>
        <div className="card-grid card-grid-auto-md" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '1rem' }}>
          {components.map(({ slug, label, desc, color }) => (
            <Link key={slug} to={`/components/${slug}`} style={{ textDecoration: 'none' }}>
              <Card hover style={{ height: '100%', cursor: 'pointer' }}>
                <Card.Body>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: '0.75rem',
                    background: `${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${color}44`
                  }}>
                    <div style={{ width: 18, height: 18, borderRadius: 4, background: color, opacity: 0.9 }} />
                  </div>
                  <Card.Title>{label}</Card.Title>
                  <Card.Text style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>{desc}</Card.Text>
                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                    <span className="badge badge-primary" style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}>
                      View docs →
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

