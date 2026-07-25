'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // স্ক্রল করলে ব্যাকগ্রাউন্ড গ্লাস ব্লার যুক্ত করার লজিক
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // সব সেকশনের সাথে লিঙ্কড Nav Items
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Partners', href: '#clients' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-0 right-0 z-50 pointer-events-none"
    >
      <Container className="flex items-center justify-between md:justify-center relative pointer-events-auto">
        
        {/* Desktop Navigation (Top Centered Dock Style) */}
        <nav
          className={`hidden md:flex items-center gap-7 px-7 py-3 rounded-full backdrop-blur-md border transition-all duration-300 shadow-xl ${
            scrolled
              ? 'bg-[#0d0e12]/85 border-slate-700/80 shadow-violet-500/10'
              : 'bg-slate-900/60 border-slate-800/80'
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 group"
            >
              {link.name}
              {/* Hover Effect Line */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile View Toggle Button (Top Right) */}
        <div className="flex md:hidden justify-end w-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-white focus:outline-none p-3 bg-slate-900/90 border border-slate-800/80 rounded-full shadow-lg backdrop-blur-md"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-6 right-6 bg-[#0d0e12]/95 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-violet-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;