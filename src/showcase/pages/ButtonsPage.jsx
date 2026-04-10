import React from 'react';
import { Button } from '../../index';
import PageHeader from '../PageHeader';

export default function ButtonsPage() {
  return (
    <div>
      <PageHeader
        title="Buttons"
        subtitle="Solid, outline, ghost, loading, icon, and size variants — all powered by .btn class utilities."
        cssFile="button.css"
      />

      {/* Solid */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Solid Variants</h2>
        <p className="text-muted mb-3">Use <code>variant</code> prop to select colour.</p>
        <div className="hstack gap-2 flex-wrap">
          {['primary','secondary','success','danger','warning','info','light','dark','ghost'].map(v => (
            <Button key={v} variant={v} id={`btn-${v}`}>{v.charAt(0).toUpperCase()+v.slice(1)}</Button>
          ))}
        </div>
      </section>

      {/* Outline */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Outline Variants</h2>
        <p className="text-muted mb-3">Prefix variant with <code>outline-</code>.</p>
        <div className="hstack gap-2 flex-wrap">
          {['primary','secondary','success','danger','warning','info'].map(v => (
            <Button key={v} variant={`outline-${v}`} id={`btn-outline-${v}`}>{v.charAt(0).toUpperCase()+v.slice(1)}</Button>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Sizes</h2>
        <p className="text-muted mb-3">Use <code>size</code> prop: <code>sm</code>, <code>default</code>, <code>lg</code>.</p>
        <div className="hstack gap-2 align-items-center flex-wrap">
          <Button variant="primary" size="sm" id="btn-sm">Small</Button>
          <Button variant="primary" id="btn-default">Default</Button>
          <Button variant="primary" size="lg" id="btn-lg">Large</Button>
        </div>
      </section>

      {/* States */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>States</h2>
        <p className="text-muted mb-3">Loading spinner and disabled state.</p>
        <div className="hstack gap-2 flex-wrap">
          <Button variant="primary" loading id="btn-loading">Loading</Button>
          <Button variant="primary" disabled id="btn-disabled">Disabled</Button>
          <Button variant="outline-danger" disabled id="btn-disabled-outline">Disabled Outline</Button>
        </div>
      </section>

      {/* Close button */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Close Button</h2>
        <p className="text-muted mb-3">Use <code>className="btn-close"</code> for a dismiss ×.</p>
        <button className="btn-close" aria-label="Close" id="btn-close">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </section>

      {/* Button Groups */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Button Groups</h2>
        <p className="text-muted mb-3">Use raw <code>.btn-group</code> or <code>.btn-group-vertical</code> wrapper.</p>
        <div className="vstack gap-3">
          <div className="btn-group" id="btn-group-horizontal">
            <button className="btn btn-secondary active">Left</button>
            <button className="btn btn-secondary">Middle</button>
            <button className="btn btn-secondary">Right</button>
          </div>
          <div className="btn-group btn-group-sm" id="btn-group-time">
            {['Day','Week','Month','Year'].map(l => (
              <button key={l} className={`btn btn-outline-primary${l==='Day'?' active':''}`}>{l}</button>
            ))}
          </div>
          <div className="btn-group-vertical" style={{ width: 120 }} id="btn-group-vertical">
            {['Top','Middle','Bottom'].map(l => (
              <button key={l} className="btn btn-secondary">{l}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 10, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.82rem', color: '#c4b5fd', overflowX: 'auto' }}>
          {`import { Button } from 'aura-ui';\n\n<Button variant="primary" size="lg">Click me</Button>\n<Button variant="outline-danger" loading>Submitting…</Button>\n<Button variant="secondary" disabled>Disabled</Button>`}
        </div>
      </section>
    </div>
  );
}

