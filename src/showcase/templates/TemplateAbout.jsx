import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Avatar } from '../../index';

const code = `
export default function AboutPage() {
  return <div>...</div>;
}
`;

export default function TemplateAbout() {
  return (
    <TemplateLayout title="About Us" sourceCode={code}>
      <div className="py-4">
        <div className="mb-5 text-center px-3">
          <h1 className="fw-bold display-5 mb-4">Our Mission</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
            We believe in building tools that empower developers to create stunning, modern interfaces without wrestling with CSS complexity. Our team is dedicated to the craft of software design.
          </p>
        </div>

        <h3 className="fw-bold mb-4 text-center">Meet the Team</h3>
        
        <div className="card-grid card-grid-4 md-card-grid-2 sm-card-grid-1">
          {[
            { n: 'Alex Rivera', role: 'Founder & CEO', img: '30' },
            { n: 'Jamie Chen', role: 'Head of Design', img: '45' },
            { n: 'Taylor Smith', role: 'Lead Engineer', img: '52' },
            { n: 'Jordan Lee', role: 'Product Manager', img: '61' }
          ].map((t, i) => (
            <Card key={i} glass className="text-center p-4">
              <Avatar size="xl" src={`https://i.pravatar.cc/150?u=${t.img}`} className="mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
              <h5 className="fw-bold mb-1">{t.n}</h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{t.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </TemplateLayout>
  );
}
