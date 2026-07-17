import { Link } from 'react-router-dom'

export default function Dining() {
  return (
    <div className="split">
      <div>
        <h2 style={{ fontSize: '1.7rem' }}>In-house dining</h2>
        <p>
          Our main dining room seats up to 70 guests around the open hearth. Watch
          the kitchen work the coals while you eat — the fire is part of the view.
        </p>
        <ul style={{ color: 'var(--cream-dim)', paddingLeft: 20 }}>
          <li>Walk-ins welcome, reservations recommended on weekends</li>
          <li>Chef's counter seating for 6, first come first served</li>
          <li>Full bar with a wood-smoked cocktail program</li>
        </ul>
        <Link to="/reservation" className="btn btn-primary" style={{ marginTop: 12 }}>
          Reserve a table
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
        alt="Restaurant dining room"
        style={{ borderRadius: 6 }}
      />
    </div>
  )
}
