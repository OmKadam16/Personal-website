import { Fragment } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceShowcase from './ExperienceShowcase'
import ShinyText from './ShinyText'
import './Experience.css'

const roles = [
  {
    title: 'Front End AI Engineer',
    company: 'FlyRank',
    dates: 'Jul 2026 — Present',
    description: 'Building front-end interfaces for AI-powered products.',
    details: [
      'Developed responsive React dashboards for AI model monitoring and analytics',
      'Integrated RESTful APIs to connect frontend with backend ML pipelines',
      'Collaborated with cross-functional teams to ship features on tight deadlines',
    ],
  },
  {
    title: 'Summer SWE Program',
    company: 'ThinkNeuro',
    dates: 'Jun 2026 — Present',
    description: 'Intensive SWE practicum focused on Git, portfolio development, and team-based capstone projects.',
    details: [
      'Mastered Git commands and version control workflows through hands-on collaborative exercises',
      'Built and deployed a personal portfolio website showcasing technical projects and design skills',
      'Collaborated in an agile team environment on a capstone project simulating real-world software engineering',
    ],
  },
];

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <motion.section
      className="experience"
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="experience-body">
         <h2 className="experience-heading"><ShinyText text="Experience" color="#b5b5b5" shineColor="#ffffff" speed={4} spread={150} /></h2>

        {/* Web + tablet: interactive showcase */}
        <div className="experience-showcase-wrap">
          <ExperienceShowcase />
        </div>

        {/* Mobile: timeline */}
        <div className="experience-timeline">
          {roles.map((role, index) => {
            const isExpanded = expandedIndex === index

            return (
              <Fragment key={role.title + role.company}>
                <div className="experience-item">
                  <div className="experience-marker">
                    <span className="experience-dot" />
                  </div>
                  <div className="experience-details">
                    <div className="experience-content-row">
                      <div className="experience-content-left">
                        <p className="experience-title">{role.title}</p>
                        <p className="experience-meta">
                          {role.company} <span>·</span> {role.dates}
                        </p>
                        <p className="experience-description">{role.description}</p>
                      </div>
                      <div className="experience-content-right">
                        <button
                          className="experience-know-btn"
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : index)
                          }
                        >
                          {isExpanded ? 'Show less' : 'Know more'}
                        </button>
                      </div>
                    </div>

                    <div
                      className={`experience-expandable ${
                        isExpanded ? 'is-expanded' : ''
                      }`}
                    >
                      <div className="experience-expandable-inner">
                        <ul className="experience-details-list">
                          {role.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {index < roles.length - 1 && <div className="experience-divider" />}
              </Fragment>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
