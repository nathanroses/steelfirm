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
    <header className={`fixed z-30 w-full transition duration-300 ${top ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between md:h-24">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="block" aria-label="The Steel Law Firm">
              <h1 className={`text-3xl font-bold ${top ? 'text-gray-800' : 'text-gray-700'}`}>
                THE STEEL LAW FIRM, P.C.
              </h1>
            </Link>
          </div>

          {/* Contact information */}
          <div className="hidden md:flex md:items-center md:justify-end">
            <div className="text-right">
              <p className="text-lg font-medium text-gray-800">(404)605-0023</p>
              <Link href="/contact" className="text-md text-blue-600 hover:text-blue-700">
                Via Email
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200 bg-gray-700 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="flex justify-center space-x-8 py-3 text-sm font-medium uppercase tracking-wider">
            <li>
              <Link href="/" className="hover:text-blue-200">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-200">
                ABOUT US
              </Link>
            </li>
            
            {/* Practice Areas Dropdown */}
            <li>
              <Dropdown title="PRACTICE AREAS">
                <li>
                  <Link
                    href="/practice-areas/criminal-defense"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas/professional-misconduct"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Professional Misconduct
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas/civil-litigation"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Civil Litigation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas/white-collar-defense"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    White Collar Defense
                  </Link>
                </li>
              </Dropdown>
            </li>
            
            <li>
              <Link href="/cases" className="hover:text-blue-200">
                REPRESENTATIVE CASES
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-blue-200">
                MEDIA
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
