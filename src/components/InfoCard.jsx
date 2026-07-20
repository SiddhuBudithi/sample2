export default function InfoCard({ about, tagline, services, businessTags }) {
  return (
    <div className="glass-card rise d2">
      <div className="card-label">About</div>
      <p className="about-text">{about}</p>
      {tagline && <p className="tagline">&ldquo;{tagline}&rdquo;</p>}

      {services?.length > 0 && (
        <div className="section-sub">
          <div className="card-label">Services</div>
          <div className="service-tags">
            {services.map((s) => (
              <span className="tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {businessTags?.length > 0 && (
        <div className="section-sub">
          <div className="card-label">Business Tags</div>
          <div className="biz-tags">
            {businessTags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
