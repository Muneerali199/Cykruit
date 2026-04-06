import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-8 overflow-hidden border-t border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.07] mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
          alt="Footer Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <Link href="/" className="text-4xl font-display font-bold tracking-tighter text-white block">
              CYKRUIT<span className="text-accent">.</span>
            </Link>
            <p className="text-muted text-sm max-w-xs">
              Find Your Next Security Consultant | Job. Explore top cybersecurity opportunities tailored to your skills.
            </p>
            <div className="space-y-3 pt-4">
              <a href="mailto:support@cykruit.com" className="flex items-center gap-3 text-sm text-text hover:text-accent transition-colors">
                <Mail size={16} className="text-accent" />
                support@cykruit.com
              </a>
              <a href="tel:+918788089916" className="flex items-center gap-3 text-sm text-text hover:text-accent transition-colors">
                <Phone size={16} className="text-accent" />
                +91 87880 89916
              </a>
              <div className="flex items-start gap-3 text-sm text-text">
                <MapPin size={16} className="text-accent shrink-0 mt-1" />
                <span>A-Wing 207, The Atrium,<br/>Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h4 className="font-mono text-accent mb-6 uppercase tracking-wider text-sm">Job Seekers</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Create Profile</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Career Resources</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Salary Guide</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="font-mono text-accent mb-6 uppercase tracking-wider text-sm">Employers</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Search Talent</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Hiring Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-accent mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Become a Trainer</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-text/70 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Cykruit. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
