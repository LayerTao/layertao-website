import GlareHover from "./GlareHover";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
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
        {/* Number Badge */}

        <div
          className="w-10 h-10 rounded-[8px] flex items-center justify-center mb-6  transition-all duration-500 animate-gradient-slow shadow-inner"
          style={{
            background:
              "linear-gradient(135deg, rgba(220, 220, 220, 0.20) 0%, rgba(0, 0, 0, 0.20) 50%, rgba(220, 220, 220, 0.20) 100%)",
            backgroundSize: "200% 200%",
          }}
        >
          <span className="font-sans text-lg text-white/90">{number}</span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-sans font-medium text-white tracking-[-0.03rem]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-t-secondary font-sans">
            {description}
          </p>
        </div>
      </div>
    </GlareHover>
  );
}
