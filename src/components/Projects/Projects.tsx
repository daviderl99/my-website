import styles from './Projects.module.scss'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "File Storage Drive",
      description: "A Google Drive-inspired cloud storage solution built with React and Firebase. Features include folder creation, file uploads, nested navigation, and secure user authentication. Users can store and organize various file types including images, videos, and documents in a familiar interface.",
      image: "/storage-drive.png",
      tags: ["React", "Firebase", "SCSS"],
      demo: "https://daviderl99.github.io/Storage-Drive/#/login",
      github: "https://github.com/daviderl99/Storage-Drive"
    },
    {
      title: "Another ToDo List",
      description: "A modern task management app built with SvelteKit, TypeScript, and TailwindCSS. Features drag-and-drop functionality, real-time updates, and a minimalist design. Demonstrates clean code architecture and modern front-end development practices.",
      image: "/todo.png",
      tags: ["Svelte", "TypeScript", "Tailwind CSS"],
      demo: "https://another-to-do-list-two.vercel.app",
      github: "https://github.com/daviderl99/AnotherToDoList"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImageWrapper}>
                <Image 
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={styles.projectImage}
                  width={1800}
                  height={1200}
                  quality={100}
                />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
