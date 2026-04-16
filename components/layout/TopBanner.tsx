import React from "react";

// 1. Define your dynamic news items here!
// You can add as many as you want, and they will flow into the marquee.
const NEWS_ITEMS = [
  {
    prefix: "BREAKTHROUGH",
    label: "Subnet:",
    message: "First ever large model trained by Templar",
  },
  {
    prefix: "BREAKTHROUGH",
    label: "Subnet:",
    message: "First ever large model trained by Templar",
  },
  {
    prefix: "BREAKTHROUGH",
    label: "Subnet:",
    message: "First ever large model trained by Templar",
  },
];

export function TopBanner() {
  // 2. We create a single continuous block of our news items
  const MarqueeContent = () => (
    <div className="flex items-center gap-12 px-6">
      {NEWS_ITEMS.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          {/* The "BREAKTHROUGH" part: Display font, uppercase, wide tracking */}
          <span className="font-display text-[11px] tracking-[0.2em] uppercase text-white/60">
            {item.prefix}
          </span>

          {/* The "Subnet:" and Message part: Sans font, mixed weights */}
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <span className="font-sans font-bold">{item.label}</span>
            <span className="font-sans">{item.message}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-[#262626] py-2.5 flex whitespace-nowrap border-b border-white/5">
      {/* Block 1 */}
      <div className="animate-marquee flex shrink-0 items-center">
        {/* We render it a few times so it fills ultra-wide monitors without breaking */}
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>

      {/* Block 2 (Identical, follows seamlessly behind Block 1) */}
      <div
        className="animate-marquee flex shrink-0 items-center"
        aria-hidden="true"
      >
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
