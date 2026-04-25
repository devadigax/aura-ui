import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader';
import { Badge, Button, Sidebar } from '../../index';

const sidebarIcon = (
  <svg viewBox="0 0 40 40" width="40" height="40">
    <circle cx="20" cy="20" r="20" fill="rgba(99,102,241,0.2)" />
    <circle cx="20" cy="20" r="12" fill="none" stroke="#818cf8" strokeWidth="2.5" />
    <circle cx="20" cy="20" r="4" fill="#818cf8" />
  </svg>
);

const navIcon = (children) => (
  <svg className="nav-icon" viewBox="0 0 24 24">{children}</svg>
);

export default function SidebarPage() {
  const [isCompact, setIsCompact] = useState(false);

  return (
    <div>
      <PageHeader
        title="Sidebar"
        subtitle="Glass sidebar wrapper with brand, nav sections, and footer areas."
        cssFile="glass.css"
      />

      <section className="glass p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-semibold mb-0" style={{ fontSize: '1.1rem' }}>Interactive Preview</h2>
        </div>
        <div 
          style={{ minHeight: 620, position: 'relative', overflow: 'hidden', borderRadius: 20, border: '1px solid var(--glass-border)', transition: 'all 0.3s' }} 
          className={isCompact ? 'layout-compact' : ''}
        >
          <Sidebar
            active
            id="sidebar-demo"
            style={{ position: 'absolute', top: '1rem', left: '1rem', bottom: '1rem' }}
          >
            <Sidebar.Top>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <Sidebar.Brand as={Link} to="/" style={{ marginBottom: 0 }}>
                  {sidebarIcon}
                  <span className="link-text">Aura UI</span>
                </Sidebar.Brand>
                <button 
                  className="btn btn-sm btn-icon border-0 bg-transparent text-muted compact-toggle d-flex align-items-center justify-content-center p-1"
                  onClick={() => setIsCompact(!isCompact)}
                  title={isCompact ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
              </div>

              <Sidebar.Nav>
                <Sidebar.Section>Workspace</Sidebar.Section>
                <a href="#overview" className="active" title={isCompact ? "Overview" : undefined}>
                  {navIcon(<path d="M3 12h18M3 6h18M3 18h12" />)}
                  <span className="link-text">Overview</span>
                </a>
                <a href="#members" title={isCompact ? "Members" : undefined}>
                  {navIcon(<><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>)}
                  <span className="link-text">Members</span>
                </a>
                <a href="#billing" title={isCompact ? "Billing" : undefined}>
                  {navIcon(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />)}
                  <span className="link-text">Billing</span>
                </a>

                <Sidebar.Section>Library</Sidebar.Section>
                <a href="#components" title={isCompact ? "Components" : undefined}>
                  {navIcon(<rect x="3" y="9" width="18" height="6" rx="2" />)}
                  <span className="link-text">Components</span>
                </a>
                <a href="#themes" title={isCompact ? "Sidebar" : undefined}>
                  {navIcon(<><rect x="3" y="4" width="6" height="16" rx="2" /><rect x="11" y="6" width="10" height="3" rx="1.5" /><rect x="11" y="11" width="8" height="3" rx="1.5" /><rect x="11" y="16" width="9" height="3" rx="1.5" /></>)}
                  <span className="link-text">Sidebar</span>
                </a>
              </Sidebar.Nav>
            </Sidebar.Top>

            <Sidebar.Footer>
              <div className="user-profile">
                <div
                  className="user-avatar"
                  title={isCompact ? "Aura UI Profile" : undefined}
                  style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '.8rem' }}
                >
                  AU
                </div>
                <div className="user-info">
                  <span className="user-name">Aura UI</span>
                  <span className="user-role">Component Demo</span>
                </div>
              </div>
              <button className="theme-toggle border-0 bg-transparent text-muted text-start mt-2" title={isCompact ? "Light Mode" : undefined}>
                <svg className="nav-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="link-text">Dark Mode</span>
              </button>
            </Sidebar.Footer>
          </Sidebar>

          <div style={{ padding: '1.5rem', transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)', marginLeft: isCompact ? '88px' : '240px' }} className="h-100 d-flex flex-column">
            <div className="card" style={{ maxWidth: '600px', margin: 'auto' }}>
              <div className="card-body p-4 p-md-5 text-center">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                  <line x1="9" y1="4" x2="9" y2="20"></line>
                </svg>
                <h3 className="card-title fw-bold">Interactive Preview</h3>
                <p className="card-text text-muted mb-4">
                  Click the <strong>collapse indicator</strong> inside the sidebar brand layout to smoothly animate between the full interface and the compact 88px icon view.
                </p>
                <Button variant={isCompact ? 'outline-primary' : 'primary'} onClick={() => setIsCompact(!isCompact)}>
                  {isCompact ? 'Expand Layout' : 'Collapse Layout'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Sidebar } from '@devadigax/aura-ui';\n\n<div className={isCompact ? 'layout-compact' : ''}>\n  <Sidebar>\n    <Sidebar.Top>\n      <Sidebar.Brand href="/">Brand</Sidebar.Brand>\n      <Sidebar.Nav>\n        <Sidebar.Section>Navigation</Sidebar.Section>\n        <a href="#overview"><span className="link-text">Overview</span></a>\n      </Sidebar.Nav>\n    </Sidebar.Top>\n    <Sidebar.Footer>Footer content</Sidebar.Footer>\n  </Sidebar>\n</div>`}
        </div>
      </section>
    </div>
  );
}
