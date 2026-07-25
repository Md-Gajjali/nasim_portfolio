'use client';

import { motion } from 'framer-motion';
import Container from './Container';
import Image from 'next/image';
import nasim from '../Images/Nasim.jpg';

// Ultra-Smooth Cubic-Bezier Curve (Apple/Luxury style)
const ultraSmoothEase = [0.16, 1, 0.3, 1];

// Stagger Container
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

// Smooth Vertical Reveal for Text & Items
const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: ultraSmoothEase,
    },
  },
};

// Smooth Scale & Fluid Reveal for Image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: ultraSmoothEase,
    },
  },
};

// Natural Spring Bounce for Status Badge
const badgeVariants = {
  hidden: { opacity: 0, scale: 0, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
      mass: 0.8,
      delay: 0.4,
    },
  },
};

const AboutMe = () => {
  const stats = [
    { number: '04+', label: 'Years Experience' },
    { number: '80+', label: 'Projects Completed' },
    { number: '15+', label: 'Global Clients' },
  ];

  const tools = ['After Effects', 'Cinema 4D', 'Blender', 'Framer', 'Lottie'];

  return (
    <section id="about" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Side: Profile Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px] lg:max-w-none">
              
              <motion.div
                variants={imageVariants}
                className="relative z-10 rounded-3xl overflow-hidden p-[1px] bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-violet-500/30"
              >
                <div className="bg-[#12131a] rounded-[23px] overflow-hidden aspect-[3/4] relative">
                  <Image
                    src={nasim}
                    alt="Motion Designer"
                    priority
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-105 hover:scale-100"
                  />
                </div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                variants={badgeVariants}
                className="absolute -bottom-6 -right-4 z-20 bg-[#161822]/90 backdrop-blur-xl border border-slate-700/50 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">
                  Available for freelance
                </span>
              </motion.div>

            </div>
          </div>

          {/* Right Side: Bio & Info */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Header */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
                About Me
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">
                Bringing ideas to life through <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">visual motion</span>.
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p variants={itemVariants} className="font-sans text-slate-400 text-lg leading-relaxed">
              I’m a passionate Motion Designer dedicated to crafting immersive visual stories and interactive animations. By combining 3D art with smooth micro-interactions, I help brands leave a lasting impression.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800/80">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    {stat.number}
                  </span>
                  <span className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                Primary Stack & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800/80 px-4 py-2 rounded-xl hover:border-violet-500/50 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>

        </motion.div>
      </Container>
    </section>
  );
};

export default AboutMe;