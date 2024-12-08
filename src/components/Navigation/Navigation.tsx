import styles from './Navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navContent}>
        <div className={styles.logo}>DE</div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
