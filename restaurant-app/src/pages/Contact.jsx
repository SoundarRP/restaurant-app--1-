import { useEffect, useState } from 'react'

const initialForm = { name: '', email: '', subject: 'General question', message: '' }

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Soundar RP'
  }, [])

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate(values) {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Enter a valid email address.'
    if (!values.message.trim() || values.message.trim().length < 15) {
      errs.message = 'Message should be at least 15 characters.'
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
    if (Object.keys(validationErrors).length > 0) {
      setSent(false)
      return
    }
    setSent(true)
    setForm(initialForm)
  }

  return (
    <div className="container section">
      <div className="split">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 style={{ fontSize: '2.2rem' }}>Contact us</h1>
          <p>Questions, feedback, or catering enquiries — send us a message and we'll reply within a day.</p>
          <div style={{ marginTop: 24 }}>
            <p><strong>Address</strong><br />14 Foundry Lane, Salem, Tamil Nadu</p>
            <p><strong>Phone</strong><br />+91 78100 74555</p>
            <p><strong>Hours</strong><br />Tue – Sun, 5pm – 11pm</p>
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          {sent && (
            <div className="alert alert-success">
              Message sent — thank you! We'll be in touch shortly.
            </div>
          )}
          <div className="form-row-2">
            <div className="field">
              <label htmlFor="cname">Name</label>
              <input
                id="cname"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'invalid' : ''}
              />
              {errors.name && <div className="field-error">{errors.name}</div>}
            </div>
            <div className="field">
              <label htmlFor="cemail">Email</label>
              <input
                id="cemail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'invalid' : ''}
              />
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
              <option>General question</option>
              <option>Catering enquiry</option>
              <option>Private event</option>
              <option>Feedback</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'invalid' : ''}
            />
            {errors.message && <div className="field-error">{errors.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}
