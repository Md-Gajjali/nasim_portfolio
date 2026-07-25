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
      staggerChildren: 0.1,
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
  const sectionRef = useRef(null);

  // 1. Raw Scroll Progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // 2. Physics-Based Smooth Spring (ঝাঁকুনি পুরোপুরি ফিক্স করবে)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Smooth Transforms Driven by Spring
  const textScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 1], [0, 120]);
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#07080b] text-white overflow-hidden pt-24 pb-12"
    >
      {/* Background Video with GPU Acceleration */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 opacity-25 pointer-events-none overflow-hidden transform-gpu will-change-transform"
      >
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-in-motion-42653-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-[#07080b]" />
      </motion.div>

      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/15 blur-[200px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          style={{ scale: textScale, opacity: textOpacity, y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto gap-8 transform-gpu will-change-transform"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 bg-[#11131c]/90 backdrop-blur-md border border-slate-800/80 px-4 py-2 rounded-full shadow-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                Available for Freelance & Motion Direction
              </span>
            </div>
          </motion.div>

          {/* Giant Editorial Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.95] uppercase"
          >
            CREATING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              MOTION ART
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-slate-400 text-base sm:text-xl max-w-2xl font-light leading-relaxed"
          >
            I’m Nasim — Motion Designer crafting high-octane 3D graphics, UI micro-interactions, and visual direction for global tech brands.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <a
              href="#works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 px-8 py-4 rounded-2xl shadow-xl shadow-violet-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Featured Works
              <span className="text-lg">↘</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 bg-[#12141d] hover:bg-slate-800 border border-slate-800 px-8 py-4 rounded-2xl transition-all duration-300 hover:text-white"
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