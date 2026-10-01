import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobOpportunities from './components/JobOpportunities';
import Pathways from './components/Pathways';
import JobSectors from './components/JobSectors';
import Training from './components/Training';
import Process from './components/Process';
import CareerBanner from './components/CareerBanner';
import Compliance from './components/Compliance';
import TrustedPartner from './components/TrustedPartner';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <JobOpportunities />
        <Pathways />
        <JobSectors />
        <Training />
        <Process />
        <CareerBanner />
        <Compliance />
        <TrustedPartner />
      </main>
      <CtaBanner />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
