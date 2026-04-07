import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator } from 'lucide-react';

export default function SimulasiKredit() {
  const { t, i18n } = useTranslation();
  const [carPrice, setCarPrice] = useState(1139000000); // Default: 320i M Sport LCI
  const [dpPercentage, setDpPercentage] = useState(20);
  const [tenure, setTenure] = useState(36); // months

  const dpAmount = carPrice * (dpPercentage / 100);
  const loanPrincipal = carPrice - dpAmount;
  const interestRate = 0.04; // 4% flat roughly
  const totalInterest = loanPrincipal * interestRate * (tenure / 12);
  const totalLoan = loanPrincipal + totalInterest;
  const monthlyInstallment = totalLoan / tenure;

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
  };

  return (
    <div className="bg-night min-h-screen pt-12 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono text-electric uppercase tracking-widest mb-2">Financial Services</p>
          <h1 className="text-4xl md:text-5xl font-display font-light text-white leading-tight">
            {t('simulasi.title')}
          </h1>
          <p className="text-mist mt-4 font-sans font-light max-w-xl">
            {t('simulasi.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls */}
          <div className="lg:col-span-7 bg-carbon p-8 rounded-precise shadow-2xl ghost-border">
            <h3 className="text-xl font-display text-white mb-8 flex items-center gap-3">
              <Calculator className="w-5 h-5 text-bmw-blue" />
              {t('simulasi.adjustFinancing')}
            </h3>

            <div className="space-y-8">
              {/* OTR Price (Manual for simul) */}
              <div>
                <label className="flex justify-between text-sm font-sans text-mist mb-3">
                  <span>{t('simulasi.carPrice')}</span>
                  <span className="text-white font-medium">{formatRupiah(carPrice)}</span>
                </label>
                <input
                  type="range"
                  min="800000000"
                  max="4000000000"
                  step="10000000"
                  value={carPrice}
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                  className="w-full accent-bmw-blue h-1 bg-[rgba(255,255,255,0.1)] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* DP Percentage */}
              <div>
                <label className="flex justify-between text-sm font-sans text-mist mb-3">
                  <span>{t('simulasi.dp')}</span>
                  <span className="text-white font-medium">{dpPercentage}% ({formatRupiah(dpAmount)})</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={dpPercentage}
                  onChange={(e) => setDpPercentage(Number(e.target.value))}
                  className="w-full accent-bmw-blue h-1 bg-[rgba(255,255,255,0.1)] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-[10px] uppercase font-mono text-chrome tracking-widest">
                  <span>{t('simulasi.dpMin')}</span>
                  <span>{t('simulasi.dpMax')}</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <label className="flex justify-between text-sm font-sans text-mist mb-3">
                  <span>{t('simulasi.tenure')}</span>
                  <span className="text-white font-medium">{tenure} {i18n.language === 'id' ? 'Bulan' : 'Months'}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map(val => (
                    <button
                      key={val}
                      onClick={() => setTenure(val)}
                      className={`py-2 text-sm font-mono transition-all rounded-sm ghost-border ${tenure === val ? 'bg-bmw-blue text-white border-bmw-blue' : 'text-mist hover:text-white hover:border-[rgba(255,255,255,0.2)]'}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24 bg-gradient-to-br from-carbon to-steel p-8 rounded-precise shadow-[0_0_40px_rgba(0,0,0,0.6)] ghost-border flex flex-col h-full border-t border-[rgba(255,255,255,0.1)]">
              <h3 className="text-sm font-mono uppercase tracking-widest text-chrome mb-6">{t('simulasi.estimation')}</h3>

              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-sm text-mist font-sans mb-1">{t('simulasi.totalDP')}</p>
                  <p className="text-2xl font-display text-white">{formatRupiah(dpAmount)}</p>
                </div>
                <div>
                  <p className="text-sm text-mist font-sans mb-1">{t('simulasi.loanPrincipal')}</p>
                  <p className="text-xl font-display text-pearl">{formatRupiah(loanPrincipal)}</p>
                </div>
                <div className="pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <p className="text-sm text-mist font-sans mb-1">{t('simulasi.monthlyInstallment')}</p>
                  <p className="text-4xl font-display text-bmw-blue font-semibold">{formatRupiah(monthlyInstallment)}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[10px] text-chrome font-sans leading-relaxed mb-6">
                  {t('simulasi.disclaimer')}
                </p>
                <a href="https://wa.me/6282244596129" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-4 cta-gradient text-white rounded-precise hover:shadow-[0_0_15px_rgba(28,105,212,0.4)] transition-all font-sans text-sm">
                  {t('simulasi.apply')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
