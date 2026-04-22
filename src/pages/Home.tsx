import { Link } from "react-router-dom";
import ProjectBlock from "../components/ProjectBlock";
import { projects } from "../data/projects";

function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        {projects.map((project) => (
          <Link key={project.number} to={`/project/${project.number}`}>
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
  );
}

export default Home;