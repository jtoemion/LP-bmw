import React from 'react';
import { useTranslation } from 'react-i18next';

const priceData = [
  { series: "2 Series", model: "BMW 218i Gran Coupe M Sport", price: "Rp 938.000.000", isElectric: false },
  { series: "3 Series", model: "BMW 320i M Sport LCI", price: "Rp 1.139.000.000", isElectric: false },
  { series: "3 Series", model: "BMW 330i M Sport Pro LCI", price: "Rp 1.259.000.000", isElectric: false },
  { series: "4 Series", model: "BMW 430i Convertible M Sport Pro", price: "Rp 1.835.000.000", isElectric: false },
  { series: "5 Series", model: "BMW 520i M Sport", price: "Rp 1.375.000.000", isElectric: false },
  { series: "7 Series", model: "BMW 735i M Sport", price: "Rp 2.459.000.000", isElectric: false },
  { series: "7 Series", model: "BMW i7 xDrive60 Gran Lusso", price: "Rp 3.499.000.000", isElectric: true },
  { series: "X Series", model: "BMW X1 sDrive18i xLine", price: "Rp 985.000.000", isElectric: false },
  { series: "X Series", model: "BMW iX1 xDrive30 M Sport", price: "Rp 1.485.000.000", isElectric: true },
  { series: "X Series", model: "BMW X3 sDrive20i M Sport", price: "Rp 1.365.000.000", isElectric: false },
  { series: "X Series", model: "BMW X5 xDrive40i M Sport", price: "Rp 1.955.000.000", isElectric: false },
  { series: "i Series", model: "BMW i4 eDrive40 M Sport", price: "Rp 2.108.000.000", isElectric: true },
  { series: "i Series", model: "BMW iX xDrive40 Sport", price: "Rp 2.483.000.000", isElectric: true }
];

export default function PriceList() {
  const { t } = useTranslation();

  return (
    <div className="bg-night min-h-screen pt-12 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono text-electric uppercase tracking-widest mb-2">Off the Road Jakarta</p>
          <h1 className="text-4xl md:text-5xl font-display font-light text-white leading-tight">
            BMW Price List 2026
          </h1>
          <p className="text-mist mt-4 font-sans font-light max-w-xl">
            Semua harga yang tercantum adalah On The Road (OTR) Jakarta dan dapat berubah tanpa pemberitahuan sebelumnya.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-precise shadow-[0_0_30px_rgba(0,0,0,0.5)] ghost-border bg-carbon">
          <div className="overflow-x-auto hide-scroll">
            <table className="w-full text-left font-sans text-sm border-collapse">
              <thead>
                <tr className="bg-steel/50">
                  <th className="py-5 px-6 font-mono font-medium text-xs text-mist uppercase tracking-widest">Series</th>
                  <th className="py-5 px-6 font-mono font-medium text-xs text-mist uppercase tracking-widest">Model</th>
                  <th className="py-5 px-6 font-mono font-medium text-xs text-mist uppercase tracking-widest text-right">Price OTR</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className="ghost-hover transition-colors even:bg-[rgba(255,255,255,0.04)]"
                  >
                    <td className="py-5 px-6 text-chrome whitespace-nowrap">{item.series}</td>
                    <td className="py-5 px-6 text-pearl flex items-center gap-3 whitespace-nowrap">
                      {item.model}
                      {item.isElectric && (
                        <span className="bg-bmw-blue/20 text-bmw-blue border border-bmw-blue/30 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                          Electric
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-6 text-white font-medium text-right whitespace-nowrap">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 p-6 bg-steel/30 rounded-precise ghost-border">
          <h4 className="text-sm font-mono text-white mb-2 uppercase tracking-widest">Pricing Notes</h4>
          <ul className="text-xs text-mist space-y-2 list-disc list-inside">
            <li>BBN mengikuti tarif progressif untuk kepemilikan mobil pertama.</li>
            <li>Harga sudah termasuk BMW Service Inclusive 5 Tahun / 60.000 KM.</li>
            <li>BMW Extended Warranty 5 Tahun / 200.000 KM.</li>
            <li>Tire Coverage 2 Tahun.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
