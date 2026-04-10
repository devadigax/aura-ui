import React, { useState } from 'react';
import PageHeader from '../PageHeader';

function Pagination({ pages = 5, activePage = 2, pill = false, size = '' }) {
  const [active, setActive] = useState(activePage);
  return (
    <ul className={`pagination${pill ? ' pagination-pill' : ''}${size ? ' pagination-'+size : ''}`}>
      <li className={`page-item${active === 1 ? ' disabled' : ''}`}>
        <a className="page-link" onClick={() => active > 1 && setActive(a => a - 1)} id="page-prev">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </a>
      </li>
      {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
        <li key={p} className={`page-item${p === active ? ' active' : ''}`}>
          <a className="page-link" onClick={() => setActive(p)} id={`page-${p}`}>{p}</a>
        </li>
      ))}
      <li className={`page-item${active === pages ? ' disabled' : ''}`}>
        <a className="page-link" onClick={() => active < pages && setActive(a => a + 1)} id="page-next">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </li>
    </ul>
  );
}

export default function PaginationPage() {
  return (
    <div>
      <PageHeader title="Pagination" subtitle="Accessible page navigation with pill, small, and large size variants." cssFile="pagination.css" />

      <section className="glass p-4 mb-4">
        <div className="vstack gap-4">
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize:'1rem' }}>Default</h2>
            <Pagination pages={5} activePage={2} />
          </div>
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize:'1rem' }}>Pill</h2>
            <Pagination pages={4} activePage={1} pill />
          </div>
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize:'1rem' }}>Small</h2>
            <Pagination pages={5} activePage={3} size="sm" />
          </div>
          <div>
            <h2 className="fw-semibold mb-2" style={{ fontSize:'1rem' }}>Large</h2>
            <Pagination pages={3} activePage={1} size="lg" />
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<ul class="pagination pagination-pill">\n  <li class="page-item disabled"><a class="page-link">←</a></li>\n  <li class="page-item active"><a class="page-link">1</a></li>\n  <li class="page-item"><a class="page-link">2</a></li>\n  <li class="page-item"><a class="page-link">→</a></li>\n</ul>`}
        </div>
      </section>
    </div>
  );
}

