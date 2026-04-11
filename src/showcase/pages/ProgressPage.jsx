import React from 'react';
import PageHeader from '../PageHeader';
import { Progress } from '../../index';

const bars = [
  { label: 'Primary', pct: 75, variant: 'primary' },
  { label: 'Success', pct: 60, variant: 'success' },
  { label: 'Warning', pct: 40, variant: 'warning' },
  { label: 'Danger', pct: 30, variant: 'danger' },
  { label: 'Gradient Animated', pct: 85, gradient: true, animated: true, striped: true, size: 'progress-lg' },
];

export default function ProgressPage() {
  return (
    <div>
      <PageHeader title="Progress" subtitle="Progress bars in solid colours, gradient, animated stripes, and stacked." cssFile="progress.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Variants</h2>
        <div className="vstack gap-3">
          {bars.map(({ label, pct, variant, gradient, animated, striped, size }) => (
            <div key={label}>
              <div className="progress-label">
                <span>{label}</span>
                <span className="progress-label-value">{pct}%</span>
              </div>
              <Progress className={size}>
                <Progress.Bar value={pct} variant={variant} gradient={gradient} animated={animated} striped={striped} />
              </Progress>
            </div>
          ))}

          <div>
            <div className="progress-label"><span>Stacked</span></div>
            <Progress stacked id="progress-stacked">
              <Progress.Bar value={40} variant="primary" />
              <Progress.Bar value={25} variant="success" />
              <Progress.Bar value={15} variant="warning" />
            </Progress>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Progress } from 'aura-ui';\n\n<Progress>\n  <Progress.Bar value={75} variant="primary" />\n</Progress>`}
        </div>
      </section>
    </div>
  );
}
