import { Link } from "react-router-dom";
import ProjectBlock from "../components/ProjectBlock";

function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
          <Link to="/project-001">
            <ProjectBlock
              image="https://picsum.photos/300/600?random=1"
              title="Dom w lesie brzozowym"
              number={"001"}
              description="styl industrialny w połączeniu z naturą "
            />
          </Link>

          <Link to="/project-002">
            <ProjectBlock
              image="https://picsum.photos/300/600?random=2"
              title="Dom w głębi lasu"
              number={"002"}
              description="styl Japandi"
            />
          </Link>

          <Link to="/project-003">
            <ProjectBlock
              image="https://picsum.photos/300/600?random=3"
              title="Elegancja w nowoczesnym wydaniu"
              number={"003"}
              description="styl modern classic"
            />
          </Link>

          <Link to="/project-004">
            <ProjectBlock
              image="https://picsum.photos/300/600?random=4"
              title="Szeregówka z dala od miastowego zgiełku "
              number={"004"}
              description="styl wabi sabi "
            />
          </Link>
        </div>
    </div>
  );
}

export default Home;