import { useTranslation } from 'react-i18next';
import { ArrowRight, Check } from 'lucide-react';

export default function PromoPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-night">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-8 lg:px-16 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-light text-white mb-2">
                {t('promo.title')}
              </h1>
              <p className="text-sm text-mist/60 font-sans">
                {t('promo.subtitle')}
              </p>
            </div>
            <div className="hidden lg:block px-4 py-1.5 bg-[#1C69D4] rounded-full">
              <span className="text-xs font-mono text-white tracking-widest">
                {t('promo.period')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Cards Grid */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Cicilan Ringan */}
            <div className="bg-[#131313] rounded-precise overflow-hidden border border-white/5 hover:border-white/10 transition-all">
              <div className="relative h-48 bg-[#1E1E1E] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
                  alt="BMW X1, X3, 320i"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C69D4]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                    {t('promo.limitedTime')}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-white/80">
                    BMW X1 · X3 · 320i
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display text-white mb-2">
                  {t('promo.card1.title')}
                </h3>
                <p className="text-xs text-mist/50 font-mono mb-4">
                  {t('promo.card1.validity')}
                </p>
                <p className="text-sm text-mist/70 font-sans leading-relaxed mb-4">
                  {t('promo.card1.description')}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-mist/50">T&C apply</span>
                  <button className="text-xs font-bold tracking-widest uppercase text-[#1C69D4] flex items-center gap-2 hover:gap-3 transition-all">
                    {t('promo.getOffer')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Free Service Package */}
            <div className="bg-[#131313] rounded-precise overflow-hidden border border-white/5 hover:border-white/10 transition-all">
              <div className="relative h-48 bg-[#1E1E1E] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="BMW X5, 7 Series"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C69D4]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                    {t('promo.limitedTime')}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-white/80">
                    BMW X5 · 7 Series
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display text-white mb-2">
                  {t('promo.card2.title')}
                </h3>
                <p className="text-xs text-mist/50 font-mono mb-4">
                  {t('promo.card2.validity')}
                </p>
                <p className="text-sm text-mist/70 font-sans leading-relaxed mb-4">
                  {t('promo.card2.description')}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-mist/50">T&C apply</span>
                  <button className="text-xs font-bold tracking-widest uppercase text-[#1C69D4] flex items-center gap-2 hover:gap-3 transition-all">
                    {t('promo.getOffer')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Trade-In */}
            <div className="bg-[#131313] rounded-precise overflow-hidden border border-white/5 hover:border-white/10 transition-all">
              <div className="relative h-48 bg-[#1E1E1E] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                  alt="BMW Trade-In"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C69D4]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                    {t('promo.limitedTime')}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-white/80">
                    Drive to Change
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display text-white mb-2">
                  {t('promo.card3.title')}
                </h3>
                <p className="text-xs text-mist/50 font-mono mb-4">
                  {t('promo.card3.validity')}
                </p>
                <p className="text-sm text-mist/70 font-sans leading-relaxed mb-4">
                  {t('promo.card3.description')}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-mist/50">T&C apply</span>
                  <button className="text-xs font-bold tracking-widest uppercase text-[#1C69D4] flex items-center gap-2 hover:gap-3 transition-all">
                    {t('promo.getOffer')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Insurance Bundle */}
            <div className="bg-[#131313] rounded-precise overflow-hidden border border-white/5 hover:border-white/10 transition-all">
              <div className="relative h-48 bg-[#1E1E1E] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
                  alt="BMW Insurance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C69D4]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                    {t('promo.limitedTime')}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-white/80">
                    Insurance Package
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display text-white mb-2">
                  {t('promo.card4.title')}
                </h3>
                <p className="text-xs text-mist/50 font-mono mb-4">
                  {t('promo.card4.validity')}
                </p>
                <p className="text-sm text-mist/70 font-sans leading-relaxed mb-4">
                  {t('promo.card4.description')}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-mist/50">T&C apply</span>
                  <button className="text-xs font-bold tracking-widest uppercase text-[#1C69D4] flex items-center gap-2 hover:gap-3 transition-all">
                    {t('promo.getOffer')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="px-8 lg:px-16 pb-20 bg-[#0F0F0F]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-[#1C69D4] tracking-widest uppercase block mb-4">
                {t('promo.referral.eyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-light text-white mb-4">
                {t('promo.referral.title')}
              </h2>
              <p className="text-sm text-mist/60 font-sans leading-relaxed">
                {t('promo.referral.description')}
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1A1A1A] border border-white/5">
                <Check className="w-4 h-4 text-[#1C69D4]" />
                <span className="text-sm text-white font-sans">
                  {t('promo.referral.benefit1')}
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1A1A1A] border border-white/5">
                <Check className="w-4 h-4 text-[#1C69D4]" />
                <span className="text-sm text-white font-sans">
                  {t('promo.referral.benefit2')}
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1A1A1A] border border-white/5">
                <Check className="w-4 h-4 text-[#1C69D4]" />
                <span className="text-sm text-white font-sans">
                  {t('promo.referral.benefit3')}
                </span>
              </div>
              <button className="w-full mt-6 py-3 bg-[#1C69D4] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1558B8] transition-all">
                {t('promo.referral.contactUs')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
