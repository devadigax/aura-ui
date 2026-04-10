import React from 'react';
import PageHeader from '../PageHeader';
import { Button } from '../../index';

export default function TooltipsPage() {
  return (
    <div>
      <PageHeader title="Tooltips" subtitle="CSS-only directional tooltips on any element via data-tooltip attribute." cssFile="tooltips.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Directional Variants</h2>
        <div className="hstack gap-4 flex-wrap" style={{ padding:'2rem 0' }}>
          <span data-tooltip="Tooltip on top" data-tooltip-pos="top" id="tooltip-top">
            <Button variant="secondary">Top</Button>
          </span>
          <span data-tooltip="Tooltip on bottom" data-tooltip-pos="bottom" id="tooltip-bottom">
            <Button variant="secondary">Bottom</Button>
          </span>
          <span data-tooltip="Tooltip on left" data-tooltip-pos="left" id="tooltip-left">
            <Button variant="secondary">Left</Button>
          </span>
          <span data-tooltip="Tooltip on right" data-tooltip-pos="right" id="tooltip-right">
            <Button variant="secondary">Right</Button>
          </span>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>On Different Elements</h2>
        <div className="hstack gap-3 flex-wrap align-items-center">
          <span data-tooltip="This is a badge tooltip" data-tooltip-pos="top" id="tooltip-badge">
            <span className="badge badge-primary badge-pill" style={{ cursor:'default' }}>Hover me</span>
          </span>
          <span data-tooltip="Icon button tooltip" data-tooltip-pos="top" id="tooltip-icon">
            <button className="btn-icon btn btn-secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/>
              </svg>
            </button>
          </span>
          <span data-tooltip="Link tooltip showing extra context" data-tooltip-pos="bottom" id="tooltip-link">
            <a href="#" style={{ color:'var(--accent)' }}>Hover this link</a>
          </span>
          <span data-tooltip="Long text tooltip that wraps on multiple lines to demonstrate max-width behaviour" data-tooltip-pos="top" id="tooltip-long">
            <Button variant="outline-primary" size="sm">Long tooltip</Button>
          </span>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<!-- Default (top) -->\n<button data-tooltip="I'm a tooltip">Hover me</button>\n\n<!-- Directional -->\n<button data-tooltip="Below me" data-tooltip-pos="bottom">Bottom</button>\n<button data-tooltip="To the right" data-tooltip-pos="right">Right</button>`}
        </div>
      </section>
    </div>
  );
}

