import { ChatIcon, PHONE_DISPLAY, PHONE_SMS, PHONE_TEL, PhoneIcon } from './shared.jsx'

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact-dots" aria-hidden="true" />
          <div className="eyebrow eyebrow-light">Let’s talk</div>
          <h2>Contact</h2>
          <p className="contact-lead">For tutoring inquiries, scheduling, and availability:</p>
          <a className="phone" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
          <p className="contact-note">Call or text to learn more about tutoring services.</p>
          <div className="hero-actions center">
            <a className="btn btn-sun" href={PHONE_TEL}>
              <PhoneIcon /> Call now
            </a>
            <a className="btn btn-outline-light" href={PHONE_SMS}>
              <ChatIcon /> Send a text
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
