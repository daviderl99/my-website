import styles from './Skills.module.scss'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiWebpack } from 'react-icons/si';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Frontend</h3>
            <ul>
              <li><FaReact /> React / Next.js</li>
              <li><SiTypescript /> TypeScript</li>
              <li><FaHtml5 /> HTML5 / <FaCss3Alt /> CSS3</li>
              <li><SiTailwindcss /> SCSS / Tailwind</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend</h3>
            <ul>
              <li><FaNodeJs /> Node.js</li>
              <li><SiExpress /> Express</li>
              <li>RESTful APIs</li>
              <li><SiMongodb /> SQL / NoSQL</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Tools</h3>
            <ul>
              <li><FaGitAlt /> Git / <FaGithub /> GitHub</li>
              <li>VS Code</li>
              <li><SiWebpack /> Webpack</li>
              <li><FaDocker /> Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
