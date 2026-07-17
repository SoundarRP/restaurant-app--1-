import { useEffect } from 'react'

const team = [
  {
    name: 'Rosa Ferreira',
    role: 'Executive Chef & Founder',
    bio: 'Trained in Basque coastal kitchens; obsessed with live-fire cooking.',
    img: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=500&auto=format&fit=crop',
  },
  {
    name: 'Kabir Anand',
    role: 'Head of Operations',
    bio: 'Keeps every service running while chasing down the best local farms.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop',
  },
  {
    name: 'Elena Botros',
    role: 'Pastry Chef',
    bio: 'Believes every fire-driven menu still needs a torch-finished dessert.',
    img: 'https://images.unsplash.com/photo-1595257841889-6c4699cf3789?q=80&w=500&auto=format&fit=crop',
  },
]

const timeline = [
  { year: '2013', text: 'Soundar RP opens as a 20-seat counter with one fire pit.' },
  { year: '2016', text: 'First expansion — the dining room and open hearth kitchen.' },
  { year: '2019', text: 'Launched the rooftop garden supplying herbs and greens.' },
  { year: '2023', text: 'Named "Best Live-Fire Kitchen" by the Salem Food Guild.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — Soundar RP'
  }, [])

  return (
    <div className="container section">
      <div className="section-head">
        <p className="eyebrow">About us</p>
        <h1 style={{ fontSize: '2.4rem' }}>Cooking honestly, over real fire</h1>
        <p>
          We don't use gas ranges. Every dish that leaves our kitchen has touched
          live coals, embers, or open flame — it's slower, but it's the only way we
          know how to cook.
        </p>
      </div>

      <div className="stat-strip">
        <div><strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold)' }}>2013</strong><div>Founded</div></div>
        <div><strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold)' }}>3</strong><div>Wood-fired hearths</div></div>
        <div><strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold)' }}>40mi</strong><div>Sourcing radius</div></div>
        <div><strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold)' }}>1</strong><div>Rule we never break</div></div>
      </div>

      <div className="section-tight">
        <h2 style={{ fontSize: '1.8rem', marginBottom: 24 }}>The people behind the fire</h2>
        <div className="grid grid-3">
          {team.map((person) => (
            <div className="card" key={person.name}>
              <img className="card-img" src={person.img} alt={person.name} />
              <div className="card-body">
                <h3 style={{ fontSize: '1.15rem' }}>{person.name}</h3>
                <span className="tag">{person.role}</span>
                <p style={{ marginTop: 10 }}>{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-tight">
        <h2 style={{ fontSize: '1.8rem', marginBottom: 24 }}>How we got here</h2>
        <div style={{ display: 'grid', gap: 18 }}>
          {timeline.map((step) => (
            <div key={step.year} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div className="badge-vein" style={{ height: 'auto', alignSelf: 'stretch' }} />
              <div>
                <strong style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
                  {step.year}
                </strong>
                <p style={{ margin: '4px 0 0' }}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
