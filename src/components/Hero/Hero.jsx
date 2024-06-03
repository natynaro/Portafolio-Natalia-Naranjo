import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = ()=>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hola, me llamo Natalia (●'◡'●)</h1>
                <p className={styles.description}>Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad EIA cursando su 7mo semestre. Sigue leyendo para conocerme más (☆▽☆)</p>
                <a href="mailto:natynaro@gmail.com" className={styles.contactBtn}>¡Contáctame!</a>
            </div>
            <img src={getImageUrl("hero/yopng.png")} alt="Imagen mía" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}