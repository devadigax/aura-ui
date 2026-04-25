import React, { useState } from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Badge, FormGroup, FormLabel, Input, Textarea, Button, Select } from '../../index';

const contactDetails = [
  { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, label: 'Headquarters', value: '123 Innovation Drive\nTech District\nSan Francisco, CA 94103' },
  { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, label: 'Email', value: 'hello@auraui.com\nsupport@auraui.com' },
  { icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11 19.79 19.79 0 0 1 1.48 2.38 2 2 0 0 1 3.46.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/></>, label: 'Phone', value: '+1 (555) 123-4567\nMon–Fri, 9am–6pm PST' },
  { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, label: 'Response Time', value: 'Within 24 hours\nfor general inquiries' },
];

const faqs = [
  { q: 'Is Aura UI free to use?', a: 'Yes! Aura UI is completely open source under the MIT licence. Use it in personal and commercial projects for free, forever.' },
  { q: 'Do you offer custom component development?', a: 'We offer enterprise packages that include custom component development, design reviews, and dedicated Slack support. Contact us for details.' },
  { q: 'Can I contribute to Aura UI?', a: 'Absolutely. We welcome PRs, bug reports, and feature proposals. Check out our Contributing Guide on GitHub to get started.' },
];

const code = `import { Card, Badge, FormGroup, FormLabel, Input, Textarea, Button } from 'aura-ui';

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="glass text-center p-5 mb-5">
        <Badge variant="primary" pill>Contact Us</Badge>
        <h1 className="fw-black mt-3">Let's start a conversation</h1>
      </section>

      {/* Two-column: Contact Info + Form */}
      <div className="template-split-md" style={{ '--split-ratio': '1fr 1.4fr', gap: '2.5rem' }}>
        {/* Info Panel */}
        <div>{/* Contact details, social links... */}</div>
        {/* Form Panel */}
        <Card glass>
          <Card.Body className="p-5">
            {/* Contact form... */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
`;

export default function TemplateContact() {
  const [sent, setSent] = useState(false);

  return (
    <TemplateLayout title="Contact Us" sourceCode={code}>

      {/* ── Hero ── */}
      <section className="glass text-center mb-5" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 2rem', borderRadius: 16, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Badge variant="primary" pill className="mb-3">Contact Us</Badge>
        <h1 className="fw-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px' }}>
          Let's start a conversation
        </h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '520px', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Have a question, partnership idea, or just want to say hello? We read every message and try to respond within 24 hours.
        </p>
      </section>

      {/* ── Main Layout ── */}
      <div className="template-split-md" style={{ '--split-ratio': '1fr 1.5fr', gap: '2.5rem', alignItems: 'flex-start' }}>

        {/* ── Left: Info ── */}
        <div className="d-flex flex-column gap-4">
          {contactDetails.map(({ icon, label, value }) => (
            <Card key={label} glass>
              <Card.Body className="p-4 d-flex gap-3 align-items-start">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <div>
                  <div className="fw-bold mb-1" style={{ fontSize: '0.875rem' }}>{label}</div>
                  {value.split('\n').map((line, i) => (
                    <div key={i} className="text-muted" style={{ fontSize: '0.84rem', lineHeight: 1.6 }}>{line}</div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}

          {/* Social Links */}
          <Card glass>
            <Card.Body className="p-4">
              <div className="fw-bold mb-3" style={{ fontSize: '0.875rem' }}>Follow us</div>
              <div className="d-flex gap-2 flex-wrap">
                {[
                  { label: 'GitHub', icon: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>, fill: true },
                  { label: 'Twitter', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>, fill: false },
                  { label: 'Discord', icon: <><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></>, fill: false },
                ].map(({ label, icon, fill }) => (
                  <button key={label} className="d-flex align-items-center gap-2 btn btn-sm" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 8, padding: '0.4rem 0.85rem', color: 'var(--text-color)', fontSize: '0.82rem', fontWeight: 600 }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    {label}
                  </button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* ── Right: Form ── */}
        <Card glass>
          <Card.Body className="p-4 p-sm-5">
            {sent ? (
              <div className="text-center py-5">
                <div className="mx-auto mb-4" style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4 className="fw-bold mb-2">Message sent!</h4>
                <p className="text-muted mb-4">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <Button variant="outline-primary" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <>
                <h4 className="fw-bold mb-1">Send us a message</h4>
                <p className="text-muted mb-4" style={{ fontSize: '0.875rem' }}>Fill out the form and we'll respond as soon as possible.</p>

                <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mb-3 d-grid">
                    <FormGroup>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" placeholder="John" required />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" placeholder="Doe" required />
                    </FormGroup>
                  </div>

                  <FormGroup className="mb-3">
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder="john@example.com" required />
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <FormLabel>Subject</FormLabel>
                    <Select defaultValue="">
                      <option value="" disabled>Select a topic…</option>
                      <option>General Inquiry</option>
                      <option>Bug Report</option>
                      <option>Feature Request</option>
                      <option>Enterprise / Partnership</option>
                      <option>Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup className="mb-4">
                    <FormLabel>Message</FormLabel>
                    <Textarea rows="5" placeholder="Tell us what's on your mind…" required />
                  </FormGroup>

                  <Button variant="primary" className="w-100" size="lg" type="submit">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </Button>
                </form>
              </>
            )}
          </Card.Body>
        </Card>
      </div>

      {/* ── FAQ ── */}
      <section className="mt-5">
        <div className="text-center mb-4">
          <Badge variant="info" pill className="mb-3">FAQ</Badge>
          <h2 className="fw-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.5px' }}>Frequently asked questions</h2>
        </div>
        <div className="d-flex flex-column gap-3">
          {faqs.map(({ q, a }, i) => (
            <Card key={i} glass>
              <Card.Body className="p-4">
                <h6 className="fw-bold mb-2">{q}</h6>
                <p className="text-muted mb-0" style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{a}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </TemplateLayout>
  );
}
