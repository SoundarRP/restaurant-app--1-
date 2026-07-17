import { Link, useNavigate, useParams } from 'react-router-dom'
import menuData from '../../data/menuData.js'
import { useCart } from '../../context/CartContext.jsx'

export default function MenuItemDetail() {
  // useParams reads the dynamic :itemId segment from the nested route
  const { itemId } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const item = menuData.find((m) => m.id === itemId)

  if (!item) {
    return (
      <div className="empty-state" style={{ marginTop: 32 }}>
        <h3>We couldn't find that dish.</h3>
        <p>It may have rotated off the current menu.</p>
        <Link to="/menu" className="btn btn-outline btn-sm" style={{ marginTop: 12 }}>
          Back to menu
        </Link>
      </div>
    )
  }

  return (
    <div className="split" style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
      <img src={item.image} alt={item.name} style={{ borderRadius: 6 }} />
      <div>
        <span className="tag">{item.category}</span>
        <h2 style={{ fontSize: '2rem', marginTop: 12 }}>{item.name}</h2>
        <p className="price-tag" style={{ fontSize: '1.5rem' }}>${item.price}</p>
        <p>{item.description}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <button className="btn btn-primary" onClick={() => addItem(item)}>
            Add to cart
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/menu')}>
            Back to menu
          </button>
        </div>
      </div>
    </div>
  )
}
