'use client';

import { motion } from 'framer-motion';
import Container from './Container';

// Apple / High-End Design Style Smooth Transition
const ultraSmoothEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: ultraSmoothEase,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center bg-[#07080b] text-white overflow-hidden pt-24 pb-12 sm:pb-16"
    >
      {/* Background Video (Zero Scroll Calculation Overhead) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-in-motion-42653-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-[#07080b]" />
      </div>

      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[300px] sm:h-[450px] bg-violet-600/15 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto gap-5 sm:gap-7"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#11131c]/90 backdrop-blur-md border border-slate-800/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-300 uppercase tracking-widest">
                Available for Freelance & Motion Direction
              </span>
            </div>
          </motion.div>

          {/* Giant Editorial Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[1.0] sm:leading-[0.95] uppercase"
          >
            CREATING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              MOTION ART
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-slate-400 text-xs sm:text-base lg:text-lg max-w-xl font-light leading-relaxed px-4 sm:px-0"
          >
            I’m Nasim — Motion Designer crafting high-octane 3D graphics, UI micro-interactions, and visual direction for global tech brands.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-3 mt-1 sm:mt-2 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg shadow-violet-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Featured Works
              <span className="text-xs sm:text-sm">↘</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 bg-[#12141d] hover:bg-slate-800/80 border border-slate-800/90 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 hover:text-white"
            >
              Get In Touch
            </a>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;