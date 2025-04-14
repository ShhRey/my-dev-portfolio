import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeatureCards />
    </>
  )
}

export default App