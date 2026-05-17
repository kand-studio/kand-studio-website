import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const isMobile = window.innerWidth <= 992;

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // aktualny index zdjęcia dla każdego projektu
  const [imageIndexes, setImageIndexes] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    if (isMobile || !hoveredProject) return;

    const project = projects.find(
      (p) => p.number === hoveredProject
    );

    if (!project) return;

    const maxImages = Math.min(project.images.length, 3);

    const interval = setInterval(() => {
      setImageIndexes((prev) => ({
        ...prev,
        [hoveredProject]:
          ((prev[hoveredProject] || 0) + 1) % maxImages,
      }));
    }, 600);

    return () => clearInterval(interval);
  }, [hoveredProject, isMobile]);

  return (
    <div className="projects">
      <section className="projects__content">
        <div className="projects__content__grid">
          {projects.map((project) => {
            const currentIndex =
              imageIndexes[project.number] || 0;

            return (
              <Link
                key={project.number}
                to={`/project/${project.number}`}
                className="projects__project"
                onMouseEnter={() => setHoveredProject(project.number)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="projects__project__image">
                  <img
                    src={
                      isMobile
                        ? project.cover
                        : project.images[currentIndex] ||
                          project.images[0]
                    }
                    alt={project.title}
                  />
                </div>

                <div className="projects__project__text">
                  <p className="projects__project__text__title">
                    {project.title}
                  </p>

                  <p className="projects__project__text__desc">
                    {project.style}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;