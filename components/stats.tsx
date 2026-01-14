export default function Stats() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            className="text-xl font-semibold text-[#0A3700] md:text-2xl"
            data-aos="fade-up"
          >
            Go-to Prospecting Data Platform for Global Reach
          </h2>
        </div>

        <div
          className="rounded-2xl border border-[#9EE86F]/30 bg-[#9EE86F]/5 p-8"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* 120M+ Profiles */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EE86F]/20">
                  <svg className="h-6 w-6 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-[#0A3700]">120M+</div>
                  <div className="text-sm text-gray-600">Profiles</div>
                </div>
              </div>
            </div>

            {/* 20+ Insights */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EE86F]/20">
                  <svg className="h-6 w-6 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-[#0A3700]">20+</div>
                  <div className="text-sm text-gray-600">Insights</div>
                </div>
              </div>
            </div>

            {/* 150+ Countries */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EE86F]/20">
                  <svg className="h-6 w-6 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-[#0A3700]">150+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            {/* 400+ Industries */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EE86F]/20">
                  <svg className="h-6 w-6 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-[#0A3700]">400+</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
