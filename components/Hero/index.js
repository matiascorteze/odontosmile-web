import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h3 className={styles.info}>Implantes, brackets,<br/> estética dental.</h3>
        <div className={styles.img}/>

      </div>
    </section>
  )
}