import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.red}>
          <i className={`${styles.icon} fab fa-instagram`} />
          <a
            href="https://www.instagram.com/odontosmile/"
            target="_blank"
            rel="noopener noreferrer">@odontosmile</a>
        </div>
        <div className={styles.red}>
          <i className={`${styles.icon} fab fa-facebook-square`} />
          <a
            href="https://www.facebook.com/odontosmile/"
            target="_blank"
            rel="noopener noreferrer">/odontosmile</a>
        </div>
        <div className={styles.red}>
          <i className={`${styles.icon} far fa-envelope`} />
          <a
            href="mailto:odontosmile@gmail.com&subject=Consulta%20web">odontosmile@gmail.com</a>
        </div>
        <div className={styles.red}>
          <i className={`${styles.icon} fas fa-phone-alt`} />
          <a
            href="https://wa.me/5491151743319"
            target="_blank"
            rel="noopener noreferrer">11-51743319</a>
        </div>
        <div className={styles.red}>
          <i className={`${styles.icon} fas fa-map-marker-alt`} />
          <a
            href="https://goo.gl/maps/8rK2hUh8C2xnpfUD8"
            target="_blank"
            rel="noopener noreferrer">Av. Rivadavia 7356 - piso 1</a>
        </div>
      </div>
      <a
        href="https://github.com/matiascorteze"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.signature}>Made with <span className={styles.heart}>♥</span> by Matias Corteze</a>
    </section>
  )
}