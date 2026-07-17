import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reservation', label: 'Reservation' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const { totalItems } = useCart()

  // Close the mobile menu when clicking outside of it (useRef + useEffect)
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          Soundar <span>RP</span>
        </NavLink>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <NavLink to="/cart" className="cart-pill">
            Cart <span className="count">{totalItems}</span>
          </NavLink>
          <button
            className="nav-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
