import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoModal() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('bmw_promo_dismissed');
    if (!isDismissed) {
      // Slight delay for dramatic effect
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    sessionStorage.setItem('bmw_promo_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const promoTitle = i18n.language === 'id'
    ? 'Promo BMW'
    : 'BMW Promo';
  const promoPeriod = i18n.language === 'id'
    ? 'Maret–April 2026'
    : 'March–April 2026';
  const viewPromo = i18n.language === 'id'
    ? 'Lihat Promo'
    : 'View Promo';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Background click listener */}
      <div className="absolute inset-0" onClick={closeModal}></div>

      <div className="bg-carbon rounded-precise overflow-hidden max-w-md w-full shadow-[0_0_40px_rgba(0,0,0,0.8)] relative ghost-border z-10 animate-fade-in-up">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-mist hover:text-white bg-black/40 rounded-full p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src="https://bmwstore.id/wp-content/uploads/2026/03/Promo-BMW-Maret-April-2026-X1-320-Autosaved-1.jpg"
          alt={t('promo.title')}
          className="w-full object-cover"
        />

        <div className="px-8 py-6">
          <h3 className="text-xl font-display text-white mb-6">{promoTitle}<br />{promoPeriod}</h3>
          <Link
            to="/promo-bmw-indonesia"
            onClick={closeModal}
            className="block text-center w-full cta-gradient text-white text-sm font-sans py-3 rounded-precise hover:shadow-[0_0_15px_rgba(28,105,212,0.4)] transition-all"
          >
            {viewPromo}
          </Link>
        </div>
      </div>
    </div>
  );
}
