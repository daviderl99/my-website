import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <h1>David Frederik Erlich</h1>
        <h2>Frontend Developer</h2>
        <p className={styles.tagline}>Crafting modern web experiences with clean, efficient code</p>
        <div className={styles.ctaButtons}>
          <a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
          <a href="#projects" className={styles.secondaryBtn}>View Work</a>
        </div>
      </div>
    </section>
  )
}
