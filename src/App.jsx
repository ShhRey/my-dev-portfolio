import React from 'react'
import NavBar from './components/Navbar'
import Hero from './sections/Hero'
import FeatureCards from './sections/FeatureCards'
import Projects from './sections/Projects'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeatureCards />
      <Projects />
    </>
  )
}

export default App