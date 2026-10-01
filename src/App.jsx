import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pathways from './components/Pathways';
import JobSectors from './components/JobSectors';
import Training from './components/Training';
import Process from './components/Process';
import CareerBanner from './components/CareerBanner';
import Compliance from './components/Compliance';
import TrustedPartner from './components/TrustedPartner';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import TITPPage from './components/visa/TITPPage';
import SSWPage from './components/visa/SSWPage';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
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
    </>
  );
}

function VisaDetailLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/japan/titp"
            element={<VisaDetailLayout><TITPPage /></VisaDetailLayout>}
          />
          <Route
            path="/japan/ssw"
            element={<VisaDetailLayout><SSWPage /></VisaDetailLayout>}
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
