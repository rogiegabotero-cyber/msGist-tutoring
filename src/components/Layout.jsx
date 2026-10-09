import { useEffect } from 'react'
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

      <a className="mobile-call" href={PHONE_TEL}>
        <PhoneIcon /> Call or Text: {PHONE_DISPLAY}
      </a>
    </>
  )
}
