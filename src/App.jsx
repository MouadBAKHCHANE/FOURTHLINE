import { useState, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionTimeline from './components/SolutionTimeline'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Stats from './components/Stats'
import Footer from './components/Footer'
import './index.css'
import { translations } from './data/translations'

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

function App() {
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const value = { language, toggleLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      <div className="app">
        <Navbar />
        <Hero />
        <ProblemSection />
        <Stats />
        <SolutionTimeline />
        <Services />
        <TechStack />
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}

export default App
