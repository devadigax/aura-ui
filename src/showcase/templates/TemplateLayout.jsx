import React, { useState } from 'react';
import { Button, Modal } from '../../index';

export default function TemplateLayout({ title, sourceCode, children }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="template-wrapper" style={{ position: 'relative', minHeight: 'calc(100vh - var(--header-height))', paddingBottom: '5rem' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">{title} Template</h2>
        <Button variant="primary" onClick={() => setShowCode(true)}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          View Source
        </Button>
      </div>

      <div className="template-content mx-auto" style={{ maxWidth: '1400px' }}>
        {children}
      </div>

      <Modal size="xl" scrollable isOpen={showCode} onClose={() => setShowCode(false)}>
        <Modal.Header>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Modal.Title className="mb-0">Usage Code</Modal.Title>
            <button 
              onClick={() => setShowCode(false)} 
              className="text-muted bg-transparent border-0" 
              style={{ fontSize: '1.5rem', lineHeight: 1, padding: 0 }}
            >
              &times;
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-3">Copy and paste this layout into your own project.</p>
          <div className="code-block" style={{ fontSize: '0.9rem', padding: '1.5rem' }}>
            {sourceCode.trim()}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
