import { useState } from 'react'
import Icon from './Icon.jsx'

export default function ContactCard({ location, contacts }) {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = async (value, index) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      /* clipboard unavailable — fail silently */
    }
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex((cur) => (cur === index ? null : cur)), 1400)
  }

  return (
    <div className="glass-card rise d3">
      <div className="card-label">Contact</div>
      <div className="location-line">
        <Icon name="location" size={13} />
        {location} · Tap any field to copy
      </div>

      <div className="contact-list">
        {contacts.map((c, i) => (
          <div className="contact-row" key={c.type} onClick={() => handleCopy(c.value, i)}>
            <div className="contact-icon">
              <Icon name={c.type} size={16} />
            </div>
            <div className="contact-meta">
              <div className="label">{c.label}</div>
              <div className="value">{c.value}</div>
            </div>
            <button
              className={`copy-btn${copiedIndex === i ? ' copied' : ''}`}
              aria-label={`Copy ${c.label}`}
              onClick={(e) => { e.stopPropagation(); handleCopy(c.value, i) }}
            >
              <Icon name={copiedIndex === i ? 'check' : 'copy'} size={13} strokeWidth={copiedIndex === i ? 2.5 : 2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
