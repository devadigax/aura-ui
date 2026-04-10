import React, { useState } from 'react';
import { Modal, Button } from '../../index';
import PageHeader from '../PageHeader';

export default function ModalsPage() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <PageHeader
        title="Modals"
        subtitle="Accessible dialogs with size variants, backdrop blur, ESC key dismiss, and body scroll lock."
        cssFile="modal.css"
      />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Size Variants</h2>
        <div className="hstack gap-2 flex-wrap">
          <Button variant="primary"          id="modal-open-default"    onClick={() => setOpen('default')}>Default Modal</Button>
          <Button variant="secondary"        id="modal-open-sm"         onClick={() => setOpen('sm')}>Small</Button>
          <Button variant="outline-primary"  id="modal-open-lg"         onClick={() => setOpen('lg')}>Large</Button>
          <Button variant="outline-secondary"id="modal-open-fs"         onClick={() => setOpen('fs')}>Fullscreen</Button>
        </div>
      </section>

      {/* Default */}
      <Modal isOpen={open === 'default'} onClose={() => setOpen(null)}>
        <Modal.Header>
          <Modal.Title>Default Modal</Modal.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </Modal.Header>
        <Modal.Body>
          <p>This is a default-width (520px) modal. Press <kbd>Escape</kbd> or click the backdrop to close.</p>
          <p>Body is scrollable-locked while the dialog is open.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(null)}>Cancel</Button>
          <Button variant="primary"   onClick={() => setOpen(null)}>Confirm</Button>
        </Modal.Footer>
      </Modal>

      {/* Small */}
      <Modal isOpen={open === 'sm'} onClose={() => setOpen(null)} size="sm">
        <Modal.Header>
          <Modal.Title>Small Modal</Modal.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </Modal.Header>
        <Modal.Body>Compact dialog for confirmations or notices.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setOpen(null)}>Delete</Button>
          <Button variant="secondary" size="sm" onClick={() => setOpen(null)}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      {/* Large */}
      <Modal isOpen={open === 'lg'} onClose={() => setOpen(null)} size="lg">
        <Modal.Header>
          <Modal.Title>Large Modal</Modal.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </Modal.Header>
        <Modal.Body>
          <p>A wider dialog (760px) for forms, image previews, or detailed content.</p>
          <div className="card-grid card-grid-2 mt-3">
            {['Feature A','Feature B','Feature C','Feature D'].map(f => (
              <div key={f} className="card p-3" style={{ borderRadius:10 }}>
                <strong>{f}</strong>
                <p className="text-muted mb-0" style={{ fontSize:'0.85rem' }}>Placeholder description for this feature card inside a large modal.</p>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(null)}>Close</Button>
          <Button variant="primary"   onClick={() => setOpen(null)}>Save changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Fullscreen */}
      <Modal isOpen={open === 'fs'} onClose={() => setOpen(null)} size="fullscreen">
        <Modal.Header>
          <Modal.Title>Fullscreen Modal</Modal.Title>
          <button className="btn-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </Modal.Header>
        <Modal.Body>
          <p>Takes up the entire viewport. Great for immersive experiences or full-page editors.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(null)}>Exit Fullscreen</Button>
        </Modal.Footer>
      </Modal>

      {/* Usage */}
      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Modal, Button } from 'aura-ui';\n\nconst [open, setOpen] = useState(false);\n\n<Button onClick={() => setOpen(true)}>Open</Button>\n\n<Modal isOpen={open} onClose={() => setOpen(false)} size="lg">\n  <Modal.Header>\n    <Modal.Title>Title</Modal.Title>\n  </Modal.Header>\n  <Modal.Body>Content here.</Modal.Body>\n  <Modal.Footer>\n    <Button variant="primary" onClick={() => setOpen(false)}>OK</Button>\n  </Modal.Footer>\n</Modal>`}
        </div>
      </section>
    </div>
  );
}

