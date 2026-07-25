'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const reviews = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Creative Director at Nexus Studio',
    review:
      'Nasim is an incredible motion designer! He delivered our 3D product visualizer way ahead of schedule. The attention to detail and fluid animations were world-class.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Product Lead at Apex Fintech',
    review:
      'The micro-interactions and Lottie animations created for our app completely elevated the user experience. Highly recommended for complex UI motion projects!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Founder of Veloce Agency',
    review:
      'Working with Nasim was smooth and seamless. His timing, easing curves, and artistic direction gave our commercial video a true Hollywood feel.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

const ultraSmoothEase = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: ultraSmoothEase,
    },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-[#0d0e12] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-violet-600/10 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: ultraSmoothEase }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 gap-4 transform-gpu"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
            Testimonials
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Clients Say</span>
          </h2>

          <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed">
            Feedback and reviews from creative directors, founders, and brand leads I’ve collaborated with.
          </p>
        </motion.div>

        {/* Reviews Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative bg-[#12131c] rounded-3xl border border-slate-800/80 hover:border-violet-500/40 p-8 transition-colors duration-300 shadow-2xl flex flex-col justify-between transform-gpu will-change-transform"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;