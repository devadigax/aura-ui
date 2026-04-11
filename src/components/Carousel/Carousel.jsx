import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const Carousel = React.forwardRef(({
  className,
  items = [],
  defaultIndex = 0,
  fade = false,
  autoPlay = false,
  interval = 4000,
  showIndicators = true,
  showControls = true,
  renderItem,
  ...props
}, ref) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((value) => (value + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const prev = () => setActiveIndex((value) => (value - 1 + items.length) % items.length);
  const next = () => setActiveIndex((value) => (value + 1) % items.length);

  return (
    <div ref={ref} className={clsx('carousel', { 'carousel-fade': fade }, className)} {...props}>
      <div
        className="carousel-inner"
        style={fade ? undefined : { transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className={clsx('carousel-item', { active: index === activeIndex })}
          >
            {renderItem ? renderItem(item, index === activeIndex) : item}
          </div>
        ))}
      </div>

      {showControls && items.length > 1 ? (
        <div className="carousel-controls">
          <button type="button" className="carousel-btn" onClick={prev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button type="button" className="carousel-btn" onClick={next} aria-label="Next slide">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      ) : null}

      {showIndicators && items.length > 1 ? (
        <div className="carousel-indicators">
          {items.map((item, index) => (
            <button
              key={item.id ?? `indicator-${index}`}
              type="button"
              className={clsx('carousel-indicator', { active: index === activeIndex })}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
