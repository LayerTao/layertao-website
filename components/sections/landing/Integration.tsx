import { StepCard } from "@/components/ui/StepCard";

const STEPS = [
  {
    number: "1",
    title: "Get API Access",
    description:
      "Create an account and generate your API key in seconds. No wallets, no subnet setup, no node management.",
  },
  {
    number: "2",
    title: "Make Your First Request",
    description:
      "Call a simple endpoint using our SDK or REST API. LayerTao handles routing, retries, and node selection automatically.",
  },
  {
    number: "3",
    title: "Receive Optimized Results",
    description:
      "Get validated, high-quality responses from the network. All outputs are filtered, ranked, and returned as a single response.",
  },
];

export function Integration() {
  return (
    <section id="ecosystem" className="py-24 px-8 w-full">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-sans">
          Seamless Bittensor Integration
        </h2>
        <p className="text-t-secondary text-sm md:text-base font-sans">
          Go from setup to production in three simple steps
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {STEPS.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
