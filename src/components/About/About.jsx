import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="acerca">
      <h2 className={styles.title}>Aptitudes</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("nav/about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              hice esto con un tutorial, pero hay veces me salen las cosas ( •̀ ω •́ )y
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Soy capaz de hacer clases e interfaces (*/ω＼*)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/cursorIcon.png")} alt="UI/UX icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              Entre menos intuitivo sea un diseño, mejor. Cada vez que intento hacer algo en figma muere un hada del bosque (┬┬﹏┬┬)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
