import GlowText from "@/components/GlowText";
import Globe from "@/components/Globe";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <GlowText text="FRANCISCO LORENZO" />

      <p className="mt-6 max-w-2xl text-gray-300 text-lg">
        Computer Engineering student at Villanova University building scalable
        full-stack systems, secure cloud applications, and data-driven tools.
      </p>

      <div className="mt-12 w-[300px] h-[300px]">
        <Globe />
      </div>
    </section>
  );
}