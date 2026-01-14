"use client";

import { useState } from "react";

const faqs = [
  {
    question: "When was Jaldi Pay founded?",
    answer: "Jaldi Pay was founded to provide fast, secure, and transparent money transfer services to Bangladesh from around the world."
  },
  {
    question: "What services does Jaldi Pay offer?",
    answer: "Jaldi Pay offers instant money transfers to Bangladesh, with support for bank accounts and mobile wallets like bKash. We provide real-time exchange rates and transparent fee structures."
  },
  {
    question: "Who can use Jaldi Pay?",
    answer: "Anyone looking to send money to Bangladesh can use Jaldi Pay. Our service is available to users in multiple countries including UAE, Malaysia, Saudi Arabia, and more."
  },
  {
    question: "Is Jaldi Pay safe?",
    answer: "Yes, Jaldi Pay is fully regulated and uses bank-level security to protect your transactions. We implement digital KYC verification to ensure safe and legal transfers."
  },
  {
    question: "How do I benefit from Jaldi Pay?",
    answer: "You benefit from competitive exchange rates, low fees, instant transfers, and 24/7 customer support. Your recipients can receive money directly in their bank accounts or mobile wallets."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up with your Google account, complete the quick verification process, and you can start sending money to Bangladesh right away."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#9EE86F]/20 px-4 py-1 text-sm font-medium text-[#0A3700] mb-4">
            FAQ
          </span>
          <h2
            className="text-2xl font-semibold text-[#0A3700] md:text-3xl"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3" data-aos="fade-up" data-aos-delay={100}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
