import GlobeWrapper from "@/components/GlobeWrapper";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-12 w-full">

        {/* LEFT SIDE - TEXT */}
        <div>
          <h1 className="text-4xl font-bold text-blue-400 mb-8">
            About Me
          </h1>

          <div className="space-y-6 text-gray-300 text-lg max-w-xl">
            <p>
              I am a Computer Engineering student at Villanova University
              focused on building scalable cloud systems and secure
              full-stack applications.
            </p>

            <p>
              My experience spans enterprise identity systems,
              hardware-level security architectures, embedded systems,
              and financial analytics platforms.
            </p>

            <p>
              I am especially interested in backend systems,
              performance optimization, and designing systems
              that operate reliably at scale.
            </p>

            <p>
              Outside of engineering, I am involved in IEEE,
              SHPE, Club Tennis, and Special Olympics.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - GLOBE */}
        <div className="flex justify-center items-center relative">
          <div className="absolute w-[420px] h-[420px] bg-blue-500/20 blur-3xl rounded-full" />
          <GlobeWrapper />
        </div>

      </div>
    </section>
  );
}