import React from 'react';

export default function PageHeader({ title, subtitle, cssFile, badgeText = "Component", pathPrefix = "components/", rightContent }) {
  return (
    <div className="glass p-4 mb-4" style={{ borderBottom: '1px solid var(--glass-border)' }}>
      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
        <div>
          <div className="badge-group mb-2">
            <span className="badge badge-primary badge-pill">{badgeText}</span>
            {cssFile && <code style={{ fontSize: '0.8rem' }}>{pathPrefix}{cssFile}</code>}
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.4rem' }}>{title}</h1>
          {subtitle && <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{subtitle}</p>}
        </div>
        {rightContent && <div className="mt-2 mt-sm-0">{rightContent}</div>}
      </div>
    </div>
  );
}

