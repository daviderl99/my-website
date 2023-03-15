import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cv">CV</Link>
      </nav>
    </div>
  )
}
