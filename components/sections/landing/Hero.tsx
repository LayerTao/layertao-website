"use client";

import { SubnetBar } from "@/components/layout/SubnetBar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 w-full max-w-5xl mx-auto">
      {/* Pill Badge */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 font-display text-xs text-t-secondary tracking-[0.05em] uppercase">
        {/* The Animated Dot Container */}
        <div className="relative flex items-center justify-center w-1.5 h-1.5 mr-1">
          {/* 1. The Outer "Sonar" Ripple */}
          <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />

          {/* 2. The Main Glowing Dot */}
          <div className="relative w-1.5 h-1.5 rounded-full bg-white animate-sonar-glow" />
        </div>
        Deploy on Bittensor
      </div>

      {/* Main Copy */}
      <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[95%]">
        Your gateway to the
        <br />
        Bittensor ecosystem
      </h1>

      <p className="font-sans text-t-secondary max-w-2xl mb-12 text-base md:text-lg leading-tight">
        LayerTao is the abstraction layer on Bittensor, giving developers simple
        APIs, smart routing, and seamless payments to build decentralized AI
        faster.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <Button className="group items-center gap-2 text-[11px] tracking-widest px-6 py-2 relative overflow-hidden min-w-[140px] justify-center">
          {/* The Icon - stays visible */}
          <Image
            src="/icons/hammer.svg"
            alt="Hammer"
            width={14}
            height={14}
            className="w-3.5 h-3.5 shrink-0"
          />

          {/* Text Container */}
          <div className="relative" onClick={() => {window.open("https://platform.layertao.com", "_blank")}}
          >
            {/* Default Text */}
            <span className="block transition-all duration-300">
              BUILD ON TAO
            </span>
          </div>
        </Button>

        {/* Using the outline variant, but overriding the hover color to match your exact design */}

        <Button
          variant="outline"
          className="w-full sm:w-auto bg-transparent"
          onClick={() => window.open("https://docs.layertao.com/", "_blank")}
        >
          <div
            className="w-4 h-4 bg-current"
            style={{
              WebkitMaskImage: "url(/icons/document.svg)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url(/icons/document.svg)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
            }}
          />
          READ DOCUMENTATION
        </Button>
      </div>
      {/* Stats Container */}
      <SubnetBar />
    </section>
  );
}
