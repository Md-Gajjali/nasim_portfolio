import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

// ১. হেডিং ফন্ট
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

// ২. বডি ও নেভবার ফন্ট
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-[#0d0e12] text-white antialiased">
        {children}
      </body>
    </html>
  );
}