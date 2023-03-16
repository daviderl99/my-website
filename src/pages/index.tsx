import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Website by David Frederik Erlich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}

export default Home;