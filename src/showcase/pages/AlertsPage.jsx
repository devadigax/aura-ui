import React, { useState } from 'react';
import PageHeader from '../PageHeader';

export default function AlertsPage() {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div>
      <PageHeader title="Alerts" subtitle="Contextual feedback messages with optional icons and dismissal." cssFile="alerts.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>All Variants</h2>

        <div className="alert alert-primary" id="alert-primary">
          <svg className="alert-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/></svg>
          <div><strong className="alert-heading">Primary!</strong> A primary informational alert — <a href="#" className="alert-link">check it out</a>.</div>
        </div>

        <div className="alert alert-success" id="alert-success">
          <svg className="alert-icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <div><strong className="alert-heading">Success!</strong> Your action completed successfully.</div>
        </div>

        <div className="alert alert-warning" id="alert-warning">
          <svg className="alert-icon" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
          <div><strong className="alert-heading">Warning!</strong> Something needs your attention.</div>
        </div>

        {!dismissed && (
          <div className="alert alert-danger alert-dismissible" id="alert-danger">
            <svg className="alert-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            <div><strong className="alert-heading">Danger!</strong> Something went wrong — this is a dismissible alert.</div>
            <button className="btn-close" onClick={() => setDismissed(true)} aria-label="Close">
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        )}
        {dismissed && (
          <div className="alert alert-info mb-0" id="alert-info">
            <svg className="alert-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div>Danger alert was dismissed. Info alert with a longer description to show line wrapping in a real scenario.</div>
          </div>
        )}
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="alert alert-success">\n  <strong class="alert-heading">Done!</strong> Your file was saved.\n</div>\n\n<!-- Dismissible -->\n<div class="alert alert-danger alert-dismissible">\n  <strong class="alert-heading">Error</strong> Something failed.\n  <button class="btn-close" …>…</button>\n</div>`}
        </div>
      </section>
    </div>
  );
}

