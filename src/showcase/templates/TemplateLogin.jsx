import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, FormGroup, FormLabel, Input, Button, Divider, FormCheck, FormCheckInput } from '../../index';

const code = `
import { Card, FormGroup, FormLabel, Input, Button, Divider, FormCheck, FormCheckInput } from 'aura-ui';

export default function LoginPage() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '100%', maxWidth: '420px', padding: '1rem' }} glass>
        <Card.Body>
          <div className="text-center mb-4">
            <h3 className="fw-bold">Welcome Back</h3>
            <p className="text-muted">Sign in to your account to continue</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="name@example.com" />
            </FormGroup>

            <FormGroup className="mt-3">
              <div className="d-flex justify-content-between">
                <FormLabel>Password</FormLabel>
                <a href="#" className="text-accent text-decoration-none" style={{ fontSize: '0.85rem' }}>Forgot password?</a>
              </div>
              <Input type="password" placeholder="••••••••" />
            </FormGroup>

            <FormCheck className="mt-3 mb-4">
              <FormCheckInput type="checkbox" id="remember-me" defaultChecked />
              <span style={{ fontSize: '0.9rem' }}>Remember me for 30 days</span>
            </FormCheck>

            <Button variant="primary" className="w-100 mb-3" size="lg">Sign In</Button>
            
            <Divider>OR</Divider>

            <Button variant="outline-primary" className="w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Sign In with SSO
            </Button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted" style={{ fontSize: '0.9rem' }}>Don't have an account? </span>
            <a href="#" className="text-accent fw-medium text-decoration-none" style={{ fontSize: '0.9rem' }}>Create Account</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
`;

export default function TemplateLogin() {
  return (
    <TemplateLayout title="Login" sourceCode={code}>
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '75vh' }}>
        <Card style={{ width: '100%', maxWidth: '420px', padding: '1rem' }} glass>
          <Card.Body>
            <div className="text-center mb-4">
              <h3 className="fw-bold">Welcome Back</h3>
              <p className="text-muted">Sign in to your account to continue</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="name@example.com" />
              </FormGroup>

              <FormGroup className="mt-3">
                <div className="d-flex justify-content-between">
                  <FormLabel>Password</FormLabel>
                  <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.85rem' }}>Forgot password?</a>
                </div>
                <Input type="password" placeholder="••••••••" />
              </FormGroup>

              <FormCheck className="mt-3 mb-4">
                <FormCheckInput type="checkbox" id="remember-me" defaultChecked />
                <span style={{ fontSize: '0.9rem' }}>Remember me for 30 days</span>
              </FormCheck>

              <Button variant="primary" className="w-100 mb-3" size="lg">Sign In</Button>
              
              <Divider>OR</Divider>

              <Button variant="outline-primary" className="w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Sign In with SSO
              </Button>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>Don't have an account? </span>
              <a href="#" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem' }}>Create Account</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </TemplateLayout>
  );
}
