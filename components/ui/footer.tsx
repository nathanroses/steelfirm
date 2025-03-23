import Link from "next/link";

export default function Footer({ border = false }: { border?: boolean }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-12 sm:grid-cols-12 md:py-16 ${
            border ? "border-t border-gray-800" : ""
          }`}
        >
          {/* 1st block - Firm information */}
          <div className="space-y-4 sm:col-span-12 lg:col-span-4">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <h3 className="text-xl font-bold tracking-wider">THE STEEL LAW FIRM, P.C.</h3>
              </Link>
            </div>
            <div className="text-gray-400">
              <p className="mb-4">
                With an exceptional and thorough command of the law and over 60 years of combined 
                experience in the courtroom, The Steel Law Firm strives for and obtains unmatched 
                results for our clients.
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-300">Address:</span> 123 Legal Avenue, Suite 500
              </p>
              <p className="mb-1">
                Atlanta, GA 30303
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-300">Phone:</span> (404) 605-0023
              </p>
            </div>
          </div>

          {/* 2nd block - Practice Areas */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold">Practice Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/practice-areas/criminal-defense"
                >
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/practice-areas/professional-misconduct"
                >
                  Professional Misconduct
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/practice-areas/civil-litigation"
                >
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/practice-areas/white-collar-defense"
                >
                  White Collar Defense
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/practice-areas"
                >
                  View All Practice Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - About Our Firm */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold">Our Firm</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/attorneys"
                >
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/cases"
                >
                  Representative Cases
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/media"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block - Legal Information */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/disclaimer"
                >
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block - Social Media */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="#0"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="#0"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area - Copyright and legal */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              &copy; {currentYear} The Steel Law Firm, P.C. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              <p>Attorney Advertisement. Prior results do not guarantee a similar outcome.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scale of Justice Background Element */}
      <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none opacity-5 before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['JUSTICE'] after:absolute after:inset-0 after:bg-gray-700 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['JUSTICE']"></div>
        
        {/* Subtle glow effect */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-gray-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div>
    </footer>
  );
}
