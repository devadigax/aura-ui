import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Button, Toast, ToastContainer } from '../../index';

export default function ToastsPage() {
  const [liveToasts, setLiveToasts] = useState([]);

  const toasts = [
    { type: 'success', label: 'Success', message: 'Changes saved successfully!', variant: 'outline-success' },
    { type: 'danger', label: 'Error', message: 'An error occurred. Please try again.', variant: 'outline-danger' },
    { type: 'warning', label: 'Warning', message: 'Review required before publishing.', variant: 'outline-warning' },
    { type: 'info', label: 'Info', message: 'Sync started in the background.', variant: 'outline-info' },
    { type: 'primary', label: 'Primary', message: 'Welcome to Aura UI!', variant: 'outline-primary' },
  ];

  const addToast = (message, type) => {
    const id = `${type}-${Date.now()}-${Math.random()}`;
    setLiveToasts((items) => [...items, { id, type, message }]);
    setTimeout(() => {
      setLiveToasts((items) => items.filter((item) => item.id !== id));
    }, 4000);
  };

  return (
    <div>
      <PageHeader title="Toasts" subtitle="Auto-dismissing notification toasts that stack in a fixed corner." cssFile="toasts.css" />

      <ToastContainer className="toast-bottom-end" id="toast-container-demo">
        {liveToasts.map(({ id, type, message }) => (
          <Toast key={id} variant={type} show>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Trigger Toasts</h2>
        <div className="hstack gap-2 flex-wrap">
          {toasts.map(({ type, label, message, variant }) => (
            <Button key={type} id={`toast-btn-${type}`} variant={variant} onClick={() => addToast(message, type)}>
              Show {label}
            </Button>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Static Previews</h2>
        <div className="vstack gap-2" style={{ maxWidth: 380 }}>
          {toasts.map(({ type, message }) => (
            <Toast key={type} variant={type} id={`toast-preview-${type}`}>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Toast, ToastContainer } from 'aura-ui';\n\n<ToastContainer className="toast-bottom-end">\n  <Toast variant="success" show>\n    <Toast.Body>Saved!</Toast.Body>\n  </Toast>\n</ToastContainer>`}
        </div>
      </section>
    </div>
  );
}
