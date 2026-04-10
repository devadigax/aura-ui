import React, { useState } from 'react';
import PageHeader from '../PageHeader';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion-item">
      <h3 className="accordion-header">
        <button
          className={`accordion-btn${open ? '' : ' collapsed'}`}
          onClick={() => setOpen(o => !o)}
        >
          {title}
          <svg className="accordion-icon" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </h3>
      <div className={`accordion-collapse${open ? ' show' : ''}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default function AccordionPage() {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <div>
      <PageHeader title="Accordion" subtitle="Animated accordion panels and standalone collapsible content." cssFile="accordion.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Accordion</h2>
        <div className="accordion" id="accordion-demo">
          <AccordionItem title="What is Glassmorphism?" defaultOpen>
            Glassmorphism is a UI design trend that uses frosted-glass effects — combining blurred backgrounds, semi-transparent fills, and subtle borders to create depth and context.
          </AccordionItem>
          <AccordionItem title="How do I use the framework?">
            Simply import <code>aura-ui/style.css</code> and use the component classes, or import the React components for full interactivity out of the box.
          </AccordionItem>
          <AccordionItem title="Does it support dark mode?">
            Yes! All components use CSS custom properties synced with a <code>[data-theme="dark"]</code> attribute on the root element. Every component adapts instantly.
          </AccordionItem>
          <AccordionItem title="Is it production ready?">
            Absolutely. The library is fully tree-shakeable, ships zero runtime JS for CSS-only features, and all React components are lightweight wrappers.
          </AccordionItem>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Standalone Collapse</h2>
        <button
          className="btn btn-outline-primary mb-3"
          id="collapse-toggle"
          onClick={() => setCollapseOpen(o => !o)}
        >
          {collapseOpen ? 'Hide' : 'Show'} Content
        </button>
        <div className={`collapse${collapseOpen ? ' show' : ''}`} id="collapse-example">
          <div className="card">
            <div className="card-body text-muted">
              This is standalone collapsible content inside a card body. Powered by the <code>collapse.css</code> component.
            </div>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="accordion">\n  <div class="accordion-item">\n    <h3 class="accordion-header">\n      <button class="accordion-btn" onclick="toggleAccordion(this)">\n        Question text\n        <svg class="accordion-icon">…</svg>\n      </button>\n    </h3>\n    <div class="accordion-collapse show">\n      <div class="accordion-body">Answer text</div>\n    </div>\n  </div>\n</div>`}
        </div>
      </section>
    </div>
  );
}

