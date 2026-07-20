import TopNav from './components/TopNav.jsx'
import Hero from './components/Hero.jsx'
import InfoCard from './components/InfoCard.jsx'
import ContactCard from './components/ContactCard.jsx'
import Gallery from './components/Gallery.jsx'
import { member } from './data/member.js'

export default function App() {
  return (
    <>
      <TopNav />
      <main className="wrap">
        <Hero
          category={member.category}
          name={member.name}
          founderLine={member.founderLine}
          heroImage={member.heroImage}
        />

        <section className="info-grid">
          <InfoCard
            about={member.about}
            tagline={member.tagline}
            services={member.services}
            businessTags={member.businessTags}
          />
          <ContactCard location={member.location} contacts={member.contacts} />
        </section>

        <Gallery images={member.galleryImages} />

        <p className="foot-note">EO South Asia Platinum Bridge · Member-only ecosystem</p>
      </main>
    </>
  )
}
