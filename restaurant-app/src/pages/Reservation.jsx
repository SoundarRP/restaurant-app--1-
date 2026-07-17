import { useEffect, useRef, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  notes: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  else if (form.name.trim().length < 2) errors.name = 'Name looks too short.'

  if (!form.email.trim()) errors.email = 'Please enter an email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'That email doesn\'t look valid.'

  if (!form.phone.trim()) errors.phone = 'Please enter a phone number.'
  else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) errors.phone = 'That phone number doesn\'t look valid.'

  if (!form.date) errors.date = 'Please choose a date.'
  else if (new Date(form.date) < new Date(new Date().toDateString())) {
    errors.date = 'That date is in the past.'
  }

  if (!form.time) errors.time = 'Please choose a time.'

  const guestsNum = Number(form.guests)
  if (!guestsNum || guestsNum < 1) errors.guests = 'At least 1 guest is required.'
  else if (guestsNum > 20) errors.guests = 'For 20+ guests, please use the Events page instead.'

  return errors
}

export default function Reservation() {
  useEffect(() => {
    document.title = 'Reservation — Soundar RP'
  }, [])

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [bookings, setBookings] = useLocalStorage('ember-vine-reservations', [])

  // useRef: focus the name field as soon as the page loads
  const nameRef = useRef(null)
  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false)
      return
    }
    setBookings((prev) => [...prev, { ...form, id: Date.now() }])
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="container section">
      <div className="split">
        <div>
          <p className="eyebrow">Reserve a table</p>
          <h1 style={{ fontSize: '2.2rem' }}>Book your evening by the fire</h1>
          <p>
            Tables are held for 15 minutes past the reservation time. For parties
            over 20, please use our <a href="/services/events">private events</a> page instead.
          </p>
          <div className="stat-strip">
            <div><strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gold)' }}>{bookings.length}</strong><div>Reservations made this session</div></div>
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="alert alert-success">
              Thank you! Your table request has been received — we'll confirm by email shortly.
            </div>
          )}

          <div className="form-row-2">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                ref={nameRef}
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'invalid' : ''}
                placeholder="Jordan Ellis"
              />
              {errors.name && <div className="field-error">{errors.name}</div>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'invalid' : ''}
                placeholder="jordan@example.com"
              />
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? 'invalid' : ''}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <div className="field-error">{errors.phone}</div>}
          </div>

          <div className="form-row-2">
            <div className="field">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className={errors.date ? 'invalid' : ''}
              />
              {errors.date && <div className="field-error">{errors.date}</div>}
            </div>
            <div className="field">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                className={errors.time ? 'invalid' : ''}
              />
              {errors.time && <div className="field-error">{errors.time}</div>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="guests">Guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              value={form.guests}
              onChange={handleChange}
              className={errors.guests ? 'invalid' : ''}
            />
            {errors.guests && <div className="field-error">{errors.guests}</div>}
          </div>

          <div className="field">
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Allergies, celebrations, seating preferences…"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Confirm reservation
          </button>
        </form>
      </div>
    </div>
  )
}
