import React from 'react';

export default function PageHeader({ title, subtitle, cssFile }) {
  return (
    <div className="glass p-4 mb-4" style={{ borderBottom: '1px solid var(--glass-border)' }}>
      <div className="badge-group mb-2">
        <span className="badge badge-primary badge-pill">Component</span>
        {cssFile && <code style={{ fontSize: '0.8rem' }}>components/{cssFile}</code>}
      </div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.4rem' }}>{title}</h1>
      {subtitle && <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{subtitle}</p>}
    </div>
  );
}

