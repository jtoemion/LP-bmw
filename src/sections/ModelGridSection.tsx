import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const modelsData = [
  { id: "1", label: "THE 2", name: "BMW 2 Series", specs: "SEDAN · 2.0L · 156 HP", price: "Rp 880 Juta", badge: "New", category: "SEDAN", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2025/06/bmw-218-F47-cq5dam.resized.im-3-edited-300x168.png", href: "/spesifikasi/bmw-2-series", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: true },
  { id: "2", label: "3 SERIES", name: "BMW 320i Sport", specs: "SEDAN · 2.0L · 184 HP", price: "Rp 1,080 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2022/11/bmw_series_lci_2022.png", category: "SEDAN", href: "/spesifikasi/bmw-3-series", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: false },
  { id: "3", label: "THE 5", name: "BMW 5 Series", specs: "SEDAN · 2.0L · 258 HP", price: "Rp 1,275 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2024/06/BMW-i5-edited-300x168.png", category: "SEDAN", href: "/spesifikasi/bmw-5-series", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: false },
  { id: "4", label: "THE 7", name: "BMW 7 Series", specs: "SEDAN · 3.0L · 381 HP", price: "Rp 2,285 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2023/06/wp-1686720535499.png", category: "SEDAN", href: "/spesifikasi/bmw-7-series", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: false },
  { id: "5", label: "THE X1", name: "BMW X1", specs: "SAV · 1.5L · 140 HP", price: "Rp 877 Juta", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2023/07/wp-1690548316855-edited.png", category: "SAV", href: "/spesifikasi/bmw-x1", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: false },
  { id: "6", label: "THE X3", name: "BMW X3", specs: "SAV · 2.0L · 184 HP", price: "Rp 1,310 Miliar", badge: "New", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2025/06/BMW-X3-New-edited-300x168.png", category: "SAV", href: "/spesifikasi/bmw-x3", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: true },
  { id: "7", label: "X SERIES", name: "BMW X5 xDrive40i", specs: "SAV · 3.0L · 381 HP", price: "Rp 1,797 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2022/01/bmw-x5.png", category: "SAV", href: "/spesifikasi/bmw-x5", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: false },
  { id: "8", label: "THE X7", name: "BMW X7", specs: "SAV · 3.0L · 381 HP", price: "Rp 2,417 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2023/02/wp-1675392841663.png", category: "SAV", href: "/spesifikasi/bmw-x7", offersHref: "/promo-bmw-indonesia", isElectric: false, isNew: false },
  { id: "9", label: "ELECTRIC", name: "BMW iX1 Electric", specs: "ELECTRIC · 313 HP · 440 KM", price: "Rp 1,447 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2024/06/ix1.webp", category: "ELECTRIC", bgBadge: "bg-[#1C69D4]", href: "/spesifikasi/bmw-ix1", offersHref: "/promo-bmw-indonesia", isElectric: true, isNew: false },
  { id: "10", label: "ELECTRIC", name: "BMW i4 Electric", specs: "ELECTRIC · 340 HP · 590 KM", price: "Rp 2,108 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2022/08/wp-1659960306026-1.png", category: "ELECTRIC", bgBadge: "bg-[#1C69D4]", href: "/spesifikasi/bmw-i4", offersHref: "/promo-bmw-indonesia", isElectric: true, isNew: false },
  { id: "11", label: "ELECTRIC", name: "BMW iX xDrive40", specs: "ELECTRIC · 326 HP · 425 KM", price: "Rp 2,428 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2022/05/wp-1653761971138.png", category: "ELECTRIC", bgBadge: "bg-[#1C69D4]", href: "/spesifikasi/bmw-ix", offersHref: "/promo-bmw-indonesia", isElectric: true, isNew: false },
  { id: "12", label: "ELECTRIC", name: "BMW i7 Electric", specs: "ELECTRIC · 544 HP · 625 KM", price: "Rp 3,247 Miliar", image: "https://i0.wp.com/bmwstore.id/wp-content/uploads/2023/10/bmw-i7-edited.png", category: "ELECTRIC", bgBadge: "bg-[#1C69D4]", href: "/spesifikasi/bmw-i7", offersHref: "/promo-bmw-indonesia", isElectric: true, isNew: false }
];

const categories = ["ALL", "SEDAN", "SAV", "M SERIES", "ELECTRIC"];

export default function ModelGridSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredModels = modelsData.filter(model => 
    activeCategory === "ALL" ? true : model.category === activeCategory
  );

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-12 bg-background overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">OUR LINEUP</span>
          <h2 className="text-on-surface text-[40px] ultra-light font-headline">Discover Every Series</h2>
          <div className="flex flex-wrap gap-4 mt-12">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 text-[11px] font-bold tracking-widest uppercase rounded transition-colors ${
                  activeCategory === cat 
                    ? "bg-primary text-white" 
                    : "border border-white/10 text-neutral-400 hover:border-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Carousel Details & Navigation Controls */}
        <div className="flex gap-4 self-start md:self-auto mt-6 md:mt-0">
          <button 
            onClick={scrollLeft} 
            className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-black transition-colors rounded-sm"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={scrollRight} 
            className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-black transition-colors rounded-sm"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto no-scrollbar pb-12 max-w-[1440px] mx-auto scroll-smooth snap-x snap-mandatory pr-[10%]"
      >
        {filteredModels.map((model) => (
          <div key={model.id} className="snap-start min-w-[360px] max-w-[360px] bg-[#141414] group cursor-pointer transition-all duration-500 hover:translate-y-[-8px]">
            <div className="h-[280px] bg-[#1E1E1E] relative overflow-hidden flex items-center justify-center p-8">
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full object-contain transform group-hover:scale-110 transition-transform duration-700 max-h-full" 
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`${model.bgBadge || 'bg-black/40 backdrop-blur border border-white/10'} px-3 py-1 text-[9px] font-bold tracking-widest uppercase ${model.bgBadge ? 'text-white' : ''}`}>
                  {model.label}
                </span>
                {model.isNew && (
                  <span className="bg-white/10 backdrop-blur px-3 py-1 text-[9px] font-bold tracking-widest uppercase border border-white/10">
                    NEW
                  </span>
                )}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-headline text-white mb-2">{model.name}</h3>
              <p className="font-mono text-[11px] text-[#8A8A8A] mb-6">{model.specs}</p>
              <div className="flex justify-between items-end border-t border-white/5 pt-6">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Mulai dari</span>
                  <span className="font-mono text-lg text-white">{model.price}</span>
                </div>
                <Link to={model.href} className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/0 hover:border-primary transition-all">
                  SPESIFIKASI &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
