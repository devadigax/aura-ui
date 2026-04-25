import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Button, Card, Avatar, Badge } from '../../index';

const code = `
export default function Home() {
  return <div className="home-layout">...</div>;
}
`;

export default function TemplateHome() {
  return (
    <TemplateLayout title="Home (Landing)" sourceCode={code}>
      <div className="text-center py-5">
        <Badge variant="primary" pill className="mb-3">Now available: v4.0</Badge>
        <h1 className="fw-bold display-4 mb-4" style={{ lineHeight: 1.2 }}>Build Glassmorphic UIs <br/> <span style={{ color: 'var(--accent)' }}>at Lightning Speed</span></h1>
        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          Aura UI is a premium, open-source React component library built on the modern principles of glassmorphism edge lighting and fluid animations.
        </p>
        <div className="d-flex gap-3 justify-content-center mb-5">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="outline-primary" size="lg">View Documentation</Button>
        </div>
      </div>
      
      <div className="card-grid card-grid-3">
        <Card glass>
          <Card.Body className="text-center p-4">
            <h4 className="fw-bold mb-3">Accessible</h4>
            <p className="text-muted mb-0">Built fully compliant with WAI-ARIA standards for keyboard layouts.</p>
          </Card.Body>
        </Card>
        <Card glass>
          <Card.Body className="text-center p-4">
            <h4 className="fw-bold mb-3">Customizable</h4>
            <p className="text-muted mb-0">Driven by CSS properties allowing you to adapt the theme instantly.</p>
          </Card.Body>
        </Card>
        <Card glass>
          <Card.Body className="text-center p-4">
            <h4 className="fw-bold mb-3">Lightweight</h4>
            <p className="text-muted mb-0">No heavy dependencies. Pure React hooks and standard CSS.</p>
          </Card.Body>
        </Card>
      </div>
    </TemplateLayout>
  );
}
