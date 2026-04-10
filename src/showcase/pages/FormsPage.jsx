import React from 'react';
import PageHeader from '../PageHeader';

export default function FormsPage() {
  return (
    <div>
      <PageHeader title="Forms" subtitle="Text inputs, selects, checkboxes, radio, switches, and icon input groups." cssFile="forms.css" />

      <div className="card-grid card-grid-auto-md mb-4">
        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Basic Inputs</h2>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input id="input-email" type="email" className="form-control" placeholder="name@example.com" />
            <span className="form-text">We'll never share your email with anyone else.</span>
          </div>
          <div className="form-group mt-3">
            <label className="form-label">Password</label>
            <input id="input-password" type="password" className="form-control" placeholder="••••••••" />
          </div>
          <div className="form-group mt-3">
            <label className="form-label">Select Menu</label>
            <select id="input-select" className="form-control">
              <option>Choose an option…</option>
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
              <option value="3">Option Three</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label className="form-label">Textarea</label>
            <textarea id="input-textarea" className="form-control" rows="3" placeholder="Write something…" />
          </div>
        </section>

        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Checks & Switches</h2>
          <label className="form-check mb-2">
            <input id="check-1" type="checkbox" className="form-check-input" defaultChecked />
            <span>Default checkbox (checked)</span>
          </label>
          <label className="form-check mb-2">
            <input id="check-2" type="checkbox" className="form-check-input" />
            <span>Unchecked checkbox</span>
          </label>
          <label className="form-check mb-2">
            <input id="radio-1" type="radio" name="demo-radio" className="form-check-input" defaultChecked />
            <span>Radio option A</span>
          </label>
          <label className="form-check mb-4">
            <input id="radio-2" type="radio" name="demo-radio" className="form-check-input" />
            <span>Radio option B</span>
          </label>

          <hr className="my-3" />

          <label className="form-switch mb-2">
            <input id="switch-1" type="checkbox" className="form-switch-input" defaultChecked />
            <span>Checked switch</span>
          </label>
          <label className="form-switch">
            <input id="switch-2" type="checkbox" className="form-switch-input" />
            <span>Unchecked switch</span>
          </label>
        </section>
      </div>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize:'1.1rem' }}>Input Groups</h2>
        <div className="card-grid card-grid-2">
          <div className="form-group mb-0">
            <label className="form-label">Search (icon left)</label>
            <div className="input-group">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input id="input-search" type="text" className="form-control" placeholder="Search…" />
            </div>
          </div>
          <div className="form-group mb-0">
            <label className="form-label">Email (icon right)</label>
            <div className="input-group input-group-end">
              <input id="input-email-icon" type="text" className="form-control" placeholder="Recipient's email" />
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize:'1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`<div class="form-group">\n  <label class="form-label">Email</label>\n  <input type="email" class="form-control" placeholder="…" />\n</div>\n\n<label class="form-switch">\n  <input type="checkbox" class="form-switch-input" />\n  <span>Toggle me</span>\n</label>`}
        </div>
      </section>
    </div>
  );
}

