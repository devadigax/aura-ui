import React from 'react';
import PageHeader from '../PageHeader';
import { Badge, ListGroup } from '../../index';

export default function ListGroupPage() {
  return (
    <div>
      <PageHeader title="List Group" subtitle="Default, numbered, and action-enabled list groups with badges." cssFile="list-group.css" />

      <div className="card-grid card-grid-auto-md mb-4">
        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Default</h2>
          <ListGroup id="list-group-default">
            <ListGroup.Item>An item</ListGroup.Item>
            <ListGroup.Item active id="list-item-active">Active item</ListGroup.Item>
            <ListGroup.Item>Another item</ListGroup.Item>
            <ListGroup.Item>
              A fourth item
              <Badge variant="primary" pill className="ms-auto">14</Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              Disabled item
              <Badge variant="secondary" pill className="ms-auto">0</Badge>
            </ListGroup.Item>
          </ListGroup>
        </section>

        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Numbered</h2>
          <ListGroup as="ol" numbered id="list-group-numbered">
            {['First item - gets auto counter', 'Second item', 'Third item', 'Fourth item'].map((label) => (
              <ListGroup.Item key={label} action>{label}</ListGroup.Item>
            ))}
          </ListGroup>
        </section>

        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>With Status Badges</h2>
          <ListGroup id="list-group-status">
            {[
              { label: 'Dashboard insights', badge: 'success', badgeLabel: 'Live' },
              { label: 'Component library', badge: 'primary', badgeLabel: 'Dev' },
              { label: 'Authentication flow', badge: 'warning', badgeLabel: 'Review' },
              { label: 'API integration', badge: 'danger', badgeLabel: 'Failed' },
            ].map(({ label, badge, badgeLabel }) => (
              <ListGroup.Item key={label} className="hstack gap-2">
                {label}
                <Badge variant={badge} pill className="ms-auto">{badgeLabel}</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </section>
      </div>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { ListGroup } from 'aura-ui';\n\n<ListGroup>\n  <ListGroup.Item active>Active</ListGroup.Item>\n  <ListGroup.Item>Item</ListGroup.Item>\n</ListGroup>`}
        </div>
      </section>
    </div>
  );
}
