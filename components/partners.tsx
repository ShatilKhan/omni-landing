"use client"
import Image from 'next/image';
import { useEffect } from 'react';

export default function Partners() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Our Clients
          </h2>
          <div className="inline-flex items-center gap-3 before:h-px before:w-12 before:bg-linear-to-r before:from-transparent before:to-green-300/50 after:h-px after:w-12 after:bg-linear-to-l after:from-transparent after:to-green-300/50">
            <span className="text-lg text-gray-600">
              Trusted by Industry Leaders
            </span>
          </div>
        </div>
        
        <div className="mt-12 relative overflow-hidden">
          <div className="flex animate-infinite-carousel gap-12 hover:pause">
            {/* First set of logos */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`first-${num}`} className="relative flex-none w-[200px] h-[80px] grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/images/client-${num}${num <= 3 ? '.webp' : '.png'}`}
                  alt={`Client ${num}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`second-${num}`} className="relative flex-none w-[200px] h-[80px] grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/images/client-${num}${num <= 3 ? '.webp' : '.png'}`}
                  alt={`Client ${num}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity opacity-70 hover:opacity-100"
                  priority={num <= 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
