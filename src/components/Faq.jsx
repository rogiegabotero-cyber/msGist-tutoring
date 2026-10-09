import { PHONE_DISPLAY } from './shared.jsx'

// Edit these to match Ms. Gist's real policies (rates, location, format, etc.).
// Answers marked "call or text" are placeholders until real details are added.
const faqs = [
  {
    q: 'What grade levels do you tutor?',
    a: 'Ms. Gist’s Tutoring provides private tutoring and academic support for elementary students.',
  },
  {
    q: 'What subjects do you help with?',
    a: 'Reading, writing, literacy, comprehension, vocabulary, and grammar. That includes understanding texts, sentence and paragraph writing, building word knowledge, and more.',
  },
  {
    q: 'How do I know if my child could benefit from tutoring?',
    a: 'Tutoring can help if your child finds it hard to understand what they read, feels unsure when writing sentences or paragraphs, or has lost some confidence in reading and writing. If you’re not sure, just reach out and we can talk it through.',
  },
  {
    q: 'How are sessions planned?',
    a: 'Every session is individualized, designed around each student’s needs and areas for growth, in a positive and encouraging environment.',
  },
  {
    q: 'What will my child get out of it?',
    a: 'The goal is for students to strengthen foundational skills, improve their confidence, and become more independent learners.',
  },
  {
    q: 'How do I get started and check availability?',
    a: `It’s easy. Call or text ${PHONE_DISPLAY} for tutoring inquiries, scheduling, and availability.`,
  },
  {
    q: 'What are your rates, and where do sessions take place?',
    a: `Call or text ${PHONE_DISPLAY} and Ms. Gist will share current rates and session options with you.`,
  },
]

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-in">
        <div className="faq-intro">
          <div className="eyebrow">Good questions</div>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to what parents usually ask before getting started.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <span>{f.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
