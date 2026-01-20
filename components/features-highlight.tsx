export default function FeaturesHighlight() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left content */}
          <div>
            <h2
              className="text-2xl font-semibold text-[#0A3700] md:text-3xl mb-12"
              data-aos="fade-up"
            >
              Join for Effortless Cross Border Money Transfers
            </h2>

            <div className="space-y-8">
              {/* Trusted by Thousands */}
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9EE86F]/20">
                  <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#0A3700]">Trusted by Thousands</h3>
                </div>
              </div>

              {/* Regulated */}
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9EE86F]/20">
                  <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#0A3700]">Regulated</h3>
                </div>
              </div>

              {/* Get the Best Value */}
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9EE86F]/20">
                  <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#0A3700]">Get the Best Value</h3>
                </div>
              </div>

              {/* 24/7 customer support */}
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9EE86F]/20">
                  <svg className="h-5 w-5 text-[#0A3700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#0A3700]">24/7 customer support</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Illustration */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay={200}>
            <div className="relative">
              <svg className="w-64 h-64 md:w-80 md:h-80" viewBox="0 0 200 200" fill="none">
                {/* Chart bars */}
                <rect x="20" y="100" width="25" height="60" rx="4" fill="#9EE86F" />
                <rect x="55" y="80" width="25" height="80" rx="4" fill="#0A3700" />
                <rect x="90" y="60" width="25" height="100" rx="4" fill="#9EE86F" />
                <rect x="125" y="40" width="25" height="120" rx="4" fill="#0A3700" />
                {/* Gold bars */}
                <rect x="140" y="130" width="40" height="15" rx="2" fill="#FFD700" />
                <rect x="145" y="145" width="35" height="12" rx="2" fill="#FFD700" />
                {/* Coins */}
                <circle cx="170" cy="100" r="15" fill="#FFD700" />
                <circle cx="160" cy="90" r="12" fill="#FFC107" />
                {/* Chart line */}
                <path d="M30 120 L60 90 L95 70 L130 50" stroke="#0A3700" strokeWidth="3" strokeLinecap="round" />
                <circle cx="30" cy="120" r="4" fill="#0A3700" />
                <circle cx="60" cy="90" r="4" fill="#0A3700" />
                <circle cx="95" cy="70" r="4" fill="#0A3700" />
                <circle cx="130" cy="50" r="4" fill="#0A3700" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
