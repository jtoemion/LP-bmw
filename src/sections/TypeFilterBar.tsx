

export default function TypeFilterBar() {
  const elements = [
    { label: 'SEDAN', icon: 'directions_car', active: true },
    { label: 'SAV', icon: 'minor_crash', active: false },
    { label: 'ELECTRIC', icon: 'electric_car', active: false },
    { label: 'M SERIES', icon: 'sports_motorsports', active: false },
    { label: 'TOURING', icon: 'rv_hookup', active: false },
    { label: 'COUPE', icon: 'directions_car', active: false },
  ];

  return (
    <section className="flex flex-col lg:flex-row h-auto lg:h-[700px] bg-[#141414] border-y border-white/5">
      <div className="w-full lg:w-[55%] p-12 lg:p-24 flex flex-col justify-center">
        <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-6">FIND YOUR TYPE</span>
        <h2 className="text-white text-5xl ultra-light font-headline mb-12">Engineered for Every Lifestyle</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {elements.map((item, idx) => (
            <div key={idx} className={`p-6 bg-background border ${item.active ? 'border-primary/40' : 'border-white/5'} group hover:bg-primary transition-all duration-500 cursor-pointer flex flex-col items-center gap-4 text-center`}>
              <span className={`material-symbols-outlined text-4xl group-hover:text-white ${item.active ? 'text-primary' : 'text-neutral-400'}`}>
                {item.icon}
              </span>
              <span className="font-headline text-sm font-semibold tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[45%] bg-[#0A0A0A] relative flex items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <img 
          alt="BMW Silhouette" 
          className="relative z-10 w-full object-contain mix-blend-screen opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
        />
      </div>
    </section>
  );
}
