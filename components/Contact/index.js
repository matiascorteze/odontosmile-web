import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.container} id="contact">

      <h1 className={styles.title}>Pide tu turno con nosotros</h1>
      <h3 className={styles.subtitle}>Primera consulta gratis!</h3>
      <div className={styles.mainContainer}>
        <div className={styles.subcontainer}>
          <div className={styles.info}>
            <div className={styles.blockHeadline}>
              Sede Buenos Aires / Argentina
            </div>
            <div className={styles.red}>
              <i className={`${styles.icon} fas fa-map-marker-alt`} />
              <a
                href="https://goo.gl/maps/8rK2hUh8C2xnpfUD8"
                target="_blank"
                rel="noopener noreferrer">Av. Rivadavia 7356 - piso 1</a>
            </div>
            <div className={styles.red}>
              <i className={`${styles.icon} far fa-calendar-alt`} />
              Lunes a Sábados de 9am a 7pm
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
                href="https://www.facebook.com/totalsmile.ar"
                target="_blank"
                rel="noopener noreferrer">/totalsmile.ar</a>
            </div>
            {/* <div className={styles.red}>
            <i className={`${styles.icon} far fa-envelope`} />
            <a
              href="mailto:turnos.totalsmile@gmail.com
              ?subject=Consulta%20turno%20web
              &body=Hola!%20Me%20gustaría%20que%20me%20contacten.">turnos.totalsmile@gmail.com</a>
          </div> */}
            <div className={styles.red}>
              <i className={`${styles.icon} fas fa-phone-alt`} />
              <a
                href="https://wa.me/5491125579244"
                target="_blank"
                rel="noopener noreferrer">11-25579244</a>
            </div>
          </div>
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

        </div>
        <div className={styles.subcontainer}>
          <div className={styles.info}>
            <div className={styles.blockHeadline}>
              Sede Cumaná / Venezuela
            </div>
            <div className={styles.red}>
              <i className={`${styles.icon} fas fa-map-marker-alt`} />
              <a
                href="https://goo.gl/maps/8rK2hUh8C2xnpfUD8"
                target="_blank"
                rel="noopener noreferrer">Av. Fernández de Zerpa <br /> Edif La Copita - Piso 3 Ofic 35</a>
            </div>
            <div className={styles.red}>
              <i className={`${styles.icon} far fa-calendar-alt`} />
                Lunes a Viernes <br /> de 8am a 12am y de 1pm a 5pm <br /> Sábados de 8am a 2pm
            </div>
            <div className={styles.red}>
              <i className={`${styles.icon} fab fa-instagram`} />
              <a
                href="https://www.instagram.com/totalsmile.ve"
                target="_blank"
                rel="noopener noreferrer">@totalsmile.ve</a>
            </div>
            <div className={styles.red}>
              <i className={`${styles.icon} fab fa-facebook-square`} />
              <a
                href="https://www.facebook.com/people/Totalsmileve/100083186169755/"
                target="_blank"
                rel="noopener noreferrer">/Totalsmile.ve</a>
            </div>
            {/* <div className={styles.red}>
            <i className={`${styles.icon} far fa-envelope`} />
            <a
              href="mailto:turnos.totalsmile@gmail.com
              ?subject=Consulta%20turno%20web
              &body=Hola!%20Me%20gustaría%20que%20me%20contacten.">turnos.totalsmile@gmail.com</a>
          </div> */}
            <div className={styles.red}>
              <i className={`${styles.icon} fas fa-phone-alt`} />
              <a
                href="https://wa.me/584128640490"
                target="_blank"
                rel="noopener noreferrer">0412-8640490</a>
            </div>
          </div>
          <div className={styles.mapouter}>
            <div className={styles.gmap_canvas}>
              <iframe
                width="300"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.847309110674!2d-64.17213523777119!3d10.469950310616765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8ae4ff9d2c65271!2sCentro%20Profesional%20La%20Copita!5e0!3m2!1ses-419!2sar!4v1669578084310!5m2!1ses-419!2sar"
                frameBorder="0"
                scrolling="no"></iframe>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}