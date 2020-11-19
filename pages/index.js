import Head from 'next/head'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import ServiceList from '../components/ServiceList'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import BarritaHor from '../components/BarritaHor'
import Subhero from '../components/Subhero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Totalsmile - Clínica dental</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/19ab91f7bd.js" crossorigin="anonymous"></script>
        <meta name="google-site-verification" content="GbEnakp9x0OesN6ag2Qm5mn7zzV-RY7uEd1xNwv7_qk" />
      </Head>

      <Navbar />

      <Hero />

      <Subhero />

      <BarritaHor />

      <ServiceList />

      <BarritaHor />

      <Contact />

      <BarritaHor />

      <Footer />

    </div>
  )
}
