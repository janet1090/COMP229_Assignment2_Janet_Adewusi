import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }
// Captures the contact form data, then redirects the visitor to the Home page.
  function handleSubmit(event) {
    event.preventDefault()

    console.log('Portfolio contact form submission:', formData)
    setFormSubmitted(true)

    setTimeout(() => {
      navigate('/')
    }, 1800)
  }

  return (
    <main className="page-section contact-page">
      <p className="section-label">CONTACT ME</p>
      <h1 className="page-heading">Let’s create something meaningful.</h1>
      <p className="page-description">
        Have a question, opportunity, or collaboration idea? Send a message and
        I will be happy to connect.
      </p>

      <section className="contact-layout">
        <aside className="contact-information">
          <h2>Contact Information</h2>
          <p>
            I am currently a Software Engineering Technology - AI student at
            Centennial College in Toronto, Ontario.
          </p>

          <div className="contact-details">
            <p>
              <strong>Location</strong>
              Toronto, Ontario, Canada
            </p>

            <p>
              <strong>Email</strong>
              <a href="mailto:adewusiadetounjjj3@gmail.com">
                adewusiadetounjjj3@gmail.com
              </a>
            </p>

            <p>
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/janet-adewusi-b044763a0"
                target="_blank"
                rel="noreferrer"
              >
                View my LinkedIn profile
              </a>
            </p>

            <p>
              <strong>GitHub</strong>
              <a
                href="https://github.com/janet1090"
                target="_blank"
                rel="noreferrer"
              >
                View my GitHub profile
              </a>
            </p>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Contact Number
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button className="primary-button submit-button" type="submit">
            Send Message
          </button>

          {formSubmitted && (
            <p className="form-success">
              Thank you! Your message was captured. Returning you to Home...
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default Contact