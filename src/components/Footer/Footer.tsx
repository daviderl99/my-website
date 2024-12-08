import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          © {new Date().getFullYear()} David Frederik Erlich. Built with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>
        </p>
      </div>
    </footer>
  )
}
