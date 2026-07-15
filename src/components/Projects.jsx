import InfiniteMenu from './InfiniteMenu'
import ShinyText from './ShinyText'
import './Projects.css'

import renolenseLogo from '../assets/ProjectLogos/renolenseLogo2.png'
import resumeXLogo from '../assets/ProjectLogos/resumeXLogo.png'
import trendAsYouGoLogo from '../assets/ProjectLogos/trendAsYouGoLogo2.png'

const projects = [
  {
    image: renolenseLogo,
    link: 'https://github.com/OmKadam16/Renolense',
    title: 'Renolense',
    description:
      'AI renovation planner that analyzes rooms, estimates costs, and predicts regret.',
  },
  {
    image: resumeXLogo,
    link: 'https://github.com/OmKadam16/resumeX_V1',
    title: 'ResumeX',
    description:
      'An AI-powered builder that creates stunning, ATS-optimized resumes.',
  },
  {
    image: trendAsYouGoLogo,
    link: 'https://github.com/OmKadam16/Trend-As-You-Go',
    title: 'Trend As You Go',
    description:
      'Surfaces trending X topics and generates AI video content ideas.',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading"><ShinyText text="Projects" color="#b5b5b5" shineColor="#ffffff" speed={4} spread={150} /></h2>

      <div className="projects-menu-wrap">
        <InfiniteMenu items={projects} />
        <p className="projects-hint">Drag to explore</p>
      </div>
    </section>
  )
}

export default Projects
