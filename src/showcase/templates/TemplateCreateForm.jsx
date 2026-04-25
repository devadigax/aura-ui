import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, FormGroup, FormLabel, Input, Textarea, Select, FormSwitch, FormSwitchInput, FormCheck, FormCheckInput, FormImagePlaceholder, Button, Divider } from '../../index';

const code = `
import { Card, FormGroup, FormLabel, Input, Textarea, Select, FormSwitch, FormSwitchInput, FormCheck, FormCheckInput, FormImagePlaceholder, Button, Divider } from 'aura-ui';

export default function CreateProjectForm() {
  return (
    <div className="template-split-xl" style={{ '--split-ratio': '2.3fr 1fr' }}>
      
      {/* LEFT COLUMN */}
      <div className="d-flex flex-column gap-4">
        <Card glass>
          <Card.Body className="p-4 p-md-5">
            <p className="text-muted mb-4">Fill in the details below to initialize a new workspace.</p>
            
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="d-block d-md-grid mb-4">
                <FormGroup className="mb-4 mb-md-0">
                  <FormLabel className="fw-semibold">Project Name</FormLabel>
                  <Input type="text" placeholder="e.g. Aura UI Component Library" />
                </FormGroup>
                <FormGroup>
                  <FormLabel className="fw-semibold">Category</FormLabel>
                  <Select>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>UI/UX Design</option>
                  </Select>
                </FormGroup>
              </div>

              <FormGroup className="mb-4">
                <FormLabel className="fw-semibold">Description</FormLabel>
                <Textarea placeholder="Briefly describe the purpose of this project..." rows="4" />
              </FormGroup>
            </form>
          </Card.Body>
        </Card>

        {/* SETTINGS CARD */}
        <Card glass>
          <Card.Body className="p-4 p-md-5">
            <h5 className="fw-bold mb-4 fs-5 text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Status & Visibility
            </h5>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="d-block d-md-grid mb-4">
              <FormGroup className="mb-4 mb-md-0">
                <FormLabel className="fw-semibold">Project Status</FormLabel>
                <Select>
                  <option>Draft</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <FormLabel className="fw-semibold">Visibility</FormLabel>
                <div className="d-flex gap-4 mt-2">
                  <FormCheck>
                    <FormCheckInput type="radio" name="visibility" id="vis-public" defaultChecked />
                    <label className="form-check-label" htmlFor="vis-public">Public</label>
                  </FormCheck>
                  <FormCheck>
                    <FormCheckInput type="radio" name="visibility" id="vis-private" />
                    <label className="form-check-label" htmlFor="vis-private">Private</label>
                  </FormCheck>
                </div>
              </FormGroup>
            </div>

            <Divider className="my-4" />

            <FormGroup className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <FormLabel className="fw-semibold mb-0">Allow Comments</FormLabel>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>Enable team members to leave feedback</div>
              </div>
              <FormSwitch>
                <FormSwitchInput defaultChecked />
              </FormSwitch>
            </FormGroup>
          </Card.Body>
        </Card>
      </div>

      {/* RIGHT COLUMN */}
      <div className="d-flex flex-column gap-4">
        
        {/* MEDIA CARD */}
        <Card glass>
          <Card.Body className="p-4 p-md-5">
            <h5 className="fw-bold mb-4 fs-5 text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Media & Assets
            </h5>

            <FormGroup>
              <FormLabel className="fw-semibold mb-3">Project Cover Image</FormLabel>
              <FormImagePlaceholder size="lg">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 text-muted">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p className="mb-1 text-muted fw-medium" style={{ fontSize: '0.95rem' }}>Click or drag image to upload</p>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>(Max size 5MB)</p>
                </div>
              </FormImagePlaceholder>
            </FormGroup>
          </Card.Body>
        </Card>

        {/* ACTIONS CARD */}
        <Card glass>
          <Card.Body className="p-4 p-md-5">
            <Button variant="primary" className="w-100 mb-3 py-2 fw-semibold">Publish Project</Button>
            <Button variant="outline-primary" className="w-100 py-2 fw-semibold">Save as Draft</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}
`;

