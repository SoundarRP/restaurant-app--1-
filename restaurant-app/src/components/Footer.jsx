import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 12 }}>
              Soundar <span style={{ color: 'var(--ember-bright)', fontStyle: 'italic' }}>RP</span>
            </div>
            <p>
              A wood-fired kitchen built around live coals, seasonal produce and
              slow evenings. Every dish leaves the fire before it reaches your table.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem' }}>Explore</h4>
            <p><Link to="/menu">Menu</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/gallery">Gallery</Link></p>
            <p><Link to="/reviews">Reviews</Link></p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem' }}>Visit</h4>
            <p>14 Foundry Lane, Salem, Tamil Nadu</p>
            <p>Open Tue–Sun, 5pm – 11pm</p>
            <p>reservations@emberandvine.example</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Soundar RP. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  )
}
