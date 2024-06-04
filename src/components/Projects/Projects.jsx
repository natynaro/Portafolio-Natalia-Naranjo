import React from "react";
import styles from "./Projects.module.css";
import projects from "/data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="proyectos">
      <h2 className={styles.title}>Proyectos</h2>
      <p className={styles.description}>
        Haz clic en la imagen para ver la demo del proyecto y en el botón de Repositorio para ir al link de Github.
      </p>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
