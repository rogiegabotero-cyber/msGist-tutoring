import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection.jsx'
import Faq from '../components/Faq.jsx'
import {
  ArrowIcon,
  ChatIcon,
  PHONE_DISPLAY,
  PHONE_SMS,
  PHONE_TEL,
  PhoneIcon,
} from '../components/shared.jsx'
import readingGif from '../assets/Reading-blue.gif'
import writingGif from '../assets/Writing.gif'
import vocabularyGif from '../assets/Vocabulary.gif'
import literacyGif from '../assets/Literacy.gif'

const services = [
  {
    icon: '📖',
    title: 'Reading Comprehension',
    text: 'Support with understanding texts, identifying key details, making inferences, and citing evidence.',
    tone: 'violet',
    cover: readingGif,
  },
  {
    icon: '✏️',
    title: 'Writing Skills',
    text: 'Practice with sentence development, paragraph organization, grammar, punctuation, and written responses.',
    tone: 'sun',
    cover: writingGif,
    coverPos: '68%',
  },
  {
    icon: '🧠',
    title: 'Vocabulary & Language',
    text: 'Build word knowledge, context-clue skills, grammar awareness, and stronger academic language.',
    tone: 'coral',
    cover: vocabularyGif,
    coverPos: '77%',
  },
  {
    icon: '🌟',
    title: 'Literacy Support',
    text: 'Individualized academic support designed around each student’s needs and areas for growth.',
    tone: 'mint',
    cover: literacyGif,
    coverPos: '41%',
  },
]

const topics = ['Reading', 'Writing', 'Literacy', 'Comprehension', 'Vocabulary', 'Grammar']

const steps = [
  {
    title: 'Call or text',
    text: 'Reach out for tutoring inquiries, scheduling, and availability.',
  },
  {
    title: 'Personalized support',
    text: 'Sessions are designed around each student’s needs and areas for growth.',
  },
  {
    title: 'Confidence grows',
    text: 'Strengthen foundational skills and become a more independent learner.',
  },
]

function HeroArt() {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-blob" />
      <div className="art-card">
        <div className="art-tag">Today’s lesson</div>
        <div className="art-letters">
          <span className="L l1">A</span>
          <span className="L l2">B</span>
          <span className="L l3">C</span>
        </div>
        <div className="art-lines">
          <i style={{ width: '92%' }} />
          <i className="hl" style={{ width: '70%' }} />
          <i style={{ width: '84%' }} />
        </div>
        <div className="art-stars">★ ★ ★ ★ ★</div>
      </div>
      <div className="art-pencil">✏️</div>
      <div className="art-book">📚</div>
      <div className="art-spark s1">✦</div>
      <div className="art-spark s2">✦</div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const [onHero, setOnHero] = useState(false)

  // The subjects bar slides in only while the whole hero section is on screen.
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    let frame = 0

    // The bar is shown while no part of the hero content is scrolled under the top bar.
    // (On short windows the bottom of the hero can sit below the fold; that still counts.)
    const check = () => {
      frame = 0
      const content = el.querySelector('.hero-in') ?? el
      const navHeight = document.querySelector('.nav')?.offsetHeight ?? 0
      setOnHero(content.getBoundingClientRect().top >= navHeight - 1)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    // On first load, wait a beat so the bar visibly draws out after the page has settled.
    const firstShow = setTimeout(check, 900)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      clearTimeout(firstShow)
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <div className="home-page">
      <header className="hero" id="top" ref={heroRef}>
        <div className="container hero-in">
          <div className="hero-copy">
            <div className="badge">Elementary Reading &amp; Writing Tutoring</div>
            <h1 className="sr-only">Ms. Gist’s Tutoring</h1>
            <p className="tagline">
              <span className="tl">Helping Young</span> <span className="tl">Readers &amp; Writers</span>{' '}
              <span className="tl fun">Grow With Confidence</span>
            </p>
            <p className="sub">
              Personalized tutoring and educational support for elementary students, with a focus
              on building strong literacy skills in a positive, encouraging environment.
            </p>
            <div className="hero-actions">
              <a className="btn" href={PHONE_TEL}>
                <PhoneIcon /> Call or Text: {PHONE_DISPLAY}
              </a>
              <a className="btn btn-ghost" href={PHONE_SMS}>
                <ChatIcon /> Send a text
              </a>
            </div>
          </div>
          <HeroArt />
        </div>
      </header>

      <div className={`marquee${onHero ? ' is-in' : ''}`} aria-label="Subjects covered">
        <div className="container marquee-in">
          {topics.map((t, i) => (
            <span key={t} className="chip" style={{ '--i': i }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <main>
        <section className="section" id="help">
          <div className="container">
            <div className="eyebrow">What we work on</div>
            <h2>How I Help</h2>
            <div className="cards">
              {services.map((s) => (
                <article
                  key={s.title}
                  className={`card tone-${s.tone}${s.cover ? ' has-cover' : ''}`}
                >
                  {s.cover ? (
                    // The cover panel (icon + title) hides the text until hovered or focused, then lifts away.
                    <div
                      className="card-reveal"
                      tabIndex={0}
                      style={s.coverPos ? { '--cover-pos': s.coverPos } : undefined}
                    >
                      <div className="card-cover">
                        <img src={s.cover} alt="" />
                        <div className="card-cover-head">
                          <div className="card-icon">{s.icon}</div>
                          <h3>{s.title}</h3>
                        </div>
                      </div>
                      <p>{s.text}</p>
                    </div>
                  ) : (
                    <>
                      <div className="card-icon">{s.icon}</div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section steps-section">
          <div className="container">
            <div className="eyebrow">Getting started is easy</div>
            <h2>Three simple steps</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-in">
            <div>
              <div className="eyebrow">Meet your tutor</div>
              <h2>About Ms. Gist’s Tutoring</h2>
            </div>
            <div>
              <p className="about-text">
                Ms. Gist’s Tutoring provides private elementary tutoring and academic support in
                reading, writing, literacy, comprehension, vocabulary, and grammar. Sessions are
                designed to help students strengthen foundational skills, improve confidence, and
                become more independent learners.
              </p>
              <Link className="btn about-btn" to="/about">
                Learn more about Ms. Gist <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <Faq />
        <ContactSection />
      </main>
    </div>
  )
}
