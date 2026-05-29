import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GtmSystems from "@/components/GtmSystems";

import Results from "@/components/Results";
import CtaBanner from "@/components/CtaBanner";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <GtmSystems />
      <Results />
      <CtaBanner title="Want Results Like This?" sub="Get a free, custom GTM plan tailored to your ICP, signals, and pipeline goals." />
      <HowWeWork />
      <CaseStudies />
      <Testimonials />
      <CtaBanner id="final-cta" title="Let's Build Your Pipeline Engine." sub="One conversation. A custom plan. No fluff." />
      <Footer />
    </main>
  );
};

export default Index;
