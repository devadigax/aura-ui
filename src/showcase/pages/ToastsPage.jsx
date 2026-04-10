import React, { useRef } from 'react';
import PageHeader from '../PageHeader';

function showToast(container, message, type = 'primary') {
  const icons = {
    success: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
    danger:  `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`,
    warning: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/>`,
    info:    `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`,
    primary: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/>`,
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type} show`;
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24">${icons[type] || icons.primary}</svg>
    <div class="toast-body">${message}</div>
    <button class="btn-close toast-close" aria-label="Close">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;

  toast.querySelector('.toast-close').onclick = () => toast.remove();
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

export default function ToastsPage() {
  const containerRef = useRef(null);

  const toasts = [
    { type:'success', label:'Success', message:'Changes saved successfully!', variant:'outline-success' },
    { type:'danger',  label:'Error',   message:'An error occurred. Please try again.', variant:'outline-danger' },
    { type:'warning', label:'Warning', message:'Review required before publishing.', variant:'outline-warning' },
    { type:'info',    label:'Info',    message:'Sync started in the background.', variant:'outline-info' },
    { type:'primary', label:'Primary', message:'Welcome to Aura UI!', variant:'outline-primary' },
  ];

  return (
    <div>
      <PageHeader title="Toasts" subtitle="Auto-dismissing notification toasts that stack in a fixed corner." cssFile="toasts.css" />

      {/* Live toast container */}
      <div ref={containerRef} className="toast-container toast-bottom-end" id="toast-container-demo" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Trigger Toasts</h2>
        <div className="hstack gap-2 flex-wrap">
          {toasts.map(({ type, label, message, variant }) => (
            <button
              key={type}
              id={`toast-btn-${type}`}
              className={`btn btn-${variant}`}
              onClick={() => showToast(containerRef.current, message, type)}
            >
              Show {label}
            </button>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Static Previews</h2>
        <div className="vstack gap-2" style={{ maxWidth: 380 }}>
          {toasts.map(({ type, message }) => (
            <div key={type} className={`toast toast-${type}`} id={`toast-preview-${type}`}>
              <div className="toast-body">{message}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<!-- Container (fixed corner) -->\n<div class="toast-container toast-bottom-end"></div>\n\n<!-- Toast HTML -->\n<div class="toast toast-success show">\n  <div class="toast-body">Changes saved!</div>\n</div>`}
        </div>
      </section>
    </div>
  );
}

