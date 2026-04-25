import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Badge, Avatar, Button } from '../../index';

const code = `
export default function BlogPage() {
  return <div>...</div>;
}
`;

export default function TemplateBlog() {
  return (
    <TemplateLayout title="Blog" sourceCode={code}>
      <Card glass className="mb-5 overflow-hidden border-0" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img src="templates/pexels-artyusufpatel-11597179.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
        </div>
        <Card.Body style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
          <Badge variant="primary" className="mb-3">Featured</Badge>
          <h1 className="fw-bold text-white mb-3" style={{ maxWidth: '600px' }}>The Future of Glassmorphism in Web Design Patterns</h1>
          <div className="d-flex align-items-center gap-3">
            <Avatar src="https://i.pravatar.cc/150?u=author1" size="sm" />
            <span className="text-white fw-medium">Sarah Jenkins</span>
            <span className="text-white" style={{ opacity: 0.7 }}>• Oct 24, 2023</span>
          </div>
        </Card.Body>
      </Card>

      <div className="card-grid card-grid-3 mb-4">
        {[
          { id: 1, tag: 'Engineering', title: 'Why we migrated to Vite and never looked back', date: 'Oct 20, 2023', img: 'templates/pexels-anniroenkae-5453152.jpg' },
          { id: 2, tag: 'Design', title: '10 Color Palettes that pop on Dark Mode', date: 'Oct 15, 2023', img: 'templates/pexels-pattjjee-13717272.jpg' },
          { id: 3, tag: 'Community', title: 'Aura UI hits v4.0. Here is what changed.', date: 'Oct 10, 2023', img: 'templates/pexels-kechno-studio-2150595479-31714081.jpg' }
        ].map(post => (
          <Card key={post.id} glass className="h-100 preview-card">
            <div style={{ height: '220px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
              <img src={`${post.img}`} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Card.Body className="d-flex flex-column">
              <span className="text-accent fw-bold mb-2" style={{ fontSize: '0.85rem' }}>{post.tag}</span>
              <h5 className="fw-bold mb-3 flex-grow-1" style={{ fontSize: '1.2rem', lineHeight: 1.4 }}>{post.title}</h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>{post.date}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </TemplateLayout>
  );
}
