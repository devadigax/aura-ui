import React from 'react';
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
  return (
    <div>
      <PageHeader
        title="Sidebar"
        subtitle="Glass sidebar wrapper with brand, nav sections, and footer areas."
        cssFile="glass.css"
      />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Default Sidebar</h2>
        <div style={{ minHeight: 620, position: 'relative', overflow: 'hidden', borderRadius: 20, border: '1px solid var(--glass-border)' }}>
          <Sidebar
            active
            id="sidebar-demo"
            style={{ position: 'absolute', top: '1rem', left: '1rem', bottom: '1rem' }}
          >
            <Sidebar.Top>
              <Sidebar.Brand as={Link} to="/">
                {sidebarIcon}
                <span>Aura UI</span>
              </Sidebar.Brand>

              <Sidebar.Nav>
                <Sidebar.Section>Workspace</Sidebar.Section>
                <a href="#overview" className="active">
                  {navIcon(<path d="M3 12h18M3 6h18M3 18h12" />)}
                  Overview
                </a>
                <a href="#members">
                  {navIcon(<><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>)}
                  Members
                </a>
                <a href="#billing">
                  {navIcon(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />)}
                  Billing
                </a>

                <Sidebar.Section>Library</Sidebar.Section>
                <a href="#components">
                  {navIcon(<rect x="3" y="9" width="18" height="6" rx="2" />)}
                  Components
                  <Badge variant="primary" pill className="ms-auto">24</Badge>
                </a>
                <a href="#themes">
                  {navIcon(<><rect x="3" y="4" width="6" height="16" rx="2" /><rect x="11" y="6" width="10" height="3" rx="1.5" /><rect x="11" y="11" width="8" height="3" rx="1.5" /><rect x="11" y="16" width="9" height="3" rx="1.5" /></>)}
                  Sidebar
                </a>
              </Sidebar.Nav>
            </Sidebar.Top>

            <Sidebar.Footer>
              <div className="user-profile">
                <div
                  className="user-avatar"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '.8rem' }}
                >
                  AU
                </div>
                <div className="user-info">
                  <span className="user-name">Aura UI</span>
                  <span className="user-role">Component Demo</span>
                </div>
              </div>
              <Button variant="outline-primary">Open Settings</Button>
            </Sidebar.Footer>
          </Sidebar>

          <div style={{ marginLeft: 290, padding: '1.5rem' }}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Sidebar Preview</h3>
                <p className="card-text">
                  This demo renders the sidebar wrapper in-place so you can preview the layout without replacing the showcase navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Sidebar } from '@devadigax/aura-ui';\n\n<Sidebar>\n  <Sidebar.Top>\n    <Sidebar.Brand href="/">Brand</Sidebar.Brand>\n    <Sidebar.Nav>\n      <Sidebar.Section>Navigation</Sidebar.Section>\n      <a href="#overview">Overview</a>\n    </Sidebar.Nav>\n  </Sidebar.Top>\n  <Sidebar.Footer>Footer content</Sidebar.Footer>\n</Sidebar>`}
        </div>
      </section>
    </div>
  );
}
