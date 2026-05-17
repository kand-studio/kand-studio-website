import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectBlock from "../components/ProjectBlock";
import { projects } from "../data/projects";

function Home() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const position = useRef(0);
  const velocity = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // deltaY:
      // > 0 = scroll down
      // < 0 = scroll up

      velocity.current += e.deltaY * 0.02;
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const animate = () => {
      raf.current = requestAnimationFrame(animate);

      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth / 2;

      const baseSpeed = 0.8;

      position.current += baseSpeed + velocity.current;

      if (position.current >= totalWidth) {
        position.current -= totalWidth;
      }

      if (position.current < 0) {
        position.current += totalWidth;
      }

      velocity.current *= 0.92;

      trackRef.current.style.transform =
        `translate3d(${-position.current}px, 0, 0)`;
    };

    animate();

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__track" ref={trackRef}>

          {/* duplicate for seamless loop */}
          {projects.map((project) => (
            <Link key={project.number} to={`/project/${project.number}`}>
              <ProjectBlock
                image={project.images[0]}
                title={project.title}
                number={project.number}
                description={project.style}
              />
            </Link>
          ))}

          {projects.map((project) => (
            <Link key={`dup-${project.number}`} to={`/project/${project.number}`}>
              <ProjectBlock
                image={project.images[0]}
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