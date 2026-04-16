import CountUp from "@/components/ui/CountUp";
import React from "react";
// Make sure to import your CountUp component here
// import { CountUp } from "./path-to-your-CountUp-component";

export function Stats() {
  // Separated the raw number (value) from the string modifier (unit)
  const stats = [
    { value: 149, unit: "", label: "SUBNETS" },
    { value: 1000, unit: "+", label: "VALIDATORS" },
    { value: 5, unit: "M+", label: "DAILY REQUESTS" },
    { value: 400, unit: "K+", label: "USERS" },
    { value: 2, unit: "M+", label: "STAKED $TAO" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <h2 className="text-3xl md:text-5xl font-sans tracking-tight">
          Bittensor in numbers
        </h2>
        <p className="text-t-secondary text-sm md:text-base font-sans max-w-lg mx-auto opacity-80">
          Everything you need to build powerful applications on Bittensor
        </p>
      </div>

      {/* Stats Container */}
      {/* Mobile: Stacked (1 column)
          Tablet: 2-3 columns 
          Desktop: Single row (flex)
      */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-col items-center justify-center py-6 md:py-0 flex-1 min-w-[140px] text-center group">
              {/* Value and Unit Wrapper */}
              <p className="flex items-center justify-center text-3xl md:text-[34px] lg:text-[40px] font-sans font-medium mb-1 md:mb-2 tracking-tight">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                {stat.unit && <span>{stat.unit}</span>}
              </p>

              <span className="text-[10px] md:text-xs font-display tracking-[0.2em] text-t-secondary uppercase opacity-70">
                {stat.label}
              </span>
            </div>

            {/* Vertical Separator (Desktop only) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-10 w-[1px] bg-white/10 shrink-0" />
            )}

            {/* Horizontal Separator (Mobile only) */}
            {index !== stats.length - 1 && (
              <div className="md:hidden w-full h-[1px] bg-white/5" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
