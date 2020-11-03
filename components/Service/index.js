import styles from "./Service.module.css"

export default function Service(props) {

  const { title, desc, img, alt_img } = props.props;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.line}></div>
      <div className={styles.topblock}>
        <img
          className={styles.img}
          src={img}
          alt="foto servicio" />
        <div className={styles.info}>
          {desc && desc.map((desc, key) => {
            return (
              <span key={key}>{desc}</span>
            )
          })}
        </div>
      </div>
      <div className={styles.bottomblock}>
          {alt_img && alt_img.map((img, key) => {
            return(
              <img 
                className={styles.alt_img}
                src={img}
                alt="foto alt"
                key={key}
              />
            )
          })}
      </div>
    </div>
  )
}