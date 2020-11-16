import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.container} id="contact">

      <h1 className={styles.title}>Sacá tu turno con nosotros</h1>
      <h3 className={styles.subtitle}>Primera consulta gratis!</h3>
      <div className={styles.subcontainer}>
        <div className={styles.mapouter}>
          <div className={styles.gmap_canvas}>
            <iframe
              width="300"
              height="300"
              src="https://maps.google.com/maps?q=Rivadavia%207356&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"></iframe>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.red}>
            <i className={`${styles.icon} fas fa-map-marker-alt`} />
            <a
              href="https://goo.gl/maps/8rK2hUh8C2xnpfUD8"
              target="_blank"
              rel="noopener noreferrer">Av. Rivadavia 7356 - piso 1</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} far fa-calendar-alt`} />
            <a
              href="https://goo.gl/maps/8rK2hUh8C2xnpfUD8"
              target="_blank"
              rel="noopener noreferrer">Lunes a Sábados de 9 a 19hrs</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} fab fa-instagram`} />
            <a
              href="https://www.instagram.com/totalsmile.ar"
              target="_blank"
              rel="noopener noreferrer">@totalsmile.ar</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} fab fa-facebook-square`} />
            <a
              href="https://www.facebook.com/Totalsmilear-112102714046888/"
              target="_blank"
              rel="noopener noreferrer">/Totalsmile.ar</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} far fa-envelope`} />
            <a
              href="mailto:turnos.totalsmile@gmail.com
              ?subject=Consulta%20turno%20web
              &body=Hola!%20Me%20gustaría%20que%20me%20contacten.">turnos.totalsmile@gmail.com</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} fas fa-phone-alt`} />
            <a
              href="https://wa.me/5491125579244"
              target="_blank"
              rel="noopener noreferrer">11-25579244</a>
          </div>
        </div>

      </div>

    </section>
  )
}