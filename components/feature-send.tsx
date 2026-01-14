import Image from "next/image";
import PhoneMockup from "./phone-mockup";

export default function FeatureSend() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left content */}
          <div data-aos="fade-right">
            <span className="text-[#9EE86F] font-medium text-sm uppercase tracking-wide">
              Global Payout
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0A3700] md:text-4xl lg:text-5xl">
              Send Crypto,
              <br />
              Receive Local
              <br />
              Currency
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              Experience hassle-free sending. Every transaction protected, every recipient just moments away.
            </p>
            {/* <a
              href="https://cal.com/shatil-ab/30min"
              className="mt-8 inline-flex items-center rounded-full bg-[#0A3700] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0A3700]/90"
            >
              Learn more
            </a> */}
          </div>

          {/* Right content - Phone Mockup with Screenshot */}
          <div className="flex justify-center" data-aos="fade-left">
            <PhoneMockup>
              <Image
                src="/jaldipay-send.png"
                alt="Send Money Screen"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
