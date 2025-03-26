"use client";

// components/ui/header.tsx

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Dynamic scroll detection with enhanced performance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
      
      // Calculate current section for indicator (simplified here)
      const sections = ['home', 'about', 'practice', 'attorneys', 'cases', 'contact'];
      const current = sections[Math.min(Math.floor(offset / 500), sections.length - 1)];
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 backdrop-blur-md bg-gray-950/85' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Firm branding with subtle reveal animation */}
          <Link href="/" className="group flex items-center">
            <h1 className="text-xl text-white font-serif tracking-wider">
              <span className="font-light">THE</span>
              <span className="font-semibold ml-2">STEEL</span>
              <span className="text-white/90 ml-2 font-light">LAW FIRM</span>
            </h1>
            <div className="relative h-px w-0 ml-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400/0 group-hover:w-16 transition-all duration-300 ease-in-out"></div>
          </Link>

          {/* Modern navigation with active indicators */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-12">
              {[
                { name: 'HOME', href: '/', id: 'home' },
                { name: 'ABOUT', href: '/about', id: 'about' },
                { name: 'PRACTICE', href: '/practice-areas', id: 'practice' },
                { name: 'ATTORNEYS', href: '/attorneys', id: 'attorneys' },
                { name: 'CASES', href: '/cases', id: 'cases' },
                { name: 'CONTACT', href: '/contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id} className="relative">
                  <Link 
                    href={item.href}
                    className={`text-sm tracking-wider transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-white'
                    }`}
                    onMouseEnter={() => setActiveSection(item.id)}
                    onMouseLeave={() => handleScroll()} // Reset to scroll-based section
                  >
                    {item.name}
                  </Link>
                  
                  {/* Elegant active indicator */}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-blue-400/0"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: '100%' }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact button with modern effect */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="relative overflow-hidden group px-5 py-2 text-sm text-white border border-white/10 rounded backdrop-blur-sm"
            >
              <span className="relative z-10 tracking-wider">CONSULTATION</span>
              <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gradient-to-br from-blue-600 to-blue-500 transition-transform duration-300 ease-in-out"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex items-center">
            <span className="sr-only">Open menu</span>
            <div className="w-8 flex flex-col items-end gap-1.5 group">
              <span className="h-px w-8 bg-white group-hover:w-6 transition-all"></span>
              <span className="h-px w-6 bg-white/80 group-hover:w-8 transition-all"></span>
              <span className="h-px w-4 bg-white/60 group-hover:w-6 transition-all"></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Subtle shadow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </header>
  );
}
