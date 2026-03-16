import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styles from "./Projects.module.scss";

export default function Projects() {
  const projects = [
    {
      title: "AI Video Subtitler",
      description: `
        A video subtitle generation platform that converts uploaded videos into 
        translated subtitles through an end-to-end processing pipeline. It extracts 
        audio, transcribes speech, translates subtitle lines into a target language, 
        generates SRT output, and optionally returns a version of the video with 
        burned-in subtitles.
      `,
      tags: ["Angular", "TypeScript", "Python", "FastAPI"],
      demo: "https://video-subtitler-fe.vercel.app",
      github: "https://github.com/daviderl99/video-subtitler-fe",
    },
    {
      title: "File Storage Drive",
      description: `
        A Google Drive-inspired cloud storage solution built with React and Firebase. 
        Features include folder creation, file uploads, nested navigation, and secure 
        user authentication. Users can store and organize various file types including 
        images, videos, and documents in a familiar interface.
      `,
      tags: ["React", "Firebase", "SCSS"],
      demo: "https://daviderl99.github.io/Storage-Drive/#/login",
      github: "https://github.com/daviderl99/Storage-Drive",
    },
    {
      title: "Chatter",
      description: `
        Real-time chat application backed by Firebase Authentication, Firestore, and Storage. 
        Users can create accounts, join password-protected rooms, exchange messages in real 
        time, upload images, and update their profiles.
      `,
      tags: ["React", "Vite", "Firebase", "SCSS"],
      demo: "https://daviderl99.github.io/chatter-firebase",
      github: "https://github.com/daviderl99/chatter-firebase",
    },
    {
      title: "Another ToDo List",
      description: `
        A modern task management app built with SvelteKit, TypeScript, and TailwindCSS. 
        Features drag-and-drop functionality, real-time updates, and a minimalist design. 
        Demonstrates clean code architecture and modern front-end development practices.
      `,
      tags: ["Svelte", "TypeScript", "Tailwind CSS"],
      demo: "https://another-to-do-list-two.vercel.app",
      github: "https://github.com/daviderl99/AnotherToDoList",
    },
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-10">
              <span className="font-mono text-accent text-lg">02.</span>
              Projects
              <span className="h-px flex-1 bg-secondary/30 max-w-xs" />
            </h2>
          </div>
        </div>

        <div className={styles.cardsList}>
          <div className="space-y-6 pb-2">
            {projects.map((project, i) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={i * 100}
                data-aos-once="true"
                className="group rounded-lg border border-border bg-background/60 p-6 backdrop-blur-[2px] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-primary/80">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                      aria-label="Live demo"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>
                <p className="text-primary/90 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {t}
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
}
