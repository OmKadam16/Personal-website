import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ShinyText from './ShinyText'
import './Education.css'

import certGoogleAI from '../assets/Certs/Google AI Essentials 2026.jpg'
import certGooglePM from '../assets/Certs/Google Project Management Professional Certificate 2025.jpg'
import certPython from '../assets/Certs/Progamming in Python (Meta) 2026.jpg'
import certFrontend from '../assets/Certs/Introduction to Frontend development (meta) 2026.jpg'
import certJS from '../assets/Certs/Programming in Javascript (Meta) 2026.jpg'
import certClaude from '../assets/Certs/Claude code in action 2026.jpg'
import certClaude101 from '../assets/Certs/Claude101 2026.jpg'
import certAWS from '../assets/Certs/AWS AI Practioner Challenge (udacity) 2026.jpg'
import certFigma from '../assets/Certs/figma ui-ux design essentials with distinction (BYOL) 2025.jpg'
import certScholar from '../assets/Certs/Scholar Rsearch Recognition 2025.jpg'
import certUX from '../assets/Certs/Foundations of User Expereince Design (Google) 2023.jpg'

const milestones = [
  {
    id: 'prodigy',
    school: 'Prodigy Public School',
    credential: 'Class 9 & 10 — India',
    dates: '2021 — 2023',
    note: 'Where the curiosity started.',
    status: 'done',
    details: [
      'Completed freshman and sophomore year (Class 9 & 10) in India',
      'Built early foundations in science and mathematics',
      'Moved to the United States after Class 10',
    ],
  },
  {
    id: 'hs',
    school: 'Cypress High School',
    credential: 'High School Diploma',
    dates: 'May 2025',
    note: 'Junior & senior year in the U.S.',
    status: 'done',
    details: [
      'Completed junior and senior year after moving from India',
      'Graduated May 2025',
    ],
  },
  {
    id: 'as',
    school: 'Cypress College',
    credential: 'Biotechnology / Bioinformatics (A.S.)',
    dates: 'Aug 2025 — May 2027',
    note: 'Research Presenter — Student Voices Conference.',
    status: 'current',
    details: [
      'Coursework: General Chemistry (111A); preparing for Calculus, Statistics, Biology, and Bioinformatics sequences',
      'Research Presenter — Student Voices Conference, Dec 2025',
      'Scholar Research Recognition Certificate',
    ],
  },
  {
    id: 'bs',
    school: 'University Transfer',
    credential: 'B.S. — Transfer Track',
    dates: 'Target 2027',
    note: 'Toward computational neuroscience.',
    status: 'next',
    details: [
      'Transferring toward a B.S. after completing the A.S.',
      'Long-term: grad school in computational neuroscience',
    ],
  },
]

const certifications = [
  {
    id: 'googleAI',
    name: 'Google AI Essentials',
    issuer: 'Google',
    year: '2026',
    img: certGoogleAI,
  },
  {
    id: 'googlePM',
    name: 'Google Project Management Professional',
    issuer: 'Google / Coursera',
    year: '2025',
    img: certGooglePM,
  },
  {
    id: 'python',
    name: 'Programming in Python',
    issuer: 'Meta / Coursera',
    year: '2026',
    img: certPython,
  },
  {
    id: 'frontend',
    name: 'Introduction to Frontend Development',
    issuer: 'Meta / Coursera',
    year: '2026',
    img: certFrontend,
  },
  {
    id: 'js',
    name: 'Programming in JavaScript (Node.js, Jest)',
    issuer: 'Meta / Coursera',
    year: '2026',
    img: certJS,
  },
  {
    id: 'claude',
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    year: '2026',
    img: certClaude,
  },
  {
    id: 'claude101',
    name: 'Claude 101',
    issuer: 'Anthropic',
    year: '2026',
    img: certClaude101,
  },
  {
    id: 'aws',
    name: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    year: '2026',
    img: certAWS,
  },
  {
    id: 'figma',
    name: 'Figma UI/UX Essentials',
    issuer: 'BYOL — Completed with Distinction',
    year: '2025',
    img: certFigma,
  },
  {
    id: 'scholar',
    name: 'Scholar Research Recognition',
    issuer: 'Cypress College',
    year: '2025',
    img: certScholar,
  },
  {
    id: 'ux',
    name: 'Foundations of User Experience Design',
    issuer: 'Google',
    year: '2023',
    img: certUX,
  },
]

// Halfway through Cypress College (Aug 2025 → May 2027)
const asProgress = 0.5

