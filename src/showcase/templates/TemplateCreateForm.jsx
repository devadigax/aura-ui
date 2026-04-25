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
            <h2 className="fw-bold mb-2">Create New Project</h2>
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
      <div className="template-split-xl" style={{ '--split-ratio': '2.3fr 1fr' }}>
        
        {/* LEFT COLUMN */}
        <div className="d-flex flex-column gap-4">
          <Card glass>
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold mb-2">Create New Project</h2>
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
    </TemplateLayout>
  );
}
