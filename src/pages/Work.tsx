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
            <p className="work__content__title">Jak działamy?</p>
            <p className="work__content__description">
              Projektowanie wnętrza to proces, który wymaga nie tylko wyczucia estetyki, ale przede wszystkim przemyślanej strategii oraz pełnej kontroli nad każdym etapem realizacji.
              <br /><br />
              Współpracę rozpoczynam od indywidualnej konsultacji, podczas której poznaję Państwa potrzeby, styl życia oraz oczekiwania wobec przyszłej przestrzeni. To kluczowy moment, który pozwala mi stworzyć spójną wizję projektu, dopasowaną nie tylko do wnętrza, ale przede wszystkim do jego przyszłych użytkowników.
              <br /><br />
              Na tej podstawie prowadzę cały proces projektowy w sposób uporządkowany, transparentny i maksymalnie odciążający Klienta.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title work__content__title--with-label">Układ funkcjonalny</p>
            <p className="work__content__label">Pierwszy krok</p>
            <p className="work__content__description">
              Każdy projekt rozpoczyna się od starannie zaplanowanej przestrzeni.
              <br /><br />
              Przygotowuję dopracowane warianty układu funkcjonalnego, które wspólnie analizujemy pod kątem ergonomii, komfortu użytkowania oraz realnych możliwości wykonawczych. Następnie wybieramy rozwiązanie najlepiej odpowiadające Państwa potrzebom, które dopracowuję w najdrobniejszych szczegółach.
              <br /><br />
              To etap, który w największym stopniu wpływa na komfort codziennego funkcjonowania we wnętrzu.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title work__content__title--with-label">Koncepcja i wizualizacje</p>
            <p className="work__content__label">Drugi krok</p>
            <p className="work__content__description">
              Na tym etapie projekt nabiera charakteru i indywidualnej tożsamości.
              <br /><br />
              Dobieram materiały, faktury, wyposażenie oraz elementy wykończeniowe, tworząc spójną i ponadczasową estetykę. Całość prezentuję w formie realistycznych wizualizacji, które pozwalają precyzyjnie zobaczyć finalny efekt jeszcze przed rozpoczęciem realizacji.
              <br /><br />
              Każdy detal jest starannie dopracowywany aż do momentu, w którym projekt w pełni odpowiada Państwa oczekiwaniom.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title work__content__title--with-label">Dokumentacja techniczna</p>
            <p className="work__content__label">Trzeci krok</p>
            <p className="work__content__description">
              Po zatwierdzeniu koncepcji przygotowuję kompletną dokumentację wykonawczą.
              <br /><br />
              Zawiera ona wszystkie niezbędne rysunki i wytyczne dla ekip realizacyjnych - od instalacji, przez zabudowy meblowe, aż po detale wykończeniowe.
              <br /><br />
              Dzięki temu realizacja przebiega sprawnie, a ryzyko błędów i niedomówień zostaje ograniczone do minimum.
            </p>

            <div className="work__divider" /> 

            <p className="work__content__title">Realizacja i nadzór</p>
            <p className="work__content__description">
              Na etapie realizacji zapewniam wsparcie oraz kontrolę nad zgodnością wykonywanych prac z projektem.
              <br /><br />
              W zależności od zakresu współpracy:
              <br /><br />
                    <div className="work__content__benefit">
                      <span className="work__content__benefit__dot" />

                      <p className="work__content__benefit__text">
                         koordynuję komunikację z wykonawcami,
                      </p>
                    </div>
                    <div className="work__content__benefit">
                      <span className="work__content__benefit__dot" />

                      <p className="work__content__benefit__text">
                        odpowiadam na bieżące pytania i kwestie techniczne,
                      </p>
                    </div>
                    <div className="work__content__benefit">
                      <span className="work__content__benefit__dot" />

                      <p className="work__content__benefit__text">
                        weryfikuję zgodność realizacji z dokumentacją projektową,
                      </p>
                    </div>
                    <div className="work__content__benefit">
                      <span className="work__content__benefit__dot" />

                      <p className="work__content__benefit__text">
                       sprawuję autorski nadzór nad inwestycją.
                      </p>
                    </div>
              <br />
             Dodatkowo Klient otrzymuje szczegółową listę wyposażenia oraz kosztorys, co pozwala zachować pełną kontrolę nad budżetem i przebiegiem realizacji.
            </p>  

            <div className="work__divider" /> 
            
            <p className="work__content__title">Realizacja „pod klucz”</p>
            <p className="work__content__description">
              Dla Klientów ceniących swój czas, komfort oraz kompleksową obsługę oferuję realizację wnętrza „pod klucz”.
              <br /><br />
              W tym modelu przejmuję pełną odpowiedzialność za cały proces - od momentu zatwierdzenia projektu aż po przekazanie gotowej, w pełni urządzonej przestrzeni.
              <br /><br />
              Całą resztą zajmuję się ja i mój zespół:
              <br /><br />
              Zaangażowanie Klienta ogranicza się wyłącznie do kluczowych decyzji projektowych. Całą pozostałą częścią procesu zajmuję się wraz z zespołem specjalistów.
              <br /><br />
              Zakres usługi obejmuje:
                    <br /><br />
                    <div className="offer__content__benefit">
                      <span className="offer__content__benefit__dot" />

                      <p className="offer__content__benefit__text">
                        kompleksową koordynację zamówień i dostaw,
                      </p>
                    </div>
                    <div className="offer__content__benefit">
                      <span className="offer__content__benefit__dot" />

                      <p className="offer__content__benefit__text">
                        zarządzanie ekipami wykonawczymi,   
                      </p>
                    </div>
                    <div className="offer__content__benefit">
                      <span className="offer__content__benefit__dot" />

                      <p className="offer__content__benefit__text">
                        kontrolę jakości oraz harmonogramu prac,
                      </p>
                    </div>
                    <div className="offer__content__benefit">
                      <span className="offer__content__benefit__dot" />

                      <p className="offer__content__benefit__text">
                         rozwiązywanie bieżących kwestii technicznych,
                      </p>
                    </div>
                    <div className="offer__content__benefit">
                      <span className="offer__content__benefit__dot" />

                      <p className="offer__content__benefit__text">
                        obsługę ewentualnych reklamacji i niezgodności.
                      </p>
                    </div>
              <br />
              Efektem jest spójnie zrealizowane wnętrze, dopracowane w każdym detalu, bez chaosu organizacyjnego i bez konieczności angażowania się przez Klienta w kwestie techniczne czy logistyczne.
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