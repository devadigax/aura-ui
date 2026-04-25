import React from 'react';
import TemplateLayout from './TemplateLayout';
import { Card, Badge, Avatar, Divider, Button, InputGroup, Input, InputIcon } from '../../index';

const recentPosts = [
  { title: '10 Color Palettes that pop on Dark Mode', date: 'Oct 15, 2023', img: '/templates/pexels-pattjjee-13717272.jpg' },
  { title: 'Aura UI hits v4.0. Here is what changed.', date: 'Oct 10, 2023', img: '/templates/pexels-kechno-studio-2150595479-31714081.jpg' },
  { title: 'Building accessible UIs with React', date: 'Sep 30, 2023', img: '/templates/pexels-anniroenkae-5453152.jpg' },
];

const tags = ['Frontend', 'React', 'Architecture', 'Vite', 'CSS', 'UI/UX', 'DX', 'Performance', 'Dark Mode', 'Open Source'];

const code = `
import { Card, Badge, Avatar, Divider, Button, InputGroup, Input, InputIcon } from 'aura-ui';

export default function BlogSinglePage() {
  return (
    <div className="template-split-xl" style={{ '--split-ratio': '1fr 340px', gap: '2.5rem', alignItems: 'flex-start' }}>

      {/* Main Article Column */}
      <article>
        {/* Hero */}
        <div className="mb-5 text-center">
          <Badge variant="primary" className="mb-4">Engineering</Badge>
          <h1 className="fw-black mb-4">Why we migrated to Vite and never looked back</h1>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Avatar src="https://i.pravatar.cc/150?u=author1" size="md" />
            <div className="text-start">
              <div className="fw-medium">Sarah Jenkins</div>
              <div className="text-muted" style={{ fontSize: '0.85rem' }}>Lead Engineer · Oct 20, 2023 · 5 min read</div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <Card glass className="overflow-hidden border-0 mb-5" style={{ height: '400px' }}>
          <img src="/templates/pexels-anniroenkae-5453152.jpg" alt="Article" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>

        {/* Body */}
        <div className="fs-5" style={{ lineHeight: 1.8 }}>
          <p className="mb-4">
            When we initially structured our front-end architecture, we relied heavily on standard bundling mechanisms...
          </p>
          {/* ... more content ... */}
        </div>
      </article>

      {/* Right Sidebar */}
      <aside className="d-flex flex-column gap-4" style={{ position: 'sticky', top: '2rem' }}>
        <Card glass className="p-4">
          <h6 className="fw-bold mb-3">Quick Search</h6>
          <InputGroup>
            <InputIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </InputIcon>
            <Input placeholder="Search posts..." />
          </InputGroup>
        </Card>

        <Card glass className="p-4">
          <h6 className="fw-bold mb-3">Popular Tags</h6>
          <div className="d-flex flex-wrap gap-2">
            {tags.map(tag => <Button key={tag} variant="outline-primary" size="sm">#{tag}</Button>)}
          </div>
        </Card>

        <Card glass className="p-4">
          <h6 className="fw-bold mb-3">Recent Posts</h6>
          {recentPosts.map((post, i) => (
            <div key={i} className="d-flex gap-3 mb-3 cursor-pointer">
              <img src={post.img} alt={post.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
              <div>
                <p className="fw-medium mb-1" style={{ fontSize: '0.85rem', lineHeight: 1.3 }}>{post.title}</p>
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>{post.date}</span>
              </div>
            </div>
          ))}
        </Card>
      </aside>
    </div>
  );
}
`;

