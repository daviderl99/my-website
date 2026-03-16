import styles from "./Skills.module.scss";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "Next.js",
      "Svelte",
      "Tailwind / SCSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "REST API",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Firebase", "Vercel", "Figma", "Wordpress"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={`${styles.section} px-6`}>
      <div className={styles.inner}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className={styles.header}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-10">
            <span className="font-mono text-accent text-lg">03.</span>
            Skills
            <span className="h-px flex-1 bg-secondary/30 max-w-xs" />
          </h2>
        </div>

        <div className={styles.cardsList}>
          <div className="grid md:grid-cols-3 gap-7 pb-2">
            {skillCategories.map((skill, i) => (
              <div
                key={skill.title}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={i * 100}
                data-aos-once="true"
                className="h-full rounded-xl border border-[var(--border)] bg-background/60 p-7 md:p-8 backdrop-blur-[2px]"
              >
                <h3 className="mb-5 font-mono text-xl text-accent">
                  {skill.title}
                </h3>
                <ul className="space-y-3">
                  {skill.skills.map((skillName) => (
                    <li
                      key={skillName}
                      className="flex items-center gap-2.5 text-base text-secondary"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {skillName}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
