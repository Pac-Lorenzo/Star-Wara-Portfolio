export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-5">
      <h1 className="starwars-yellow text-[2.3rem] leading-[0.92] sm:text-6xl md:text-7xl">
        FRANCISCO
        <br />
        LORENZO
      </h1>

      <p className="hero-serif text-3xl sm:text-4xl text-gray-100">
        Hi, I&apos;m <span className="hero-name-glow font-semibold">Francisco</span>
      </p>

      <h2 className="starwars-blue text-[2rem] leading-none sm:text-5xl md:text-6xl">
        SOFTWARE ENGINEER
      </h2>

      <p className="max-w-xl text-gray-300">
        Building scalable cloud systems, secure architectures,
        and data-driven applications.
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-500/20 border border-blue-500/40 text-blue-400 rounded-lg hover:bg-blue-500/30 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-400 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
