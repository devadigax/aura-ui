import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sidebar } from '../index';

const NAV_ITEMS = [
  { slug: 'buttons', label: 'Buttons', icon: <rect x="3" y="9" width="18" height="6" rx="2" /> },
  { slug: 'cards', label: 'Cards', icon: <><rect x="2" y="4" width="20" height="16" rx="3" /><line x1="2" y1="9" x2="22" y2="9" /></> },
  { slug: 'carousel', label: 'Carousel', icon: <><rect x="3" y="5" width="18" height="14" rx="3" /><circle cx="8" cy="12" r="1.5" /><polyline points="13 9 17 12 13 15" /></> },
  { slug: 'modals', label: 'Modals', icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="16" y2="11" /></> },
  { slug: 'offcanvas', label: 'Offcanvas', icon: <><rect x="4" y="4" width="14" height="16" rx="2" /><line x1="8" y1="8" x2="14" y2="8" /><line x1="8" y1="12" x2="14" y2="12" /></> },
  { slug: 'alerts', label: 'Alerts', icon: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r=".5" fill="currentColor" /></> },
  { slug: 'badges', label: 'Badges', icon: <><circle cx="12" cy="8" r="5" /><path d="M12 13l-3 8 3-2 3 2z" /></> },
  { slug: 'forms', label: 'Forms', icon: <><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
  { slug: 'tables', label: 'Tables', icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></> },
  { slug: 'accordion', label: 'Accordion', icon: <path d="M4 6h16M4 12h16M4 18h16" /> },
  { slug: 'progress', label: 'Progress', icon: <rect x="2" y="10" width="20" height="4" rx="2" /> },
  { slug: 'spinners', label: 'Spinners', icon: <circle cx="12" cy="12" r="9" strokeDasharray="14 28" /> },
  { slug: 'toasts', label: 'Toasts', icon: <><rect x="3" y="13" width="18" height="8" rx="2" /><path d="M3 13l4-8h10l4 8" /></> },
  { slug: 'navs', label: 'Navs & Tabs', icon: <path d="M3 12h18M3 6h18M3 18h12" /> },
  { slug: 'dropdown', label: 'Dropdown', icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></> },
  { slug: 'list-group', label: 'List Group', icon: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></> },
  { slug: 'pagination', label: 'Pagination', icon: <polyline points="15 18 9 12 15 6" /> },
  { slug: 'breadcrumb', label: 'Breadcrumb', icon: <polyline points="9 18 15 12 9 6" /> },
  { slug: 'helpers', label: 'Helpers', icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></> },
  { slug: 'placeholders', label: 'Placeholders', icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></> },
  { slug: 'sidebar', label: 'Sidebar', icon: <><rect x="3" y="4" width="6" height="16" rx="2" /><rect x="11" y="6" width="10" height="3" rx="1.5" /><rect x="11" y="11" width="8" height="3" rx="1.5" /><rect x="11" y="16" width="9" height="3" rx="1.5" /></> },
  { slug: 'tooltips', label: 'Tooltips', icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  { slug: 'popover', label: 'Popover', icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="13" y2="14" /></> },
  { slug: 'avatar', label: 'Avatar', icon: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" /></> },
  { slug: 'divider', label: 'Divider', icon: <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round" /> },
  { slug: 'stepper', label: 'Stepper', icon: <><circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><line x1="9" y1="12" x2="15" y2="12" /></> },
];

const TEMPLATE_ITEMS = [
  { slug: 'home', label: 'Home Page', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
  { slug: 'login', label: 'Login', icon: <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" /> },
  { slug: 'register', label: 'Register', icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></> },
  { slug: 'create-form', label: 'Create Form', icon: <><polyline points="14 2 14 8 20 8" /><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M12 18v-6" /><path d="M9 15h6" /></> },
  { slug: 'about', label: 'About Us', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></> },
  { slug: 'contact', label: 'Contact Us', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
  { slug: 'products', label: 'Products Grid', icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></> },
  { slug: 'product-single', label: '↳ Product Detail', icon: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>, indent: true },
  { slug: 'blog', label: 'Blog Page', icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></> },
  { slug: 'blog-single', label: '↳ Blog Article', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>, indent: true },
  { slug: 'dashboard', label: 'Admin Dashboard', icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></> },
];

export default function Layout({ children }) {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? (document.documentElement.getAttribute('data-theme') || 'light')
      : 'light'
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    setTheme(next);
  };

  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('sidebar-compact') === 'true'
  );

  const toggleCompact = () => {
    const next = !isCompact;
    setIsCompact(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-compact', next);
    }
  };

  return (
    <>
      <div className="background-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <button
        id="mobile-menu-btn"
        className="mobile-toggle"
        aria-label="Open menu"
        onClick={() => setMobileOpen((value) => !value)}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className={`sidebar-overlay${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(false)} />

      <div className={`dashboard-layout ${isCompact ? 'layout-compact' : ''}`}>
        <Sidebar active={mobileOpen} id="sidebar">
          <Sidebar.Top>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Sidebar.Brand as={Link} to="/" onClick={() => setMobileOpen(false)} style={{ marginBottom: 0 }}>
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <circle cx="20" cy="20" r="20" fill="rgba(99,102,241,0.2)" />
                  <circle cx="20" cy="20" r="12" fill="none" stroke="#818cf8" strokeWidth="2.5" />
                  <circle cx="20" cy="20" r="4" fill="#818cf8" />
                </svg>
                <span className="link-text">Aura UI</span>
              </Sidebar.Brand>

              <button
                className="btn btn-sm btn-icon border-0 bg-transparent text-muted compact-toggle align-items-center justify-content-center p-1"
                onClick={toggleCompact}
                title={isCompact ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <Sidebar.Nav>
              <Sidebar.Section>Components</Sidebar.Section>
              {NAV_ITEMS.map(({ slug, label, icon }) => (
                <NavLink
                  key={slug}
                  to={`/components/${slug}`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  title={isCompact ? label : undefined}
                >
                  <svg className="nav-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">{icon}</svg>
                  <span className="link-text">{label}</span>
                </NavLink>
              ))}

              <Sidebar.Section className="mt-4">Templates</Sidebar.Section>
              {TEMPLATE_ITEMS.map(({ slug, label, icon, indent }) => (
                <NavLink
                  key={slug}
                  to={`/templates/${slug}`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  title={isCompact ? label : undefined}
                  style={indent ? { paddingLeft: isCompact ? undefined : '1.75rem', fontSize: '0.82rem', opacity: 0.8 } : undefined}
                >
                  <svg className="nav-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">{icon}</svg>
                  <span className="link-text">{label}</span>
                </NavLink>
              ))}
            </Sidebar.Nav>
          </Sidebar.Top>

          <Sidebar.Footer>
            <div className="user-profile">
              <div
                className="user-avatar"
                style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '.8rem' }}
                title={isCompact ? "Aura UI Profile" : undefined}
              >
                AU
              </div>
              <div className="user-info">
                <span className="user-name">Aura UI</span>
                <span className="user-role">v4.2.0 React Library</span>
              </div>
            </div>
            <button className="theme-toggle" onClick={toggleTheme} title={isCompact ? (theme === 'dark' ? 'Light Mode' : 'Dark Mode') : undefined}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                {theme === 'dark'
                  ? <><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></>
                  : <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />}
              </svg>
              <span className="link-text">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </Sidebar.Footer>
        </Sidebar>

        <main className="main-content">{children}</main>
      </div>
    </>
  );
}
