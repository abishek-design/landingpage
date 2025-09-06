import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close menu on link click
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Add a top offset to account for the fixed header height
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
      }
    }
  };

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={handleScroll} className="flex items-center space-x-2">
          {/* Replacing logo image with text */}
          <span className="text-2xl font-bold text-white">TechWork By Abi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleScroll}
              className="text-dark-text hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-light-text focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-content-dark transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleScroll}
                className="w-full text-center py-2 text-lg text-light-text hover:text-primary hover:bg-background-dark transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
    </header>
  );
};

export default Header;