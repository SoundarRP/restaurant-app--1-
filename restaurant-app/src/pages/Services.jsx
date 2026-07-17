import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Services() {
  useEffect(() => {
    document.title = 'Services — Soundar RP'
  }, [])

  return (
    <div className="container section">
      <div className="section-head">
        <p className="eyebrow">What we offer</p>
        <h1 style={{ fontSize: '2.2rem' }}>Services</h1>
        <p>From a regular table for two to a full off-site event, here's how we can host you.</p>
      </div>

      <nav className="sub-nav">
        <NavLink to="/services/dining" className={({ isActive }) => (isActive ? 'active' : '')}>
          Dining
        </NavLink>
        <NavLink to="/services/catering" className={({ isActive }) => (isActive ? 'active' : '')}>
          Catering
        </NavLink>
        <NavLink to="/services/events" className={({ isActive }) => (isActive ? 'active' : '')}>
          Private Events
        </NavLink>
      </nav>

      {/* Nested route content renders here */}
      <Outlet />
    </div>
  )
}
