import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/vantage-icon.png"
              alt="VANTAGE icon"
              className="w-6 h-6 object-contain"
            />
            <h2 className="font-serif text-base tracking-[0.2em] uppercase text-foreground">VANTAGE</h2>
          </div>
          <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-xs">
            Property documentation and visual systems for letting agencies and property managers.
          </p>
          <p className="text-xs text-foreground/30 font-light tracking-wide">Bristol, United Kingdom</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-medium uppercase tracking-widest text-foreground/30">Services</h3>
          <ul className="space-y-3 text-sm text-foreground/50 font-light">
            <li><Link href="/services" className="hover:text-foreground transition-colors">Residential Inventories</Link></li>
            <li><Link href="/services" className="hover:text-foreground transition-colors">360° Property Tours</Link></li>
            <li><Link href="/services" className="hover:text-foreground transition-colors">Inspections & Reports</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-medium uppercase tracking-widest text-foreground/30">Company</h3>
          <ul className="space-y-3 text-sm text-foreground/50 font-light">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><a href="/#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center">
        <p className="text-xs text-foreground/25 font-light tracking-wide">
          &copy; {new Date().getFullYear()} VANTAGE Property Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
