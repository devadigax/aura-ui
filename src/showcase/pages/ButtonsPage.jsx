import React from 'react';
import { Button } from '../../index';
import PageHeader from '../PageHeader';

export default function ButtonsPage() {
  return (
    <div>
      <PageHeader
        title="Buttons"
        subtitle="React button wrapper with solid, outline, ghost, loading, and size variants."
        cssFile="button.css"
      />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Solid Variants</h2>
        <p className="text-muted mb-3">Use <code>variant</code> to select the button style.</p>
        <div className="hstack gap-2 flex-wrap">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'ghost'].map((variant) => (
            <Button key={variant} variant={variant} id={`btn-${variant}`}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Outline Variants</h2>
        <p className="text-muted mb-3">Prefix the variant with <code>outline-</code>.</p>
        <div className="hstack gap-2 flex-wrap">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map((variant) => (
            <Button key={variant} variant={`outline-${variant}`} id={`btn-outline-${variant}`}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Sizes</h2>
        <p className="text-muted mb-3">Use <code>size</code> with <code>sm</code> or <code>lg</code>.</p>
        <div className="hstack gap-2 align-items-center flex-wrap">
          <Button variant="primary" size="sm" id="btn-sm">Small</Button>
          <Button variant="primary" id="btn-default">Default</Button>
          <Button variant="primary" size="lg" id="btn-lg">Large</Button>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>States</h2>
        <p className="text-muted mb-3">Loading and disabled states are built into the wrapper.</p>
        <div className="hstack gap-2 flex-wrap">
          <Button variant="primary" loading id="btn-loading">Loading</Button>
          <Button variant="primary" disabled id="btn-disabled">Disabled</Button>
          <Button variant="outline-danger" disabled id="btn-disabled-outline">Disabled Outline</Button>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Close Button</h2>
        <p className="text-muted mb-3">Use <code>className="btn-close"</code> for a dismiss control.</p>
        <button className="btn-close" aria-label="Close" id="btn-close">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>Button Groups</h2>
        <p className="text-muted mb-3">Use raw <code>.btn-group</code> or <code>.btn-group-vertical</code> wrappers for grouped layouts.</p>
        <div className="vstack gap-3">
          <div className="btn-group" id="btn-group-horizontal">
            <button className="btn btn-secondary active">Left</button>
            <button className="btn btn-secondary">Middle</button>
            <button className="btn btn-secondary">Right</button>
          </div>
          <div className="btn-group btn-group-sm" id="btn-group-time">
            {['Day', 'Week', 'Month', 'Year'].map((label) => (
              <button key={label} className={`btn btn-outline-primary${label === 'Day' ? ' active' : ''}`}>{label}</button>
            ))}
          </div>
          <div className="btn-group-vertical" style={{ width: 120 }} id="btn-group-vertical">
            {['Top', 'Middle', 'Bottom'].map((label) => (
              <button key={label} className="btn btn-secondary">{label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Button } from 'aura-ui';\n\n<Button variant="primary" size="lg">Get Started</Button>\n<Button variant="outline-primary">Learn More</Button>\n<Button variant="success" loading>Saving...</Button>\n<Button variant="secondary" disabled>Disabled</Button>`}
        </div>
      </section>
    </div>
  );
}
