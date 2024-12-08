import styles from './Skills.module.scss'

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Frontend</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>HTML5 / CSS3</li>
              <li>SCSS / Tailwind</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>RESTful APIs</li>
              <li>SQL / NoSQL</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Tools</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Webpack</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
