import React from 'react';
import { Card, Button } from '../../index';
import PageHeader from '../PageHeader';

export default function CardsPage() {
  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="Composable glass card with header, body, footer sub-components and hover lift effect."
        cssFile="card.css"
      />

      {/* Basic */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Basic Cards</h2>
        <div className="card-grid card-grid-auto-md">

          <Card hover id="card-basic">
            <Card.Header>
              <div style={{ width:40, height:40, borderRadius:10, background:'linear-gradient(135deg,#6366f1,#a855f7)', flexShrink:0 }}/>
              <div className="card-title-group">
                <Card.Title>Action Card</Card.Title>
                <Card.Subtitle>With hover effect</Card.Subtitle>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>A glass card with composed header, body and footer. Hover to see the lift effect.</Card.Text>
              <div className="badge-group mt-2">
                <span className="badge badge-primary">Design</span>
                <span className="badge badge-info">UI</span>
              </div>
            </Card.Body>
            <Card.Footer>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              4.9
              <a href="#" className="card-link ms-auto">View →</a>
            </Card.Footer>
          </Card>

          <Card hover id="card-image">
            <div style={{ height:140, background:'linear-gradient(135deg,#667eea,#764ba2)', borderRadius:'14px 14px 0 0' }}/>
            <Card.Body>
              <Card.Title>Image Card</Card.Title>
              <Card.Text>A card with a coloured banner header followed by a rich body area.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="#" className="card-link">Read more</a>
              <span className="spacer"/>
              <span className="badge badge-success badge-pill">New</span>
            </Card.Footer>
          </Card>

          <Card hover id="card-centered">
            <Card.Body className="text-center" style={{ padding:'2.5rem 1.5rem' }}>
              <div style={{ width:64, height:64, margin:'0 auto 1rem', borderRadius:'50%', background:'rgba(99,102,241,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.75">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <Card.Title>Centred Card</Card.Title>
              <Card.Text className="mb-3">Perfect for feature highlights, stats, or onboarding flows.</Card.Text>
              <Button variant="primary" size="sm">Learn More</Button>
            </Card.Body>
          </Card>

        </div>
      </section>

      {/* Grid variants */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Fixed Column Grid (.card-grid-3)</h2>
        <div className="card-grid card-grid-3 card-grid-gap-sm">
          {['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6'].map(i => (
            <Card hover key={i} id={`card-grid-${i.replace(' ','-').toLowerCase()}`}>
              <Card.Body className="py-4 text-center">{i}</Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Card } from 'aura-ui';\n\n<Card hover>\n  <Card.Header>\n    <Card.Title>Title</Card.Title>\n  </Card.Header>\n  <Card.Body>\n    <Card.Text>Body content here.</Card.Text>\n  </Card.Body>\n  <Card.Footer>Footer</Card.Footer>\n</Card>`}
        </div>
      </section>
    </div>
  );
}

