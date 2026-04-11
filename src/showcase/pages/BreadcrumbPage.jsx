import React from 'react';
import PageHeader from '../PageHeader';
import { Breadcrumb } from '../../index';

export default function BreadcrumbPage() {
  return (
    <div>
      <PageHeader title="Breadcrumb" subtitle="Hierarchical navigation breadcrumbs with slash and chevron dividers." cssFile="breadcrumb.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Default (slash divider)</h2>
        <Breadcrumb id="breadcrumb-default">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Glass + Chevron divider</h2>
        <Breadcrumb glass divider="chevron" id="breadcrumb-glass">
          <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Components</Breadcrumb.Item>
          <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
        </Breadcrumb>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Longer Path</h2>
        <Breadcrumb id="breadcrumb-long">
          <Breadcrumb.Item href="#">Aura UI</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Documentation</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Components</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Navigation</Breadcrumb.Item>
          <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
        </Breadcrumb>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Breadcrumb } from 'aura-ui';\n\n<Breadcrumb glass divider="chevron">\n  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>\n  <Breadcrumb.Item active>Current Page</Breadcrumb.Item>\n</Breadcrumb>`}
        </div>
      </section>
    </div>
  );
}
