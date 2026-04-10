import React from 'react';
import PageHeader from '../PageHeader';

const bars = [
  { label:'Primary',            pct:75, cls:'progress-bar-primary',  size:'' },
  { label:'Success',            pct:60, cls:'progress-bar-success',  size:'' },
  { label:'Warning',            pct:40, cls:'progress-bar-warning',  size:'' },
  { label:'Danger',             pct:30, cls:'progress-bar-danger',   size:'' },
  { label:'Gradient Animated',  pct:85, cls:'progress-bar-gradient progress-bar-animated progress-bar-striped', size:'progress-lg' },
];

export default function ProgressPage() {
  return (
    <div>
      <PageHeader title="Progress" subtitle="Progress bars in solid colours, gradient, animated stripes, and stacked." cssFile="progress.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Variants</h2>
        <div className="vstack gap-3">
          {bars.map(({ label, pct, cls, size }) => (
            <div key={label}>
              <div className="progress-label">
                <span>{label}</span>
                <span className="progress-label-value">{pct}%</span>
              </div>
              <div className={`progress${size ? ' '+size : ''}`}>
                <div className={`progress-bar ${cls}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}

          <div>
            <div className="progress-label"><span>Stacked</span></div>
            <div className="progress progress-stacked" id="progress-stacked">
              <div className="progress-bar progress-bar-primary"  style={{ width:'40%' }}/>
              <div className="progress-bar progress-bar-success"  style={{ width:'25%' }}/>
              <div className="progress-bar progress-bar-warning"  style={{ width:'15%' }}/>
            </div>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="progress">\n  <div class="progress-bar progress-bar-primary" style="width:75%"></div>\n</div>\n\n<!-- Animated -->\n<div class="progress progress-lg">\n  <div class="progress-bar progress-bar-gradient progress-bar-animated" style="width:85%"></div>\n</div>`}
        </div>
      </section>
    </div>
  );
}

