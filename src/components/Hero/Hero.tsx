const Hero = () => {
  return (
    <section className="heroPanel flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-6xl font-bold text-accent mb-3"
        >
          David Frederik Erlich
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-3xl md:text-5xl font-bold text-primary mb-6"
        >
          Web Developer
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-secondary max-w-lg text-base md:text-lg leading-relaxed mb-10"
        >
          Building accessible, user-friendly websites that are fast, modern, and
          intuitive.
        </p>
      </div>
    </section>
  );
};

export default Hero;
