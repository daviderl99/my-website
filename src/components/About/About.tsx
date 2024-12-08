import styles from './About.module.scss'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a Frontend Developer with a passion for creating clean, user-friendly web applications. 
          My focus is on modern JavaScript frameworks and responsive design, with a growing interest 
          in backend development.
        </p>
      </div>
    </section>
  )
}
