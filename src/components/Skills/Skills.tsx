const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Angular"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Linux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-10">
            <span className="font-mono text-accent text-lg">03.</span>
            Skills
            <span className="h-px flex-1 bg-secondary/30 max-w-xs" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((skill, i) => (
            <div
              key={skill.title}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay={i * 100}
              data-aos-once="true"
              className="rounded-lg border border-[var(--border)] bg-background/60 p-6 backdrop-blur-[2px]"
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-accent">
                {skill.title}
              </h3>
              <ul className="space-y-2">
                {skill.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
