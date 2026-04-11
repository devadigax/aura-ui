import React from 'react';
import PageHeader from '../PageHeader';
import { Button, Spinner } from '../../index';

export default function SpinnersPage() {
  return (
    <div>
      <PageHeader title="Spinners" subtitle="Border, grow, dots, and ring loading indicators in all sizes and colours." cssFile="spinners.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Types</h2>
        <div className="hstack gap-4 flex-wrap align-items-center">
          {[
            { type: 'border', label: 'Border' },
            { type: 'grow', label: 'Grow' },
            { type: 'dots', label: 'Dots' },
            { type: 'ring', label: 'Ring' },
          ].map(({ type, label }) => (
            <div key={label} className="vstack gap-2 align-items-center">
              <Spinner type={type} variant="primary" id={`spinner-${label.toLowerCase()}`} />
              <small className="text-muted">{label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Colours</h2>
        <div className="hstack gap-3 flex-wrap align-items-center">
          {['primary', 'success', 'danger', 'warning', 'info'].map((variant) => (
            <div key={variant} className="vstack gap-2 align-items-center">
              <Spinner type="border" variant={variant} id={`spinner-color-${variant}`} />
              <small className="text-muted" style={{ textTransform: 'capitalize' }}>{variant}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Sizes</h2>
        <div className="hstack gap-4 align-items-center">
          <div className="vstack gap-2 align-items-center">
            <Spinner type="border" variant="primary" size="sm" id="spinner-sm" />
            <small className="text-muted">Small</small>
          </div>
          <div className="vstack gap-2 align-items-center">
            <Spinner type="border" variant="primary" id="spinner-default" />
            <small className="text-muted">Default</small>
          </div>
          <div className="vstack gap-2 align-items-center">
            <Spinner type="border" variant="primary" size="lg" id="spinner-lg" />
            <small className="text-muted">Large</small>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>In Buttons</h2>
        <div className="hstack gap-3 flex-wrap">
          <Button variant="primary" className="hstack gap-2" id="btn-spinner-1">
            <Spinner type="border" variant="white" size="sm" />
            Loading…
          </Button>
          <Button variant="outline-primary" className="hstack gap-2" id="btn-spinner-2">
            <Spinner type="dots" variant="primary" size="sm" />
            Processing
          </Button>
          <Button variant="success" className="hstack gap-2" id="btn-spinner-3">
            <Spinner type="ring" variant="white" size="sm" />
            Saving
          </Button>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Spinner } from 'aura-ui';\n\n<Spinner type="border" variant="primary" />\n<Spinner type="grow" variant="success" size="sm" />`}
        </div>
      </section>
    </div>
  );
}
