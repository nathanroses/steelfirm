import Link from "next/link";
import { useState, useEffect } from 'react';
import Dropdown from "@/components/dropdown";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed z-50 w-full transition-all duration-500 ${
      top ? 'py-3' : 'py-2 bg-black/30 backdrop-blur-xl shadow-lg'
    }`}>
      {/* Animated gradient border */}
      <div className={`absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent ${top ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo area with glow effect */}
          <div className="relative flex items-center">
            <Link href="/" className="group relative z-10 block" aria-label="The Steel Law Firm">
              <h1 className={`text-2xl font-bold text-white md:text-3xl`}>
                <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-white">
                  THE STEEL LAW FIRM, P.C.
                </span>
              </h1>
            </Link>
            {/* Subtle glow behind logo */}
            <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-blue-500/30 blur-xl"></div>
          </div>

          {/* Contact info with glass effect */}
          <div className="hidden items-center space-x-4 md:flex">
            <div className="group overflow-hidden rounded-xl border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10">
              <p className="text-md font-medium tracking-wide text-white">(404)605-0023</p>
              <Link href="/contact" className="text-sm text-blue-300 transition-transform duration-300 hover:text-blue-200 group-hover:translate-x-1">
                Via Email →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modern 3D navigation bar */}
      <nav className="mt-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Navigation links with hover effects */}
          <ul className="flex justify-center space-x-1 py-4 text-sm font-medium lg:space-x-2">
            <NavLink href="/" label="HOME" />
            <NavLink href="/about-us" label="ABOUT US" />
            
            {/* Practice Areas Dropdown with glass effect */}
            <li className="group relative">
              <div className="flex cursor-pointer items-center space-x-1 rounded-lg px-4 py-2 text-white transition-all duration-300 hover:bg-white/5">
                <span>PRACTICE AREAS</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Glass dropdown menu */}
              <div className="absolute left-0 z-50 mt-1 hidden min-w-[240px] transform rounded-xl border border-white/10 bg-gray-900/80 p-2 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:block">
                <DropdownLink href="/practice-areas/criminal-defense" label="Criminal Defense" />
                <DropdownLink href="/practice-areas/professional-misconduct" label="Professional Misconduct" />
                <DropdownLink href="/practice-areas/civil-litigation" label="Civil Litigation" />
                <DropdownLink href="/practice-areas/white-collar-defense" label="White Collar Defense" />
              </div>
            </li>
            
            <NavLink href="/cases" label="REPRESENTATIVE CASES" />
            <NavLink href="/media" label="MEDIA" />
            <NavLink href="/contact" label="CONTACT US" />
          </ul>
          
          {/* Animated highlight line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>
        </div>
      </nav>
    </header>
  );
}

// Modern navigation link with hover effects
function NavLink({ href, label }) {
  return (
    <li>
      <Link 
        href={href} 
        className="group relative block rounded-lg px-4 py-2 text-white transition-all duration-300 hover:bg-white/5"
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-blue-400 transition-all duration-300 group-hover:w-4/5"></span>
      </Link>
    </li>
  );
}

// Dropdown menu item with hover effect
function DropdownLink({ href, label }) {
  return (
    <Link 
      href={href}
      className="group block rounded-lg px-3 py-2 text-sm text-gray-200 transition-all duration-300 hover:bg-blue-500/10 hover:text-white"
    >
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
}
