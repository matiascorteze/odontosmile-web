import styles from "./Subhero.module.css"

export default function Subhero() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Por qué preferirnos?</h3>
      <div className={styles.hero}>
        <div className={styles.img} />
      </div>
      <ul className={styles.list}>
        <li className={styles.pro}>
          Ofrecemos bajos costos y alta calidad en nuestros servicios.
        </li>
        <li className={styles.pro}>
          Contamos con Profesionales capacitados y siempre dispuestos para atenderte.
        </li>
        <li className={styles.pro}>
          Trabajamos con materiales  nacionales e importados de alta calidad.
        </li>
        <li className={styles.pro}>
          Cumplimos con las normas de higiene y bioseguridad.
        </li>
        <li className={styles.pro}>
          Podés continuar con nosotros tu tratamiento de ortodoncia si tenés los Brackets ya instalados.
        </li>
        <li className={styles.pro}>
          Brindamos promociones continuas.
        </li>
        <li className={styles.pro}>
          Fácil acceso por los diferentes medios de transporte público.
        </li>
      </ul>
    </section>
  )
}