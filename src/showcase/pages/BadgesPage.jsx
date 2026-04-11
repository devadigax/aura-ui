import React from 'react';
import PageHeader from '../PageHeader';
import { Badge } from '../../index';

export default function BadgesPage() {
  return (
    <div>
      <PageHeader title="Badges" subtitle="Compact badges, pills, dots, and solid colour variants." cssFile="badge.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Default Badges</h2>
        <div className="badge-group">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
            <Badge key={variant} variant={variant} id={`badge-${variant}`}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Badge>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Pill Badges</h2>
        <div className="badge-group">
          {['primary', 'success', 'danger', 'warning', 'info'].map((variant) => (
            <Badge key={variant} variant={variant} pill id={`badge-pill-${variant}`}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Badge>
          ))}
          <Badge variant="warning" pill>12</Badge>
          <Badge variant="info" pill>99+</Badge>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Solid Badges</h2>
        <div className="badge-group">
          {['primary', 'success', 'danger', 'warning'].map((variant) => (
            <Badge key={variant} variant={variant} solid id={`badge-solid-${variant}`}>
              Solid {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Badge>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Dot Indicators</h2>
        <div className="badge-group align-items-center" style={{ gap: '1rem' }}>
          {['danger', 'success', 'warning', 'primary'].map((variant) => (
            <Badge key={variant} variant={variant} dot id={`badge-dot-${variant}`} />
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Badge } from 'aura-ui';\n\n<Badge variant="primary">Default</Badge>\n<Badge variant="success" pill>Pill</Badge>\n<Badge variant="danger" solid>Solid</Badge>`}
        </div>
      </section>
    </div>
  );
}
