// Location: hero-home.tsx

import Image from "next/image";
import Link from "next/link";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              THE STEEL LAW FIRM, P.C.
            </h1>
            
            {/* Hero image with attorneys - modernized with shadow and better overlay */}
            <div
              className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-xl shadow-2xl"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              <div className="relative h-[450px] w-full">
                <Image
                  src="/images/attorneys.jpg"
                  alt="The Steel Law Firm Attorneys"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Improved overlay with gradient and refined typography */}
                <div className="absolute right-8 top-1/2 max-w-md -translate-y-1/2 rounded-lg bg-gradient-to-r from-gray-800/90 to-gray-900/90 p-8 text-right backdrop-blur-sm">
                  <p className="mb-2 text-2xl font-light text-white">
                    Providing our clients
                  </p>
                  <p className="mb-2 text-2xl font-light text-white">
                    with superior advocacy
                  </p>
                  <p className="text-2xl font-light text-white">
                    is our passion and our promise.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Law firm tagline - with improved typography and spacing */}
            <div className="mx-auto mt-12 max-w-full text-center">
              <p
                className="text-2xl font-bold uppercase tracking-wide text-gray-800"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                Command of the law. Experience in the courtroom. Unmatched results.
              </p>
              
              <div className="mt-8">
                <p
                  className="mb-8 text-lg leading-relaxed text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={600}
                >
                  Each case is as unique as the individual who seeks representation. 
                  Each matter presents complex, challenging and evolving issues to be addressed. 
                  Each client of The Steel Law Firm benefits from an individualized plan of action 
                  designed to completely and thoroughly investigate and assess every aspect of the 
                  case and mount an aggressive and comprehensive defense.
                </p>
                
                <p
                  className="mb-8 text-lg leading-relaxed text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={750}
                >
                  Brian and Colette use a proven approach to each client and case: they meticulously 
                  scrutinize evidence and discovery, evaluate the legal issues, utilize the resources 
                  of the best experts from across the nation, and frequently combine their efforts and 
                  skills in the joint defense of a client.
                </p>
              </div>
              
              {/* Improved buttons with better hover effects */}
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={900}
              >
                <Link
                  className="btn group mb-4 w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:mb-0 sm:w-auto"
                  href="/contact"
                >
                  <span className="relative inline-flex items-center">
                    Contact Us
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                <Link
                  className="btn w-full bg-white text-gray-800 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg sm:ml-4 sm:w-auto"
                  href="/practice-areas"
                >
                  Practice Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
