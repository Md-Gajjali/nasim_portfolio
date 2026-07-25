'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // ১. স্ক্রল করা শুরু হলে নেভবার হাইড করে দাও
      setIsVisible(false);

      // ব্যাকগ্রাউন্ড গ্লাস ইফেক্টের জন্য স্ক্রল পজিশন ট্র্যাক
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ২. আগের টাইমার ক্লিয়ার করো
      clearTimeout(scrollTimeout);

      // ৩. স্ক্রল থামার ২৫০ মিলিসেকেন্ড পর নেভবার আবার দেখাও
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // মোবাইল মেনু ওপেন থাকলে পেজ স্ক্রল বন্ধ রাখার লজিক
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

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

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Partners', href: '#clients' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible || isMobileMenuOpen ? 0 : -100,
          opacity: isVisible || isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 pointer-events-none"
      >
        <Container className="flex items-center justify-between relative pointer-events-auto">
          
          {/* Mobile Logo / Brand Name (Left Side) */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="md:hidden flex items-center gap-2 text-sm font-extrabold tracking-wider text-white bg-[#0f1017]/90 border border-slate-800 px-4 py-2 rounded-full backdrop-blur-xl shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            NASIM
          </a>

          {/* Desktop Navigation Dock (Centered) */}
          <nav
            className={`hidden md:flex items-center gap-7 px-8 py-3.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-2xl mx-auto ${
              scrolled
                ? 'bg-[#0a0b0e]/90 border-slate-700/80 shadow-violet-500/10'
                : 'bg-[#10121a]/70 border-slate-800/80'
            }`}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 group cursor-pointer"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Clear Hamburger Button (Right Side) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-slate-200 bg-[#0f1017]/90 border border-slate-800 px-4 py-2 rounded-full backdrop-blur-xl shadow-xl active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
            <div className="w-4 h-3 flex flex-col justify-between items-center">
              <span
                className={`w-full h-[1.5px] bg-cyan-400 rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-cyan-400 rounded-full transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-cyan-400 rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                }`}
              />
            </div>
          </button>

        </Container>
      </motion.header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07080b]/98 backdrop-blur-3xl md:hidden flex flex-col justify-between p-8 pt-28 border-b border-slate-800"
          >
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-6 items-start my-auto relative z-10">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em] border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 rounded-full mb-2">
                Navigation
              </span>

              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-heading text-3xl font-extrabold text-slate-300 hover:text-white tracking-tight transition-colors flex items-center justify-between w-full"
                >
                  <span>{link.name}</span>
                  <span className="text-violet-400 text-xl">↗</span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex justify-between items-center relative z-10 text-xs font-mono">
              <span className="text-slate-500">NASIM / MOTION ARTIST</span>
              <span className="text-cyan-400">2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;