import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center' }}>
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: '2.4rem' }}>This table isn't set.</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  )
}
