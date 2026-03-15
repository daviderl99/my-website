import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "File Storage Drive",
      description:
        "A Google Drive-inspired cloud storage solution built with React and Firebase. Features include folder creation, file uploads, nested navigation, and secure user authentication. Users can store and organize various file types including images, videos, and documents in a familiar interface.",
      image: "/storage-drive.png",
      tags: ["React", "Firebase", "SCSS"],
      demo: "https://daviderl99.github.io/Storage-Drive/#/login",
      github: "https://github.com/daviderl99/Storage-Drive",
    },
    {
      title: "Another ToDo List",
      description:
        "A modern task management app built with SvelteKit, TypeScript, and TailwindCSS. Features drag-and-drop functionality, real-time updates, and a minimalist design. Demonstrates clean code architecture and modern front-end development practices.",
      image: "/todo.png",
      tags: ["Svelte", "TypeScript", "Tailwind CSS"],
      demo: "https://another-to-do-list-two.vercel.app",
      github: "https://github.com/daviderl99/AnotherToDoList",
    },
  ];

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-10">
            <span className="font-mono text-primary text-lg">02.</span>
            Projects
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay={i * 100}
              data-aos-once="true"
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-xs text-primary/80 bg-primary/5 px-2.5 py-1 rounded"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
