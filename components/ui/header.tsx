import Link from "next/link";
import { useState, useEffect } from 'react';
import Dropdown from "@/components/dropdown";

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
        {/* Top bar with contact info */}
        <div className="flex h-16 items-center justify-end border-b border-gray-800 md:h-20">
          <Link href="/contact" className="text-md text-blue-400 transition-colors duration-200 hover:text-blue-300">
            Via Email
          </Link>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Site branding - simplified and cleaner */}
          <div className="flex items-center">
            <Link href="/" className="block" aria-label="The Steel Law Firm">
              <h1 className="text-2xl font-bold text-white/90 md:text-3xl">
                THE STEEL LAW FIRM, P.C.
              </h1>
            </Link>
          </div>

          {/* Primary navigation */}
          <nav>
            <ul className="flex space-x-8 text-sm font-medium uppercase tracking-wider text-white">
              <NavLink href="/" label="HOME" />
              <NavLink href="/about-us" label="ABOUT US" />
              <NavLink href="/cases" label="REPRESENTATIVE CASES" />
              <NavLink href="/media" label="MEDIA" />
              <NavLink href="/contact" label="CONTACT US" />
            </ul>
          </nav>
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
