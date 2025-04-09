
import PageIllustration from "@/components/page-illustration";

export default function Hero() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-10 pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
              Practice Areas
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                The Steel Law Firm provides exceptional representation across a wide range of legal matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
