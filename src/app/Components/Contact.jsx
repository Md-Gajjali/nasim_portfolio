'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const ultraSmoothEase = [0.16, 1, 0.3, 1];



const Contact = () => {
  return (
    <footer id="contact" className="py-28 bg-[#08090d] text-white relative overflow-hidden border-t border-slate-800/60">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Big CTA Headline & Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: ultraSmoothEase }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full w-fit">
              Get In Touch
            </span>

            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
              LET’S CREATE <br />
              SOMETHING <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                EXTRAORDINARY.
              </span>
            </h2>

            <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed font-light max-w-md">
              Have a project in mind, a collaboration proposal, or just want to say hi? Feel free to send a message.
            </p>

            {/* Direct Email Display */}
            <div className="flex flex-col gap-2 pt-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                Direct Contact
              </span>
              <a
                href="mailto:contact@nasim.design"
                className="font-heading text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 w-fit"
              >
                contact@nasim.design ↗
              </a>
            </div>
          </motion.div>

          {/* Right Side: Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: ultraSmoothEase }}
            className="lg:col-span-6 bg-[#0e0f17]/80 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative z-10"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#141522] border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#141522] border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project, timeline, or goals..."
                  className="w-full bg-[#141522] border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-sm py-4 rounded-xl shadow-lg shadow-violet-600/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message ↗
              </button>
            </form>
          </motion.div>

        </div>

        
      </Container>
    </footer>
  );
};

export default Contact;