'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const clientsData = [
  {
    name: 'Pleced AI',
    role: '3D Motion Partner',
    logo: (
      <div className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>PLECED <span className="text-cyan-400">AI</span></span>
      </div>
    ),
  },
  {
    name: 'GrayGrids',
    role: 'UI Motion',
    logo: (
      <div className="flex items-center gap-2.5 font-heading text-xl font-extrabold tracking-wider text-slate-300 group-hover:text-white transition-colors">
        <svg className="w-7 h-7 text-slate-400 group-hover:text-violet-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
        <span>GRAYGRIDS</span>
      </div>
    ),
  },
  {
    name: 'UIdeck',
    role: 'Frontend Partner',
    logo: (
      <div className="flex items-center gap-2 font-heading text-2xl font-black text-slate-300 group-hover:text-white transition-colors">
        <svg className="w-7 h-7 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.5L20.5 19h-17L12 5.5z"/>
        </svg>
        <span>UI<span className="font-light text-violet-400">deck</span></span>
      </div>
    ),
  },
  {
    name: 'Ayro UI',
    role: 'Design System',
    logo: (
      <div className="flex items-center gap-2.5 font-heading text-xl font-extrabold text-slate-300 group-hover:text-white transition-colors">
        <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
        <span>Ayro <span className="text-cyan-400">UI</span></span>
      </div>
    ),
  },
  {
    name: 'Lineicons',
    role: 'Asset Partner',
    logo: (
      <div className="flex items-center gap-2.5 font-heading text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
        <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.356-8-5.096 0-5.096 8 0 8 5.223 0 7.261-8 12.356-8z"/>
        </svg>
        <span>Lineicons</span>
      </div>
    ),
  },
];

// Loop smooth korar jonno list duplicate kora
const duplicatedClients = [...clientsData, ...clientsData, ...clientsData, ...clientsData];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-[#0d0e12] text-white relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[180px] rounded-full pointer-events-none" />

      <Container className="mb-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white bg-blue-600 px-5 py-2 rounded-lg shadow-lg shadow-blue-600/20">
            Our Partners
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Our Awesome <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Clients</span>
          </h2>

          <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed">
            Trusted by global tech leaders, AI startups, and creative agencies to deliver high-octane motion graphics and 3D experiences.
          </p>
        </div>
      </Container>

      {/* Infinite Left to Right Continuous Marquee */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 30, // স্মুথ এবং স্লটার গতির জন্য
            repeat: Infinity,
          }}
          className="flex gap-16 sm:gap-24 shrink-0 items-center py-4"
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div>{client.logo}</div>
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 uppercase tracking-widest mt-2 transition-colors">
                {client.role}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;