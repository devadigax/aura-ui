import React, { useState } from 'react';
import { Popover, Button, Badge } from '../../index';
import PageHeader from '../PageHeader';

export default function PopoverPage() {
  const [clickOpen, setClickOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Popover"
        description="Floating contextual panels that display rich content on click or hover. Supports four placements, click or hover triggers, header and body sections, and an optional arrow indicator."
        version="v2.0"
        status="Stable"
      />

      {/* Placement demos */}
      <section className="glass p-4 mb-4">
        <h2 className="section-label">Placements</h2>
        <div className="hstack gap-4 flex-wrap">
          {['top', 'bottom', 'start', 'end'].map((placement) => (
            <Popover key={placement} placement={placement}>
              <Popover.Trigger>
                <Button variant="outline-primary" size="sm">{placement}</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Header>Popover {placement}</Popover.Header>
                <Popover.Body>
                  This popover appears on the <strong>{placement}</strong> side of its trigger.
                </Popover.Body>
              </Popover.Content>
            </Popover>
          ))}
        </div>
      </section>

      {/* Trigger modes */}
      <section className="glass p-4 mb-4">
        <h2 className="section-label">Trigger: Hover</h2>
        <div className="hstack gap-4 flex-wrap">
          <Popover placement="top" trigger="hover">
            <Popover.Trigger>
              <Button variant="secondary" size="sm">Hover me</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Header>Hover Triggered</Popover.Header>
              <Popover.Body>
                This popover opens on <code>mouseenter</code> and closes on <code>mouseleave</code>.
              </Popover.Body>
            </Popover.Content>
          </Popover>

          <Popover placement="top" trigger="click">
            <Popover.Trigger>
              <Button variant="primary" size="sm">Click me</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Header>Click Triggered</Popover.Header>
              <Popover.Body>
                Click outside or press <kbd>Escape</kbd> to dismiss.
              </Popover.Body>
            </Popover.Content>
          </Popover>
        </div>
      </section>

      {/* With badge trigger */}
      <section className="glass p-4 mb-4">
        <h2 className="section-label">Any Element as Trigger</h2>
        <p className="text-muted" style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
          The trigger can wrap any element — buttons, badges, text, icons…
        </p>
        <div className="hstack gap-4 flex-wrap">
          <Popover placement="bottom" trigger="hover">
            <Popover.Trigger>
              <Badge variant="success" pill>22 components</Badge>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Body>
                Each component is a React wrapper around the glassmorphism CSS system.
              </Popover.Body>
            </Popover.Content>
          </Popover>

          <Popover placement="end" trigger="hover">
            <Popover.Trigger>
              <span style={{ cursor: 'help', borderBottom: '1px dashed var(--text-muted)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                What is glassmorphism?
              </span>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Header>Glassmorphism</Popover.Header>
              <Popover.Body>
                A design trend using frosted-glass effects via <code>backdrop-filter: blur()</code> with translucent backgrounds and subtle borders.
              </Popover.Body>
            </Popover.Content>
          </Popover>
        </div>
      </section>

      {/* Usage */}
      <section className="glass p-4 mb-4">
        <h2 className="section-label">Usage</h2>
        <div className="code-block">
          <span className="cb-keyword">import</span>{' '}{'{ Popover }'}{' '}<span className="cb-keyword">from</span>{' '}<span className="cb-string">'@devadigax/aura-ui'</span>;{'\n\n'}
          {'<Popover placement='}<span className="cb-string">"top"</span>{' trigger='}<span className="cb-string">"click"</span>{'>\n'}
          {'  <Popover.Trigger>\n'}
          {'    <Button>Open</Button>\n'}
          {'  </Popover.Trigger>\n'}
          {'  <Popover.Content>\n'}
          {'    <Popover.Arrow />\n'}
          {'    <Popover.Header>Title</Popover.Header>\n'}
          {'    <Popover.Body>Content goes here.</Popover.Body>\n'}
          {'  </Popover.Content>\n'}
          {'</Popover>'}
        </div>
      </section>

      {/* Props table */}
      <section className="glass p-4 mb-4">
        <h2 className="section-label">Props</h2>
        <table className="table table-glass">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>placement</code></td><td>string</td><td><code>"top"</code></td><td>Position: <code>top</code> | <code>bottom</code> | <code>start</code> | <code>end</code></td></tr>
            <tr><td><code>trigger</code></td><td>string</td><td><code>"click"</code></td><td>Open mode: <code>click</code> | <code>hover</code></td></tr>
            <tr><td><code>defaultOpen</code></td><td>boolean</td><td><code>false</code></td><td>Whether the popover opens initially</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
