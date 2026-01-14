export const metadata = {
  title: "JaldiPay",
  description: "Fast Money Transfers to Bangladesh",
};

import Hero from "@/components/hero-home";
import FeaturesHighlight from "@/components/features-highlight";
import FeatureSend from "@/components/feature-send";
import FeatureAdd from "@/components/feature-add";
import Stats from "@/components/stats";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesHighlight />
      <FeatureSend />
      <FeatureAdd />
      <Stats />
      <FAQ />
    </>
  );
}
