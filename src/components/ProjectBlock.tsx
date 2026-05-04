import React from "react";

type ProjectBlockProps = {
  image: string;    
  title: string;
  number: number | string;
  description: string;
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  image,
  title,
  number,
  description,
}) => {
  return (
    <div className="project-block">
        <div className="project-block__text">
            <p className="project-block__text__number">{number}</p>
            <p className="project-block__text__title">{title}</p>
            <p className="project-block__text__desc">{description}</p>
        </div>
        <div className="project-block__img-wrapper">
          <img
            src={image}
            alt={title}
            className="project-block__img"
          />
        </div>
    </div>
  );
};

export default ProjectBlock;