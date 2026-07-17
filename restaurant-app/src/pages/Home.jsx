import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import menuData from '../data/menuData.js'
import MenuCard from '../components/MenuCard.jsx'

export default function Home() {
  // useEffect: set the document title per page
  useEffect(() => {
    document.title = 'Soundar RP — Wood-Fired Kitchen'
  }, [])

  // useState: rotate a "chef's word of the day" style highlight
  const highlights = [
    'Live-fire everything. No gas, no shortcuts.',
    'Sourced from farms within 40 miles.',
    'New coal-roasted special every Friday.',
  ]
  const [highlightIndex, setHighlightIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length)
    }, 3500)
    return () => clearInterval(id)
  }, [highlights.length])

  const featured = menuData.slice(0, 3)

  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Salem's live-fire kitchen</p>
          <h1>
            Everything on this menu <em>meets the coals.</em>
          </h1>
          <p className="hero-lede">
            Soundar RP is a wood-fired restaurant built around one idea: real fire
            makes real flavor. {highlights[highlightIndex]}
          </p>
          <div className="hero-actions">
            <Link to="/reservation" className="btn btn-primary">
              Reserve a table
            </Link>
            <Link to="/menu" className="btn btn-outline">
              View the menu
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <strong>12+</strong>
              <span>Years over the coals</span>
            </div>
            <div>
              <strong>4.8</strong>
              <span>Average guest rating</span>
            </div>
            <div>
              <strong>40mi</strong>
              <span>Farm sourcing radius</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">From the fire</p>
          <h2 style={{ fontSize: '2.2rem' }}>Guest favourites</h2>
          <p>A short taste of what usually leaves the kitchen first.</p>
        </div>
        <div className="grid grid-3">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/menu" className="btn btn-outline">
            See the full menu
          </Link>
        </div>
      </section>

      <section className="section container split">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop"
          alt="Chef tending the open fire"
          style={{ borderRadius: 6 }}
        />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 style={{ fontSize: '2rem' }}>Built around a single fire pit</h2>
          <p>
            Soundar RP opened with one wood-fired hearth and a short menu. Years
            later the hearth is bigger, the menu longer, but the rule hasn't changed —
            if it can't be cooked on coals or open flame, it doesn't go on the plate.
          </p>
          <Link to="/about" className="btn btn-outline">
            Read our story
          </Link>
        </div>
      </section>
    </div>
  )
}
