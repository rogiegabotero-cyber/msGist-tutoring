import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL, PhoneIcon } from './shared.jsx'
import logo from '../assets/main-logo.webp'

// Scrolls to the #hash target after navigation, or back to the top on a new page.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const [inView, setInView] = useState({ path: '', value: false })
  // Ignore a stale value from a previous page.
  const actionsInView = inView.path === pathname && inView.value

  // The floating call bar is redundant while an inline call/text button pair is on screen.
  useEffect(() => {
    const groups = document.querySelectorAll('.hero-actions')
    const visible = new Set()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setInView({ path: pathname, value: visible.size > 0 })
    })
    groups.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <ScrollManager />
      <nav className="nav">
        <div className="nav-in">
          <Link to="/" className="brand" aria-label="Ms. Gist’s Tutoring home">
            <img src={logo} alt="Ms. Gist’s Tutoring" width="2168" height="725" />
          </Link>
          <div className="nav-links">
            <Link to="/#help">How I Help</Link>
            <Link to="/#about">About</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <a className="btn btn-small" href={PHONE_TEL}>
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="footer-in">© 2026 Ms. Gist’s Tutoring</div>
      </footer>

      <a
        className={`mobile-call${actionsInView ? ' is-hidden' : ''}`}
        href={PHONE_TEL}
        aria-hidden={actionsInView}
        tabIndex={actionsInView ? -1 : undefined}
      >
        <PhoneIcon /> Call or Text: {PHONE_DISPLAY}
      </a>
    </>
  )
}
