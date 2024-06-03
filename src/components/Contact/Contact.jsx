import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contacto" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto</h2>
        <p>No me contactes pls (▀̿Ĺ̯▀̿ ̿)</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:natynaro@gmail.com">natynaro@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/natalia-naranjo-rodriguez">linkedin.com/natalia-naranjo-rodriguez</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/natynaro">github.com/natynaro</a>
        </li>
      </ul>
    </footer>
  );
};
