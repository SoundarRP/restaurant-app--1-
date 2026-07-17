import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

// Reusable presentational component — receives everything through props.
export default function MenuCard({ item }) {
  const { addItem } = useCart()

  return (
    <div className="card">
      <Link to={`/menu/${item.id}`}>
        <img className="card-img" src={item.image} alt={item.name} loading="lazy" />
      </Link>
      <div className="card-body">
        <div className="card-top-row">
          <h3 style={{ fontSize: '1.25rem' }}>
            <Link to={`/menu/${item.id}`}>{item.name}</Link>
          </h3>
          <span className="price-tag">${item.price}</span>
        </div>
        <span className="tag">{item.category}</span>{' '}
        {item.spice > 0 && (
          <span style={{ marginLeft: 6 }}>
            {Array.from({ length: item.spice }).map((_, i) => (
              <span key={i} className="spice-dot" />
            ))}
          </span>
        )}
        <p style={{ marginTop: 12, fontSize: '0.9rem' }}>{item.description}</p>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to={`/menu/${item.id}`} className="btn btn-outline btn-sm">
            Details
          </Link>
          <button className="btn btn-primary btn-sm" onClick={() => addItem(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
