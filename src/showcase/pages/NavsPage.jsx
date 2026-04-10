import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Button } from '../../index';

export default function NavsPage() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <PageHeader title="Navs & Tabs" subtitle="Pills, border tabs, underline nav, and themed navbar." cssFile="navs-tabs.css" />

      {/* Navbar */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Navbar</h2>
        <nav className="navbar navbar-glass" style={{ borderRadius:12, position:'relative', zIndex:10 }}>
          <a href="#" className="navbar-brand" id="navbar-brand">
            <svg viewBox="0 0 32 32" width="24" height="24">
              <circle cx="16" cy="16" r="16" fill="rgba(99,102,241,0.2)"/>
              <circle cx="16" cy="16" r="8" fill="none" stroke="#818cf8" strokeWidth="2"/>
            </svg>
            Brand
          </a>
          <div className="navbar-collapse open">
            <ul className="navbar-nav navbar-underline">
              <li className="navbar-item"><a href="#" className="navbar-link active" id="nav-link-home">Home</a></li>
              <li className="navbar-item"><a href="#" className="navbar-link" id="nav-link-products">Products</a></li>
              <li className="navbar-item"><a href="#" className="navbar-link" id="nav-link-docs">Docs</a></li>
            </ul>
            <div className="navbar-end">
              <Button variant="primary" size="sm" id="navbar-cta">Sign In</Button>
            </div>
          </div>
        </nav>
      </section>

      {/* Pills Tabs */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Pills (with tab content)</h2>
        <ul className="nav nav-pills mb-3" id="pill-nav-demo">
          {[
            { id:'tab1', label:'Overview' },
            { id:'tab2', label:'Features', badge:'3' },
            { id:'tab3', label:'Settings' },
          ].map(({ id, label, badge }) => (
            <li key={id} className="nav-item">
              <button
                id={`pill-${id}`}
                className={`nav-link${activeTab === id ? ' active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {label}
                {badge && <span className="nav-badge">{badge}</span>}
              </button>
            </li>
          ))}
          <li className="nav-item">
            <button className="nav-link" disabled id="pill-billing">Billing</button>
          </li>
        </ul>
        <div className="tab-content">
          <div className={`tab-pane${activeTab === 'tab1' ? ' active' : ''}`} id="tab-overview">
            <p className="text-muted">Overview content — describes the product at a high level. Smooth fade-in transition when switching tabs.</p>
          </div>
          <div className={`tab-pane${activeTab === 'tab2' ? ' active' : ''}`} id="tab-features">
            <p className="text-muted">Feature content — highlights key capabilities and differentiators of the component library.</p>
          </div>
          <div className={`tab-pane${activeTab === 'tab3' ? ' active' : ''}`} id="tab-settings">
            <p className="text-muted">Settings content — configure your preferences, themes, and integration options here.</p>
          </div>
        </div>
      </section>

      {/* Border Tabs */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Border Tabs</h2>
        <ul className="nav nav-tabs" id="border-tabs-demo">
          {['Profile','Security','Notifications'].map((l, i) => (
            <li key={l} className="nav-item">
              <button className={`nav-link${i === 0 ? ' active' : ''}`} id={`tab-border-${l.toLowerCase()}`}>{l}</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Underline */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Underline Nav</h2>
        <ul className="nav nav-underline" id="underline-nav-demo">
          {['All','Active','Draft','Archived'].map((l, i) => (
            <li key={l} className="nav-item">
              <button className={`nav-link${i === 0 ? ' active' : ''}`} id={`nav-underline-${l.toLowerCase()}`}>{l}</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<ul class="nav nav-pills">\n  <li class="nav-item"><button class="nav-link active">Tab 1</button></li>\n  <li class="nav-item"><button class="nav-link">Tab 2</button></li>\n</ul>\n\n<ul class="nav nav-tabs"> … </ul>\n<ul class="nav nav-underline"> … </ul>`}
        </div>
      </section>
    </div>
  );
}

