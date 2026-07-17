import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  useEffect(() => {
    document.title = 'Your Cart — Soundar RP'
  }, [])

  const { items, totalPrice, increment, decrement, removeItem, clear } = useCart()

  return (
    <div className="container section">
      <div className="section-head">
        <p className="eyebrow">Pre-order</p>
        <h1 style={{ fontSize: '2.2rem' }}>Your cart</h1>
        <p>Build a pre-order for your table — we'll have it ready when you arrive.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <h3>Your cart is empty.</h3>
          <p>Browse the menu and add a few dishes to get started.</p>
          <Link to="/menu" className="btn btn-primary" style={{ marginTop: 16 }}>
            Go to menu
          </Link>
        </div>
      ) : (
        <div className="split" style={{ alignItems: 'start' }}>
          <div style={{ width: '100%' }}>
            {items.map((item) => (
              <div className="cart-line" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="grow">
                  <strong>{item.name}</strong>
                  <div style={{ color: 'var(--cream-dim)', fontSize: '0.85rem' }}>${item.price} each</div>
                </div>
                <div className="qty-control">
                  <button onClick={() => decrement(item.id)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => increment(item.id)} aria-label="Increase quantity">
                    +
                  </button>
                </div>
                <div style={{ width: 70, textAlign: 'right' }} className="price-tag">
                  ${(item.qty * item.price).toFixed(2)}
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}
            <button className="btn btn-outline btn-sm" style={{ marginTop: 20 }} onClick={clear}>
              Clear cart
            </button>
          </div>

          <div className="form-card">
            <h3>Order summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
              <span>Subtotal</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <p style={{ fontSize: '0.85rem' }}>
              Taxes and any gratuity are calculated at the table. Pre-orders are held
              for 20 minutes after your reservation time.
            </p>
            <Link to="/reservation" className="btn btn-primary" style={{ width: '100%' }}>
              Continue to reservation
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
