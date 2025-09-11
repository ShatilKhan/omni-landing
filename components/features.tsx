import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="h2 mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="inline-flex items-center gap-3 before:h-px before:w-12 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-12 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="text-lg text-gray-400">
                Comprehensive AI Solutions for Business Growth
              </span>
            </div>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-md gap-8 md:max-w-none md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {/* Security Services */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.38-2.85 8.51-7 9.79-4.15-1.28-7-5.42-7-9.79V6.3l7-3.12z"/>
                  <path d="M12 6a3 3 0 0 0-3 3c0 1.31.84 2.42 2 2.83V14h2v-2.17c1.16-.41 2-1.52 2-2.83a3 3 0 0 0-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                E-KYC
              </h3>
              <ul className="mt-2 space-y-3 text-base md:text-lg text-indigo-200/65">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-indigo-500"></span>
                  Biometric Fingerprint Matching
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  Fraud Prevention & Enhanced Security
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  AI based persona identification
                </li>
              </ul>
            </article>

            {/* AI Marketing */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                AI Marketing Solutions
              </h3>
              <ul className="space-y-3 text-lg text-indigo-200/65">
                <li className="flex items-start font-medium text-indigo-400">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  30% Reduction in Sales Cycles
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  Automated Social Media Management
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  AI based Lead Generation 
                </li>
                
              </ul>
            </article>

            {/* Finance */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Financial Management
              </h3>
              <ul className="space-y-3 text-lg text-indigo-200/65">
                <li className="flex items-start font-medium text-indigo-400">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  50% reduction in time spent on financial tasks
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  Automated Tax & VAT Document Generation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  Personalized Financial Recommendations
                </li>
              </ul>
            </article>

            {/* Calling Solutions */}
            <article className="relative flex flex-col p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 p-3">
                <svg
                  className="h-8 w-8 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1.02A11.3 11.3 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Communication Services
              </h3>
              <ul className="space-y-3 text-lg text-indigo-200/65">
                <li className="flex items-start font-medium text-indigo-400">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  60% reduction in service response time
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  Integration with CRM Systems
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-4 w-4 shrink-0 rounded-full border border-indigo-500"></span>
                  Analytics for Service Improvement
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
