import React, { useState } from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, FormGroup, FormLabel, Input, Button, Divider, FormCheck, FormCheckInput } from '../../index';

const perks = [
  { icon: <><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></>, title: '50,000+ Developers', desc: 'Join a thriving community of builders who ship faster.' },
  { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, title: 'Privacy First', desc: 'Your data is yours. We never sell or share your information.' },
  { icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>, title: 'Instant Access', desc: 'No credit card required. Get started in under 60 seconds.' },
];

const code = `import { Card, FormGroup, FormLabel, Input, Button, Divider } from 'aura-ui';

export default function RegisterPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', minHeight: '80vh', alignItems: 'center' }}>
      {/* Left Info Panel — hidden on mobile */}
      <div className="d-none d-md-flex flex-column justify-content-center">
        <h1>Start building with <span style={{ color: 'var(--accent)' }}>Aura UI</span></h1>
        {/* Perks list... */}
      </div>
      {/* Right Form Panel */}
      <div className="d-flex align-items-center justify-content-center justify-content-md-end">
        <Card glass style={{ width: '100%', maxWidth: '440px' }}>
          {/* Register Form */}
        </Card>
      </div>
    </div>
  );
}`;

export default function TemplateRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);

  const checkStrength = (val) => {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    setStrength(score);
  };

  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['', '#ef4444', '#f97316', '#eab308', '#22c55e'][strength];

  return (
    <TemplateLayout title="Register" sourceCode={code} hideHeader>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', minHeight: '80vh', alignItems: 'center' }}>

        {/* ── Left Info Panel (desktop only) ── */}
        <div className="d-none d-md-flex flex-column justify-content-center" style={{ paddingRight: '2rem' }}>
          {/* Brand Mark */}
          <div className="d-flex align-items-center gap-3 mb-5">
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
              </svg>
            </div>
            <span className="fw-black" style={{ fontSize: '1.4rem', letterSpacing: '-0.5px' }}>Aura UI</span>
          </div>

          <h1 className="fw-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-1.5px' }}>
            Start building<br />
            <span style={{ background: 'linear-gradient(135deg, var(--accent), #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              something amazing
            </span>
          </h1>

          <p className="text-muted mb-5" style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '420px' }}>
            Create your free account and get instant access to 26+ glassmorphism components, 9 page templates, and a growing community.
          </p>

          {/* Perks */}
          <div className="d-flex flex-column gap-4 mb-5">
            {perks.map(({ icon, title, desc }, i) => (
              <div key={i} className="d-flex align-items-start gap-3">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: '0.92rem', marginBottom: '0.15rem' }}>{title}</div>
                  <div className="text-muted" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof avatars */}
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex">
              {['30', '45', '52', '61', '71'].map((u, i) => (
                <img key={u} src={`https://i.pravatar.cc/150?u=${u}`} alt="User" style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid var(--glass-bg)', marginLeft: i === 0 ? 0 : -10, position: 'relative', zIndex: 5 - i }} />
              ))}
            </div>
            <div>
              <div className="fw-bold" style={{ fontSize: '0.85rem' }}>50,000+ developers</div>
              <div className="text-muted" style={{ fontSize: '0.75rem' }}>already building with Aura UI</div>
            </div>
          </div>
        </div>

        {/* ── Right Form Panel ── */}
        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
          <Card glass style={{ width: '100%', maxWidth: '440px' }}>
            <Card.Body className="p-4 p-sm-5">
              {/* Header */}
              <div className="text-center mb-4">
                <div className="mx-auto mb-3" style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                </div>
                <h3 className="fw-bold mb-1">Create your account</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>Free forever. No credit card required.</p>
              </div>

              {/* Social Login */}
              <div className="d-flex gap-2 mb-4">
                <Button variant="outline-primary" className="flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google
                </Button>
                <Button variant="outline-primary" className="flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub
                </Button>
              </div>

              <Divider>or sign up with email</Divider>

              <form onSubmit={e => e.preventDefault()} style={{ marginTop: '1.25rem' }}>
                {/* Name row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
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

                <FormGroup className="mb-2">
                  <FormLabel>Password</FormLabel>
                  <div style={{ position: 'relative' }}>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      style={{ paddingRight: '2.75rem' }}
                      onChange={e => checkStrength(e.target.value)}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0, display: 'flex' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {showPassword ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
                      </svg>
                    </button>
                  </div>
                </FormGroup>

                {/* Password Strength Indicator */}
                {strength > 0 && (
                  <div className="mb-3">
                    <div className="d-flex gap-1 mb-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} style={{ flex: 1, height: 4, borderRadius: 4, backgroundColor: i <= strength ? strengthColor : 'var(--glass-border)', transition: 'background-color 0.3s' }} />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: strengthColor, fontWeight: 600 }}>{strengthLabel} password</span>
                  </div>
                )}

                <FormCheck className="mb-4">
                  <FormCheckInput type="checkbox" id="terms" />
                  <span style={{ fontSize: '0.875rem' }}>
                    I agree to the{' '}
                    <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</a>
                  </span>
                </FormCheck>

                <Button variant="primary" className="w-100 mb-3" size="lg">Create Account</Button>

                <p className="text-center mb-0" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Already have an account?{' '}
                  <a href="#" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Sign in →</a>
                </p>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </TemplateLayout>
  );
}
