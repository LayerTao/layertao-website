import { Footer } from "@/components/layout/Footer";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Navbar } from "@/components/layout/NavBar";
import { TopBanner } from "@/components/layout/TopBanner";
import { Code } from "@/components/sections/landing/Code";
import ComingSoon from "@/components/sections/landing/ComingSoon";
import { CTA } from "@/components/sections/landing/CTA";
import { Features } from "@/components/sections/landing/Features";
import { Hero } from "@/components/sections/landing/Hero";
import { Integration } from "@/components/sections/landing/Integration";
import { Stats } from "@/components/sections/landing/Stats";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-white selection:text-black space-y-25">
      <div>
        <TopBanner />
        <LayoutWrapper />
      </div>
      <Stats />
      <Features />
      <Integration />
      <Code />
      <CTA />
      <Footer />
      {/* <ComingSoon /> */}
    </main>
  );
}
