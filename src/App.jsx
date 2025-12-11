import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionTimeline from './components/SolutionTimeline'
import Services from './components/Services'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionTimeline />
      <Services />
      <Footer />
    </div>
  )
}

export default App
