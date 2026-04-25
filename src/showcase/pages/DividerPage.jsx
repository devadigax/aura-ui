import React from 'react';
import PageHeader from '../PageHeader';
import { Card, Divider } from '../../index';

export default function DividerPage() {
  return (
    <div className="container-fluid">
      <PageHeader 
        title="Divider" 
        subtitle="Horizontal separation and layout structuring lines." 
      />

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-4">Solid Line</h5>
          <p>Above text block</p>
          <Divider />
          <p>Below text block</p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-4">Dashed Line</h5>
          <p>First paragraph</p>
          <Divider dashed />
          <p>Second paragraph</p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-4">With Content</h5>
          <Divider align="start">Section 1</Divider>
          <p className="mt-3 text-muted">Left-aligned layout section</p>
          
          <Divider align="center">OR</Divider>
          <p className="mt-3 text-muted">Centered separation text</p>
          
          <Divider align="end">Continue</Divider>
          <p className="mt-3 text-muted">Right-aligned layout text</p>
        </Card.Body>
      </Card>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Divider } from 'aura-ui';\n\n<Divider align="center" dashed>\n  Or Sign In With\n</Divider>`}
        </div>
      </section>
    </div>
  );
}
