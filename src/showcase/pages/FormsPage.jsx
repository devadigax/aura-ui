import React from 'react';
import PageHeader from '../PageHeader';
import {
  FormCheck,
  FormCheckInput,
  FormGroup,
  FormLabel,
  FormSwitch,
  FormSwitchInput,
  FormText,
  Input,
  InputGroup,
  InputIcon,
  Select,
  Textarea,
  Range,
  FormImagePlaceholder,
} from '../../index';

export default function FormsPage() {
  return (
    <div>
      <PageHeader title="Forms" subtitle="Text inputs, selects, checkboxes, radio, switches, and icon input groups." cssFile="forms.css" />

      <div className="card-grid card-grid-auto-md mb-4">
        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Basic Inputs</h2>
          <FormGroup>
            <FormLabel>Email address</FormLabel>
            <Input id="input-email" type="email" placeholder="name@example.com" />
            <FormText>We'll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Password</FormLabel>
            <Input id="input-password" type="password" placeholder="........" />
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Select Menu</FormLabel>
            <Select id="input-select">
              <option>Choose an option...</option>
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
              <option value="3">Option Three</option>
            </Select>
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>Textarea</FormLabel>
            <Textarea id="input-textarea" rows="3" placeholder="Write something..." />
          </FormGroup>
        </section>

        <section className="glass p-4">
          <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Checks & Switches</h2>
          <FormCheck className="mb-2">
            <FormCheckInput id="check-1" type="checkbox" defaultChecked />
            <span>Default checkbox (checked)</span>
          </FormCheck>
          <FormCheck className="mb-2">
            <FormCheckInput id="check-2" type="checkbox" />
            <span>Unchecked checkbox</span>
          </FormCheck>
          <FormCheck className="mb-2">
            <FormCheckInput id="radio-1" type="radio" name="demo-radio" defaultChecked />
            <span>Radio option A</span>
          </FormCheck>
          <FormCheck className="mb-4">
            <FormCheckInput id="radio-2" type="radio" name="demo-radio" />
            <span>Radio option B</span>
          </FormCheck>

          <hr className="my-3" />

          <FormSwitch className="mb-2">
            <FormSwitchInput id="switch-1" type="checkbox" defaultChecked />
            <span>Checked switch</span>
          </FormSwitch>
          <FormSwitch>
            <FormSwitchInput id="switch-2" type="checkbox" />
            <span>Unchecked switch</span>
          </FormSwitch>

          <hr className="my-3" />

          <h2 className="fw-semibold mb-3 mt-4" style={{ fontSize: '1.1rem' }}>Range Slider</h2>
          <FormGroup>
            <FormLabel>Volume Control</FormLabel>
            <Range defaultValue="50" min="0" max="100" />
          </FormGroup>
        </section>
      </div>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Image Placeholders</h2>
        <div className="d-flex flex-wrap gap-4 align-items-center">
          <FormImagePlaceholder size="lg" className="w-100 mb-3" />
          
          <div className="d-flex gap-4">
            <FormImagePlaceholder size="md" />
            <FormImagePlaceholder size="sm" />
            <FormImagePlaceholder size="md" src="https://i.pravatar.cc/300" alt="Preview" />
          </div>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Input Groups</h2>
        <div className="card-grid card-grid-2">
          <FormGroup className="mb-0">
            <FormLabel>Search (icon left)</FormLabel>
            <InputGroup>
              <InputIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </InputIcon>
              <Input id="input-search" type="text" placeholder="Search..." />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-0">
            <FormLabel>Email (icon right)</FormLabel>
            <InputGroup end>
              <Input id="input-email-icon" type="text" placeholder="Recipient's email" />
              <InputIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </InputIcon>
            </InputGroup>
          </FormGroup>
        </div>
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { FormGroup, FormLabel, Input } from 'aura-ui';\n\n<FormGroup>\n  <FormLabel>Email</FormLabel>\n  <Input type="email" placeholder="name@example.com" />\n</FormGroup>`}
        </div>
      </section>
    </div>
  );
}
