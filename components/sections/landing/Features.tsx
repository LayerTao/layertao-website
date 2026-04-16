"use client";
import React, { useState, useEffect, useRef } from "react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import LightRays from "@/components/ui/LightRays";
import {
  RiFlashlightLine,
  RiShieldCheckLine,
  RiStackLine,
  RiCodeSSlashLine,
  RiSpeedUpLine,
  RiNodeTree,
} from "react-icons/ri";

// 1. Upgraded Hook to handle CSS transition delays
function useInViewWithFade(
  options: IntersectionObserverInit = {},
  unmountDelay = 1000, // matches our 1000ms CSS duration
) {
  const [isInView, setIsInView] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Destructure options to keep useEffect dependencies perfectly stable
  const { rootMargin = "0px", threshold = 0 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin, threshold },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isInView) {
      // If entering view, mount the component immediately so it can fade in
      setShouldRender(true);
    } else {
      // If leaving view, wait for the fade-out CSS transition to finish before destroying it
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, unmountDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [isInView, unmountDelay]);

  return [ref, isInView, shouldRender] as const;
}

const FEATURES = [
  {
    icon: RiFlashlightLine,
    title: "Intelligent Routing",
    description:
      "Parallel execution across multiple nodes with performance-based selection.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Privacy by Design",
    description:
      "Minimized data exposure with controlled routing and no default data retention.",
  },
  {
    icon: RiStackLine,
    title: "Response Evaluation",
    description:
      "Every response is validated, ranked, and filtered before being returned.",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Developer First",
    description:
      "Simple APIs and SDKs designed for production-ready integration.",
  },
  {
    icon: RiSpeedUpLine,
    title: "Reliability Engine",
    description:
      "Automatic retries, failover, and fallback ensure consistent results.",
  },
  {
    icon: RiNodeTree,
    title: "Network Abstraction",
    description:
      "Access decentralized AI without managing subnets, nodes, or protocols.",
  },
];

export function Features() {
  // 2. rootMargin: "200px 0px" explicitly adds top/bottom margin
  // ensuring it catches the scroll from both directions properly.
  const [sectionRef, isInView, shouldRender] = useInViewWithFade(
    { rootMargin: "200px 0px" },
    1000,
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-8 max-w-full bg-[#141414] border-b-[0.5px] border-border/40 m-5 rounded-2xl relative overflow-hidden"
    >
      {/* 3. The Fade Wrapper */}
      {/* isInView swaps between opacity-0 and opacity-40 smoothly over 1 second */}
      <div
        className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-in-out ${
          isInView ? "opacity-90" : "opacity-0"
        }`}
      >
        {/* 4. The Render Gate */}
        {/* Only mounts when needed, unmounts 1 second after leaving view */}
        {shouldRender && (
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pointer-events-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-sans leading-[95%]">
            Designed for real-world applications
          </h2>
          <p className="text-t-secondary text-sm md:text-base font-sans">
            Everything you need to build powerful applications on Bittensor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
