import React from 'react'
import NavBar from './components/Navbar'
import Hero from './sections/Hero'
import FeatureCards from './sections/FeatureCards'
import Projects from './sections/Projects'
import WorkExp from './sections/WorkExp'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeatureCards />
      <Projects />
      <WorkExp />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App