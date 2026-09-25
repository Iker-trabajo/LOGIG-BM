import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-xl">L</div>
          <div className={cn("font-bold text-2xl tracking-tight", isScrolled ? "text-brand-dark-blue" : "text-white")}>
            Logigho
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium hover:text-brand-blue transition-colors',
                    isScrolled ? 'text-brand-gray' : 'text-gray-200 hover:text-white'
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className={cn(
              "px-6 py-2.5 rounded-full font-medium transition-colors text-sm shadow-lg",
              isScrolled 
                ? "bg-brand-blue text-white hover:bg-brand-dark-blue" 
                : "bg-white text-brand-blue hover:bg-brand-light-gray"
            )}
          >
            Solicitar Demo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden", isScrolled ? "text-brand-gray" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-gray text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-brand-blue text-white text-center py-3 rounded-full font-medium shadow-md"
          >
            Solicitar Demo
          </a>
        </div>
      )}
    </header>
  );
}
