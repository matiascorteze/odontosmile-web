import Service from "../Service";
import styles from "./ServiceList.module.css";
import Brackets from "../Brackets";


export default function ServiceList() {

  const services = [
    {
      "title": "Prótesis e Implantes",
      "desc": ["Tratamientos protésicos para restituir alguna pieza o piezas dentales ausentes como Implantes, Perno y Corona, Prótesis Removibles Flexibles, Acrílicas y Metal Acrílicas."],
      "img": "https://i.postimg.cc/W1Vd8yLj/protesis-01.jpg",
      "alt_img": ["https://i.postimg.cc/cJ4ry8Lb/protesis-02.jpg", "https://i.postimg.cc/ZKp9rSQV/protesis-03.jpg", "https://i.postimg.cc/MpYvFYqB/protesis-04.jpg"]

    },
    // {
    //   "title": "Brackets",
    //   "desc": ["Brackets Metálicos de acero inoxidable de color gris plata. Clásicos y económicos.", " ", "Brackets de Porcelana de color blanco siendo más estéticos y discretos.", " ", "Brackets de Zirconio que son altamente estéticos, de aspecto cristal."],
    //   "img": "https://i.postimg.cc/wv1M38J5/brackets-01.jpg",
    //   "alt_img": ["https://i.postimg.cc/MTgTQPbC/brackets-02.jpg", "https://i.postimg.cc/L5fsBtxn/brackets-03.jpg", "https://i.postimg.cc/dQTDYFJw/brackets-04.jpg"]

    // },
    {
      "title": "Estética Dental",
      "desc": ["Blanqueamiento Dental, se realiza en una sola sesión de 40 min para aclarar hasta 3 tonalidades el color de los dientes sin causarles daños.", " ", "Carillas de Porcelana, técnica innovadora para obtener una perfecta sonrisa en tiempo record, corrigiendo defectos de forma, color y posición.", " ", "Gingivectomía, tambien llamado gingivoplastia se usa para mejorar el aspecto de las encias."],
      "img": "https://i.postimg.cc/Y94XR3TN/estetica-01.jpg",
      "alt_img": ["https://i.postimg.cc/c1n98FR0/estetica-02.jpg", "https://i.postimg.cc/C5kcTKhz/estetica-03.jpg", "https://i.postimg.cc/bJKmBnj7/estetica-04.jpg"]
    }
  ]

  const brackets = [
    {
      "title": "Brackets",
      "desc": ["https://i.postimg.cc/MTgTQPbC/brackets-02.jpg","Brackets Metálicos de acero inoxidable de color gris plata. Clásicos y económicos.", "https://i.postimg.cc/L5fsBtxn/brackets-03.jpg", "Brackets de Porcelana de color blanco siendo más estéticos y discretos.", "https://i.postimg.cc/j2QzdMgK/brackets-05.jpg", "Brackets de Zafiro que son altamente estéticos, de aspecto cristal."],
      "img": "https://i.postimg.cc/wv1M38J5/brackets-01.jpg",
      "alt_img": ["https://i.postimg.cc/MTgTQPbC/brackets-02.jpg", "https://i.postimg.cc/L5fsBtxn/brackets-03.jpg", "https://i.postimg.cc/dQTDYFJw/brackets-04.jpg"]
    }
  ]

  return (
    <section className={styles.container} id="services">
      <h1 className={styles.maintitle}>Conoce nuestros servicios</h1>
      <div className={styles.subcontainer}>
        {services && services.map((service, key) => {
          return (
            <Service props={service} key={key} />
          )
        })}
        {brackets && brackets.map((bracket, key) => {
          return (
            <Brackets props={bracket} key={key} />
          )
        })}
      </div>
    </section>
  )
}