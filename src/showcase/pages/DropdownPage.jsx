import React from 'react';
import PageHeader from '../PageHeader';
import { Dropdown } from '../../index';

export default function DropdownPage() {
  return (
    <div>
      <PageHeader title="Dropdown" subtitle="Click-triggered dropdown menus with sections, icons, and variants." cssFile="dropdown.css" />

      <section className="glass p-4 mb-4" style={{ position: 'relative', zIndex: 5 }}>
        <h2 className="fw-semibold mb-4" style={{ fontSize: '1.1rem' }}>Dropdown Variants</h2>
        <div className="hstack gap-4 flex-wrap" style={{ position: 'relative', alignItems: 'flex-start' }}>
          <Dropdown id="dropdown-basic">
            <Dropdown.Trigger className="btn btn-primary hstack gap-2">
              Actions
              <svg className="dropdown-caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </Dropdown.Trigger>
            <Dropdown.Menu id="dropdown-menu-basic">
              <Dropdown.Header>ACCOUNT</Dropdown.Header>
              <Dropdown.Item id="dd-profile" icon={<svg className="dropdown-item-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>}>Profile</Dropdown.Item>
              <Dropdown.Item id="dd-settings" icon={<svg className="dropdown-item-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>}>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item id="dd-logout" danger icon={<svg className="dropdown-item-icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>}>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown id="dropdown-outline">
            <Dropdown.Trigger className="btn btn-outline-primary hstack gap-2">
              Sort by
              <svg className="dropdown-caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </Dropdown.Trigger>
            <Dropdown.Menu id="dropdown-menu-sort">
              {['Newest', 'Oldest', 'Alphabetical', 'Most popular'].map((label) => (
                <Dropdown.Item key={label} id={`dd-sort-${label.toLowerCase().replace(' ', '-')}`}>{label}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown id="dropdown-secondary">
            <Dropdown.Trigger className="btn btn-secondary hstack gap-2">
              More
              <svg className="dropdown-caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </Dropdown.Trigger>
            <Dropdown.Menu id="dropdown-menu-more">
              <Dropdown.Item id="dd-export">Export CSV</Dropdown.Item>
              <Dropdown.Item id="dd-print">Print</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item id="dd-delete" danger>Delete all</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Dropdown } from 'aura-ui';\n\n<Dropdown>\n  <Dropdown.Trigger className="btn btn-primary">Actions</Dropdown.Trigger>\n  <Dropdown.Menu>\n    <Dropdown.Item>Edit</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>`}
        </div>
      </section>
    </div>
  );
}
