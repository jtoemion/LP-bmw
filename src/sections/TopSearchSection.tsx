import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const articles = [
  { title: "Daftar Harga Dan Promo BMW 2026", img: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2024/12/showroom-event-bmw-tebet-14-15-desember-2024-edited-1.png", href: "/daftar-harga-bmw-indonesia/" },
  { title: "NEW BMW X5 M Sport 2025 - Spesifikasi, Harga, Promo dan Review", img: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2023/07/bmw-x-series-x5-m60i-sp-desktop.jpg", href: "/new-bmw-x5-g05-spesifikasi-harga-promo-dan-review-bmw-x5-indonesia/" },
  { title: "NEW BMW 330i M Sport Pro LCI 2026 : Spesifikasi, Harga dan Promo", img: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2022/12/wp-1670041965180.jpg", href: "/new-bmw-330i-m-sport-spesifikasi-harga-promo-dan-review-bmw-indonesia/" },
  { title: "NEW BMW X5 2025 : Spesifikasi, Harga, Promo dan Review BMW X5 Indonesia", img: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2023/07/2023-bmw-x5-facelift-g05-lci-debut-31.jpg", href: "/new-bmw-x5-spesifikasi-harga-promo-dan-review-bmw-x5-indonesia/" }
];

export default function TopSearchSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-carbon py-24 px-8 border-b border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-mono text-pearl mb-8 uppercase tracking-widest">
          {t('search.title')}
        </h2>
        
        <div className="flex flex-col border-t border-[rgba(255,255,255,0.06)]">
          {articles.map((article, idx) => (
            <Link 
              key={idx} 
              to={article.href} 
              className="flex items-center gap-6 py-5 ghost-border-b ghost-hover transition-colors group"
            >
              <img 
                src={article.img} 
                alt="Thumbnail" 
                className="w-12 h-12 rounded-precise object-cover grayscale group-hover:grayscale-0 transition-all" 
              />
              <span className="text-sm font-sans font-light text-pearl group-hover:text-bmw-blue transition-colors">
                {article.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
