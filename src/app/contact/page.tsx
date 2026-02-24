export default function ContactPage() {
  return (
    <section className="min-h-screen">
      <h1 className="text-4xl font-bold text-blue-400 mb-12">
        Contact
      </h1>

      <div className="space-y-6 text-gray-300 text-lg">
        <p>
          Interested in collaborating or discussing opportunities?
          Feel free to reach out.
        </p>

        <div className="space-y-4">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:pacochelorenzo@gmail.com"
              className="text-blue-400 hover:underline"
            >
              pacochelorenzo@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pacolorenzo17/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/pacolorenzo17
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Pac-Lorenzo"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/Pac-Lorenzo
            </a>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-500/20 border border-blue-500/40 text-blue-400 rounded-lg hover:bg-blue-500/30 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}