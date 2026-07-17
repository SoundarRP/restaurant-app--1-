import { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const seedReviews = [
  { id: 1, name: 'Priya N.', rating: 5, text: 'The ribeye off the coals was the best steak I\'ve had all year.' },
  { id: 2, name: 'Marcus T.', rating: 4, text: 'Great atmosphere, the smoked burrata was outstanding.' },
  { id: 3, name: 'Aiko S.', rating: 5, text: 'Service was warm and the branzino was cooked perfectly.' },
]

const emptyForm = { name: '', rating: 5, text: '' }

export default function Reviews() {
  useEffect(() => {
    document.title = 'Reviews — Soundar RP'
  }, [])

  // Custom hook keeps reviews persisted across refreshes (Create/Read/Update/Delete)
  const [reviews, setReviews] = useLocalStorage('ember-vine-reviews', seedReviews)
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [editingId, setEditingId] = useState(null)

  function validate(values) {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Name is required.'
    if (!values.text.trim() || values.text.trim().length < 10) {
      errs.text = 'Review must be at least 10 characters.'
    }
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (editingId) {
      // UPDATE
      setReviews((prev) =>
        prev.map((r) => (r.id === editingId ? { ...form, id: editingId, rating: Number(form.rating) } : r))
      )
      setEditingId(null)
    } else {
      // CREATE
      setReviews((prev) => [{ ...form, id: Date.now(), rating: Number(form.rating) }, ...prev])
    }
    setForm(emptyForm)
  }

  function handleEdit(review) {
    setEditingId(review.id)
    setForm({ name: review.name, rating: review.rating, text: review.text })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDelete(id) {
    setReviews((prev) => prev.filter((r) => r.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setForm(emptyForm)
    }
  }

  function handleCancelEdit() {
    setEditingId(null)
    setForm(emptyForm)
    setErrors({})
  }

  return (
    <div className="container section">
      <div className="section-head">
        <p className="eyebrow">Guest reviews</p>
        <h1 style={{ fontSize: '2.2rem' }}>What people are saying</h1>
        <p>Add, edit, or remove reviews below — everything is saved to this browser.</p>
      </div>

      <form className="form-card" onSubmit={handleSubmit} style={{ maxWidth: 560, marginBottom: 48 }}>
        <h3 style={{ marginBottom: 16 }}>{editingId ? 'Edit your review' : 'Leave a review'}</h3>
        <div className="form-row-2">
          <div className="field">
            <label htmlFor="rname">Name</label>
            <input
              id="rname"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'invalid' : ''}
              placeholder="Your name"
            />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>
          <div className="field">
            <label htmlFor="rating">Rating</label>
            <select id="rating" name="rating" value={form.rating} onChange={handleChange}>
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} star{n > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="text">Review</label>
          <textarea
            id="text"
            name="text"
            value={form.text}
            onChange={handleChange}
            className={errors.text ? 'invalid' : ''}
            placeholder="Tell us about your visit…"
          />
          {errors.text && <div className="field-error">{errors.text}</div>}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Save changes' : 'Post review'}
          </button>
          {editingId && (
            <button type="button" className="btn btn-outline" onClick={handleCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* List rendering + conditional rendering for empty state */}
      {reviews.length === 0 ? (
        <div className="empty-state">
          <h3>No reviews yet.</h3>
          <p>Be the first to share your experience.</p>
        </div>
      ) : (
        <div className="grid grid-3">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              <p style={{ margin: '10px 0' }}>{review.text}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{review.name}</strong>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-outline btn-sm" onClick={() => handleEdit(review)}>
                    Edit
                  </button>
                  <button className="btn btn-outline btn-sm" onClick={() => handleDelete(review.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
