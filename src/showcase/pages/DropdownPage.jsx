import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../PageHeader';

function Dropdown({ id, trigger, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={`dropdown${open ? ' open' : ''}`} ref={ref} id={id}>
      <div onClick={() => setOpen(o => !o)}>{trigger}</div>
      {children}
    </div>
  );
}

export default function DropdownPage() {
  return (
    <div>
      <PageHeader title="Dropdown" subtitle="Click-triggered dropdown menus with sections, icons, and variants." cssFile="dropdown.css" />

      <section className="glass p-4 mb-4" style={{ position:'relative', zIndex:5 }}>
        <h2 className="fw-semibold mb-4" style={{ fontSize:'1.1rem' }}>Dropdown Variants</h2>
        <div className="hstack gap-4 flex-wrap" style={{ position:'relative', alignItems:'flex-start' }}>

          {/* Basic */}
          <Dropdown
            id="dropdown-basic"
            trigger={
              <button className="btn btn-primary hstack gap-2" aria-expanded="false">
                Actions
                <svg className="dropdown-caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            }
          >
            <ul className="dropdown-menu" id="dropdown-menu-basic">
              <li className="dropdown-header">ACCOUNT</li>
              <li><a href="#" className="dropdown-item" id="dd-profile">
                <svg className="dropdown-item-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Profile
              </a></li>
              <li><a href="#" className="dropdown-item" id="dd-settings">
                <svg className="dropdown-item-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
                Settings
              </a></li>
              <li className="dropdown-divider" />
              <li><a href="#" className="dropdown-item dropdown-item-danger" id="dd-logout">
                <svg className="dropdown-item-icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Log out
              </a></li>
            </ul>
          </Dropdown>

          {/* Outline */}
          <Dropdown
            id="dropdown-outline"
            trigger={
              <button className="btn btn-outline-primary hstack gap-2" aria-expanded="false">
                Sort by
                <svg className="dropdown-caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            }
          >
            <ul className="dropdown-menu" id="dropdown-menu-sort">
              {['Newest','Oldest','Alphabetical','Most popular'].map(l => (
                <li key={l}><a href="#" className="dropdown-item" id={`dd-sort-${l.toLowerCase().replace(' ','-')}`}>{l}</a></li>
              ))}
            </ul>
          </Dropdown>

          {/* Secondary */}
          <Dropdown
            id="dropdown-secondary"
            trigger={
              <button className="btn btn-secondary hstack gap-2" aria-expanded="false">
                More
                <svg className="dropdown-caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            }
          >
            <ul className="dropdown-menu" id="dropdown-menu-more">
              <li><a href="#" className="dropdown-item" id="dd-export">Export CSV</a></li>
              <li><a href="#" className="dropdown-item" id="dd-print">Print</a></li>
              <li className="dropdown-divider"/>
              <li><a href="#" className="dropdown-item dropdown-item-danger" id="dd-delete">Delete all</a></li>
            </ul>
          </Dropdown>

        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="dropdown open">\n  <button class="btn btn-primary" onclick="this.closest('.dropdown').classList.toggle('open')">\n    Actions\n  </button>\n  <ul class="dropdown-menu">\n    <li><a class="dropdown-item" href="#">Edit</a></li>\n    <li class="dropdown-divider"></li>\n    <li><a class="dropdown-item dropdown-item-danger" href="#">Delete</a></li>\n  </ul>\n</div>`}
        </div>
      </section>
    </div>
  );
}

