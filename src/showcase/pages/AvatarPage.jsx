import React from 'react';
import PageHeader from '../PageHeader';
import { Card, Avatar } from '../../index';

export default function AvatarPage() {
  return (
    <div className="container-fluid">
      <PageHeader 
        title="Avatar" 
        subtitle="User profiles, initials, statuses." 
      />

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-3">Basic & Sizes</h5>
          <div className="d-flex align-items-center gap-3">
            <Avatar size="xl" src="https://i.pravatar.cc/150?u=1" />
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=2" />
            <Avatar size="md" src="https://i.pravatar.cc/150?u=3" />
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=4" />
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-3">Fallbacks</h5>
          <div className="d-flex align-items-center gap-3">
            <Avatar size="lg" fallback="AU" />
            <Avatar size="md" fallback="UI" />
            <Avatar size="sm" alt="John" />
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-3">Status Indicators</h5>
          <div className="d-flex align-items-center gap-4">
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=5" status="online" />
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=6" status="offline" />
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=7" status="away" />
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=8" status="busy" />
          </div>
        </Card.Body>
      </Card>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Avatar } from 'aura-ui';\n\n<Avatar \n  size="md" \n  src="/profile.jpg" \n  status="online" \n  fallback="JD" \n/>`}
        </div>
      </section>
    </div>
  );
}
