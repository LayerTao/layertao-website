"use client";
import React, { useState, useEffect } from "react";
import { Hero } from "../sections/landing/Hero";
import { Navbar } from "./NavBar";

export default function LayoutWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Triggers the fade-in right after the component mounts on the client
    setIsMounted(true);
  }, []);

  return (
    // 'isolate' forces children to respect the parent's stacking context/clipping
    // 'transform-gpu' or a custom 'translate-z-0' helps Safari respect the rounding
    <div className="relative min-h-screen w-full overflow-hidden rounded-b-2xl isolate bg-[#0f0f0f]">
      {/* 1. The Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // Added transition-opacity, duration, and the dynamic opacity classes
        className={`absolute inset-0 w-full h-full object-cover -z-20 transform-gpu transition-opacity duration-1000 ease-in-out ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-background.webm" type="video/webm" />
        {/* <source src="/hero-background.mp4" type="video/mp4" /> */}
      </video>

      {/* 2. The Dark Wash Layer */}
      <div className="absolute inset-0 -z-10 bg-[#0f0f0f]/60" />

      {/* 3. THE BASE BLUR (Very subtle frosted look for the top) */}
      <div className="absolute inset-0 -z-10 backdrop-blur-md" />

      {/* 4. THE HEAVY PROGRESSIVE BLUR */}
      {/* Notice we match the percentages: 
          - transparent until 10% (stay clear near the logo)
          - hit 100% blur only at 90% (keep the hero text fairly legible)
      */}
      <div
        className="absolute inset-0 -z-10 backdrop-blur-[30px] transform-gpu bg-black/[0.01] pointer-events-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 90%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 90%)",
        }}
      />

      {/* 5. The Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar isTransparent={true} />
        <div className="flex-1 w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
}
