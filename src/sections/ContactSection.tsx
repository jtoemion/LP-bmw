import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  const { t, i18n } = useTranslation();

  const operatingHoursLabel = i18n.language === 'id' ? 'JAM OPERASIONAL' : 'OPERATING HOURS';
  const weekendLabel = i18n.language === 'id' ? 'AKHIR PEKAN' : 'WEEKEND';
  const testDriveRequest = i18n.language === 'id' ? 'REQUEST TEST DRIVE' : 'TEST DRIVE REQUEST';

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="BMW Showroom"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&w=1600&q=80"
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-white text-5xl md:text-7xl ultra-light font-headline mb-12">Book Your Test <br className="hidden md:block" /> Drive Today.</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/find-a-bmw-dealership-dealer-locator" className="px-12 py-5 bg-white text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all">
            {testDriveRequest}
          </Link>
          <button className="px-12 py-5 border border-white/30 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">chat</span> WHATSAPP: +62 822-4459-6129
          </button>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <div className="text-center">
            <span className="block text-[10px] text-neutral-500 uppercase tracking-[0.3em] mb-2 font-headline">{operatingHoursLabel}</span>
            <span className="font-mono text-xs text-neutral-300">Mon–Fri 09:00–19:00</span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] text-neutral-500 uppercase tracking-[0.3em] mb-2 font-headline">{weekendLabel}</span>
            <span className="font-mono text-xs text-neutral-300">Sat–Sun 10:00–17:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
