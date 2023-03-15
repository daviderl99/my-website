import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/home">
          <span className={styles.linkText}>
            Home
          </span>
        </Link>
        <Link href="/about">
          <span className={styles.linkText}>
            About
          </span>
        </Link>
        <Link href="/cv">
          <span className={styles.linkText}>
            CV
          </span>
        </Link>
      </nav>
    </div>
  )
}
