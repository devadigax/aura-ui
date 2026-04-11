import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Button, ListGroup, Offcanvas } from '../../index';

export default function OffcanvasPage() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <PageHeader
        title="Offcanvas"
        subtitle="React offcanvas wrapper for side drawers, filters, and top or bottom sheets."
        cssFile="offcanvas.css"
      />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Placement Variants</h2>
        <div className="hstack gap-2 flex-wrap">
          <Button variant="primary" onClick={() => setOpen('start')}>Open Start</Button>
          <Button variant="secondary" onClick={() => setOpen('end')}>Open End</Button>
          <Button variant="outline-primary" onClick={() => setOpen('top')}>Open Top</Button>
          <Button variant="outline-secondary" onClick={() => setOpen('bottom')}>Open Bottom</Button>
        </div>
      </section>

      <Offcanvas isOpen={open === 'start'} placement="start" onClose={() => setOpen(null)}>
        <Offcanvas.Header>
          <Offcanvas.Title>Project Navigation</Offcanvas.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>Dashboard</ListGroup.Item>
            <ListGroup.Item active>Components</ListGroup.Item>
            <ListGroup.Item>Settings</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas isOpen={open === 'end'} placement="end" onClose={() => setOpen(null)}>
        <Offcanvas.Header>
          <Offcanvas.Title>Filters</Offcanvas.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Select filters and preferences for your current view.</p>
          <div className="vstack gap-2 mt-3">
            <Button variant="outline-primary">Active</Button>
            <Button variant="outline-primary">Archived</Button>
            <Button variant="outline-primary">Favorites</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas isOpen={open === 'top'} placement="top" onClose={() => setOpen(null)}>
        <Offcanvas.Header>
          <Offcanvas.Title>Announcement</Offcanvas.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Aura UI 2.0 is live with new wrappers for Sidebar, Carousel, and Offcanvas.</p>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas isOpen={open === 'bottom'} placement="bottom" onClose={() => setOpen(null)}>
        <Offcanvas.Header>
          <Offcanvas.Title>Mobile Action Sheet</Offcanvas.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="vstack gap-2">
            <Button variant="primary">Share</Button>
            <Button variant="secondary">Duplicate</Button>
            <Button variant="outline-danger">Delete</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Offcanvas } from '@devadigax/aura-ui';\n\n<Offcanvas isOpen={open} placement="start" onClose={() => setOpen(false)}>\n  <Offcanvas.Header>\n    <Offcanvas.Title>Menu</Offcanvas.Title>\n  </Offcanvas.Header>\n  <Offcanvas.Body>Content</Offcanvas.Body>\n</Offcanvas>`}
        </div>
      </section>
    </div>
  );
}
