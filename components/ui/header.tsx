"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  
  // Position indicator under the active link
  const updateIndicator = (target: HTMLElement | null) => {
    if (!target || !indicatorRef.current || !navRef.current) return;
    
    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    
    indicatorRef.current.style.width = `${targetRect.width}px`;
    indicatorRef.current.style.transform = `translateX(${targetRect.left - navRect.left}px)`;
    indicatorRef.current.style.opacity = '1';
  };
  
  // Reset indicator
  const resetIndicator = () => {
    if (!indicatorRef.current) return;
    indicatorRef.current.style.opacity = '0';
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items updated to match our pages
  const navItems = [
    { name: 'HOME', href: '/', id: 'home' },
    { name: 'ABOUT', href: '/about', id: 'about' },
    { name: 'PRACTICE AREAS', href: '/practice-areas', id: 'practice-areas' },
    { name: 'OUR ATTORNEYS', href: '/attorneys', id: 'attorneys' },
    { name: 'CASES', href: '/cases', id: 'cases' },
    { name: 'CONTACT', href: '/contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-3 backdrop-blur-sm bg-gray-950/80 shadow-lg shadow-black/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Firm branding with subtle animation */}
          <Link 
            href="/" 
            className="group relative flex items-center"
            aria-label="The Steel Law Firm"
          >
            <h1 className="text-xl font-serif text-white tracking-wider">
              <span className="font-light mr-1">THE</span>
              <span className="font-semibold">STEEL</span>
              <span className="font-light text-white/80 ml-1">LAW FIRM</span>
            </h1>
            <div className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </Link>

          {/* Desktop navigation */}
          <div 
            ref={navRef} 
            className="hidden md:block relative"
          >
            <nav className="flex items-center">
              <ul className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={item.href}
                      className={`text-sm tracking-wider transition-colors duration-300 py-2 ${
                        activeItem === item.id 
                          ? 'text-white' 
                          : 'text-white/70 hover:text-white'
                      }`}
                      onMouseEnter={(e) => {
                        setActiveItem(item.id);
                        updateIndicator(e.currentTarget);
                      }}
                      onMouseLeave={() => {
                        setActiveItem('');
                        resetIndicator();
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Animated indicator */}
              <div 
                ref={indicatorRef}
                className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400/0 opacity-0 transition-all duration-300 ease-out"
              ></div>
            </nav>
          </div>

          {/* Contact button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="relative overflow-hidden group px-6 py-3 text-sm text-white border border-white/20 rounded"
            >
              <span className="relative z-10 tracking-wider font-medium">REQUEST CONSULTATION</span>
              <div className="absolute inset-0 w-full h-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:h-full transition-all duration-300 ease-out"></div>
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
      
      {/* Bottom border */}
      <div className={`absolute left-0 right-0 bottom-0 h-[1px] ${
        scrolled
          ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
          : 'bg-transparent'
      } transition-colors duration-300`}></div>
    </header>
  );
}
