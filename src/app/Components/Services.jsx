'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Container from './Container';

const servicesData = [
  {
    title: '3D & Motion Graphics',
    description: 'High-impact 3D product visualizer, fluid motion graphics, and immersive spatial animations that elevate brand identity.',
    tags: ['Cinema 4D', 'Blender', 'After Effects'],
    gradient: 'from-violet-500/20 to-purple-500/5',
    accentColor: 'text-violet-400',
    borderColor: 'group-hover:border-violet-500/50',
  },
  {
    title: 'UI Motion & Micro-Interactions',
    description: 'Transforming static interfaces into dynamic experiences with smooth web/app transitions and Lottie micro-animations.',
    tags: ['Lottie / WebM', 'Framer Motion', 'Prototyping'],
    gradient: 'from-cyan-500/20 to-blue-500/5',
    accentColor: 'text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/50',
  },
  {
    title: 'Commercials & Title Sequences',
    description: 'Cinematic title design, visual effects (VFX) compositing, and high-energy promotional videos tailored for agencies.',
    tags: ['VFX Compositing', 'Cinematic Intro', 'Premiere Pro'],
    gradient: 'from-fuchsia-500/20 to-pink-500/5',
    accentColor: 'text-fuchsia-400',
    borderColor: 'group-hover:border-fuchsia-500/50',
  },
];

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // প্রতিটি কার্ড ০.২ সেকেন্ড পর পর স্ট্যাগার হয়ে আসবে
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.92
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // Custom Smooth Cubic-Bezier Curve
    }
  },
};

// 3D Tilt Card Component
const ServiceCard = ({ service }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="service-card group relative rounded-3xl p-[1px] bg-slate-800/80 transition-all duration-500"
    >
      <div className={`bg-[#12131c]/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col justify-between h-full min-h-[360px] border border-slate-800/80 ${service.borderColor} transition-colors duration-500 relative overflow-hidden shadow-2xl`}>
        
        {/* Glow Light */}
        <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />

        <div style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center justify-between mb-8">
            <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900 border border-slate-800 ${service.accentColor}`}>
              Service
            </span>

          </div>

          <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="font-sans text-slate-400 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        <div style={{ transform: 'translateZ(10px)' }} className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium text-slate-300 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg group-hover:border-slate-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#0d0e12] relative overflow-hidden text-white">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        {/* Section Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-20 gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
            Capabilities
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
            Elevating Brands with <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Motion Magic</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl text-base sm:text-lg">
            High-end motion design services crafted to make digital products and brands stand out.
          </p>
        </motion.div>

        {/* Animated Stagger Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;