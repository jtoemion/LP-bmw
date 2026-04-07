export default function TrustSection() {
  return (
    <section className="py-24 px-12 bg-background border-b border-white/5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-mono text-7xl ultra-light text-primary mb-2">40+</span>
          <span className="text-neutral-400 uppercase tracking-widest font-headline font-semibold text-sm">Years of Excellence</span>
        </div>
        <div className="py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-mono text-7xl ultra-light text-white mb-2">#1</span>
          <span className="text-neutral-400 uppercase tracking-widest font-headline font-semibold text-sm">Best Customer Relationship</span>
          <span className="text-[10px] text-primary/60 mt-1 uppercase">BMW INDONESIA DEALER AWARD</span>
        </div>
        <div className="py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="material-symbols-outlined text-7xl text-neutral-700 mb-2">verified_user</span>
          <span className="text-neutral-400 uppercase tracking-widest font-headline font-semibold text-sm">100% Official &amp; Guaranteed</span>
        </div>
      </div>
    </section>
  );
}
