import Image from "next/image";

export default function LegalAdvantages() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-24 text-center md:pb-28">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unmatched Legal Analysis
            </h2>
            <p className="text-lg text-gray-700">
              Our legal team delves deep into the intricacies of your case, identifying precedents and developing strategies that anticipate the opposition's arguments.
            </p>
          </div>
          {/* Illustration */}
          <div
            className="group relative mx-auto mb-32 flex w-full max-w-[500px] justify-center md:mb-36"
            data-aos="zoom-y-out"
          >
            <div className="absolute bottom-0 -z-10" aria-hidden="true">
              <div className="h-80 w-80 rounded-full bg-blue-500 opacity-70 blur-[160px] will-change-[filter]" />
            </div>
            <div className="aspect-video w-full -rotate-1 rounded-2xl bg-gray-900 px-5 py-3 shadow-xl transition duration-300 group-hover:-rotate-0">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  Case Analysis
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 blur-xs will-change-[filter] transition duration-300 group-hover:blur-none [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  Case precedents:
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  Jones v. State (2019) - Motion to suppress granted
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Key Evidence:
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Chain of custody compromised - favorable
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  Strategy recommendation:
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  File motion to suppress key evidence
                </span>
              </div>
            </div>
            <div className="absolute top-16">
              <div className="pointer-events-none mb-[7%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] md:*:px-10 md:*:py-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                </svg>
                <span>Strategic Case Analysis</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                Our attorneys conduct thorough case analyses, examining evidence, statutes, and precedents to identify the most effective legal strategy for your specific situation.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={12}
                >
                  <path d="M2 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3Z" />
                </svg>
                <span>Expert Witness Network</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                We maintain relationships with a diverse network of expert witnesses who can provide testimony to strengthen your case, from forensic specialists to industry professionals.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                </svg>
                <span>Client-Centered Approach</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                We prioritize your needs and goals throughout the legal process, ensuring that our strategies align with your objectives while providing realistic assessments of potential outcomes.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
