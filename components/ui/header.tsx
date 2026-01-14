"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="z-30 w-full py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#0A3700]">
                Jaldi Pa<span className="text-[#9EE86F]">y</span>
              </span>
            </Link>
          </div>

          {/* Get Started button */}
          <a
            href="https://cal.com/shatil-ab/30min"
            className="rounded-full bg-[#0A3700] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#0A3700]/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
