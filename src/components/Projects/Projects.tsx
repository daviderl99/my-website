import styles from './Projects.module.scss'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with Next.js and TypeScript. Features smooth animations and dark mode support.",
      image: "/images/portfolio.png",
      tags: ["Next.js", "TypeScript", "SCSS"],
      demo: "https://your-portfolio-url.com",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Project Management App",
      description: "A full-stack project management application with real-time updates, task tracking, and team collaboration features.",
      image: "/images/project-management.png",
      tags: ["React", "Node.js", "MongoDB"],
      demo: "https://project-management-demo.com",
      github: "https://github.com/yourusername/project-management"
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
                  width={600}
                  height={400}
                  priority={index === 0}
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
