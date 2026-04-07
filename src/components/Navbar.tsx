import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Toggle Language
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(nextLang);
  };

  // Mega Menu GSAP Animation
  useGSAP(() => {
    if (isMegaOpen) {
      gsap.to(megaMenuRef.current, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out', display: 'block' });
    } else {
      gsap.to(megaMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in', display: 'none' });
    }
  }, [isMegaOpen]);

  // Mobile Menu GSAP Animation
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { x: 0, duration: 0.5, ease: 'power4.out' });
    } else {
      gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' });
    }
  }, [isMobileMenuOpen]);

  // Megamenu data matching stitch requirements
  const megaColumns = [
    {
      title: "Sedan Models",
      links: ["BMW 2 Series", "BMW 3 Series", "BMW 4 Series", "BMW 5 Series", "BMW 7 Series", "BMW 8 Series"]
    },
    {
      title: "SUV / SAV",
      links: ["BMW X1", "BMW X2", "BMW X3", "BMW X4", "BMW X5", "BMW X6", "BMW X7"]
    },
    {
      title: "M Series & Special",
      links: ["BMW M2", "BMW M3", "BMW M4", "BMW M5", "BMW X3 M", "BMW X4 M", "BMW Z4", "430i Convertible"]
    },
    {
      title: "Electric / BMW i",
      links: ["BMW i4", "BMW i5", "BMW i7", "BMW iX1", "BMW iX"]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-steel/60 backdrop-blur-[20px] ghost-border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 relative z-50">
          <img src="https://i0.wp.com/bmwstore.id/wp-content/uploads/2025/06/logo-bmw-png.png" alt="BMW Logo" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-sans uppercase tracking-[0.1em] text-pearl hover:text-white transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <Link to="/spesifikasi" className="text-sm font-sans uppercase tracking-[0.1em] text-pearl hover:text-white transition-colors inline-flex items-center group relative">
              {t('nav.spec')} <ChevronDown className="ml-1 w-4 h-4 text-mist group-hover:text-electric transition-colors" />
              <span className="absolute bottom-[-1.2rem] left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Mega Dropdown */}
            <div 
              ref={megaMenuRef}
              className="absolute top-16 left-1/2 -translate-x-1/2 w-[80vw] max-w-5xl bg-carbon ghost-border p-8 rounded-b-precise shadow-2xl opacity-0 hidden overflow-hidden"
            >
              <div className="grid grid-cols-4 gap-8">
                {megaColumns.map((col, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs uppercase tracking-[0.1em] text-mist mb-4 font-mono">{col.title}</h3>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link}>
                          <Link to={`/spesifikasi`} className="text-sm text-pearl hover:text-electric transition-colors block">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/pricelist-bmw" className="text-sm font-sans uppercase tracking-[0.1em] text-pearl hover:text-white transition-colors relative group">
            {t('nav.priceList')}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/promo-bmw-indonesia" className="text-sm font-sans uppercase tracking-[0.1em] text-pearl hover:text-white transition-colors relative group">
            {t('nav.promo')}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/bmw-financial-service" className="text-sm font-sans uppercase tracking-[0.1em] text-pearl hover:text-white transition-colors relative group">
            {t('nav.kredit')}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/find-a-bmw-dealership-dealer-locator" className="text-sm font-sans uppercase tracking-[0.1em] text-pearl hover:text-white transition-colors relative group">
            {t('nav.contact')}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Actions: Lang Switch & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage} 
            className="text-xs font-mono uppercase tracking-widest text-pearl ghost-border px-3 py-1.5 rounded-precise hover:border-electric transition-colors"
          >
            {i18n.language === 'en' ? 'EN / ID' : 'ID / EN'}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-pearl hover:text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-carbon ghost-border-l z-40 p-8 flex flex-col translate-x-full"
      >
        <div className="mt-16 flex flex-col space-y-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-sans text-pearl hover:text-electric transition-colors">Home</Link>
          <Link to="/spesifikasi" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-sans text-pearl hover:text-electric transition-colors">{t('nav.spec')}</Link>
          <Link to="/pricelist-bmw" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-sans text-pearl hover:text-electric transition-colors">{t('nav.priceList')}</Link>
          <Link to="/promo-bmw-indonesia" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-sans text-pearl hover:text-electric transition-colors">{t('nav.promo')}</Link>
          <Link to="/bmw-financial-service" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-sans text-pearl hover:text-electric transition-colors">{t('nav.kredit')}</Link>
          <Link to="/find-a-bmw-dealership-dealer-locator" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-sans text-pearl hover:text-electric transition-colors">{t('nav.contact')}</Link>
        </div>
      </div>
    </header>
  );
}
