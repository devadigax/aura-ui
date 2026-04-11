import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Button, Nav, Navbar } from '../../index';

export default function NavsPage() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <PageHeader title="Navs & Tabs" subtitle="Pills, border tabs, underline nav, and themed navbar." cssFile="navs-tabs.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Navbar</h2>
        <Navbar style={{ borderRadius: 12, position: 'relative', zIndex: 10 }}>
          <a href="#" className="navbar-brand" id="navbar-brand">
            <svg viewBox="0 0 32 32" width="24" height="24">
              <circle cx="16" cy="16" r="16" fill="rgba(99,102,241,0.2)" />
              <circle cx="16" cy="16" r="8" fill="none" stroke="#818cf8" strokeWidth="2" />
            </svg>
            Brand
          </a>
          <div className="navbar-collapse open">
            <Nav variant="navbar-underline">
              <li className="navbar-item"><Nav.Link as="a" href="#" active id="nav-link-home">Home</Nav.Link></li>
              <li className="navbar-item"><Nav.Link as="a" href="#" id="nav-link-products">Products</Nav.Link></li>
              <li className="navbar-item"><Nav.Link as="a" href="#" id="nav-link-docs">Docs</Nav.Link></li>
            </Nav>
            <div className="navbar-end">
              <Button variant="primary" size="sm" id="navbar-cta">Sign In</Button>
            </div>
          </div>
        </Navbar>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Pills (with tab content)</h2>
        <Nav className="mb-3" variant="pills" id="pill-nav-demo">
          {[
            { id: 'tab1', label: 'Overview' },
            { id: 'tab2', label: 'Features', badge: '3' },
            { id: 'tab3', label: 'Settings' },
          ].map(({ id, label, badge }) => (
            <Nav.Item key={id}>
              <Nav.Link id={`pill-${id}`} active={activeTab === id} onClick={() => setActiveTab(id)}>
                {label}
                {badge ? <span className="nav-badge">{badge}</span> : null}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Nav.Item>
            <Nav.Link disabled id="pill-billing">Billing</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="tab-content">
          <div className={`tab-pane${activeTab === 'tab1' ? ' active' : ''}`} id="tab-overview">
            <p className="text-muted">Overview content - describes the product at a high level. Smooth fade-in transition when switching tabs.</p>
          </div>
          <div className={`tab-pane${activeTab === 'tab2' ? ' active' : ''}`} id="tab-features">
            <p className="text-muted">Feature content - highlights key capabilities and differentiators of the component library.</p>
          </div>
          <div className={`tab-pane${activeTab === 'tab3' ? ' active' : ''}`} id="tab-settings">
            <p className="text-muted">Settings content - configure your preferences, themes, and integration options here.</p>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Border Tabs</h2>
        <Nav variant="tabs" id="border-tabs-demo">
          {['Profile', 'Security', 'Notifications'].map((label, index) => (
            <Nav.Item key={label}>
              <Nav.Link active={index === 0} id={`tab-border-${label.toLowerCase()}`}>{label}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Underline Nav</h2>
        <Nav variant="underline" id="underline-nav-demo">
          {['All', 'Active', 'Draft', 'Archived'].map((label, index) => (
            <Nav.Item key={label}>
              <Nav.Link active={index === 0} id={`nav-underline-${label.toLowerCase()}`}>{label}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Nav } from 'aura-ui';\n\n<Nav variant="pills">\n  <Nav.Item><Nav.Link active>Tab 1</Nav.Link></Nav.Item>\n</Nav>`}
        </div>
      </section>
    </div>
  );
}
