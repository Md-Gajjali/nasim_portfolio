'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const categories = ['All', 'Workflow', 'Technical', 'General'];

const faqs = [
  {
    category: 'General',
    question: 'What services do you offer as a Motion Designer?',
    answer:
      'I specialize in 3D spatial motion graphics, UI/UX micro-interactions (Lottie/Framer), commercial VFX title sequences, and visual identity animations for tech startups and agencies.',
  },
  {
    category: 'Workflow',
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary based on complexity. UI micro-interactions usually take 3–5 business days, while full 3D product visualizers or promo videos typically take 2–3 weeks.',
  },
  {
    category: 'Technical',
    question: 'Which software tools do you use in your workflow?',
    answer:
      'My core stack includes Cinema 4D, Octane Render, After Effects, Blender, Framer Motion, and Lottie for Web & App Motion.',
  },
  {
    category: 'Workflow',
    question: 'How do we get started on a project together?',
    answer:
      'You can send a brief description of your project via the contact section. We will then schedule a quick call to align on goals, deliverables, and timeline.',
  },
  {
    category: 'General',
    question: 'Are you available for freelance contracts?',
    answer:
      'Yes! I am currently available for select freelance projects, agency partnerships, and remote motion direction roles.',
  },
];

const ultraSmoothEase = [0.16, 1, 0.3, 1];

const Faq = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs =
    activeTab === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-violet-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Sticky Header & Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: ultraSmoothEase }}
            className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full w-fit">
              FAQ & Inquiries
            </span>

            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
              ANY <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                QUESTIONS?
              </span>
            </h2>

            <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              Filter by topics to quickly find answers regarding design workflow, stack, or collaboration models.
            </p>

            {/* Category Filter Tabs with Smooth Layout Animation */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setOpenIndex(0);
                    }}
                    className={`relative text-xs font-mono px-4 py-2.5 rounded-xl transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFaqTab"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-lg shadow-violet-600/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Clean Accordion Cards (No Numbers) */}
          <div className="lg:col-span-7 flex flex-col gap-4 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: ultraSmoothEase }}
                className="flex flex-col gap-4"
              >
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className={`relative rounded-2xl transition-all duration-500 overflow-hidden ${
                        isOpen
                          ? 'bg-[#12131c] border border-violet-500/40 shadow-2xl shadow-violet-500/10'
                          : 'bg-[#0e0f16]/90 border border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {/* Clickable Header */}
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-6 focus:outline-none group"
                      >
                        <h3 className={`font-heading text-lg sm:text-xl font-bold transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {faq.question}
                        </h3>

                        {/* Custom Toggle Arrow */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isOpen
                            ? 'bg-violet-600 border-violet-500 text-white rotate-180'
                            : 'bg-slate-900 border-slate-800/80 text-slate-400 group-hover:border-slate-700 group-hover:text-white'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: ultraSmoothEase }}
                          >
                            <div className="px-6 sm:px-7 pb-7 pt-1 font-sans text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800/40">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Faq;