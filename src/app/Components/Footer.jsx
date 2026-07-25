import React from 'react'
import Container from './Container';

const Footer = () => {
    const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Behance', url: '#' },
  { name: 'Vimeo', url: '#' },
  { name: 'X (Twitter)', url: '#' },
  { name: 'Instagram', url: '#' },
];
  return (
    <>
        <Container>
            <div className="p-7 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Social Links */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                    {socialLinks.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.url}
                        className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
                    >
                        {item.name}
                    </a>
                    ))}
                </div>

                {/* Copyright Text */}
                <p className="text-xs font-mono text-slate-500">
                    © {new Date().getFullYear()} Nasim. All rights reserved.
                </p>
            </div>
        </Container>
    </>
  )
}

export default Footer
