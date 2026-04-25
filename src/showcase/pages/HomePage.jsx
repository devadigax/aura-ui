import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Badge, Progress } from '../../index';

const components = [
  { slug: 'buttons', label: 'Buttons', desc: 'Solid, outline, ghost, icon, size & loading variants.', color: '#6366f1', category: 'Core' },
  { slug: 'cards', label: 'Cards', desc: 'Composable glass cards with header, body, and footer.', color: '#a855f7', category: 'Core' },
  { slug: 'carousel', label: 'Carousel', desc: 'Sliding and fading carousel with indicators and controls.', color: '#14b8a6', category: 'Core' },
  { slug: 'modals', label: 'Modals', desc: 'Accessible dialogs with size variants and scroll lock.', color: '#ec4899', category: 'Overlay' },
  { slug: 'offcanvas', label: 'Offcanvas', desc: 'Edge-mounted panels for navigation, filters, and drawers.', color: '#f97316', category: 'Overlay' },
  { slug: 'alerts', label: 'Alerts', desc: 'Contextual alert messages with dismissal support.', color: '#22c55e', category: 'Feedback' },
  { slug: 'badges', label: 'Badges', desc: 'Compact badges, pills, dots and solid variants.', color: '#eab308', category: 'Feedback' },
  { slug: 'forms', label: 'Forms', desc: 'Inputs, selects, checkboxes, switches, and input groups.', color: '#06b6d4', category: 'Form' },
  { slug: 'tables', label: 'Tables', desc: 'Glass-styled data tables with hover and responsive support.', color: '#f97316', category: 'Data' },
  { slug: 'accordion', label: 'Accordion', desc: 'Animated collapse panels and standalone collapse toggle.', color: '#8b5cf6', category: 'Core' },
  { slug: 'progress', label: 'Progress', desc: 'Progress bars in all variants, including animated gradient.', color: '#10b981', category: 'Feedback' },
  { slug: 'spinners', label: 'Spinners', desc: 'Border, grow, dots, and ring loading indicators.', color: '#f43f5e', category: 'Feedback' },
  { slug: 'toasts', label: 'Toasts', desc: 'Auto-dismissing notification toasts for every context.', color: '#14b8a6', category: 'Feedback' },
  { slug: 'navs', label: 'Navs & Tabs', desc: 'Pills, border tabs, underline nav, and navbar styles.', color: '#6366f1', category: 'Navigation' },
  { slug: 'dropdown', label: 'Dropdown', desc: 'Click-triggered dropdown menus with sections and icons.', color: '#a855f7', category: 'Navigation' },
  { slug: 'list-group', label: 'List Group', desc: 'Default, numbered, and action-enabled list groups.', color: '#ec4899', category: 'Data' },
  { slug: 'pagination', label: 'Pagination', desc: 'Page navigation with pill and size variants.', color: '#22c55e', category: 'Navigation' },
  { slug: 'breadcrumb', label: 'Breadcrumb', desc: 'Hierarchical breadcrumb navigation with chevron dividers.', color: '#eab308', category: 'Navigation' },
  { slug: 'helpers', label: 'Helpers', desc: 'Utility classes for ratios, links, truncation, spacing, and more.', color: '#0ea5e9', category: 'Utility' },
  { slug: 'placeholders', label: 'Placeholders', desc: 'Skeleton loading states with shimmer and wave animations.', color: '#06b6d4', category: 'Feedback' },
  { slug: 'sidebar', label: 'Sidebar', desc: 'Glass sidebar wrapper with brand, nav sections, and footer.', color: '#8b5cf6', category: 'Navigation' },
  { slug: 'tooltips', label: 'Tooltips', desc: 'CSS-only directional tooltip hints on any element.', color: '#f97316', category: 'Overlay' },
  { slug: 'popover', label: 'Popover', desc: 'Floating panels with click/hover triggers and four placements.', color: '#8b5cf6', category: 'Overlay' },
  { slug: 'avatar', label: 'Avatar', desc: 'User avatar with size variants, stacked groups and initials.', color: '#ec4899', category: 'Core' },
  { slug: 'divider', label: 'Divider', desc: 'Horizontal rule with optional label and multiple styles.', color: '#14b8a6', category: 'Utility' },
  { slug: 'stepper', label: 'Stepper', desc: 'Step-by-step progress indicator for multi-step flows.', color: '#6366f1', category: 'Form' },
];

