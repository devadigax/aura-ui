import React from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateLayout from './TemplateLayout';
import { Card, Badge, Avatar, Button } from '../../index';

const posts = [
  { id: 1, tag: 'Engineering', title: 'Why we migrated to Vite and never looked back', date: 'Oct 20, 2023', read: '5 min', img: 'templates/pexels-anniroenkae-5453152.jpg' },
  { id: 2, tag: 'Design',      title: '10 Color Palettes that pop on Dark Mode',          date: 'Oct 15, 2023', read: '3 min', img: 'templates/pexels-pattjjee-13717272.jpg' },
  { id: 3, tag: 'Community',   title: 'Aura UI hits v4.0. Here is what changed.',          date: 'Oct 10, 2023', read: '6 min', img: 'templates/pexels-kechno-studio-2150595479-31714081.jpg' },
  { id: 4, tag: 'Engineering', title: 'Building Accessible UIs with React and ARIA',      date: 'Oct 5, 2023',  read: '7 min', img: 'templates/pexels-anniroenkae-5453152.jpg' },
  { id: 5, tag: 'Design',      title: 'The anatomy of a great glassmorphism card',         date: 'Sep 28, 2023', read: '4 min', img: 'templates/pexels-pattjjee-13717272.jpg' },
  { id: 6, tag: 'Community',   title: 'How our community shaped the v4 component API',    date: 'Sep 20, 2023', read: '5 min', img: 'templates/pexels-kechno-studio-2150595479-31714081.jpg' },
];

const tagColors = { Engineering: '#6366f1', Design: '#a855f7', Community: '#22c55e' };

const code = `
import { Card, Badge, Avatar, Button } from 'aura-ui';

export default function BlogPage() {
  return (
    <div>
      {/* Featured Hero Post */}
      <Card glass className="mb-5 overflow-hidden" style={{ minHeight: '420px' }}>
        <img src="/templates/hero.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Card.Body style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
          <Badge variant="primary">Featured</Badge>
          <h1 className="fw-bold text-white mt-3">The Future of Glassmorphism</h1>
          {/* Author row... */}
        </Card.Body>
      </Card>
      {/* Posts Grid */}
    </div>
  );
}
`;

export default function TemplateBlog() {
  const navigate = useNavigate();

  return (
    <TemplateLayout title="Blog" sourceCode={code}>
      {/* ── Featured Hero ── */}
      <Card glass className="mb-5 overflow-hidden border-0" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', cursor: 'pointer', position: 'relative' }} onClick={() => navigate('/templates/blog-single')}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img src="templates/pexels-artyusufpatel-11597179.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />
        </div>
        <Card.Body style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
          <Badge variant="primary" className="mb-3">Featured</Badge>
          <h1 className="fw-bold text-white mb-3" style={{ maxWidth: '640px', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.2 }}>The Future of Glassmorphism in Web Design Patterns</h1>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <Avatar src="https://i.pravatar.cc/150?u=author1" size="sm" />
            <span className="text-white fw-medium">Sarah Jenkins</span>
            <span className="text-white" style={{ opacity: 0.7 }}>• Oct 24, 2023</span>
            <span className="badge badge-pill" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', backdropFilter: 'blur(4px)' }}>8 min read</span>
          </div>
        </Card.Body>
      </Card>

      {/* ── Category filter strip ── */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {['All', 'Engineering', 'Design', 'Community'].map(cat => (
          <button key={cat} className="badge badge-pill" style={{ cursor: 'pointer', padding: '0.45rem 1rem', fontSize: '0.82rem', fontWeight: 600, border: '1px solid var(--glass-border)', background: cat === 'All' ? 'rgba(99,102,241,0.15)' : 'var(--glass-bg)', color: cat === 'All' ? 'var(--accent)' : 'var(--text-muted)' }}>
            {cat}
          </button>
        ))}
      </div>

      {/* ── Post Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: '1.5rem' }} className="mb-5">
        {posts.map(post => (
          <Card key={post.id} glass className="h-100" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('/templates/blog-single')}>
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
              <img src={`${post.img}`} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', top: 10, left: 10 }}>
                <span className="badge badge-pill" style={{ background: tagColors[post.tag] || '#6366f1', color: '#fff', fontSize: '0.72rem', fontWeight: 700 }}>{post.tag}</span>
              </div>
            </div>
            <Card.Body className="d-flex flex-column p-4">
              <h5 className="fw-bold mb-3 flex-grow-1" style={{ fontSize: '1.05rem', lineHeight: 1.4 }}>{post.title}</h5>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-muted" style={{ fontSize: '0.8rem' }}>{post.date}</span>
                <span className="text-muted" style={{ fontSize: '0.8rem' }}>{post.read} read</span>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* ── Load More ── */}
      <div className="text-center">
        <Button variant="outline-primary" size="lg">Load More Posts</Button>
      </div>
    </TemplateLayout>
  );
}
