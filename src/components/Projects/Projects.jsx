import React from "react";

import styles from "./Projects.module.css";

import projects from "/data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="proyectos">
      <h2 className={styles.title}>Projectos (de ingeniería 👌)</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
