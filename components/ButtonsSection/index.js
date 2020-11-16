import styles from "./ButtonsSection.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function ButtonsSection() {

  function scrollToTop() { 
    scroll.scrollToTop(); 
}

  return (
    <ul className={styles.container}>
      <Link 
        onClick={scrollToTop}
        duration={10}><li>INICIO</li></Link>
      <div className={styles.verbar}></div>
      <Link 
        activeClass={styles.active}
        to="services"
        spy={true}
        smooth={true}
        offset={-170}
        duration={10}><li>SERVICIOS</li></Link>
      <div className={styles.verbar}></div>
      <Link 
        activeClass={styles.active}
        to="contact"
        spy={true}
        smooth={true}
        offset={-170}
        duration={10}><li>CONTACTO</li></Link>
    </ul>
  )
}