import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Badge, Button, Select, Divider } from '../../index';

const code = `
import { Card, Badge, Button, Select, Divider } from 'aura-ui';

export default function ProductSinglePage() {
  return (
    <div className="template-split-md" style={{ '--split-ratio': '1fr 1fr', gap: '3rem' }}>
      {/* Product Image Gallery */}
      <div>
        <Card glass className="overflow-hidden border-0 mb-3" style={{ height: '400px' }}>
          <img src="/templates/Wireless-Headphones.jpg" alt="Wireless Headphones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[1,2,3,4].map((i) => (
            <Card key={i} glass className="overflow-hidden border-0" style={{ height: '80px', cursor: 'pointer', opacity: i === 1 ? 1 : 0.6 }}>
              <img src="/templates/Wireless-Headphones.jpg" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="d-flex flex-column pt-3">
        <Badge variant="primary" className="align-self-start mb-3">#1 Best Seller</Badge>
        <h2 className="fw-black" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>Premium Wireless Headphones</h2>
        
        <div className="d-flex align-items-center gap-2 mb-4 mt-2">
          <div className="text-warning">
            {[1,2,3,4,5].map(star => (
              <svg key={star} viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <span className="text-muted fw-medium fs-sm mt-1">(1,284 Reviews)</span>
        </div>

        <h3 className="fw-bold mb-4" style={{ fontSize: '2rem', color: 'var(--accent)' }}>$249.00</h3>

        <p className="text-muted mb-4 fs-5" style={{ lineHeight: 1.6 }}>
          Experience studio-quality sound with our industry-leading noise cancellation technology. Designed for maximum comfort during extended listening sessions with premium memory foam ear cushions.
        </p>

        <Divider />

        <div className="mb-4">
          <label className="fw-bold mb-2 d-block">Select Color</label>
          <div className="d-flex gap-3">
            {['#1e293b', '#f8fafc', '#e2e8f0'].map((color, i) => (
              <button key={i} className="rounded-circle border" style={{ width: '32px', height: '32px', backgroundColor: color, cursor: 'pointer', outline: i === 0 ? '2px solid var(--accent)' : 'none', outlineOffset: '2px' }} />
            ))}
          </div>
        </div>

        <div className="d-flex gap-3 mb-5 mt-2">
          <Select defaultValue="1" style={{ maxWidth: '100px' }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
          <Button variant="primary" size="lg" className="flex-grow-1">Add to Cart</Button>
          <Button variant="outline-primary" size="lg" className="d-flex align-items-center justify-content-center px-4">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </Button>
        </div>

        <div className="d-flex gap-4 text-muted fs-sm border-top pt-4 mt-auto" style={{ borderColor: 'var(--glass-border)!important' }}>
          <div className="d-flex align-items-center gap-2"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> Free Worldwide Shipping</div>
          <div className="d-flex align-items-center gap-2"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 30-Day Return Policy</div>
        </div>
      </div>
    </div>
  );
}
`;

export default function TemplateProductSingle() {
  return (
    <TemplateLayout title="Product Detail" sourceCode={code}>
      <div className="template-split-md" style={{ '--split-ratio': '1fr 1fr', gap: '3rem' }}>
        {/* Product Image Gallery */}
        <div>
          <Card glass className="overflow-hidden border-0 mb-3" style={{ height: '400px' }}>
            <img src="/templates/Wireless-Headphones.jpg" alt="Wireless Headphones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Card>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[1,2,3,4].map((i) => (
              <Card key={i} glass className="overflow-hidden border-0" style={{ height: '80px', cursor: 'pointer', opacity: i === 1 ? 1 : 0.6 }}>
                <img src="/templates/Wireless-Headphones.jpg" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="d-flex flex-column pt-3">
          <Badge variant="primary" className="align-self-start mb-3">#1 Best Seller</Badge>
          <h2 className="fw-black" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>Premium Wireless Headphones</h2>
          
          <div className="d-flex align-items-center gap-2 mb-4 mt-2">
            <div className="text-warning">
              {[1,2,3,4,5].map(star => (
                <svg key={star} viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span className="text-muted fw-medium fs-sm mt-1">(1,284 Reviews)</span>
          </div>

          <h3 className="fw-bold mb-4" style={{ fontSize: '2rem', color: 'var(--accent)' }}>$249.00</h3>

          <p className="text-muted mb-4 fs-5" style={{ lineHeight: 1.6 }}>
            Experience studio-quality sound with our industry-leading noise cancellation technology. Designed for maximum comfort during extended listening sessions with premium memory foam ear cushions.
          </p>

          <Divider />

          <div className="mb-4">
            <label className="fw-bold mb-2 d-block">Select Color</label>
            <div className="d-flex gap-3">
              {['#1e293b', '#f8fafc', '#e2e8f0'].map((color, i) => (
                <button key={i} title="Select Color" className="rounded-circle border" style={{ width: '32px', height: '32px', backgroundColor: color, cursor: 'pointer', outline: i === 0 ? '2px solid var(--accent)' : 'none', outlineOffset: '2px' }} />
              ))}
            </div>
          </div>

          <div className="d-flex flex-wrap gap-3 mb-5 mt-2">
            <Select defaultValue="1" style={{ maxWidth: '100px' }}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <Button variant="primary" size="lg" className="flex-grow-1">Add to Cart</Button>
            <Button variant="outline-primary" size="lg" className="d-flex align-items-center justify-content-center px-4" title="Save Favorite">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </Button>
          </div>

          <div className="d-flex flex-wrap justify-content-between text-muted fs-sm border-top pt-4 mt-auto" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="d-flex align-items-center gap-2"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> Free Worldwide Shipping</div>
            <div className="d-flex align-items-center gap-2"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 30-Day Return Policy</div>
          </div>
        </div>
      </div>
    </TemplateLayout>
  );
}
