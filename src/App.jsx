import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobVacancies from './components/JobVacancies';
import AboutSection from './components/AboutSection';
import CurrentEmployment from './components/CurrentEmployment';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <JobVacancies />
        <AboutSection />
        <CurrentEmployment />
      </main>
      <ContactFooter />
    </LanguageProvider>
  );
}

export default App;
