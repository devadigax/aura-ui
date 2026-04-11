import React from 'react';
import PageHeader from '../PageHeader';

export default function HelpersPage() {
  return (
    <div>
      <PageHeader
        title="Helpers & Utilities"
        subtitle="Utility classes for layout, color, aspect ratios, text truncation, links, and glass surfaces."
        cssFile="helpers.css"
      />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Color Helpers</h2>
        <div className="hstack gap-3 flex-wrap">
          <span className="badge text-bg-primary">Primary</span>
          <span className="badge text-bg-success">Success</span>
          <span className="badge text-bg-danger">Danger</span>
          <span className="badge text-bg-warning">Warning</span>
          <span className="badge text-bg-info">Info</span>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Aspect Ratios</h2>
        <div className="card-grid card-grid-2">
          <div className="ratio ratio-16x9 rounded-lg overflow-hidden">
            <div className="bg-glass d-flex align-items-center justify-content-center text-muted">16 x 9</div>
          </div>
          <div className="ratio ratio-1x1 rounded-lg overflow-hidden">
            <div className="bg-primary d-flex align-items-center justify-content-center text-body">1 x 1</div>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Links And Text</h2>
        <div className="vstack gap-3">
          <a href="#" className="icon-link">
            Read documentation
            <svg className="icon-link-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          <div className="glass p-3 rounded-lg" style={{ maxWidth: 280 }}>
            <p className="text-truncate mb-0">This is a long helper text block that gets truncated neatly when the container is narrow.</p>
          </div>
          <div className="hstack gap-3 align-items-center">
            <a href="#" className="link-primary">Primary Link</a>
            <div className="vr" style={{ height: 20 }} />
            <a href="#" className="link-success">Success Link</a>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Layout Utilities</h2>
        <div className="hstack gap-3 flex-wrap">
          <div className="glass p-3 rounded-lg shadow-glass text-center w-25">`w-25`</div>
          <div className="glass p-3 rounded-lg shadow-glass text-center w-25">`rounded-lg`</div>
          <div className="glass p-3 rounded-lg shadow-glass text-center w-25">`shadow-glass`</div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import '@devadigax/aura-ui/style.css';\n\n<div className="ratio ratio-16x9 rounded-lg overflow-hidden">\n  <div className="bg-glass d-flex align-items-center justify-content-center">Media</div>\n</div>`}
        </div>
      </section>
    </div>
  );
}
