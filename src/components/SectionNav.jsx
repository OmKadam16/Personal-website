import { useState, useEffect } from 'react'
import './SectionNav.css'

const navItems = [
  'About',
  'Experience',
  'Projects',
  'Education',
]

function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.toLowerCase())
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = -1
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id)
            if (idx > bestIndex) {
              bestIndex = idx
            }
          }
        }
        if (bestIndex !== -1) {
          setActiveIndex(bestIndex)
        }
      },
      { rootMargin: '-20% 0px -40% 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`section-nav-wrap${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="section-nav-bar">
        <ul>
          {navItems.map((item, index) => (
            <li key={item} className={index === activeIndex ? 'is-active' : ''}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="section-nav-list">
        <div className="section-nav-line" />
        <ul>
          {navItems.map((item, index) => (
            <li key={item} className={index === activeIndex ? 'is-active' : ''}>
              <a href={`#${item.toLowerCase()}`}>
                <span className="section-nav-dot" />
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SectionNav
