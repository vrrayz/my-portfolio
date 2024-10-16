import React from "react";
import Image from "next/image";
import projectImage from "../images/projects/project_image.png";

export const ProjectCard = () => {
  return (
    <div className="project-card">
      <Image src={projectImage} alt={"project"} />
      <div className="technologies">
        <span>HTML</span>
        <span>SCSS</span>
        <span>Python</span>
        <span>Flask</span>
      </div>
      <div className="card-body">
        <div className="title">ChertNodes</div>
        <p className="description">Minecraft servers hosting </p>
        <div className="action-buttons">
          <a href="#">
            <span>Live </span>
            <span>{"<~>"}</span>
          </a>
          <a href="#">
            <span>Live </span>
            <span>{"<~>"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
