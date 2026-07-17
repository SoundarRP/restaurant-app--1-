import { Link } from 'react-router-dom'

export default function Catering() {
  return (
    <div className="split">
      <img
        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop"
        alt="Catering spread"
        style={{ borderRadius: 6 }}
      />
      <div>
        <h2 style={{ fontSize: '1.7rem' }}>Off-site catering</h2>
        <p>
          We bring a portable wood-fired grill to your location and cook live,
          on site — corporate lunches, weddings, backyard parties.
        </p>
        <ul style={{ color: 'var(--cream-dim)', paddingLeft: 20 }}>
          <li>Minimum of 20 guests, mobile hearth included</li>
          <li>Set menus or fully custom, tasting available beforehand</li>
          <li>Staffed by two chefs and a service lead</li>
        </ul>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>
          Request a catering quote
        </Link>
      </div>
    </div>
  )
}
