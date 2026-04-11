import React from 'react';
import PageHeader from '../PageHeader';
import { Pagination } from '../../index';

export default function PaginationPage() {
  return (
    <div>
      <PageHeader title="Pagination" subtitle="Accessible page navigation with pill, small, and large size variants." cssFile="pagination.css" />

      <section className="glass p-4 mb-4">
        <div className="vstack gap-4">
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize: '1rem' }}>Default</h2>
            <Pagination pages={5} defaultPage={2} />
          </div>
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize: '1rem' }}>Pill</h2>
            <Pagination pages={4} defaultPage={1} pill />
          </div>
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize: '1rem' }}>Small</h2>
            <Pagination pages={5} defaultPage={3} size="sm" />
          </div>
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize: '1rem' }}>Large</h2>
            <Pagination pages={3} defaultPage={1} size="lg" />
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Pagination } from 'aura-ui';\n\n<Pagination pages={5} defaultPage={2} pill />`}
        </div>
      </section>
    </div>
  );
}
