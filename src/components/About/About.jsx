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
          alt="Muneca sentada con laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Con experiencia en la creación de interfaces de usuario atractivas y funcionales utilizando tecnologías como React, HTML, CSS, JavaScript, TypeScript, entre otras. Soy apasionada por el diseño intuitivo y la experiencia del usuario.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Especializada en el desarrollo de APIs robustas y seguras utilizando frameworks como Node.js y Spring Boot. Tengo habilidades en la gestión de bases de datos SQL y NoSQL, y en la implementación de lógica de negocio.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/cursorIcon.png")} alt="UI/UX icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Enfocada en crear diseños de interfaces de usuario que sean tanto visualmente atractivos como fáciles de usar. Utilizo herramientas como Figma para desarrollar prototipos y wireframes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("nav/about/serverIcon.png")} alt="Responsive Design icon" />
            <div className={styles.aboutItemText}>
              <h3>Responsive Design</h3>
              <p>
                Experiencia en el diseño y desarrollo de interfaces que se adaptan a diferentes tamaños de pantalla y dispositivos, asegurando una experiencia de usuario consistente y agradable.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
