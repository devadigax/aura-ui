import React from 'react';
import PageHeader from '../PageHeader';
import { Placeholder } from '../../index';

export default function PlaceholdersPage() {
  return (
    <div>
      <PageHeader title="Placeholders" subtitle="Skeleton loading states with shimmer pulse and wave animations." cssFile="placeholders.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Card Skeleton (Pulse)</h2>
        <div className="card-grid card-grid-auto-md">
          <Placeholder card id="placeholder-pulse-1">
            <div className="hstack gap-3 mb-2">
              <Placeholder className="placeholder-w-25" style={{ height: 44, borderRadius: 10 }} />
              <div className="vstack gap-2 flex-grow-1">
                <Placeholder className="placeholder-w-75" />
                <Placeholder className="placeholder-w-50 placeholder-sm" />
              </div>
            </div>
            <Placeholder className="placeholder-w-100 mb-1" />
            <Placeholder className="placeholder-w-75 mb-1" />
            <Placeholder className="placeholder-w-50" />
          </Placeholder>

          <Placeholder card id="placeholder-pulse-2">
            <div className="hstack gap-3 mb-2">
              <Placeholder className="placeholder-w-25" style={{ height: 44, borderRadius: 10 }} />
              <div className="vstack gap-2 flex-grow-1">
                <Placeholder className="placeholder-w-100" />
                <Placeholder className="placeholder-w-75 placeholder-sm" />
              </div>
            </div>
            <Placeholder className="placeholder-w-100 mb-1" />
            <Placeholder className="placeholder-w-50 mb-1" />
            <Placeholder className="placeholder-w-75" />
          </Placeholder>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Wave Animation</h2>
        <div className="card-grid card-grid-auto-md">
          <Placeholder card wave id="placeholder-wave-1">
            <Placeholder className="placeholder-w-100 placeholder-lg mb-2" style={{ borderRadius: 8, height: 80 }} />
            <div className="vstack gap-2">
              <Placeholder className="placeholder-col placeholder-w-100" />
              <Placeholder className="placeholder-col placeholder-w-75" />
              <Placeholder className="placeholder-col placeholder-w-50" />
              <Placeholder className="placeholder-w-25 mt-2" style={{ height: 32, borderRadius: 8 }} />
            </div>
          </Placeholder>

          <Placeholder card wave id="placeholder-wave-2">
            <Placeholder className="placeholder-w-100 placeholder-lg mb-2" style={{ borderRadius: 8, height: 80 }} />
            <div className="vstack gap-2">
              <Placeholder className="placeholder-col placeholder-w-100" />
              <Placeholder className="placeholder-col placeholder-w-50" />
              <Placeholder className="placeholder-col placeholder-w-75" />
              <Placeholder className="placeholder-w-25 mt-2" style={{ height: 32, borderRadius: 8 }} />
            </div>
          </Placeholder>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Width Helpers</h2>
        <div className="vstack gap-2" style={{ maxWidth: 400 }}>
          {['placeholder-w-100', 'placeholder-w-75', 'placeholder-w-50', 'placeholder-w-25'].map((className) => (
            <div key={className} className="vstack gap-1">
              <code style={{ fontSize: '0.7rem' }}>.{className}</code>
              <Placeholder className={className} id={`ph-${className}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Placeholder } from 'aura-ui';\n\n<Placeholder card wave>\n  <Placeholder className="placeholder-w-100" />\n</Placeholder>`}
        </div>
      </section>
    </div>
  );
}