const categories = ['All', ...Array.from(new Set(components.map(c => c.category)))];

const templates = [
  { slug: 'home', label: 'Home / Landing', color: '#6366f1' },
  { slug: 'login', label: 'Login / Auth', color: '#a855f7' },
  { slug: 'register', label: 'Register', color: '#ec4899' },
  { slug: 'dashboard', label: 'Admin Dashboard', color: '#14b8a6' },
  { slug: 'products', label: 'Products Grid', color: '#f97316' },
  { slug: 'blog', label: 'Blog Listing', color: '#22c55e' },
  { slug: 'create-form', label: 'Complex Form', color: '#eab308' },
  { slug: 'about', label: 'About Us', color: '#0ea5e9' },
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filtered = components.filter(c => {
    const matchesQuery = c.label.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase());
    const matchesCat = activeCategory === 'All' || c.category === activeCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div>
      {/* ── Hero ── */}
      <header className="glass page-header mb-5" style={{ padding: '4rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative blobs inside hero */}
        <div style={{ position: 'absolute', top: '-40px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '240px', height: '240px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="badge-group justify-content-center mb-3">
          <span className="badge badge-primary badge-pill">v4.2.0</span>
          <span className="badge badge-success badge-pill">Open Source</span>
          <span className="badge badge-info badge-pill">React</span>
          <span className="badge badge-warning badge-pill">Zero Dependencies</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 900,
          marginBottom: '.75rem',
          background: 'linear-gradient(135deg, var(--accent), #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-1px',
        }}>
          Aura UI
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          A zero-dependency glassmorphism component library for React. Bootstrap-compatible API, dark mode ready, and fully accessible.
        </p>
        <div className="hstack gap-3 justify-content-center flex-wrap mb-5">
          <Link to="/components/buttons">
            <Button variant="primary" size="lg">Explore Components</Button>
          </Link>
          <a href="https://github.com/devadigax/aura-ui" target="_blank" rel="noreferrer">
            <Button variant="outline-primary" size="lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
              GitHub
            </Button>
          </a>
        </div>

        {/* Stats row */}
        <div className="hstack gap-5 justify-content-center flex-wrap" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          {[['26+', 'Components'], ['9', 'Templates'], ['0', 'Dependencies'], ['100%', 'Customizable']].map(([val, lbl]) => (
            <div key={lbl} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '0.25rem' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </header>

      {/* ── Quick Search + Category Filter ── */}
      <section className="glass p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-3">
          <h2 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>Find a Component</h2>
          <span className="text-muted" style={{ fontSize: '0.85rem' }}>{filtered.length} of {components.length} components</span>
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="form-control"
            placeholder="Search by component name or description…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ paddingLeft: '2.5rem', borderRadius: '10px' }}
          />
        </div>

        {/* Category Pills */}
        <div className="d-flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`badge badge-pill ${activeCategory === cat ? 'badge-primary' : ''}`}
              style={{
                cursor: 'pointer',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--glass-border)'}`,
                background: activeCategory === cat ? 'rgba(99,102,241,0.15)' : 'var(--glass-bg)',
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-muted)',
                padding: '0.4rem 0.9rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Component Grid ── */}
      <section className="mb-5">
        {filtered.length === 0 ? (
          <div className="glass p-5 text-center">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" className="mb-3 mx-auto d-block" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <h5 className="fw-bold">No components found</h5>
            <p className="text-muted">Try a different keyword or clear the filter.</p>
            <Button variant="outline-primary" onClick={() => { setQuery(''); setActiveCategory('All'); }}>Clear Search</Button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '1rem' }}>
            {filtered.map(({ slug, label, desc, color, category }) => (
              <Link key={slug} to={`/components/${slug}`} style={{ textDecoration: 'none' }}>
                <Card hover style={{ height: '100%', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div style={{
                        width: 42, height: 42, borderRadius: 10,
                        background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `1px solid ${color}40`,
                      }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, background: color, opacity: 0.9 }} />
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '999px', padding: '0.2rem 0.6rem' }}>
                        {category}
                      </span>
                    </div>
                    <Card.Title style={{ marginBottom: '0.3rem' }}>{label}</Card.Title>
                    <Card.Text style={{ fontSize: '0.84rem', color: 'var(--text-muted)', flexGrow: 1 }}>{desc}</Card.Text>
                    <div style={{ paddingTop: '0.75rem', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        View docs
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── Templates Section ── */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1" style={{ fontSize: '1.3rem' }}>Page Templates</h2>
            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>Full-page layouts built with Aura UI components.</p>
          </div>
          <Link to="/templates/dashboard">
            <Button variant="outline-primary" size="sm">View All →</Button>
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {templates.map(({ slug, label, color }) => (
            <div key={slug} onClick={() => navigate(`/templates/${slug}`)} style={{ cursor: 'pointer' }}>
              <Card glass style={{ overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                <div style={{ height: '6px', background: color, borderRadius: '12px 12px 0 0' }} />
                <Card.Body className="d-flex align-items-center gap-3 py-3">
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: `${color}20`, border: `1px solid ${color}40`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 14, height: 14, borderRadius: 3, background: color, opacity: 0.9 }} />
                  </div>
                  <span className="fw-semibold" style={{ fontSize: '0.9rem' }}>{label}</span>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Install ── */}
      <section className="glass p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h2 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>Quick Start</h2>
          <span className="badge badge-success badge-pill">npm ready</span>
        </div>
        <div className="code-block" style={{ fontSize: '0.875rem' }}>
          <span className="cb-comment"># Install</span>{'\n'}
          npm install @devadigax/aura-ui{'\n\n'}
          <span className="cb-comment"># Import styles</span>{'\n'}
          {'import '}<span className="cb-string">'@devadigax/aura-ui/style.css'</span>;{'\n\n'}
          <span className="cb-comment"># Use any component</span>{'\n'}
          {'import { Button, Card, Modal } from '}<span className="cb-string">'@devadigax/aura-ui'</span>;{'\n'}
          {'import '}<span className="cb-string">'@devadigax/aura-ui/style.css'</span>;
        </div>
      </section>

      {/* ── Feature Highlights ── */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4" style={{ fontSize: '1.3rem' }}>Why Aura UI?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1rem' }}>
          {[
            { icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, title: 'Glass-First Design', desc: 'Every component uses CSS custom properties and backdrop-filter for native glassmorphism.', color: '#6366f1' },
            { icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>, title: 'Dark Mode Built-in', desc: 'Flip a data-theme attribute on the root element and every component adapts instantly.', color: '#a855f7' },
            { icon: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" /></>, title: 'Accessible by Default', desc: 'WAI-ARIA labels, keyboard navigation, and focus management are included out of the box.', color: '#22c55e' },
            { icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>, title: 'Bootstrap-Compatible API', desc: 'If you know Bootstrap, you know Aura UI. Same class names, zero vendor lock-in.', color: '#f97316' },
          ].map(({ icon, title, desc, color }) => (
            <Card key={title} glass>
              <Card.Body>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}18`, border: `1px solid ${color}38`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <h5 className="fw-bold mb-2">{title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Community CTA ── */}
      <section className="glass p-5 text-center mb-4" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.06) 100%)' }}>
        <Badge variant="primary" pill className="mb-3">Open Source</Badge>
        <h2 className="fw-black mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>Built in Public ❤️</h2>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
          Aura UI is open-source and community-driven. Star us on GitHub, report issues, and contribute components.
        </p>
        <div className="hstack gap-3 justify-content-center flex-wrap">
          <a href="https://github.com/devadigax/aura-ui" target="_blank" rel="noreferrer">
            <Button variant="primary" size="lg">⭐ Star on GitHub</Button>
          </a>
          <Link to="/components/buttons">
            <Button variant="outline-primary" size="lg">Browse Components</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
