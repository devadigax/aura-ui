import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Card, Stepper, Button } from '../../index';

export default function StepperPage() {
  const [horizontalStep, setHorizontalStep] = useState(1);
  const [verticalStep, setVerticalStep] = useState(0);

  const steps = ['Cart', 'Shipping', 'Payment', 'Review'];

  return (
    <div className="container-fluid">
      <PageHeader 
        title="Stepper" 
        subtitle="Progress tracking and multi-step workflows." 
      />

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-4">Horizontal Stepper</h5>
          <Stepper steps={steps} activeStep={horizontalStep} orientation="horizontal" className="mb-5" />
          
          <div className="d-flex gap-2 justify-content-center">
            <Button size="sm" variant="outline-primary" onClick={() => setHorizontalStep(s => Math.max(0, s - 1))}>Back</Button>
            <Button size="sm" variant="primary" onClick={() => setHorizontalStep(s => Math.min(3, s + 1))}>Next Step</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-4">Vertical Stepper</h5>
          <div style={{ maxWidth: '300px' }}>
            <Stepper steps={steps} activeStep={verticalStep} orientation="vertical" className="mb-4" />
          </div>
          
          <div className="d-flex gap-2">
            <Button size="sm" variant="outline-primary" onClick={() => setVerticalStep(s => Math.max(0, s - 1))}>Back</Button>
            <Button size="sm" variant="primary" onClick={() => setVerticalStep(s => Math.min(3, s + 1))}>Next Step</Button>
          </div>
        </Card.Body>
      </Card>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Stepper } from 'aura-ui';\n\nconst steps = ['Cart', 'Shipping', 'Payment'];\n\n<Stepper \n  steps={steps} \n  activeStep={1} \n  orientation="horizontal" \n/>`}
        </div>
      </section>
    </div>
  );
}
