import ButtonsSection from "../ButtonsSection";
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {

  function scrollToTop() {
    scroll.scrollToTop();
  }
  
  return (
    <nav className={styles.container} id="home">
      <div className={styles.subcontainer}>
        <Link
          onClick={scrollToTop}
          duration={10}>
          <img
            className={styles.logo}
            src="https://i.postimg.cc/7LL19yVt/odontosmile-logo.png"
            alt="Odontosmile logo" /></Link>
        <ButtonsSection />
      </div>
    </nav>
  )
}