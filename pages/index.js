import Head from 'next/head'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import ServiceList from '../components/ServiceList'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import BarritaHor from '../components/BarritaHor'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odontosmile</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/19ab91f7bd.js" crossorigin="anonymous"></script>
      </Head>

      <Navbar />

      <Hero />

      <BarritaHor />

      <ServiceList />

      <BarritaHor />

      <Contact />

      <BarritaHor />

      <Footer />

    </div>
  )
}
