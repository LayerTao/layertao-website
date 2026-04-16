import { cn } from "@/lib/utils";
import { IconType } from "react-icons"; // Import the generic IconType
import GlareHover from "./GlareHover";

interface FeatureCardProps {
  icon: IconType; // Update type here
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.2}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={1800}
      playOnce={false}
      borderRadius="16px"
    >
      <div className="group p-8 backdrop-blur-md rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
        {/* Icon Container */}
        <div
          className="w-10 h-10 rounded-[8px] flex items-center justify-center mb-6  transition-all duration-500 animate-gradient-slow shadow-inner"
          style={{
            background:
              "linear-gradient(135deg, rgba(220, 220, 220, 0.20) 0%, rgba(0, 0, 0, 0.20) 50%, rgba(220, 220, 220, 0.20) 100%)",
            backgroundSize: "200% 200%",
          }}
        >
          <Icon
            size={20}
            width={2}
            className="text-white/90 group-hover:text-white transition-colors"
          />
        </div>

        {/* Text Content */}
        <h3 className="text-xl font-sans font-medium text-white mb-3 tracking-[-0.03rem]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-t-secondary font-sans max-w-[35ch]">
          {description}
        </p>
      </div>
    </GlareHover>
  );
}
