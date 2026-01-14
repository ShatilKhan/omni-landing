export default function HeroHome() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Left content */}
            <div>
              <h1
                className="text-4xl font-bold tracking-tight text-[#0A3700] md:text-5xl lg:text-6xl"
                data-aos="fade-up"
              >
                SEND MONEY
                <br />
                GLOBALLY
                <br />
                FOR LESS
              </h1>
              <p
                className="mt-6 text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Move your money where it matters. Save on international transfer in over 50 currencies, without any hidden fees.
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay={400}>
                <a
                  href="https://cal.com/shatil-ab/30min"
                  className="inline-flex items-center rounded-full bg-[#0A3700] px-8 py-4 text-base font-medium text-white transition hover:bg-[#0A3700]/90"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right content - Transfer Form Mock */}
            <div
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                <svg className="h-4 w-4 text-[#9EE86F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Rate guaranteed (29s)</span>
              </div>

              <div className="mb-2 rounded-lg bg-[#9EE86F]/20 px-3 py-2 text-center text-sm text-[#0A3700]">
                1 USD = 122.200 BDT
              </div>

              {/* Send amount */}
              <div className="mb-4">
                <label className="mb-2 block text-sm text-gray-600">You send exactly</label>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                  <span className="text-xl font-semibold text-gray-800">1,000</span>
                  <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5">
                    <span className="text-sm font-medium">USD</span>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-xs text-[#9EE86F]">
                Sending over 25,000 USD or equivalent? We&apos;ll discount our fee.
              </p>

              {/* Recipient gets */}
              <div className="mb-4">
                <label className="mb-2 block text-sm text-gray-600">Recipient gets</label>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                  <span className="text-xl font-semibold text-gray-800">120,881.46</span>
                  <div className="flex items-center gap-2 rounded-full bg-[#9EE86F]/20 px-3 py-1.5">
                    <span className="text-sm font-medium text-[#0A3700]">BDT</span>
                  </div>
                </div>
              </div>

              {/* Recipient gets method */}
              <div className="mb-4">
                <label className="mb-2 block text-sm text-gray-600">Recipient gets</label>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                      <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Connected bank account (ACH)</span>
                  </div>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Change</button>
                </div>
              </div>

              {/* Fee breakdown */}
              <div className="mb-4 space-y-1 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Connected bank account (ACH) fee</span>
                  <span>1.70 USD</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Our fee</span>
                  <span>9.05 USD</span>
                </div>
                <div className="flex justify-between font-medium text-gray-800">
                  <span>Total included fees (1.08%)</span>
                  <span>10.79 USD</span>
                </div>
              </div>

              <p className="mb-4 text-xs text-gray-500">You could save up to 28 USD</p>

              <button className="w-full rounded-lg bg-[#0A3700] py-3 text-center font-medium text-white transition hover:bg-[#0A3700]/90">
                Send money
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
