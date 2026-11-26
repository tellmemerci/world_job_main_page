import { Aurora } from "@/components/landing/Aurora";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { JobFeed } from "@/components/landing/JobFeed";
import { Marquee } from "@/components/landing/Marquee";
import { Nav } from "@/components/landing/Nav";
import { Problem } from "@/components/landing/Problem";
import { Proof } from "@/components/landing/Proof";

export default function Home() {
  return (
    <>
      <Aurora />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <HowItWorks />
        <JobFeed />
        <Features />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
