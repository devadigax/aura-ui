import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import { Alert } from '../../index';

export default function AlertsPage() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div>
      <PageHeader title="Alerts" subtitle="Contextual feedback messages with optional icons and dismissal." cssFile="alerts.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>All Variants</h2>

        <Alert
          variant="primary"
          id="alert-primary"
          heading="Primary!"
          icon={<svg className="alert-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r=".5" fill="currentColor" /></svg>}
        >
          A primary informational alert - <a href="#" className="alert-link">check it out</a>.
        </Alert>

        <Alert
          variant="success"
          id="alert-success"
          heading="Success!"
          icon={<svg className="alert-icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
        >
          Your action completed successfully.
        </Alert>

        <Alert
          variant="warning"
          id="alert-warning"
          heading="Warning!"
          icon={<svg className="alert-icon" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="17" r=".5" fill="currentColor" /></svg>}
        >
          Something needs your attention.
        </Alert>

        {!dismissed ? (
          <Alert
            variant="danger"
            dismissible
            id="alert-danger"
            heading="Danger!"
            icon={<svg className="alert-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>}
            actions={
              <button className="btn-close" onClick={() => setDismissed(true)} aria-label="Close">
                <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            }
          >
            Something went wrong - this is a dismissible alert.
          </Alert>
        ) : (
          <Alert
            variant="info"
            className="mb-0"
            id="alert-info"
            icon={<svg className="alert-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>}
          >
            Danger alert was dismissed. Info alert with a longer description to show line wrapping in a real scenario.
          </Alert>
        )}
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Alert } from 'aura-ui';\n\n<Alert variant="success" heading="Done!">\n  Your file was saved.\n</Alert>`}
        </div>
      </section>
    </div>
  );
}
