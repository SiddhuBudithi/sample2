import Icon from './Icon.jsx'

export default function Hero({ category, name, founderLine, heroImage }) {
  return (
    <section className="hero rise d1">
      <img src={heroImage} alt={name} />
      <div className="hero-scrim" />
      <div className="hero-content">
        <div>
          <span className="eyebrow">{category}</span>
          <h1 className="name">{name}</h1>
          <p className="founder-line">{founderLine}</p>
        </div>
        <div className="verified-badge">
          <Icon name="verified" size={15} />
          Verified Platinum Member
        </div>
      </div>
    </section>
  )
}
