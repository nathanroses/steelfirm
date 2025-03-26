import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column - content */}
          <div className="flex flex-col justify-center">
            {/* Established marker - elegant treatment */}
            <div className="mb-10 inline-flex items-center">
              <div className="h-px w-12 bg-blue-400 mr-4"></div>
              <span className="text-blue-400 text-sm tracking-[0.25em] font-light">ESTABLISHED 1985</span>
            </div>
            
            {/* Main headline - NOT repeating the firm name that's in the header */}
            <h1 className="mb-6 text-5xl font-serif font-bold tracking-tight text-white md:text-6xl">
              <span className="text-white">Superior</span>
              <span className="text-blue-300"> Legal</span>
              <span className="text-white"> Advocacy</span>
            </h1>
            
            {/* Elegant glass card with tagline */}
            <div className="mb-10 max-w-lg rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xl font-light text-white leading-relaxed">
                Providing our clients with exceptional representation is our passion and our promise.
              </p>
            </div>
            
            {/* Core values with refined presentation */}
            <div className="mb-10 space-y-4">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                <span className="text-blue-300 tracking-wider text-lg font-medium">COMMAND OF THE LAW</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                <span className="text-blue-300 tracking-wider text-lg font-medium">EXPERIENCE IN THE COURTROOM</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                <span className="text-blue-300 tracking-wider text-lg font-medium">UNMATCHED RESULTS</span>
              </div>
            </div>
            
            {/* Call-to-action buttons with sophisticated hover effects */}
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                <span className="relative z-10 text-base tracking-wider">Contact Us</span>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-400 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
              </Link>
              <Link
                href="/practice-areas"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
              >
                <span className="text-base tracking-wider">Practice Areas</span>
              </Link>
            </div>
          </div>
          
          {/* Right column - image with sophisticated overlay */}
          <div className="relative hidden md:block">
            <div className="relative h-[540px] w-full rounded-2xl border border-white/10 bg-gray-800/50 p-3 shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/steelmain.png"
                alt="The Steel Law Firm Attorneys"
                fill
                className="rounded-xl object-cover"
                priority
              />
              
              {/* Gradient overlay with depth */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent opacity-70"></div>
              
              {/* Glass info panel with refined typography */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-black/50 p-8 backdrop-blur-md">
                <p className="text-lg font-light leading-relaxed text-white">
                  Each case is as unique as the individual who seeks representation. 
                  We meticulously scrutinize evidence and utilize the resources of the best experts.
                </p>
                <div className="mt-6 flex justify-end">
                  <Link
                    href="/about"
                    className="group inline-flex items-center text-blue-300 transition-all duration-300 hover:text-blue-200"
                  >
                    <span>Learn More</span>
                    <svg 
                      className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements for visual interest */}
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-white/10 bg-blue-500/20 backdrop-blur-md"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border border-white/10 bg-purple-500/20 backdrop-blur-md"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center">
            <p className="mb-3 text-sm text-gray-400 font-light tracking-wide">Scroll to discover our services</p>
            <div className="h-14 w-8 rounded-full border border-white/10 p-1.5">
              <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

