import React from 'react';
import PageHeader from '../PageHeader';
import { Carousel } from '../../index';

const slides = [
  {
    id: 'design',
    title: 'Design Systems',
    description: 'Build consistent, glassy product surfaces with reusable primitives.',
    background: 'linear-gradient(135deg, #4f46e5, #a855f7)',
  },
  {
    id: 'shipping',
    title: 'Ship Faster',
    description: 'Compose polished screens quickly with the shared Aura UI building blocks.',
    background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
  },
  {
    id: 'themes',
    title: 'Theme Ready',
    description: 'Every slide and surface is built to work in both light and dark modes.',
    background: 'linear-gradient(135deg, #ea580c, #f59e0b)',
  },
];

function renderSlide(item) {
  return (
    <div style={{ height: 340, background: item.background, position: 'relative' }}>
      <div className="carousel-caption">
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function CarouselPage() {
  return (
    <div>
      <PageHeader
        title="Carousel"
        subtitle="React carousel wrapper with slide, fade, autoplay, indicators, and controls."
        cssFile="carousel.css"
      />

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Slide Carousel</h2>
        <Carousel items={slides} renderItem={renderSlide} id="carousel-slide-demo" />
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-3" style={{ fontSize: '1.1rem' }}>Fade + Autoplay</h2>
        <Carousel items={slides} renderItem={renderSlide} fade autoPlay interval={3500} id="carousel-fade-demo" />
      </section>

      <section className="glass p-4 mb-4">
        <h2 className="fw-semibold mb-2" style={{ fontSize: '1.1rem' }}>Usage</h2>
        <div className="code-block">
          {`import { Carousel } from '@devadigax/aura-ui';\n\nconst slides = [\n  { id: '1', title: 'First' },\n  { id: '2', title: 'Second' },\n];\n\n<Carousel\n  items={slides}\n  autoPlay\n  renderItem={(item) => <div>{item.title}</div>}\n/>`}
        </div>
      </section>
    </div>
  );
}
