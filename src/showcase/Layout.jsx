import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { slug: 'buttons',     label: 'Buttons',      icon: <rect x="3" y="9" width="18" height="6" rx="2"/> },
  { slug: 'cards',       label: 'Cards',        icon: <><rect x="2" y="4" width="20" height="16" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></> },
  { slug: 'modals',      label: 'Modals',       icon: <><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/></> },
  { slug: 'alerts',      label: 'Alerts',       icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/></> },
  { slug: 'badges',      label: 'Badges',       icon: <><circle cx="12" cy="8" r="5"/><path d="M12 13l-3 8 3-2 3 2z"/></> },
  { slug: 'forms',       label: 'Forms',        icon: <><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></> },
  { slug: 'tables',      label: 'Tables',       icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></> },
  { slug: 'accordion',   label: 'Accordion',    icon: <path d="M4 6h16M4 12h16M4 18h16"/> },
  { slug: 'progress',    label: 'Progress',     icon: <><rect x="2" y="10" width="20" height="4" rx="2"/></> },
  { slug: 'spinners',    label: 'Spinners',     icon: <circle cx="12" cy="12" r="9" strokeDasharray="14 28"/> },
  { slug: 'toasts',      label: 'Toasts',       icon: <><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M3 13l4-8h10l4 8"/></> },
  { slug: 'navs',        label: 'Navs & Tabs',  icon: <path d="M3 12h18M3 6h18M3 18h12"/> },
  { slug: 'dropdown',    label: 'Dropdown',     icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></> },
  { slug: 'list-group',  label: 'List Group',   icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></> },
  { slug: 'pagination',  label: 'Pagination',   icon: <><polyline points="15 18 9 12 15 6"/></> },
  { slug: 'breadcrumb',  label: 'Breadcrumb',   icon: <><polyline points="9 18 15 12 9 6"/></> },
  { slug: 'placeholders',label: 'Placeholders', icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
  { slug: 'tooltips',    label: 'Tooltips',     icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></> },
];

export default function Layout({ children }) {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme') || 'light'
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <div className="background-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Mobile toggle */}
      <button
        id="mobile-menu-btn"
        className="mobile-toggle"
        aria-label="Open menu"
        onClick={() => setMobileOpen(o => !o)}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6"  x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      <div
        className={`sidebar-overlay${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className="dashboard-layout">
        {/* ── SIDEBAR ── */}
        <aside className={`sidebar glass${mobileOpen ? ' active' : ''}`} id="sidebar">
          <div className="sidebar-top">
            <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
              <svg viewBox="0 0 40 40" width="40" height="40">
                <circle cx="20" cy="20" r="20" fill="rgba(99,102,241,0.2)"/>
                <circle cx="20" cy="20" r="12" fill="none" stroke="#818cf8" strokeWidth="2.5"/>
                <circle cx="20" cy="20" r="4" fill="#818cf8"/>
              </svg>
              <span>Aura UI</span>
            </Link>

            <nav className="sidebar-links">
              <div className="nav-section-label">Components</div>
              {NAV_ITEMS.map(({ slug, label, icon }) => (
                <NavLink
                  key={slug}
                  to={`/components/${slug}`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  <svg className="nav-icon" viewBox="0 0 24 24">{icon}</svg>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="sidebar-footer">
            <div className="user-profile">
              <div
                className="user-avatar"
                style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:'.8rem' }}
              >AU</div>
              <div className="user-info">
                <span className="user-name">Aura UI</span>
                <span className="user-role">v2.0 React Library</span>
              </div>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
              <svg className="nav-icon" viewBox="0 0 24 24">
                {theme === 'dark'
                  ? <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>
                  : <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                }
              </svg>
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  );
}
