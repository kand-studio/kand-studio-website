import React, { useState } from "react";

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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-block">
      <div className="project-block__img-wrapper">
        {!loaded && (
          <div className="project-block__img-placeholder" />
        )}

        <img
          src={image}
          alt={title}
          className={`project-block__img ${loaded ? "loaded" : ""}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <p className="project-block__text__title">{title}</p>
      <p className="project-block__text__desc">{description}</p>
    </div>
  );
};

export default ProjectBlock;