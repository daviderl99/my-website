const About = () => {
  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-8">
            <span className="font-mono text-accent text-lg">01.</span>
            About Me
            <span className="h-px flex-1 bg-secondary/30 max-w-xs" />
          </h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              I&#39;m a frontend developer based in Tallinn who enjoys building
              clean, intuitive, and accessible web experiences. I focus on
              creating interfaces that are not only visually polished but also
              intuitive and easy to use for everyone. Accessibility has become
              an important part of how I approach development, and I like
              turning complex requirements into practical, user-friendly
              solutions.
            </p>
            <p>
              I enjoy working at the intersection of design and development,
              translating ideas and mockups into responsive, well-structured
              interfaces. Outside of work, I like exploring new technologies and
              building small personal projects to experiment with new concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
