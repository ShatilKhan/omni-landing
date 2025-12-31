export const metadata = {
  title: "JaldiPay",
  description: "Fast Money Transfers to Bangladesh",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Partners from "@/components/partners";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Partners />
      {/* <Workflows /> */}
      <Features />
      <Cta />
    </>
  );
}
