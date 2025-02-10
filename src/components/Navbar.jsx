import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Mobile menü açıldığında scroll'u engelleyelim
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", text: "STARTSEITE", label: "Zur Startseite" },
    { to: "/leistungen", text: "LEISTUNGEN", label: "Zu unseren Leistungen" },
    { to: "/uber-uns", text: "ÜBER UNS", label: "Über uns" },
  ];

  return (
    <header className="relative">
      <nav
        className="fixed w-full z-50 transition-all duration-300"
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="text-white font-bold"
              aria-label="Zur Startseite"
            >
              <img
                src="/logo/logo.png"
                alt="Unternehmenslogo"
                className="h-28 w-auto object-contain"
                width="112"
                height="112"
                loading="eager"
                fetchpriority="high"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="tracking-wider text-white font-medium hover:text-[#02C5DF] transition-colors"
                  aria-label={link.label}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/kontakt"
              className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-white rounded-full tracking-wider font-medium hover:scale-105 transition-all duration-300"
              role="button"
              aria-label="Kontakt aufnehmen"
            >
              KONTAKT
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden mt-4 bg-black/90 rounded-lg p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="block text-white hover:text-[#02C5DF] py-2 transition-colors"
                  aria-label={link.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="block text-center mt-4 px-6 py-2 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300"
                role="button"
                aria-label="Kontakt aufnehmen"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                KONTAKT
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
