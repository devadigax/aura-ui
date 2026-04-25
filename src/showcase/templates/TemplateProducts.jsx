import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, InputGroup, Input, InputIcon, Select, Badge, Button, Pagination } from '../../index';

const code = `
import { Card, InputGroup, Input, InputIcon, Select, Badge, Button, Pagination } from 'aura-ui';

export default function ProductsPage() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <InputGroup style={{ maxWidth: '300px' }}>
          <InputIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </InputIcon>
          <Input placeholder="Search products..." />
        </InputGroup>
        
        <div className="d-flex gap-2 align-items-center">
          <span className="text-muted text-nowrap" style={{ fontSize: '0.9rem' }}>Sort by:</span>
          <Select defaultValue="newest">
            <option value="newest">Newest Arrivals</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </Select>
        </div>
      </div>

      <div className="card-grid card-grid-3 md-card-grid-2 sm-card-grid-1 mb-5">
        {[
          { id: 1, name: 'Wireless Headphones', price: '$249.00', img: 'Wireless-Headphones.jpg', badge: null },
          { id: 2, name: 'Mechanical Keyboard', price: '$129.00', img: 'Mechanical-Keyboard.jpg', badge: { v: 'danger', text: 'Sale' } },
          { id: 3, name: 'Smart Watch Series 5', price: '$399.00', img: 'Smart-Watch.jpg', badge: { v: 'primary', text: 'New' } },
          { id: 4, name: '4K Ultra Monitor', price: '$599.00', img: '4K-Ultra-Monitor.jpg', badge: null },
          { id: 5, name: 'USB-C Docking Station', price: '$89.00', img: 'USB-C-Docking-Station.jpg', badge: null },
          { id: 6, name: 'Ergonomic Mouse', price: '$59.00', img: 'Ergonomic-Mouse.jpg', badge: null },
        ].map(p => (
          <Card key={p.id} glass className="h-100 preview-card">
            {/* Image Placeholder */}
            <div style={{ height: '200px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
              <img src={\`/templates/\${p.img}\`} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
              {p.badge && (
                <Badge variant={p.badge.v} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                  {p.badge.text}
                </Badge>
              )}
            </div>
            <Card.Body className="d-flex flex-column">
              <h5 className="fw-bold mb-1">{p.name}</h5>
              <p className="text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>A premium UI component built specifically for NextJS & React projects.</p>
              
              <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top" style={{ borderColor: 'var(--glass-border)!important' }}>
                <span className="fw-bold fs-5">{p.price}</span>
                <Button variant="primary" size="sm">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <Pagination activePage={1} totalPages={5} />
      </div>
    </div>
  );
}
`;

import { useNavigate } from 'react-router-dom';

export default function TemplateProducts() {
  const navigate = useNavigate();

  return (
    <TemplateLayout title="Products Search & Grid" sourceCode={code}>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <InputGroup style={{ maxWidth: '300px' }}>
            <InputIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </InputIcon>
            <Input placeholder="Search products..." />
          </InputGroup>

          <div className="d-flex gap-2 align-items-center">
            <span className="text-muted text-nowrap" style={{ fontSize: '0.9rem' }}>Sort by:</span>
            <Select defaultValue="newest">
              <option value="newest">Newest Arrivals</option>
              <option value="pop">Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </Select>
          </div>
        </div>

        <div className="card-grid card-grid-3 mb-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { id: 1, name: 'Wireless Headphones', price: '$249.00', img: 'Wireless-Headphones.jpg', badge: null },
            { id: 2, name: 'Mechanical Keyboard', price: '$129.00', img: 'Mechanical-Keyboard.jpg', badge: { v: 'danger', text: 'Sale' } },
            { id: 3, name: 'Smart Watch Series 5', price: '$399.00', img: 'Smart-Watch.jpg', badge: { v: 'primary', text: 'New' } },
            { id: 4, name: '4K Ultra Monitor', price: '$599.00', img: '4K-Ultra-Monitor.jpg', badge: null },
            { id: 5, name: 'USB-C Docking Station', price: '$89.00', img: 'USB-C-Docking-Station.jpg', badge: null },
            { id: 6, name: 'Ergonomic Mouse', price: '$59.00', img: 'Ergonomic-Mouse.jpg', badge: null },
          ].map(p => (
            <Card key={p.id} glass className="h-100" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('/templates/product-single')}>
              <div style={{ height: '200px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
                <img src={`/templates/${p.img}`} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {p.badge && (
                  <Badge variant={p.badge.v} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    {p.badge.text}
                  </Badge>
                )}
              </div>
              <Card.Body className="d-flex flex-column">
                <h5 className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>{p.name}</h5>
                <p className="text-muted flex-grow-1" style={{ fontSize: '0.85rem' }}>High quality premium product built for the modern professional workflow.</p>

                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top" style={{ borderColor: 'var(--glass-border)' }}>
                  <span className="fw-bold fs-5" style={{ color: 'var(--accent)' }}>{p.price}</span>
                  <Button variant="primary" size="sm">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <Pagination activePage={1} totalPages={8} />
        </div>
      </div>
    </TemplateLayout>
  );
}
