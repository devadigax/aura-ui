import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, FormGroup, FormLabel, Input, Button, Divider, FormCheck, FormCheckInput } from '../../index';

const code = `
import { Card, FormGroup, FormLabel, Input, Button, Divider, FormCheck, FormCheckInput } from 'aura-ui';

export default function RegisterPage() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '100%', maxWidth: '420px', padding: '1rem' }} glass>
        <Card.Body>
          <div className="text-center mb-4">
            <h3 className="fw-bold">Create an Account</h3>
            <p className="text-muted">Join us and start building amazing apps.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
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
              <Input type="email" placeholder="name@example.com" />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="••••••••" />
            </FormGroup>

            <FormCheck className="mt-3 mb-4">
              <FormCheckInput type="checkbox" id="terms" />
              <span style={{ fontSize: '0.9rem' }}>I agree to the <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Terms & Conditions</a></span>
            </FormCheck>

            <Button variant="primary" className="w-100 mb-3" size="lg">Sign Up</Button>
            
            <Divider>OR</Divider>

            <Button variant="outline-primary" className="w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Sign Up with SSO
            </Button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted" style={{ fontSize: '0.9rem' }}>Already have an account? </span>
            <a href="#" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem' }}>Log In</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
`;

export default function TemplateRegister() {
  return (
    <TemplateLayout title="Register" sourceCode={code}>
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '75vh' }}>
        <Card style={{ width: '100%', maxWidth: '420px', padding: '1rem' }} glass>
          <Card.Body>
            <div className="text-center mb-4">
              <h3 className="fw-bold">Create an Account</h3>
              <p className="text-muted">Join us and start building amazing apps.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
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
                <Input type="email" placeholder="name@example.com" />
              </FormGroup>

              <FormGroup className="mb-3">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="••••••••" />
              </FormGroup>

              <FormCheck className="mt-3 mb-4">
                <FormCheckInput type="checkbox" id="terms" />
                <span style={{ fontSize: '0.9rem' }}>I agree to the <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Terms & Conditions</a></span>
              </FormCheck>

              <Button variant="primary" className="w-100 mb-3" size="lg">Sign Up</Button>
              
              <Divider>OR</Divider>

              <Button variant="outline-primary" className="w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Sign Up with SSO
              </Button>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>Already have an account? </span>
              <a href="#" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem' }}>Log In</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </TemplateLayout>
  );
}
