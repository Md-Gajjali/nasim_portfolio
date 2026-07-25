'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

const projects = [
  {
    id: '01',
    title: '3D Spatial Visualizer',
    category: '3D Animation',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-in-action-43093-large.mp4',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Cinema 4D', 'Octane'],
  },
  {
    id: '02',
    title: 'Fintech Micro-Interactions',
    category: 'UI Motion',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41539-large.mp4',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Framer', 'Lottie'],
  },
  {
    id: '03',
    title: 'Hyperdrive VFX Promo',
    category: 'Commercial',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-in-motion-42653-large.mp4',
    poster: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    tags: ['After Effects', 'VFX'],
  },
  {
    id: '04',
    title: 'Abstract Spatial Motion',
    category: 'Motion Art',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-neon-lights-42861-large.mp4',
    poster: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    tags: ['Blender', 'Compositing'],
  },
];

// Ultra-Smooth Cubic-Bezier Curve
const ultraSmoothEase = [0.16, 1, 0.3, 1];

// Framer Motion Variants
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

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: ultraSmoothEase,
    },
  },
};

const SelectedWorks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="works" className="py-28 bg-[#0d0e12] text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        {/* Centered Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.0, ease: ultraSmoothEase }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
            Featured Projects
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Client Works</span>
          </h2>

          <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed">
            A showcase of high-octane 3D graphics, brand animations, and interactive motion designs crafted for global clients and agencies.
          </p>
        </motion.div>

        {/* Animated Stagger Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000"
        >
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative bg-[#12131c] rounded-3xl border border-slate-800/80 hover:border-violet-500/40 transition-colors duration-500 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                {/* Video Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <video
                    src={project.videoUrl}
                    poster={project.poster}
                    muted
                    loop
                    playsInline
                    ref={(el) => {
                      if (el) {
                        if (isHovered) {
                          el.play().catch(() => {});
                        } else {
                          el.pause();
                          el.currentTime = 0;
                        }
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  {/* Category Badge Only */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-[#0d0e12]/80 backdrop-blur-md border border-slate-800 text-cyan-400 px-3.5 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Info Footer */}
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className="text-violet-400 text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                    >
                      ↗
                    </motion.span>
                  </div>

                  {/* Software Tags */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default SelectedWorks;