import React from 'react';
import PageHeader from '../PageHeader';

export default function PlaceholdersPage() {
  return (
    <div>
      <PageHeader title="Placeholders" subtitle="Skeleton loading states with shimmer pulse and wave animations." cssFile="placeholders.css" />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Card Skeleton (Pulse)</h2>
        <div className="card-grid card-grid-auto-md">

          <div className="placeholder-card" id="placeholder-pulse-1">
            <div className="hstack gap-3 mb-2">
              <div className="placeholder placeholder-w-25" style={{ height:44, borderRadius:10 }}/>
              <div className="vstack gap-2 flex-grow-1">
                <div className="placeholder placeholder-w-75"/>
                <div className="placeholder placeholder-w-50 placeholder-sm"/>
              </div>
            </div>
            <div className="placeholder placeholder-w-100 mb-1"/>
            <div className="placeholder placeholder-w-75 mb-1"/>
            <div className="placeholder placeholder-w-50"/>
          </div>

          <div className="placeholder-card" id="placeholder-pulse-2">
            <div className="hstack gap-3 mb-2">
              <div className="placeholder placeholder-w-25" style={{ height:44, borderRadius:10 }}/>
              <div className="vstack gap-2 flex-grow-1">
                <div className="placeholder placeholder-w-100"/>
                <div className="placeholder placeholder-w-75 placeholder-sm"/>
              </div>
            </div>
            <div className="placeholder placeholder-w-100 mb-1"/>
            <div className="placeholder placeholder-w-50 mb-1"/>
            <div className="placeholder placeholder-w-75"/>
          </div>

        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Wave Animation</h2>
        <div className="card-grid card-grid-auto-md">

          <div className="placeholder-card placeholder-wave" id="placeholder-wave-1">
            <div className="placeholder placeholder-w-100 placeholder-lg mb-2" style={{ borderRadius:8, height:80 }}/>
            <div className="vstack gap-2">
              <div className="placeholder placeholder-col placeholder-w-100"/>
              <div className="placeholder placeholder-col placeholder-w-75"/>
              <div className="placeholder placeholder-col placeholder-w-50"/>
              <div className="placeholder placeholder-w-25 mt-2" style={{ height:32, borderRadius:8 }}/>
            </div>
          </div>

          <div className="placeholder-card placeholder-wave" id="placeholder-wave-2">
            <div className="placeholder placeholder-w-100 placeholder-lg mb-2" style={{ borderRadius:8, height:80 }}/>
            <div className="vstack gap-2">
              <div className="placeholder placeholder-col placeholder-w-100"/>
              <div className="placeholder placeholder-col placeholder-w-50"/>
              <div className="placeholder placeholder-col placeholder-w-75"/>
              <div className="placeholder placeholder-w-25 mt-2" style={{ height:32, borderRadius:8 }}/>
            </div>
          </div>

        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Width Helpers</h2>
        <div className="vstack gap-2" style={{ maxWidth:400 }}>
          {['placeholder-w-100','placeholder-w-75','placeholder-w-50','placeholder-w-25'].map(c => (
            <div key={c} className="vstack gap-1">
              <code style={{ fontSize:'0.7rem' }}>.{c}</code>
              <div className={`placeholder ${c}`} id={`ph-${c}`}/>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<!-- Pulse (default) -->\n<div class="placeholder-card">\n  <div class="placeholder placeholder-w-75"></div>\n  <div class="placeholder placeholder-w-50 placeholder-sm"></div>\n</div>\n\n<!-- Wave -->\n<div class="placeholder-card placeholder-wave">\n  <div class="placeholder placeholder-w-100"></div>\n</div>`}
        </div>
      </section>
    </div>
  );
}

