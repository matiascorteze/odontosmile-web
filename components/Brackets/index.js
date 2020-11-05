import styles from "./Brackets.module.css"

export default function Brackets(props) {

  const { title, desc, img, alt_img } = props.props;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.line}></div>
      <div className={styles.topblock}>
        {/* <img
          className={styles.img}
          src={img}
          alt="foto servicio" /> */}
        <div className={styles.info}>
          {desc && desc.map((des, key) => {
            return ( desc.indexOf(des) === 0 || desc.indexOf(des) === 2 || desc.indexOf(des) === 4 ?  <img 
                className={styles.alt_img}
                src={des}
                alt="foto alt"
                key={key}
              /> :<span key={key}>{des}</span> 
            )
          })}
        </div>
      </div>
    </div>
  )
}