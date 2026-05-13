import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="projects">
      <section className="projects__content">
        <div className="projects__content__grid">
          {projects.map((project) => (
            <Link
              key={project.number}
              to={`/project/${project.number}`}
              className="projects__project"
            >
              <div className="projects__project__image">
                <img src={project.cover} alt={project.title} />
              </div>

                <div className="projects__project__text">
                    <p className="projects__project__text__title">{project.title}</p>
                    <p className="projects__project__text__desc">{project.style}</p>
                </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;