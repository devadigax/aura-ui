import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, FormGroup, FormLabel, Input, Textarea, Button } from '../../index';

const code = `
export default function ContactUs() {
  return <div>...</div>;
}
`;

export default function TemplateContact() {
  return (
    <TemplateLayout title="Contact Us" sourceCode={code}>
      <div className="card-grid card-grid-2 md-card-grid-1" style={{ gap: '2rem' }}>
        <div>
          <h2 className="fw-bold mb-3">Get in Touch</h2>
          <p className="text-muted mb-5">Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.</p>
          
          <div className="mb-4">
            <h5 className="fw-bold">Headquarters</h5>
            <p className="text-muted">123 Innovation Drive<br/>Tech District<br/>San Francisco, CA 94103</p>
          </div>
          
          <div className="mb-4">
            <h5 className="fw-bold">Contact Info</h5>
            <p className="text-muted mb-1">Email: hello@auraui.com</p>
            <p className="text-muted">Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <Card glass>
          <Card.Body className="p-4 p-md-5">
            <h4 className="fw-bold mb-4">Send a Message</h4>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="John" />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Doe" />
                </FormGroup>
              </div>

              <FormGroup className="mb-3">
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="john@example.com" />
              </FormGroup>

              <FormGroup className="mb-4">
                <FormLabel>Message</FormLabel>
                <Textarea rows="5" placeholder="How can we help you?" />
              </FormGroup>

              <Button variant="primary" className="w-100" size="lg">Send Message</Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </TemplateLayout>
  );
}
