"use client";

import { Button } from "@/components/ui/Button";
import { RiSendPlaneFill, RiBookLine } from "react-icons/ri";

export function CTA() {
  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* The Glass Container */}
        <div className="relative w-full py-24 px-8 rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col items-center text-center">
          {/* Optional: Subtle radial glow behind the text to match Figma */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-6xl font-sans tracking-[-0.03rem] leading-[100%] md:leading-[95%]">
              Start building on the <br className="hidden md:block" />
              Bittensor network today
            </h2>

            <p className="text-t-secondary font-sans text-base max-w-xl mx-auto">
              Join the community of developers building the future of
              decentralized AI
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://t.me/layertao", "_blank")}
              >
                <RiSendPlaneFill size={18} />
                JOIN TELEGRAM
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
                onClick={() =>
                  window.open("https://docs.layertao.com/", "_blank")
                }
              >
                <RiBookLine size={18} />
                READ DOCUMENTATION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
