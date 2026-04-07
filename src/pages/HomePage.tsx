import HeroSection from '../sections/HeroSection';
import ModelGridSection from '../sections/ModelGridSection';
import TypeFilterBar from '../sections/TypeFilterBar';
import ContactSection from '../sections/ContactSection';
import TrustSection from '../sections/TrustSection';
import FinancialSection from '../sections/FinancialSection';
import WhatsAppWidget from '../components/WhatsAppWidget';
import PromoModal from '../components/PromoModal';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ModelGridSection />
      <TypeFilterBar />
      <TrustSection />
      <FinancialSection />
      <ContactSection />
      
      {/* Global Elements */}
      <WhatsAppWidget />
      <PromoModal />
    </>
  );
}
