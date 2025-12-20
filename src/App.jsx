import { useState, createContext, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import QualificationForm from './pages/QualificationForm'
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import SmallBusiness from './pages/SmallBusiness';
import Footer from './components/Footer'
import './index.css'
import { translations } from './data/translations'

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/small-business" element={<SmallBusiness />} />
        {/* <Route path="/start-build" element={<QualificationForm />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<JobDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

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
        <AppContent />
      </Router>
    </LanguageContext.Provider>
  )
}

export default App
