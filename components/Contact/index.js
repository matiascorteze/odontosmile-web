import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.container} id="contact">

      <h1 className={styles.title}>Sacá tu turno con nosotros</h1>
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
            <i className={`${styles.icon} fab fa-instagram`} />
            <a
              href="https://www.instagram.com/odontosmile/.ar"
              target="_blank"
              rel="noopener noreferrer">@odontosmile.ar</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} fab fa-facebook-square`} />
            <a
              href="https://www.facebook.com/odontosmile.ar/"
              target="_blank"
              rel="noopener noreferrer">/odontosmile.ar</a>
          </div>
          <div className={styles.red}>
            <i className={`${styles.icon} far fa-envelope`} />
            <a
              href="mailto:odontosmileturnos@gmail.com
              ?subject=Consulta%20turno%20web
              &body=Buen%20día!%20Necesito%20un%20turno.">odontosmileturnos@gmail.com</a>
          </div>
          {/* <div className={styles.red}>
            <i className={`${styles.icon} fas fa-phone-alt`} />
            <a
              href="https://wa.me/5491151743319"
              target="_blank"
              rel="noopener noreferrer">11-51743319</a>
          </div> */}
        </div>

      </div>

    </section>
  )
}