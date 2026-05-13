import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";

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

          <aside className="work__content__sidebar">
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
            <p className="work__content__title">Jak działamy</p>
            <p className="work__content__description">
              Projektowanie wnętrza to proces, który wymaga nie tylko estetyki, ale przede wszystkim przemyślanej strategii i pełnej kontroli nad każdym etapem.
              <br /><br />
              Współpracę rozpoczynam od indywidualnej konsultacji, podczas której poznaję Twoje potrzeby, styl życia oraz oczekiwania wobec przyszłej przestrzeni. To kluczowy moment, który pozwala mi stworzyć spójną wizję projektu dopasowaną nie tylko do wnętrza, ale przede wszystkim do Ciebie.
              <br /><br />
              Na tej podstawie prowadzę cały proces projektowy w sposób uporządkowany, transparentny i maksymalnie odciążający dla Klienta.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title">Układ funkcjonalny</p>
            <p className="work__content__description">
              Każdy projekt zaczyna się od dobrze zaplanowanej przestrzeni.
              <br /><br />
              Tworzę dopracowane warianty układu funkcjonalnego, które analizujemy pod kątem ergonomii, komfortu i realnych możliwości wykonawczych. Wspólnie wybieramy najlepsze rozwiązanie, które następnie dopracowuję w szczegółach.
              <br /><br />
              To etap, który decyduje o jakości codziennego życia w projektowanym wnętrzu.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title">Koncepcja i wizualizacje</p>
            <p className="work__content__description">
                Na tym etapie projekt zyskuje swój charakter i tożsamość.
                <br /><br />
                Dobieram materiały, faktury i wyposażenie, tworząc spójną, ponadczasową estetykę. Całość przedstawiam w formie realistycznych wizualizacji, które pozwalają precyzyjnie zobaczyć finalny efekt jeszcze przed rozpoczęciem realizacji.
                <br /><br />
                Dopracowujemy każdy detal — aż do momentu, w którym projekt jest w pełni zgodny z Twoją wizją.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title">Dokumentacja techniczna</p>
            <p className="work__content__description">
              Po zatwierdzeniu koncepcji przygotowuję kompletną dokumentację wykonawczą.
              <br /><br />
              Zawiera ona wszystkie niezbędne rysunki i wytyczne dla ekip realizacyjnych — od instalacji, przez zabudowy meblowe, po detale wykończeniowe.
              <br /><br />
              Dzięki temu realizacja przebiega sprawnie, a ryzyko błędów i niedomówień jest ograniczone do minimum.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title">Realizacja i nadzór</p>
            <p className="work__content__description">
              Na etapie realizacji zapewniam wsparcie oraz kontrolę nad zgodnością prac z projektem.
              <br /><br />
              W zależności od potrzeb:
              <br /><br />
              – koordynuję komunikację z wykonawcami
              – odpowiadam na bieżące pytania i decyzje techniczne
              – weryfikuję zgodność realizacji z projektem
              – pełnię autorski nadzór nad inwestycją
              <br /><br />
              Dodatkowo otrzymujesz szczegółową listę wyposażenia oraz kosztorys, co pozwala zachować pełną kontrolę nad budżetem.
            </p>   

            <div className="work__divider" /> 
            
            <p className="work__content__title">Realizacja „pod klucz”</p>
            <p className="work__content__description">
              Dla Klientów, którzy cenią swój czas i komfort, oferuję kompleksową realizację wnętrza „pod klucz”.
              <br /><br />
              W tym modelu przejmuję pełną odpowiedzialność za cały proces — od zatwierdzenia projektu aż po oddanie gotowej, w pełni urządzonej przestrzeni.
              <br /><br />
              Twoje zaangażowanie ogranicza się do kluczowych decyzji.
              <br /><br />
              Całą resztą zajmuję się ja i mój zespół:
              <br /><br />
              – kompleksowa koordynacja zamówień i dostaw
              – zarządzanie ekipami wykonawczymi
              – kontrola jakości i harmonogramu prac
              – rozwiązywanie bieżących kwestii technicznych
              – obsługa ewentualnych reklamacji
              <br /><br />
              Efektem jest spójnie zrealizowane wnętrze, dopracowane w każdym detalu — bez chaosu organizacyjnego i bez angażowania Cię w procesy techniczne.
            </p> 
    
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