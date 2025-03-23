import Link from "next/link";
import { useState, useEffect } from 'react';
import Dropdown from "@/components/dropdown";

export default function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed z-30 w-full transition-all duration-500 ${top ? 'bg-transparent' : 'bg-white/95 shadow-lg backdrop-blur-sm'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between md:h-24">

          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="group block" aria-label="The Steel Law Firm">
              <h1 className={`text-3xl font-bold transition-colors duration-300 ${top ? 'text-gray-800' : 'text-gray-700'} group-hover:text-blue-800`}>
                THE STEEL LAW FIRM, P.C.
              </h1>
              <span className="block h-[2px] w-0 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Contact information */}
          <div className="hidden md:flex md:items-center md:justify-end">
            <div className="rounded-lg border border-gray-200 bg-white/50 p-3 text-right shadow-sm backdrop-blur-sm">
              <p className="text-lg font-medium text-gray-800">(404)605-0023</p>
              <Link href="/contact" className="text-md text-blue-600 transition-colors duration-300 hover:text-blue-800">
                Via Email
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200 bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="flex justify-center space-x-8 py-3 text-sm font-medium uppercase tracking-wider">
            <li>
              <Link href="/" className="relative py-2 transition-colors duration-300 hover:text-blue-200">
                HOME
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-300 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="relative py-2 transition-colors duration-300 hover:text-blue-200">
                ABOUT US
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-300 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            
            {/* Practice Areas Dropdown */}
            <li>
              <Dropdown title="PRACTICE AREAS">
                <li>
                  <Link
                    href="/practice-areas/criminal-defense"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-800"
                  >
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas/professional-misconduct"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-800"
                  >
                    Professional Misconduct
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas/civil-litigation"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-800"
                  >
                    Civil Litigation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas/white-collar-defense"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-800"
                  >
                    White Collar Defense
                  </Link>
                </li>
              </Dropdown>
            </li>
            
            <li>
              <Link href="/cases" className="relative py-2 transition-colors duration-300 hover:text-blue-200">
                REPRESENTATIVE CASES
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-300 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/media" className="relative py-2 transition-colors duration-300 hover:text-blue-200">
                MEDIA
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-300 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative py-2 transition-colors duration-300 hover:text-blue-200">
                CONTACT US
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-300 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
