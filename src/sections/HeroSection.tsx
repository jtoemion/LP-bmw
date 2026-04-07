import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="BMW M4 Competition"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=1600&q=80"
        />
        <div className="absolute inset-0 cinematic-overlay"></div>
      </div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 flex flex-col items-start pt-20">
        <span className="text-primary font-mono text-[11px] tracking-[0.2em] mb-4">
          AUTHORIZED DEALER · SINCE 1984
        </span>
        <h1 className="text-white text-[88px] leading-[0.95] ultra-light track-tight-brand font-headline mb-8">
          The Ultimate <br />
          <span className="italic inline-block" style={{ transform: 'skewX(-5deg)' }}>Driving</span> Machine.
        </h1>
        <p className="text-[#8A8A8A] text-lg max-w-xl font-light leading-relaxed mb-10">
          Experience the precision of German engineering. Explore the full BMW lineup — from the iconic 3 Series to the avant-garde all-electric iX.
        </p>
        <div className="flex gap-6">
          <Link to="/spesifikasi" className="px-10 py-4 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase flex items-center gap-3 hover:shadow-[0_0_20px_rgba(28,105,212,0.4)] transition-all duration-500">
            EXPLORE MODELS <span className="material-symbols-outlined">trending_flat</span>
          </Link>
          <Link to="/find-a-bmw-dealership-dealer-locator" className="px-10 py-4 border border-white/20 text-white text-sm font-bold tracking-[0.15em] uppercase hover:bg-white/5 transition-all duration-300">
            REQUEST TEST DRIVE
          </Link>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md py-4 border-t border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          <span className="font-mono text-[11px] text-[#424753] tracking-widest uppercase">BMW 3 SERIES · BMW X5 · BMW M4 COMPETITION · BMW iX xDRIVE40 · BMW 7 SERIES · BMW X7 · BMW M3 · BMW i4 eDRIVE40 · BMW 2 SERIES</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-[0.3em] uppercase">SCROLL</span>
        <span className="material-symbols-outlined animate-bounce">expand_more</span>
      </div>
    </header>
  );
}