export default function TemplateBlogSingle() {
  return (
    <TemplateLayout title="Blog Article" sourceCode={code}>
      <div className="template-split-xl" style={{ '--split-ratio': '1fr 320px', gap: '2.5rem', alignItems: 'flex-start' }}>

        {/* ── Main Article Column ── */}
        <article>
          {/* Hero */}
          <div className="mb-5 text-center">
            <Badge variant="primary" className="mb-4">Engineering</Badge>
            <h1 className="fw-black mb-4 mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2 }}>
              Why we migrated to Vite and never looked back
            </h1>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Avatar src="https://i.pravatar.cc/150?u=author1" size="md" />
              <div className="text-start">
                <div className="fw-medium">Sarah Jenkins</div>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>Lead Engineer · Oct 20, 2023 · 5 min read</div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <Card glass className="overflow-hidden border-0 mb-5" style={{ height: 'clamp(260px, 35vw, 420px)' }}>
            <img src="/templates/pexels-anniroenkae-5453152.jpg" alt="Vite Migration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Card>

          {/* Body */}
          <div className="fs-5" style={{ lineHeight: 1.8 }}>
            <p className="mb-4">
              When we initially structured our front-end architecture, we relied heavily on standard bundling mechanisms. As our codebase scaled, our localized compilation loops degraded heavily. This article outlines our transition narrative towards Vite.
            </p>
            <h3 className="fw-bold mt-5 mb-3">The Build Tool Renaissance</h3>
            <p className="mb-4">
              Lightning-fast Cold Server start, instant HMR (Hot Module Replacement), and true On-demand compilation. Vite's ecosystem approaches module bundling structurally differently than traditional bundlers by natively serving ES modules locally.
            </p>

            <Card glass className="p-4 my-5 border-primary" style={{ borderLeftWidth: '4px', backgroundColor: 'rgba(99,102,241,0.05)' }}>
              <p className="fw-medium mb-0 fs-5" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                "The DX enhancement was immediate. Build layers essentially dropped from multiple minutes per compilation to milliseconds."
              </p>
            </Card>

            <h3 className="fw-bold mt-5 mb-3">Migration Strategy</h3>
            <p className="mb-4">
              We began by auditing all Webpack-specific plugins and loaders in use. The migration was a three-phase process — first converting the dev server configuration, then aligning our environment variable handling, and finally optimizing chunk splitting for production.
            </p>
            <p className="mb-5">
              By isolating our dependency fetching algorithms and leaning entirely into native browser ES modules, the barrier to iteration evaporated overnight.
            </p>

            <Divider className="my-5" />

            <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
              <div className="d-flex flex-wrap gap-2">
                <Button variant="outline-primary" size="sm">#Frontend</Button>
                <Button variant="outline-primary" size="sm">#Architecture</Button>
                <Button variant="outline-primary" size="sm">#Vite</Button>
              </div>
              <div className="d-flex gap-3">
                <button className="btn btn-icon btn-sm rounded-circle d-flex align-items-center justify-content-center" title="Share on Twitter" style={{ backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-color)' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </button>
                <button className="btn btn-icon btn-sm rounded-circle d-flex align-items-center justify-content-center" title="Share on LinkedIn" style={{ backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-color)' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* ── Right Sidebar ── */}
        <aside className="d-flex flex-column gap-4" style={{ position: 'sticky', top: '2rem' }}>

          {/* Quick Search */}
          <Card glass className="p-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quick Search</h6>
            <InputGroup>
              <InputIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </InputIcon>
              <Input placeholder="Search posts..." />
            </InputGroup>
          </Card>

          {/* Popular Tags */}
          <Card glass className="p-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Popular Tags</h6>
            <div className="d-flex flex-wrap gap-2">
              {tags.map(tag => (
                <button key={tag} className="badge badge-primary badge-pill" style={{ cursor: 'pointer', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--accent)', fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}>
                  #{tag}
                </button>
              ))}
            </div>
          </Card>

          {/* Recent Posts */}
          <Card glass className="p-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recent Posts</h6>
            <div className="d-flex flex-column gap-3">
              {recentPosts.map((post, i) => (
                <div key={i} className="d-flex gap-3 align-items-start" style={{ cursor: 'pointer' }}>
                  <img src={post.img} alt={post.title} style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
                  <div>
                    <p className="fw-medium mb-1" style={{ fontSize: '0.82rem', lineHeight: 1.35 }}>{post.title}</p>
                    <span className="text-muted" style={{ fontSize: '0.72rem' }}>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Popular This Week */}
          <Card glass className="p-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Popular This Week</h6>
            <div className="d-flex flex-column gap-3">
              {[
                { num: '01', title: 'Glassmorphism Design Trends for 2024', views: '12.4k views' },
                { num: '02', title: 'React 19 feature overview for production', views: '9.1k views' },
                { num: '03', title: 'Why dark mode is more than aesthetics', views: '7.8k views' },
              ].map((p, i) => (
                <div key={i} className="d-flex gap-3 align-items-start" style={{ cursor: 'pointer' }}>
                  <span className="fw-black" style={{ fontSize: '1.3rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.4, flexShrink: 0, width: '28px' }}>{p.num}</span>
                  <div>
                    <p className="fw-medium mb-1" style={{ fontSize: '0.82rem', lineHeight: 1.35 }}>{p.title}</p>
                    <span className="text-muted" style={{ fontSize: '0.72rem' }}>{p.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Newsletter CTA */}
          <Card glass className="p-4 text-center" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.08))' }}>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 mx-auto d-block"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <h6 className="fw-bold mb-1">Stay in the loop</h6>
            <p className="text-muted mb-3" style={{ fontSize: '0.82rem' }}>Get the latest articles delivered directly to your inbox.</p>
            <Input placeholder="your@email.com" className="mb-2" />
            <Button variant="primary" className="w-100">Subscribe</Button>
          </Card>

        </aside>
      </div>
    </TemplateLayout>
  );
}