// Path fill: completed segments are full, the current one fills with progress
const SEGMENTS = milestones.length - 1
const completedSegments = milestones.filter((m) => m.status === 'done').length
const pathFill = ((completedSegments + asProgress) / SEGMENTS) * 100

const statusLabel = {
  done: 'Completed',
  current: 'In progress',
  next: 'Up next',
}

function Education() {
  const [expandedId, setExpandedId] = useState(null)
  const [selectedId, setSelectedId] = useState(certifications[0].id)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const [popupCert, setPopupCert] = useState(null)

  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 4)

  return (
    <motion.section
      className="education"
      id="education"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="education-heading">
        <ShinyText
          text="Education"
          color="#b5b5b5"
          shineColor="#ffffff"
          speed={4}
          spread={150}
        />
      </h2>

      <div className="edu-ladder">
        <div className="edu-path">
          <motion.div
            className="edu-path-fill"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: [0.3, 0.1, 0.2, 1], delay: 0.2 }}
            style={{ '--fill': `${pathFill}%` }}
          />
        </div>

        <ol className="edu-nodes">
          {milestones.map((m, i) => {
            const isExpanded = expandedId === m.id

            return (
              <motion.li
                key={m.id}
                className={`edu-node is-${m.status}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.3 }}
              >
                <span className="edu-dot" aria-hidden="true" />
                <div className="edu-card">
                  <span className="edu-status">{statusLabel[m.status]}</span>
                  <p className="edu-school">{m.school}</p>
                  <p className="edu-credential">{m.credential}</p>
                  <p className="edu-dates">{m.dates}</p>
                  <p className="edu-note">{m.note}</p>

                  {m.status === 'current' && (
                    <div
                      className="edu-progress"
                      role="progressbar"
                      aria-valuenow={Math.round(asProgress * 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div className="edu-progress-track">
                        <motion.div
                          className="edu-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${asProgress * 100}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.9 }}
                        />
                      </div>
                      <span className="edu-progress-label">
                        {Math.round(asProgress * 100)}% to May 2027
                      </span>
                    </div>
                  )}

                  <button
                    className="edu-know-btn"
                    onClick={() => setExpandedId(isExpanded ? null : m.id)}
                  >
                    {isExpanded ? 'Show less' : 'Know more'}
                  </button>

                  <div
                    className={`edu-expandable ${isExpanded ? 'is-expanded' : ''}`}
                  >
                    <div className="edu-expandable-inner">
                      <ul className="edu-details-list">
                        {m.details.map((detail, j) => (
                          <li key={j}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          })}
          </ol>
        </div>

      <div className="cert-block">
        <div className="cert-header">
          <span className="cert-label">Certifications</span>
          <span className="cert-rule" />
        </div>

        <div className="cert-mobile-grid">
          <div className="cert-grid">
            {visibleCerts.map((cert, i) => (
              <motion.button
                key={cert.id}
                type="button"
                className="cert-card"
                onClick={() => setPopupCert(cert)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 + (i % 4) * 0.08 }}
              >
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </motion.button>
            ))}
          </div>

          {certifications.length > 4 && (
            <button
              className="cert-viewmore-btn"
              onClick={() => setShowAllCerts(!showAllCerts)}
            >
              {showAllCerts
                ? 'View less'
                : `View more (${certifications.length - 4})`}
            </button>
          )}

          <AnimatePresence>
            {popupCert && (
              <motion.div
                className="cert-popup-overlay"
                onClick={() => setPopupCert(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="cert-popup"
                  role="dialog"
                  aria-modal="true"
                  aria-label={popupCert.name}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <button
                    className="cert-popup-close"
                    onClick={() => setPopupCert(null)}
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                  <img
                    className="cert-popup-img"
                    src={popupCert.img}
                    alt={popupCert.name}
                  />
                  <p className="cert-popup-name">{popupCert.name}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="cert-panels">
          <div className="cert-list">
            {certifications.map((cert) => {
              const active = selectedId === cert.id
              return (
                <button
                  key={cert.id}
                  className={`cert-item ${active ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(cert.id)}
                  aria-pressed={active}
                >
                  <span className="cert-item-name">{cert.name}</span>
                  <span className="cert-item-issuer">{cert.issuer}</span>
                  <span className="cert-item-year">{cert.year}</span>
                </button>
              )
            })}
          </div>
          <div className="cert-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedId}
                src={certifications.find(c => c.id === selectedId).img}
                alt={certifications.find(c => c.id === selectedId).name}
                className="cert-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Education
