import { Link } from "react-router-dom";
import ProjectBlock from "../components/ProjectBlock";
import { projects } from "../data/projects";

function Home() {
  const loopedProjects = [...projects, ...projects];

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__track">
          {loopedProjects.map((project, index) => (
            <Link key={`${project.number}-${index}`} to={`/project/${project.number}`}>
              <ProjectBlock
                image={project.cover}
                title={project.title}
                number={project.number}
                description={project.style}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;