'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Container from './Container';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: ultraSmoothEase,
    },
  },
};

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  });

  const heroScale = useTransform(smoothProgress, [0, 0.7], [1, 0.85]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, 40]);
  const glowLineWidth = useTransform(smoothProgress, [0, 0.4], ['20%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center justify-center bg-[#07080b] text-white overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-16 min-h-[85vh] sm:min-h-screen"
    >
      {/* Background Video */}
      <motion.div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden transform-gpu">
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-in-motion-42653-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-[#07080b]" />
      </motion.div>

      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[250px] sm:h-[450px] bg-violet-600/15 blur-[100px] sm:blur-[200px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto gap-3.5 sm:gap-6 transform-gpu"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-[#11131c]/90 backdrop-blur-md border border-slate-800/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-300 uppercase tracking-widest">
                Available for Freelance
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.0] uppercase"
          >
            CREATING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              MOTION ART
            </span>
          </motion.h1>

          {/* Animated Glow Line */}
          <motion.div
            style={{ width: glowLineWidth }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-slate-400 text-xs sm:text-base max-w-lg font-light leading-relaxed px-2 sm:px-0"
          >
            I’m Nasim — Motion Designer crafting high-octane 3D graphics, UI micro-interactions, and visual direction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-3 mt-1 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl shadow-lg shadow-violet-600/20 transition-all duration-300 active:scale-95"
            >
              Featured Works
              <span className="text-xs sm:text-sm">↘</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 bg-[#12141d] hover:bg-slate-800 border border-slate-800 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl transition-all duration-300 hover:text-white"
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