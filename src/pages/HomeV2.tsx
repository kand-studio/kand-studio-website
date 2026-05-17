import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectBlock from "../components/ProjectBlockv2";
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
    let lastTouchX = 0;

    const onWheel = (e: WheelEvent) => {
      velocity.current += e.deltaY * 0.025;
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchX = e.touches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentX = e.touches[0].clientX;

      const deltaX = lastTouchX - currentX;

      velocity.current += deltaX * 0.12;

      lastTouchX = currentX;
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    window.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });

    window.addEventListener("touchmove", onTouchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", onWheel);

      window.removeEventListener("touchstart", onTouchStart);

      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      raf.current = requestAnimationFrame(animate);

      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth / 2;
      const baseSpeed = window.innerWidth <= 992 ? 0.35 : 0.8;
      position.current += baseSpeed + velocity.current;


      if (position.current >= totalWidth) {
        position.current -= totalWidth;
      }

      if (position.current < 0) {
        position.current += totalWidth;
      }

      velocity.current *= 0.92;

      if (Math.abs(velocity.current) < 0.01) {
        velocity.current = 0;
      }

      trackRef.current.style.transform =
        `translate3d(${-position.current}px, 0, 0)`;
    };

    animate();

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="homev2">
      <div className="homev2__wrapper">
        <div className="homev2__track" ref={trackRef}>
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
            <Link
              key={`dup-${project.number}`}
              to={`/project/${project.number}`}
            >
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