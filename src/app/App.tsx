import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { ScrollToTop } from './components/ScrollToTop';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { CustomizeTripPage } from './pages/CustomizeTripPage';
import { EducationalToursPage } from './pages/EducationalToursPage';
import { ReligiousToursPage } from './pages/ReligiousToursPage';
import { CorporatePage } from './pages/CorporatePage';
import { ContactPage } from './pages/ContactPage';
import { DomesticToursPage } from './pages/DomesticToursPage';
import { InternationalToursPage } from './pages/InternationalToursPage';
import { HoneymoonToursPage } from './pages/HoneymoonToursPage';
import { LTCToursPage } from './pages/LTCToursPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { CancellationPolicyPage } from './pages/CancellationPolicyPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/domestic-tours" element={<DomesticToursPage />} />
            <Route path="/international-tours" element={<InternationalToursPage />} />
            <Route path="/package/:id" element={<PackageDetailPage />} />
            <Route path="/custom-trip" element={<CustomizeTripPage />} />
            <Route path="/customize" element={<CustomizeTripPage />} />
            <Route path="/educational-tours" element={<EducationalToursPage />} />
            <Route path="/honeymoon-tours" element={<HoneymoonToursPage />} />
            <Route path="/religious-tours" element={<ReligiousToursPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
            <Route path="/ltc-tours" element={<LTCToursPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
        <Toaster />
      </div>
    </Router>
  );
}