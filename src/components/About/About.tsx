const About = () => {
  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8">
            <span className="font-mono text-primary text-lg">01.</span>
            About Me
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I&#39;m John, a software developer who enjoys creating
              things that live on the internet. My interest in web development
              started back in 2015 when I decided to try building custom themes
              — turns out hacking together HTML & CSS taught me a lot about how
              the web works.
            </p>
            <p>
              Fast-forward to today, and I&#39;ve had the privilege of working
              at a startup, a large corporation, and a design agency. My main
              focus these days is building accessible, inclusive products and
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
