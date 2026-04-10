import React from 'react';
import PageHeader from '../PageHeader';

export default function SpinnersPage() {
  return (
    <div>
      <PageHeader title="Spinners" subtitle="Border, grow, dots, and ring loading indicators in all sizes and colours." cssFile="spinners.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Types</h2>
        <div className="hstack gap-4 flex-wrap align-items-center">
          {[
            { cls: 'spinner-border', label: 'Border' },
            { cls: 'spinner-grow',   label: 'Grow' },
            { cls: 'spinner-dots',   label: 'Dots' },
            { cls: 'spinner-ring',   label: 'Ring' },
          ].map(({ cls, label }) => (
            <div key={label} className="vstack gap-2 align-items-center">
              <div className={`${cls} spinner-primary`} id={`spinner-${label.toLowerCase()}`} />
              <small className="text-muted">{label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Colours</h2>
        <div className="hstack gap-3 flex-wrap align-items-center">
          {['primary','success','danger','warning','info'].map(c => (
            <div key={c} className="vstack gap-2 align-items-center">
              <div className={`spinner-border spinner-${c}`} id={`spinner-color-${c}`} />
              <small className="text-muted" style={{ textTransform:'capitalize' }}>{c}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Sizes</h2>
        <div className="hstack gap-4 align-items-center">
          <div className="vstack gap-2 align-items-center">
            <div className="spinner-border spinner-primary spinner-sm" id="spinner-sm" />
            <small className="text-muted">Small</small>
          </div>
          <div className="vstack gap-2 align-items-center">
            <div className="spinner-border spinner-primary" id="spinner-default" />
            <small className="text-muted">Default</small>
          </div>
          <div className="vstack gap-2 align-items-center">
            <div className="spinner-border spinner-primary spinner-lg" id="spinner-lg" />
            <small className="text-muted">Large</small>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>In Buttons</h2>
        <div className="hstack gap-3 flex-wrap">
          <button className="btn btn-primary hstack gap-2" id="btn-spinner-1">
            <div className="spinner-border spinner-white spinner-sm" />
            Loading…
          </button>
          <button className="btn btn-outline-primary hstack gap-2" id="btn-spinner-2">
            <div className="spinner-dots spinner-primary spinner-sm" />
            Processing
          </button>
          <button className="btn btn-success hstack gap-2" id="btn-spinner-3">
            <div className="spinner-ring spinner-white spinner-sm" />
            Saving
          </button>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="spinner-border spinner-primary"></div>\n<div class="spinner-grow spinner-success spinner-sm"></div>\n<div class="spinner-dots spinner-danger spinner-lg"></div>`}
        </div>
      </section>
    </div>
  );
}