export default function TemplateCreateForm() {
  return (
    <TemplateLayout title="Complex Form (Create)" sourceCode={code}>
      {/* ── Page Header ── */}
      <div className="glass mb-4" style={{ padding: '2rem 2.5rem', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            <span className="badge badge-primary badge-pill">New Project</span>
          </div>
          <h2 className="fw-black mb-1" style={{ fontSize: '1.8rem', letterSpacing: '-0.5px' }}>Create New Project</h2>
          <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Fill in the details below to initialize a new workspace.</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary">Discard</Button>
          <Button variant="primary">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.4rem', verticalAlign: 'middle' }}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            Save Draft
          </Button>
        </div>
      </div>

      <div className="template-split-xl" style={{ '--split-ratio': '2.3fr 1fr' }}>

        {/* LEFT COLUMN */}
        <div className="d-flex flex-column gap-4">
          <Card glass>
            <Card.Body className="p-4 p-md-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </div>
                <h5 className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>Project Details</h5>
              </div>

              <form onSubmit={e => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="d-block d-md-grid mb-4">
                  <FormGroup className="mb-4 mb-md-0">
                    <FormLabel className="fw-semibold">Project Name</FormLabel>
                    <Input type="text" placeholder="e.g. Aura UI Component Library" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel className="fw-semibold">Category</FormLabel>
                    <Select>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                    </Select>
                  </FormGroup>
                </div>

                <FormGroup className="mb-4">
                  <FormLabel className="fw-semibold">Description</FormLabel>
                  <Textarea placeholder="Briefly describe the purpose of this project..." rows="4" />
                </FormGroup>
              </form>
            </Card.Body>
          </Card>

          {/* SETTINGS CARD */}
          <Card glass>
            <Card.Body className="p-4 p-md-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
                </div>
                <h5 className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>Status &amp; Visibility</h5>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="d-block d-md-grid mb-4">
                <FormGroup className="mb-4 mb-md-0">
                  <FormLabel className="fw-semibold">Project Status</FormLabel>
                  <Select>
                    <option>Draft</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="fw-semibold">Visibility</FormLabel>
                  <div className="d-flex gap-4 mt-2">
                    <FormCheck>
                      <FormCheckInput type="radio" name="visibility" id="vis-public" defaultChecked />
                      <label className="form-check-label" htmlFor="vis-public">Public</label>
                    </FormCheck>
                    <FormCheck>
                      <FormCheckInput type="radio" name="visibility" id="vis-private" />
                      <label className="form-check-label" htmlFor="vis-private">Private</label>
                    </FormCheck>
                  </div>
                </FormGroup>
              </div>

              <Divider className="my-4" />

              <FormGroup className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <FormLabel className="fw-semibold mb-0">Allow Comments</FormLabel>
                  <div className="text-muted" style={{ fontSize: '0.85rem' }}>Enable team members to leave feedback</div>
                </div>
                <FormSwitch>
                  <FormSwitchInput defaultChecked />
                </FormSwitch>
              </FormGroup>
            </Card.Body>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="d-flex flex-column gap-4">

          {/* MEDIA CARD */}
          <Card glass>
            <Card.Body className="p-4 p-md-5">
              <h5 className="fw-bold mb-4 fs-5 text-muted" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Media & Assets
              </h5>

              <FormGroup>
                <FormLabel className="fw-semibold mb-3">Project Cover Image</FormLabel>
                <FormImagePlaceholder size="lg">
                  <div className="text-center">
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 text-muted">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    <p className="mb-1 text-muted fw-medium" style={{ fontSize: '0.95rem' }}>Click or drag image to upload</p>
                    <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>(Max size 5MB)</p>
                  </div>
                </FormImagePlaceholder>
              </FormGroup>
            </Card.Body>
          </Card>

          {/* ACTIONS CARD */}
          <Card glass>
            <Card.Body className="p-4 p-md-5">
              <h5 className="fw-bold mb-1" style={{ fontSize: '0.95rem' }}>Publish</h5>
              <p className="text-muted mb-4" style={{ fontSize: '0.82rem' }}>Once published, this project will be visible to its assigned audience.</p>
              <Button variant="primary" className="w-100 mb-3 py-2 fw-semibold">Publish Project</Button>
              <Button variant="outline-primary" className="w-100 py-2 fw-semibold">Save as Draft</Button>
            </Card.Body>
          </Card>

          {/* STATUS CARD */}
          <Card glass>
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--text-muted)' }}>Project Health</h6>
              {[{ label: 'SEO Score', val: 82, color: '#22c55e' }, { label: 'Accessibility', val: 95, color: '#6366f1' }, { label: 'Performance', val: 67, color: '#f97316' }].map(({ label, val, color }) => (
                <div key={label} className="mb-3">
                  <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.8rem' }}>
                    <span className="text-muted">{label}</span>
                    <span className="fw-bold" style={{ color }}>{val}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: 'var(--glass-border)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${val}%`, background: color, borderRadius: 99, transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>

        </div>
      </div>
    </TemplateLayout>
  );
}
