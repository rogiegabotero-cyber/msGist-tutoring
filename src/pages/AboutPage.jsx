import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection.jsx'

// TODO: This page is a starting point. Replace/extend with Ms. Gist's real story,
// credentials, teaching philosophy, photo, and anything else she wants to share.
const focusAreas = ['Reading', 'Writing', 'Literacy', 'Comprehension', 'Vocabulary', 'Grammar']

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="page-hero">
        <div className="container">
          <Link to="/" className="back-link" data-reveal>
            ← Back to home
          </Link>
          <div className="eyebrow" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Meet your tutor
          </div>
          <h1 data-reveal style={{ '--reveal-delay': '160ms' }}>
            About Ms. Gist’s Tutoring
          </h1>
          <p className="sub" data-reveal style={{ '--reveal-delay': '240ms' }}>
            Personalized tutoring and educational support for elementary students, with a focus on
            building strong literacy skills in a positive, encouraging environment.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container prose-split">
            <div className="prose" data-reveal="left">
              <h2>Our story</h2>
              <p>
                Ms. Gist’s Tutoring provides private elementary tutoring and academic support in
                reading, writing, literacy, comprehension, vocabulary, and grammar. Sessions are
                designed to help students strengthen foundational skills, improve confidence, and
                become more independent learners.
              </p>
              {/* TODO: Add Ms. Gist's background, experience, and why she tutors. */}
            </div>
            <aside
              className="photo-slot"
              aria-label="Photo of Ms. Gist (coming soon)"
              data-reveal="right"
              style={{ '--reveal-delay': '120ms' }}
            >
              <span>📷</span>
              <p>Photo of Ms. Gist coming soon</p>
            </aside>
          </div>
        </section>

        <section className="section about">
          <div className="container">
            <div className="eyebrow" data-reveal>
              Where we focus
            </div>
            <h2 data-reveal style={{ '--reveal-delay': '80ms' }}>
              What sessions cover
            </h2>
            <ul className="focus-list">
              {focusAreas.map((f, i) => (
                <li key={f} data-reveal="zoom" style={{ '--reveal-delay': `${i * 70}ms` }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow" data-reveal>
              The approach
            </div>
            <h2 data-reveal style={{ '--reveal-delay': '80ms' }}>
              Every student is different
            </h2>
            <p className="prose-lead" data-reveal style={{ '--reveal-delay': '160ms' }}>
              Individualized academic support designed around each student’s needs and areas for
              growth, in a positive, encouraging environment.
            </p>
            {/* TODO: Add teaching philosophy, session format, and what a typical session looks like. */}
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  )
}
