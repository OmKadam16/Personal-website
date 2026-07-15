import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ExternalLink, Code, X, ChevronRight } from 'lucide-react'
import ShinyText from './ShinyText'
import './ExperienceShowcase.css'

import expFlyrank from '../assets/expLogo/Frontend Ai.png'
import expThinkneuro from '../assets/expLogo/SummerSWE.png'

const experiences = [
  {
    id: 'flyrank',
    title: 'Front End AI Engineer',
    tagline: 'FlyRank · Jul 2026 — Present',
    paragraphs: [
      'Building front-end interfaces for AI-powered products — responsive React dashboards for AI model monitoring and analytics.',
      'Integrating RESTful APIs to connect the frontend with backend ML pipelines, collaborating with cross-functional teams to ship features on tight deadlines.',
    ],
    imageUrl: expFlyrank,
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: 'thinkneuro',
    title: 'Summer SWE Program',
    tagline: 'ThinkNeuro · Jun 2026 — Present',
    paragraphs: [
      'Intensive software engineering practicum focused on real-world development workflows — mastering Git version control, building personal portfolio websites from scratch, and collaborating in agile team environments.',
      'Working on a team-based capstone project that simulates the full software development lifecycle, from sprint planning and code review to deployment and delivery.',
    ],
    imageUrl: expThinkneuro,
    liveUrl: null,
    sourceUrl: null,
  },
]

const HOVER_DELAY = 200

function ExperienceShowcase() {
  const [previewId, setPreviewId] = useState(experiences[0].id)
  const [hoverId, setHoverId] = useState(null)
  const [expandedId, setExpandedId] = useState(null)
  const hoverTimer = useRef(null)
  const expandedRef = useRef(null)

  const expanded = experiences.find((e) => e.id === expandedId)
  const expandedIndex = experiences.findIndex((e) => e.id === expandedId)
  const preview = experiences.find((e) => e.id === previewId)

  const handleHover = (id) => {
    setHoverId(id)
    clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setPreviewId(id), HOVER_DELAY)
  }

  const handleLeave = () => {
    setHoverId(null)
    clearTimeout(hoverTimer.current)
  }

  const openItem = (id) => {
    clearTimeout(hoverTimer.current)
    setPreviewId(id)
    setExpandedId(id)
  }

  const selectExpandedItem = (id) => {
    clearTimeout(hoverTimer.current)
    setPreviewId(id)
    setExpandedId(id)
  }

  const goToNextExperience = () => {
    const nextIndex = (Math.max(0, expandedIndex) + 1) % experiences.length
    selectExpandedItem(experiences[nextIndex].id)
  }

  useEffect(() => {
    if (!expandedId) return

    const frame = requestAnimationFrame(() => {
      const title = expandedRef.current?.querySelector('.exp-expanded-title')
      if (!title) return

      const navOffset = 96
      const targetY = title.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    })

    return () => cancelAnimationFrame(frame)
  }, [expandedId])

  return (
    <LayoutGroup>
      <div className="exp-showcase">
        <AnimatePresence mode="wait" initial={false}>
          {!expanded ? (
            <motion.div
              key="collapsed"
              className="exp-collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="exp-thumb">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={preview.id}
                    src={preview.imageUrl}
                    alt={preview.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </AnimatePresence>
              </motion.div>

              <h2 className="exp-center-heading"><ShinyText text="Experience" color="#b5b5b5" shineColor="#ffffff" speed={4} spread={150} /></h2>

              <div className="exp-list">
                <div className="exp-label-row">
                  <span className="exp-label">My Experience</span>
                  <span className="exp-label-rule" />
                </div>

                <ul>
                  {experiences.map((item) => {
                    const isActive = hoverId === item.id
                    const isDimmed = hoverId !== null && !isActive
                    return (
                      <li key={item.id}>
                        <button
                          className={`exp-list-item${isActive ? ' is-active' : ''}${isDimmed ? ' is-dimmed' : ''}`}
                          onMouseEnter={() => handleHover(item.id)}
                          onMouseLeave={handleLeave}
                          onFocus={() => handleHover(item.id)}
                          onBlur={handleLeave}
                          onClick={() => openItem(item.id)}
                        >
                          <motion.span
                            className="exp-list-title"
                            layoutId={`exp-title-${item.id}`}
                          >
                            {item.title}
                          </motion.span>
                          <span className="exp-dot" aria-hidden="true" />
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.div
              ref={expandedRef}
              key="expanded"
              className="exp-expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="exp-close"
                onClick={() => setExpandedId(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="exp-expanded-main">
                <motion.h3
                  className="exp-expanded-title"
                  layoutId={`exp-title-${expanded.id}`}
                >
                  {expanded.title}
                </motion.h3>

                <motion.div
                  className="exp-expanded-body"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
                  }}
                >
                  <motion.div
                    className="exp-tagline-row"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    <span className="exp-tagline">{expanded.tagline}</span>
                    <span className="exp-tagline-rule" />
                  </motion.div>

                  {expanded.paragraphs.map((text, i) => (
                    <motion.p
                      key={i}
                      className="exp-paragraph"
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                      }}
                    >
                      {text}
                    </motion.p>
                  ))}

                  <motion.p
                    className="exp-cta-line"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    Want to create something cool together? Let's do it!
                  </motion.p>

                  {(expanded.liveUrl || expanded.sourceUrl) && (
                    <motion.div
                      className="exp-buttons"
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                      }}
                    >
                      {expanded.liveUrl && (
                        <a
                          className="exp-pill exp-pill-light"
                          href={expanded.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Preview
                          <ExternalLink size={15} />
                        </a>
                      )}
                      {expanded.sourceUrl && (
                        <a
                          className="exp-pill"
                          href={expanded.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          See Source Code
                          <Code size={15} />
                        </a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              <div className="exp-expanded-side">
                <button
                  className="exp-next"
                  onClick={goToNextExperience}
                  aria-label="Show next experience"
                >
                  <ChevronRight size={30} />
                </button>

                <nav className="exp-expanded-nav" aria-label="Experience roles">
                  {experiences.map((item) => (
                    <button
                      key={item.id}
                      className={`exp-expanded-nav-item${
                        item.id === expanded.id ? ' is-active' : ''
                      }`}
                      onClick={() => selectExpandedItem(item.id)}
                    >
                      <span>{item.title}</span>
                      <span className="exp-expanded-nav-rule" />
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  )
}

export default ExperienceShowcase
