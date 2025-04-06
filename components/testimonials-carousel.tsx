import Image from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";

export default function ClientTestimonials() {
  return (
    <section className="relative pt-12 md:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Client Success Stories
          </h2>
        </div>
        
        {/* Testimonial grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Testimonial 1 */}
          <div className="bg-white/70 rounded-lg p-6 shadow-lg shadow-black/[0.03] relative flex flex-col before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <div className="mb-4 flex items-center">
              <Image
                className="rounded-full mr-3"
                src={TestimonialImg01}
                width={48}
                height={48}
                alt="Client"
              />
              <div>
                <h4 className="font-bold">James Wilson</h4>
                <p className="text-sm text-gray-500">Criminal Defense Client</p>
              </div>
            </div>
            <blockquote className="grow text-gray-700 mb-3">
              "The Steel Law Firm's approach to my case was methodical and thorough. They identified weaknesses in the prosecution's evidence that I hadn't even considered. Their command of legal precedent ultimately led to my case being dismissed."
            </blockquote>
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                <path d="M13 7h-2v6h6v-2h-4z"/>
              </svg>
              Sep 15, 2024
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white/70 rounded-lg p-6 shadow-lg shadow-black/[0.03] relative flex flex-col before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <div className="mb-4 flex items-center">
              <Image
                className="rounded-full mr-3"
                src={TestimonialImg02}
                width={48}
                height={48}
                alt="Client"
              />
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Civil Litigation Client</p>
              </div>
            </div>
            <blockquote className="grow text-gray-700 mb-3">
              "As a founder having a visually appealing and user-friendly website is essential. This tool not only helped me achieve that but also improved my site's performance and SEO."
              "After a contractor damaged my property and refused to pay, The Steel Law Firm helped me navigate the complex litigation process. Their strategic approach resulted in a settlement that fully covered my damages and legal fees."
            </blockquote>
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                <path d="M13 7h-2v6h6v-2h-4z"/>
              </svg>
              Jul 28, 2024
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white/70 rounded-lg p-6 shadow-lg shadow-black/[0.03] relative flex flex-col before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <div className="mb-4 flex items-center">
              <Image
                className="rounded-full mr-3"
                src={TestimonialImg03}
                width={48}
                height={48}
                alt="Client"
              />
              <div>
                <h4 className="font-bold">Jeffrey Williams</h4>
                <p className="text-sm text-gray-500">Recording Artist</p>
              </div>
            </div>
            <blockquote className="grow text-gray-700 mb-3">
              "The Steel Law Firm's defense strategy was absolutely brilliant. Their command of the law and courtroom presence made all the difference in my case. I'm forever grateful for their expertise and dedication."
            </blockquote>
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                <path d="M13 7h-2v6h6v-2h-4z"/>
              </svg>
              Jun 03, 2024
            </div>
          </div>
          
          {/* Testimonial 4 */}
          <div className="bg-white/70 rounded-lg p-6 shadow-lg shadow-black/[0.03] relative flex flex-col before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <div className="mb-4 flex items-center">
              <Image
                className="rounded-full mr-3"
                src={TestimonialImg04}
                width={48}
                height={48}
                alt="Client"
              />
              <div>
                <h4 className="font-bold">Michael Turner</h4>
                <p className="text-sm text-gray-500">Professional Conduct Client</p>
              </div>
            </div>
            <blockquote className="grow text-gray-700 mb-3">
              "When my professional license was at risk due to allegations of misconduct, The Steel Law Firm provided clear guidance through the complex regulatory process. Their detailed understanding of administrative law preserved my career and reputation."
            </blockquote>
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                <path d="M13 7h-2v6h6v-2h-4z"/>
              </svg>
              Apr 12, 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
