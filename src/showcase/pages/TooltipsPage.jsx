import React from 'react';
import PageHeader from '../PageHeader';
import { Badge, Button, Tooltip } from '../../index';

export default function TooltipsPage() {
  return (
    <div>
      <PageHeader title="Tooltips" subtitle="CSS-only directional tooltips on any element via data-tooltip attribute." cssFile="tooltips.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Directional Variants</h2>
        <div className="hstack gap-4 flex-wrap" style={{ padding: '2rem 0' }}>
          <Tooltip text="Tooltip on top" position="top" id="tooltip-top"><Button variant="secondary">Top</Button></Tooltip>
          <Tooltip text="Tooltip on bottom" position="bottom" id="tooltip-bottom"><Button variant="secondary">Bottom</Button></Tooltip>
          <Tooltip text="Tooltip on left" position="left" id="tooltip-left"><Button variant="secondary">Left</Button></Tooltip>
          <Tooltip text="Tooltip on right" position="right" id="tooltip-right"><Button variant="secondary">Right</Button></Tooltip>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>On Different Elements</h2>
        <div className="hstack gap-3 flex-wrap align-items-center">
          <Tooltip text="This is a badge tooltip" position="top" id="tooltip-badge">
            <Badge variant="primary" pill style={{ cursor: 'default' }}>Hover me</Badge>
          </Tooltip>
          <Tooltip text="Icon button tooltip" position="top" id="tooltip-icon">
            <button className="btn-icon btn btn-secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r=".5" fill="currentColor" />
              </svg>
            </button>
          </Tooltip>
          <Tooltip text="Link tooltip showing extra context" position="bottom" id="tooltip-link">
            <a href="#" style={{ color: 'var(--accent)' }}>Hover this link</a>
          </Tooltip>
          <Tooltip text="Long text tooltip that wraps on multiple lines to demonstrate max-width behaviour" position="top" id="tooltip-long">
            <Button variant="outline-primary" size="sm">Long tooltip</Button>
          </Tooltip>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Tooltip } from 'aura-ui';\n\n<Tooltip text="I'm a tooltip">\n  <button>Hover me</button>\n</Tooltip>`}
        </div>
      </section>
    </div>
  );
}
