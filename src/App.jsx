import { useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import QualificationForm from './pages/QualificationForm'
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
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/start-build" element={<QualificationForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App
