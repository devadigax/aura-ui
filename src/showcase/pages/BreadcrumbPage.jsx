import React from 'react';
import PageHeader from '../PageHeader';

export default function BreadcrumbPage() {
  return (
    <div>
      <PageHeader title="Breadcrumb" subtitle="Hierarchical navigation breadcrumbs with slash and chevron dividers." cssFile="breadcrumb.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Default (slash divider)</h2>
        <ol className="breadcrumb" id="breadcrumb-default">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active">Data</li>
        </ol>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Glass + Chevron divider</h2>
        <ol className="breadcrumb breadcrumb-glass" data-divider="chevron" id="breadcrumb-glass">
          <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
          <li className="breadcrumb-item"><a href="#">Components</a></li>
          <li className="breadcrumb-item active">Breadcrumb</li>
        </ol>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Longer Path</h2>
        <ol className="breadcrumb" id="breadcrumb-long">
          <li className="breadcrumb-item"><a href="#">Aura UI</a></li>
          <li className="breadcrumb-item"><a href="#">Documentation</a></li>
          <li className="breadcrumb-item"><a href="#">Components</a></li>
          <li className="breadcrumb-item"><a href="#">Navigation</a></li>
          <li className="breadcrumb-item active">Breadcrumb</li>
        </ol>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<ol class="breadcrumb breadcrumb-glass" data-divider="chevron">\n  <li class="breadcrumb-item"><a href="#">Home</a></li>\n  <li class="breadcrumb-item"><a href="#">Section</a></li>\n  <li class="breadcrumb-item active">Current Page</li>\n</ol>`}
        </div>
      </section>
    </div>
  );
}

