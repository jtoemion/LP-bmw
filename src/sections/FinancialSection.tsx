import { useTranslation } from 'react-i18next';

export default function FinancialSection() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-12 bg-background">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-6 block">{t('financial.eyebrow')}</span>
          <h2 className="text-white text-6xl ultra-light font-headline leading-tight mb-8">{t('financial.title')}</h2>
          <p className="text-[#8A8A8A] text-lg font-light leading-relaxed mb-12">
            {t('financial.body')}
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">speed</span>
              <span className="text-white text-sm font-medium tracking-wide">{t('financial.fastApproval')}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">percent</span>
              <span className="text-white text-sm font-medium tracking-wide">{t('financial.competitiveRates')}</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[480px] bg-[#1E1E1E] p-10 border border-white/5 relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          <h3 className="font-headline text-lg font-semibold tracking-widest uppercase text-white mb-8">{t('financial.simulation')}</h3>
          <div className="space-y-8">
            <div>
              <label className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-3">{t('financial.selectModel')}</label>
              <select className="w-full bg-[#131313] border-b border-white/10 border-t-0 border-x-0 text-white font-headline text-sm py-2 focus:ring-0 focus:border-primary">
                <option>BMW 320i Sport</option>
                <option>BMW X5 xDrive40i</option>
                <option>BMW iX xDrive40</option>
              </select>
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">{t('financial.dpLabel')}</label>
                <span className="font-mono text-xs text-primary">30%</span>
              </div>
              <input className="w-full h-1 bg-[#131313] accent-primary rounded-none outline-none appearance-none cursor-pointer" type="range" />
            </div>
            <div>
              <label className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-4">{t('financial.tenureLabel')}</label>
              <div className="grid grid-cols-4 gap-2">
                <button className="py-2 bg-[#131313] border border-white/5 text-[10px] font-mono text-neutral-400">12</button>
                <button className="py-2 bg-primary border border-primary text-[10px] font-mono text-white">24</button>
                <button className="py-2 bg-[#131313] border border-white/5 text-[10px] font-mono text-neutral-400">36</button>
                <button className="py-2 bg-[#131313] border border-white/5 text-[10px] font-mono text-neutral-400">48</button>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5">
              <span className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-2 text-center">{t('financial.estimation')}</span>
              <div className="text-center">
                <span className="font-mono text-3xl text-white">Rp 22.400.000</span>
              </div>
            </div>
            <button className="w-full py-4 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-on-primary-fixed-variant transition-all mt-4">
              {t('financial.contactConsultant')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
