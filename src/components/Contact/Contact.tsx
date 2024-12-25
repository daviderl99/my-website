import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactContent}>
          <h2>Get in Touch</h2>
          <p>
            I&apos;m currently open to new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to work together or just say hello!
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:your.email@example.com">
              <i className="fas fa-envelope"></i>
              Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
