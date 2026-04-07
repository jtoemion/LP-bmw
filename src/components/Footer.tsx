import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-carbon pt-16 pb-8 px-8 rounded-t-[2rem] ghost-border-t mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-mist mb-4 font-mono">Social Media</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">LinkedIn</a></li>
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">Facebook</a></li>
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">Instagram</a></li>
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-mist mb-4 font-mono">Experience</h4>
          <ul className="space-y-2">
            <li><a href="https://bmw.com" target="_blank" rel="noreferrer" className="text-sm text-pearl hover:text-electric transition">bmw.com</a></li>
            <li><a href="https://bmw.co.id" target="_blank" rel="noreferrer" className="text-sm text-pearl hover:text-electric transition">bmw.co.id</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-mist mb-4 font-mono">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">Site Map</a></li>
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-mist mb-4 font-mono">Find More</h4>
          <ul className="space-y-2">
            <li><Link to="/spesifikasi" className="text-sm text-pearl hover:text-electric transition">All Models</Link></li>
            <li><Link to="/pricelist-bmw" className="text-sm text-pearl hover:text-electric transition">Pricelist</Link></li>
            <li><a href="#" className="text-sm text-pearl hover:text-electric transition">Trade-In</a></li>
            <li><Link to="/promo-bmw-indonesia" className="text-sm text-pearl hover:text-electric transition">Promo</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img 
          src="https://i0.wp.com/bmwstore.id/wp-content/uploads/2025/07/bmw-indonesia-dealer.jpg" 
          alt="BMW Dealership" 
          className="rounded-precise object-cover h-48 w-full ghost-border" 
        />
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-pearl font-mono uppercase tracking-widest">BMW Authorized Dealer</h3>
          <p className="text-sm text-mist">Jl. Prof. Dr. Soepomo No.174 Jakarta</p>
          <p className="text-sm text-mist">Mon–Fri 09:00–19:00 | Sat–Sun 09:00–17:00</p>
          <div className="pt-4">
            <p className="text-xs text-mist uppercase tracking-widest">Roadside Assistance 24/7</p>
            <p className="text-pearl font-mono mt-1">1 500 798 | 021-50880206</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] text-center">
        <p className="text-xs text-mist font-mono">© BMW Store ID 2026. Designed with Cinematic Precision.</p>
      </div>
    </footer>
  );
}
