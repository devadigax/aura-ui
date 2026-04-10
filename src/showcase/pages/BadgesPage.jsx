import React from 'react';
import PageHeader from '../PageHeader';

export default function BadgesPage() {
  return (
    <div>
      <PageHeader title="Badges" subtitle="Compact badges, pills, dots, and solid colour variants." cssFile="badge.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Default Badges</h2>
        <div className="badge-group">
          {['primary','secondary','success','danger','warning','info','light','dark'].map(v => (
            <span key={v} className={`badge badge-${v}`} id={`badge-${v}`}>{v.charAt(0).toUpperCase()+v.slice(1)}</span>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Pill Badges</h2>
        <div className="badge-group">
          {['primary','success','danger','warning','info'].map(v => (
            <span key={v} className={`badge badge-${v} badge-pill`} id={`badge-pill-${v}`}>{v.charAt(0).toUpperCase()+v.slice(1)}</span>
          ))}
          <span className="badge badge-warning badge-pill">12</span>
          <span className="badge badge-info badge-pill">99+</span>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Solid Badges</h2>
        <div className="badge-group">
          {['primary','success','danger','warning'].map(v => (
            <span key={v} className={`badge badge-solid-${v}`} id={`badge-solid-${v}`}>Solid {v.charAt(0).toUpperCase()+v.slice(1)}</span>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Dot Indicators</h2>
        <div className="badge-group align-items-center" style={{ gap: '1rem' }}>
          {['danger','success','warning','primary'].map(v => (
            <span key={v} className={`badge badge-dot badge-${v}`} id={`badge-dot-${v}`} />
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<span class="badge badge-primary">Default</span>\n<span class="badge badge-success badge-pill">Pill</span>\n<span class="badge badge-solid-danger">Solid</span>\n<span class="badge badge-dot badge-warning"></span>`}
        </div>
      </section>
    </div>
  );
}

