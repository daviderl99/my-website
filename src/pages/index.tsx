import Head from 'next/head'
import { Header } from '@/components/Header/Header';
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
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <h1 style={{textAlign: "center", fontSize: "10vh"}}>{`<Under construction />`}</h1>
      </div>
      {/* <Header /> */}
      {/* <main className={styles.main}>
        <div className={styles.typewriter}>
          <h1>David Frederik Erlich</h1>
        </div>
      </main> */}
    </>
  )
}

export default Home;