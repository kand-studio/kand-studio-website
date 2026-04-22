import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { number } = useParams();
  const project = projects.find((p) => p.number === number);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY);

      if (scrollY < window.innerHeight) {
        document.body.classList.add("hero-active");
      } else {
        document.body.classList.remove("hero-active");
      }

      if (scrollY < 24) {
        document.body.classList.add("footer-hero");
      } else {
        document.body.classList.remove("footer-hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) return <div>Projekt nie istnieje</div>;

  const parallax = scroll * 0.4;
  const overlayOpacity = Math.min(scroll / window.innerHeight, 0.75);
  const progress = Math.min(scroll / 300, 1);
  const titleOpacity = 1 - progress;
  const titleTranslate = progress * 80;

  return (
    <div className="project">

      <section className="project__hero">
        <img
          src={project.cover}
          alt={project.title}
          className="project__hero-img"
          style={{
            transform: `translateY(${parallax}px)`
          }}
        />

        <div
          className="project__hero-overlay"
          style={{
            opacity: overlayOpacity
          }}
        />

        <h1
          className="project__hero-title"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslate}px)`
          }}
        >
          {project.title}
        </h1>
      </section>

      <section className="project__content">
        <div className="project__content__grid">

          <aside className="project__content__sidebar">
            <p className="project__content__number">{project.number}</p>
            <h2 className="project__content__title">{project.title}</h2>

            <div className="project__content__meta">
              <p><strong>Styl:</strong> {project.style}</p>
              <p><strong>Lokalizacja:</strong> {project.location}</p>
              <p><strong>Rok:</strong> {project.year}</p>
              <p>
                <strong>Metraż:</strong> {project.area} m²
              </p>
              <p>
                <strong>Pomieszczenia:</strong>{" "}
                {project.rooms.join(", ")}
              </p>
            </div>
          </aside>

          <div className="project__content__main">

            <div className="project__content__description">
                <p><strong>{project.title}</strong> </p>
                <br />
              {project.description.map((p, i) => (
                <>
                <p key={i}>{p}</p>
                <br />
                </>
              ))}
            </div>

             <div className="project__content__description project__content__description--extra">
                <p><strong>{project.style}</strong> </p>
                <br />
                <p>{project.styleDescription}</p>
            </div>

            <div className="project__content__gallery">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title}-${i}`} />
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ProjectPage;