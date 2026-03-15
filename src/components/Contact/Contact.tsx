import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-10">
            <span className="font-mono text-accent text-lg">04.</span>
            Get in Touch
            <span className="h-px flex-1 bg-secondary/30 max-w-xs" />
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div
              data-aos="zoom-in-right"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <a
                href="mailto:daviderlich75@gmail.com"
                className="inline-flex w-60 items-center justify-center gap-2 border border-accent text-accent px-7 py-3 rounded font-mono text-sm transition-colors duration-700 ease-out hover:bg-accent hover:text-background"
                aria-label="Email"
              >
                <FaEnvelope size={16} aria-hidden="true" />
                Email
              </a>
            </div>
            <div data-aos="zoom-in" data-aos-delay="150" data-aos-once="true">
              <a
                href="https://github.com/daviderl99"
                className="inline-flex w-60 items-center justify-center gap-2 border border-accent text-accent px-7 py-3 rounded font-mono text-sm transition-colors duration-700 ease-out hover:bg-accent hover:text-background"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <a
                href="https://www.linkedin.com/in/david-frederik-erlich"
                className="inline-flex w-60 items-center justify-center gap-2 border border-accent text-accent px-7 py-3 rounded font-mono text-sm transition-colors duration-700 ease-out hover:bg-accent hover:text-background"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
