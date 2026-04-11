import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Accordion, Button, Card, Collapse } from '../../index';

export default function AccordionPage() {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <div>
      <PageHeader title="Accordion" subtitle="Animated accordion panels and standalone collapsible content." cssFile="accordion.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Accordion</h2>
        <Accordion id="accordion-demo">
          <Accordion.Item title="What is Glassmorphism?" defaultOpen>
            Glassmorphism is a UI design trend that uses frosted-glass effects - combining blurred backgrounds, semi-transparent fills, and subtle borders to create depth and context.
          </Accordion.Item>
          <Accordion.Item title="How do I use the framework?">
            Simply import <code>aura-ui/style.css</code> and use the component classes, or import the React components for full interactivity out of the box.
          </Accordion.Item>
          <Accordion.Item title="Does it support dark mode?">
            Yes! All components use CSS custom properties synced with a <code>[data-theme="dark"]</code> attribute on the root element. Every component adapts instantly.
          </Accordion.Item>
          <Accordion.Item title="Is it production ready?">
            Absolutely. The library is fully tree-shakeable, ships zero runtime JS for CSS-only features, and all React components are lightweight wrappers.
          </Accordion.Item>
        </Accordion>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Standalone Collapse</h2>
        <Button variant="outline-primary" className="mb-3" id="collapse-toggle" onClick={() => setCollapseOpen((value) => !value)}>
          {collapseOpen ? 'Hide' : 'Show'} Content
        </Button>
        <Collapse open={collapseOpen} id="collapse-example">
          <Card>
            <Card.Body className="text-muted">
              This is standalone collapsible content inside a card body. Powered by the <code>collapse.css</code> component.
            </Card.Body>
          </Card>
        </Collapse>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Accordion } from 'aura-ui';\n\n<Accordion>\n  <Accordion.Item title="Question" defaultOpen>\n    Answer text\n  </Accordion.Item>\n</Accordion>`}
        </div>
      </section>
    </div>
  );
}
