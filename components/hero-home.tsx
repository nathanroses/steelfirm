import Image from "next/image";
import Link from "next/link";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      </div>

      <PageIllustration />
      
      <div className="relative mx-auto max-w-6xl px-4 pt-32 sm:px-6 md:pt-40">
        {/* Modern asymmetric hero layout */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - content */}
          <div className="flex flex-col justify-center">
            {/* Brand marker */}
            <div className="flex items-center mb-4">
             <div className="h-px w-12 bg-blue-500 mr-4"></div>
              <span className="text-sm font-light tracking-widest text-blue-400">ESTABLISHED 1985</span>
               </div>
            
            {/* Heading with modern typography */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
             <span className="block">THE STEEL</span>
             <span className="block text-blue-300">LAW FIRM</span>
            </h1>
            
            {/* Tagline with glass card effect */}
            <div className="mb-8 max-w-lg rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xl font-light text-white">
                Providing our clients with superior advocacy is our passion and our promise.
              </p>
            </div>
            
            {/* Catchphrase */}
            <p className="mb-8 text-xl font-medium uppercase tracking-wider text-white">
              <span className="text-blue-300">Command of the law.</span> 
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-blue-300">Experience in the courtroom.</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-blue-300">Unmatched results.</span>
            </p>
            
            {/* Modern action buttons */}
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-400 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
              </Link>
              <Link
                href="/practice-areas"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
              >
                Practice Areas
              </Link>
            </div>
          </div>
          
          {/* Right column - image with modern overlay effects */}
          <div className="relative">
            {/* 3D layered card effect for images */}
            <div className="relative h-[500px] w-full rounded-2xl border border-white/10 bg-gray-800/50 p-2 shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/attorneys.jpg"
                alt="The Steel Law Firm Attorneys"
                fill
                className="rounded-xl object-cover"
                priority
              />
              
              {/* Modern gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              
              {/* Glass info panel */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-black/40 p-6 backdrop-blur-md">
                <p className="text-lg font-medium text-white">
                  Each case is as unique as the individual who seeks representation. 
                  We meticulously scrutinize evidence and utilize the resources of the best experts.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link
                    href="/about"
                    className="text-blue-300 transition-all duration-300 hover:text-blue-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-white/20 bg-blue-500/20 backdrop-blur-md"></div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border border-white/20 bg-purple-500/20 backdrop-blur-md"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center pb-12 md:pb-20">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm text-gray-400">Scroll to discover our services</p>
            <div className="h-12 w-6 rounded-full border border-white/20 p-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
