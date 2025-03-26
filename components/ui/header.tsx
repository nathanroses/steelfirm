"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import MobileMenu from "./mobile-menu";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className="fixed z-30 w-full bg-gray-900/95 shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-6">
          {/* Site branding - No logo, just text */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="The Steel Law Firm">
              <h1 className="text-xl font-bold text-white tracking-wider md:text-2xl font-serif">
                THE STEEL LAW FIRM, P.C.
              </h1>
            </Link>
          </div>

          {/* Primary navigation - hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10 text-sm font-medium uppercase tracking-widest text-white font-serif">
              <NavLink href="/" label="HOME" />
              <NavLink href="/about" label="ABOUT US" />
              <NavLink href="/practice-areas" label="PRACTICE AREAS" />
              <NavLink href="/attorneys" label="OUR ATTORNEYS" />
              <NavLink href="/cases" label="CASES" />
              <NavLink href="/contact" label="CONTACT" />
            </ul>
          </nav>
          
          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

// TypeScript-friendly nav link component
function NavLink({ href, label }: NavLinkProps) {
  return (
    <li>
      <Link 
        href={href} 
        className="relative px-1 py-2 transition-colors duration-200 hover:text-blue-300"
      >
        {label}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 hover:w-full"></span>
      </Link>
    </li>
  );
}
