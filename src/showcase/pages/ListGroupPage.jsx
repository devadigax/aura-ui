import React from 'react';
import PageHeader from '../PageHeader';

export default function ListGroupPage() {
  return (
    <div>
      <PageHeader title="List Group" subtitle="Default, numbered, and action-enabled list groups with badges." cssFile="list-group.css" />

      <div className="card-grid card-grid-auto-md mb-4">
        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Default</h2>
          <ul className="list-group" id="list-group-default">
            <li className="list-group-item">An item</li>
            <li className="list-group-item active" id="list-item-active">Active item</li>
            <li className="list-group-item">Another item</li>
            <li className="list-group-item">
              A fourth item
              <span className="badge badge-primary badge-pill ms-auto">14</span>
            </li>
            <li className="list-group-item">
              Disabled item
              <span className="badge badge-secondary badge-pill ms-auto">0</span>
            </li>
          </ul>
        </section>

        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Numbered</h2>
          <ol className="list-group list-group-numbered" id="list-group-numbered">
            {['First item — gets auto counter','Second item','Third item','Fourth item'].map(l => (
              <li key={l} className="list-group-item list-group-item-action">{l}</li>
            ))}
          </ol>
        </section>

        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>With Status Badges</h2>
          <ul className="list-group" id="list-group-status">
            {[
              { label:'Dashboard insights', badge:'success', badgeLabel:'Live' },
              { label:'Component library', badge:'primary', badgeLabel:'Dev' },
              { label:'Authentication flow', badge:'warning', badgeLabel:'Review' },
              { label:'API integration', badge:'danger',  badgeLabel:'Failed' },
            ].map(({ label, badge, badgeLabel }) => (
              <li key={label} className="list-group-item hstack gap-2">
                {label}
                <span className={`badge badge-${badge} badge-pill ms-auto`}>{badgeLabel}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<ul class="list-group">\n  <li class="list-group-item">Item</li>\n  <li class="list-group-item active">Active</li>\n  <li class="list-group-item">Item with <span class="badge badge-primary badge-pill ms-auto">3</span></li>\n</ul>\n\n<ol class="list-group list-group-numbered">\n  <li class="list-group-item list-group-item-action">Numbered item</li>\n</ol>`}
        </div>
      </section>
    </div>
  );
}

