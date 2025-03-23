import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-gray-700 md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              THE STEEL LAW FIRM, P.C.
            </h1>
            
            {/* Hero image with attorneys */}
            <div
              className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-lg"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/attorneys.jpg" // Add this image to your public folder
                  alt="The Steel Law Firm Attorneys"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay for the law firm tagline */}
                <div className="absolute right-8 top-1/2 max-w-md -translate-y-1/2 bg-gray-700/80 p-8 text-right">
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
            
            {/* Law firm tagline */}
            <div className="mx-auto mt-12 max-w-full text-center">
              <p
                className="text-2xl font-bold uppercase tracking-wide text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                Command of the law. Experience in the courtroom. Unmatched results.
              </p>
              
              <div className="mt-8">
                <p
                  className="mb-8 text-lg text-gray-600"
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
                  className="mb-8 text-lg text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay={750}
                >
                  Brian and Colette use a proven approach to each client and case: they meticulously 
                  scrutinize evidence and discovery, evaluate the legal issues, utilize the resources 
                  of the best experts from across the nation, and frequently combine their efforts and 
                  skills in the joint defense of a client.
                </p>
              </div>
              
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={900}
              >
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-gray-800 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Contact Us
                  </span>
                </a>
                <a
                  className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Practice Areas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
