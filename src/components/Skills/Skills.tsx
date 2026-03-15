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
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-10">
            <span className="font-mono text-primary text-lg">03.</span>
            Skills
            <span className="h-px flex-1 bg-border max-w-xs" />
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
              className="bg-card rounded-lg p-6 border border-border"
            >
              <h3 className="font-mono text-primary text-sm font-medium mb-4">
                {skill.title}
              </h3>
              <ul className="space-y-2">
                {skill.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
