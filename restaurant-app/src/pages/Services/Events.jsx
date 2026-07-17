import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <div className="split">
      <div>
        <h2 style={{ fontSize: '1.7rem' }}>Private events</h2>
        <p>
          Book the private dining room or the full restaurant for birthdays,
          anniversaries, launches, and rehearsal dinners.
        </p>
        <ul style={{ color: 'var(--cream-dim)', paddingLeft: 20 }}>
          <li>Private room seats up to 24 around the smaller hearth</li>
          <li>Full buyout available for up to 90 guests</li>
          <li>Custom set menus with wine or cocktail pairings</li>
        </ul>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>
          Enquire about an event
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
        alt="Private event table setting"
        style={{ borderRadius: 6 }}
      />
    </div>
  )
}
