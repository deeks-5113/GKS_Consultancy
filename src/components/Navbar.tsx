import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';
import { navLinks, contactDetails } from '../data/gksContent';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['about', 'programmes', 'consulting', 'methodology', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="GKS Consultancy Home"
            >
              <div className="relative overflow-hidden rounded-lg bg-white p-1">
                <img
                  src="/assets/gks-logo.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('gks-logo.jpg')) {
                      target.src = '/assets/gks-logo.jpg';
                    }
                  }}
                  alt="GKS Consultancy Logo"
                  className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden xl:flex flex-col border-l border-slate-200 pl-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                  Est. 1998
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Behavioral &amp; L&amp;D Consulting
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-orange-600 bg-orange-50/80'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-orange-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${contactDetails.phones[0].replace(/\s+/g, '')}`}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-600 px-2.5 py-1.5 transition-colors"
                title="Call GKS Office"
              >
                <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
                <span>{contactDetails.phones[0]}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#c2410c] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-orange-200" />
                <span>Partner With Us</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
              >
                Partner
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <img
                  src="/assets/gks-logo.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('gks-logo.jpg')) {
                      target.src = '/assets/gks-logo.jpg';
                    }
                  }}
                  alt="GKS Consultancy"
                  className="h-9 w-auto object-contain mix-blend-multiply"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Navigation
                </span>
              </div>

              <nav className="flex flex-col space-y-1 mt-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <div className="text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">GKS Consultancy HQ</p>
                <p>Visakhapatnam, Andhra Pradesh</p>
                <p className="text-orange-600 font-medium">{contactDetails.phones[0]}</p>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm text-sm"
              >
                <span>Request Training Proposal</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
