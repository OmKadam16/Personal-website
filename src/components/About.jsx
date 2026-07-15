import whoMePhoto from '../assets/whoMe.jpg'
import TiltedCard from './TiltedCard'
import ShinyText from './ShinyText'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-body">
        <div className="about-content">
          <h2 className="about-heading"><ShinyText text="About me" color="#b5b5b5" shineColor="#ffffff" speed={4} spread={150} /></h2>

          <div className="about-text">
            <p>
              I'm Om — a biotech/bioinformatics student, AI builder, and
              researcher asking one question:
              <br />
              How can technology make people healthier and more capable?
            </p>
            <p>
              I build full-stack AI products and dig into neuroscience
              research — from BCI pipelines to hackathon wins. My work sits
              at the intersection of AI, biology, and product development.
            </p>
            <p>
              Long-term: grad school in computational neuroscience and
              founding a company in healthcare tech.
            </p>
          </div>
        </div>

        <div className="about-photo">
          <TiltedCard
            imageSrc={whoMePhoto}
            altText="Om Kadam"
            scaleOnHover={1.05}
            rotateAmplitude={10}
            showMobileWarning={false}
            showTooltip={false}
          />
        </div>
      </div>
    </section>
  )
}

export default About
