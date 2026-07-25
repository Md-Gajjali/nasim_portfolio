'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const ultraSmoothEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: ultraSmoothEase,
    },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-[#08090d] text-white overflow-hidden pt-28 pb-16">
      
      {/* Background Cinematic Reel Ambient */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-in-motion-42653-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d] via-[#08090d]/80 to-[#08090d]" />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto gap-8 transform-gpu"
        >
          {/* Top Floating Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 bg-[#12141d]/90 backdrop-blur-2xl border border-slate-800/80 px-4 py-2 rounded-full shadow-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                Available for Freelance & Remote Direction
              </span>
            </div>
          </motion.div>

          {/* Main Title / Big Editorial Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase"
          >
            Digital Motion <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              & 3D Visual Art
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-slate-400 text-base sm:text-xl max-w-2xl font-light leading-relaxed"
          >
            Crafting high-impact 3D visualizers, UI micro-interactions, and cinematic brand promos for tech leaders and creative agencies worldwide.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <a
              href="#works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 px-8 py-4 rounded-2xl shadow-xl shadow-violet-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Featured Works
              <span className="text-lg">↘</span>
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 bg-[#12141d] hover:bg-slate-800/80 border border-slate-800 px-8 py-4 rounded-2xl transition-all duration-300 hover:text-white"
            >
              About Me
            </a>
          </motion.div>

        

        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
