import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

const MAX_IMAGES = 8
const AUTOPLAY_MS = 5000

export default function Gallery({ images = [] }) {
  const capped = images.slice(0, MAX_IMAGES)
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )

  const count = capped.length

  const goTo = (i) => setIndex(((i % count) + count) % count)

  useEffect(() => {
    if (count <= 1 || prefersReducedMotion.current) return
    const timer = setInterval(() => setIndex((cur) => (cur + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [count, index])

  if (count === 0) {
    return (
      <section className="gallery-section glass-card rise d4">
        <div className="card-label">Gallery</div>
        <div className="gallery-empty">
          <Icon name="imageEmpty" size={34} strokeWidth={1.5} />
          <p>No gallery photos added yet. Once photos are uploaded, they'll appear here in a carousel.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="gallery-section glass-card rise d4">
      <div className="card-label">Gallery</div>

      <div className="carousel">
        <div className="carousel-track-wrap">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return
              const dx = e.changedTouches[0].clientX - touchStartX.current
              if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1))
              touchStartX.current = null
            }}
          >
            {capped.map((src, i) => (
              <div className="carousel-slide" key={src + i}>
                <img src={src} alt={`Gallery image ${i + 1}`} loading="lazy" />
                <div className="slide-scrim" />
                <span className="slide-index">
                  {String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {count > 1 && (
          <>
            <button className="car-arrow car-prev" aria-label="Previous image" onClick={() => goTo(index - 1)}>
              <Icon name="chevronLeft" size={18} />
            </button>
            <button className="car-arrow car-next" aria-label="Next image" onClick={() => goTo(index + 1)}>
              <Icon name="chevronRight" size={18} />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="car-dots">
          {capped.map((_, i) => (
            <button
              key={i}
              className={`car-dot${i === index ? ' active' : ''}`}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}

      {count > 1 && (
        <div className="thumb-row">
          {capped.map((src, i) => (
            <div
              key={src + i}
              className={`thumb${i === index ? ' active' : ''}`}
              onClick={() => goTo(i)}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
