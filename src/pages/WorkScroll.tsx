import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";
import { works } from "../data/works";

function Work() {
  const [hoveredProject, setHoveredProject] = useState<any>(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className="work"
      onMouseMove={handleMouseMove}
    >
      <section className="work__content">
        <div className="work__content__grid">

          <aside className="work__content__sidebar desktop">
            <p className="work__content__title">Projekty</p>

            <ul className="work__projects">
              {projects.map((project) => (
                <li
                  key={project.number}
                  className="work__projects__item"
                >
                  <Link 
                    to={`/project/${project.number}`}                   
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>


          <div className="work__content__main">

            {works.map((work, index) => (
              <>
              <div 
                  className="work__content__wrapper" 
                  style={{
                    position: 'sticky',
                    top: `${100 + index * 60}px`
                  }}>
                <p className="work__content__title">{work.title}</p>
                {work.label && <p className="work__content__label">{work.label}</p>}
                <p className="work__content__description">
                    {work.description.map((w, i) => (
                  <>
                  {w}
                  <br />
                  <br />
                  </>
                ))}
                </p>
              </div>
              <div 
                className="work__divider--wrapper"  
                style={{
                      position: 'sticky',
                      top: `${140 + index * 60}px`
                  }}  
              /> 
              </>
            ))}
            </div>
        </div>
      </section>

      {hoveredProject && (
        <div
          className="work__preview"
          style={{
            left: mousePosition.x + 30,
            top: mousePosition.y - 120,
          }}
        >
          {hoveredProject.images.slice(0, 3).map((image: string) => (
            <img
              key={image}
              src={image}
              alt=""
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Work;