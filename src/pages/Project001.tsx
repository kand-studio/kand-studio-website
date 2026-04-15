import { useEffect, useState } from "react";

function Project001() {
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

    // PARALLAX
    const parallax = scroll * 0.4;

    // DARK OVERLAY
    const overlayOpacity = Math.min(scroll / window.innerHeight, 0.75);
    const progress = Math.min(scroll / 300, 1);
    const titleOpacity = 1 - progress;
    const titleTranslate = progress * 80;
    //const titleBlur = progress * 6;
  return (
    <div className="project">

      <section className="project__hero">
        <img
          src="https://picsum.photos/1600/900"
          alt="hero"
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
                transform: `translateY(${titleTranslate}px)`,
                //filter: `blur(${titleBlur}px)`
            }}
        >
            Nowoczesny Dom w Lesie
        </h1>
      </section>

      <section className="project__content">
        <div className="project__content__grid">

          <aside className="project__content__sidebar">
            <p className="project__content__number">001</p>
            <h2 className="project__content__title">Nowoczesny Dom w Lesie</h2>

            <div className="project__content__meta">
              <p><strong>Styl:</strong> Minimalizm</p>
              <p><strong>Lokalizacja:</strong>Wrocław</p>
              <p><strong>Rok:</strong> 2024</p>
              <p><strong>Metraż:</strong> 130 m<sup>2</sup></p>
              <p>
                <strong>Pomieszczenia:</strong> 
                 salon, kuchnia, łazienka, biuro, sypialnia, garderoba
              </p>
            </div>
          </aside>

          <div className="project__content__main">
            <p className="project__content__description">
              Projekt nowoczesnego domu jednorodzinnego inspirowanego naturą.
              Duże przeszklenia, minimalistyczna bryła i naturalne materiały.
            </p>

            <div className="project__content__gallery">
              <img src="https://picsum.photos/800/500?1" />
              <img src="https://picsum.photos/800/500?2" />
              <img src="https://picsum.photos/800/500?3" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Project001;