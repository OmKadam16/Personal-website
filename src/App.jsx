import Hero from './components/Hero'
import SectionNav from './components/SectionNav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Hero />
      <div className="hero-divider" />
      <SectionNav />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  )
}

export default App
