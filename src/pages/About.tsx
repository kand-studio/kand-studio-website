import { Link } from "react-router-dom";
import AboutMe from "../media/images/about-me.jpg";

function About() {

  return (
    <div className="about">

      <section className="about__content">
        <div className="about__content__grid">

          <aside className="about__content__sidebar desktop">
            <img src={AboutMe} className="about__content__img" />
          </aside>

          <div className="about__content__main">
            <p className="about__content__title">Firma</p>
            <span className="about__content__logo"></span>
            <p className="about__content__description">
              KAND.studio to autorskie biuro projektowe specjalizujące się w kompleksowym projektowaniu wnętrz prywatnych oraz inwestycyjnych.
              <br /><br />
              Studio powstało z potrzeby tworzenia przestrzeni, które łączą wysoką estetykę, funkcjonalność oraz najwyższą jakość wykonania. Każdy projekt realizowany jest z dbałością o najmniejsze detale, przy zachowaniu pełnej kontroli nad procesem projektowym i realizacyjnym.
              <br /><br />
              Filozofia KAND.studio opiera się na indywidualnym podejściu do każdego Klienta oraz przekonaniu, że najlepsze wnętrza powstają tam, gdzie przemyślana koncepcja spotyka się z doskonałym wykonaniem.
              <br /><br />
              Dzięki kompleksowej obsłudze studio prowadzi inwestycje od pierwszych szkiców i wizualizacji, przez dokumentację techniczną, aż po nadzór nad realizacją i projekty „pod klucz”.
              <br /><br />
              Efektem są wnętrza eleganckie, ponadczasowe i dopracowane w każdym detalu - tworzone dla osób, które cenią jakość, komfort oraz profesjonalne wsparcie na każdym etapie inwestycji.
            </p>

            <div className="about__divider" /> 

            <p className="about__content__title">O mnie</p>
            <p className="about__content__description">
              <span>Kamil Niemiec</span>
              <br className="mobile" />
              <br className="mobile" />
              <img src={AboutMe} className="about__content__img mobile" />
              <br />
              <br />
              Projektuję wnętrza z myślą o tym, jak będą funkcjonować na co dzień - nie tylko jak będą wyglądać na wizualizacjach.
              <br /><br />
              Prowadzę pracownię projektową, w której łączę estetykę z przemyślanymi rozwiązaniami funkcjonalnymi i pełną kontrolą nad procesem realizacji. Każdy projekt traktuję indywidualnie - <strong>nie pracuję na schematach</strong>, tylko szukam rozwiązań dopasowanych do konkretnej przestrzeni i stylu życia jej użytkowników.
              <br /><br />
              Specjalizuję się w projektach, które wymagają czegoś więcej niż standardowych rozwiązań - gdzie liczy się spójność, jakość materiałów i dopracowanie detalu.
              <br /><br />
              Dużą wagę przykładam do tego, aby projekt był nie tylko estetyczny, ale przede wszystkim realny do wykonania. Dlatego cały proces opieram na doświadczeniu technicznym i współpracy ze sprawdzonymi wykonawcami.
              <br /><br />
              Pracuję w sposób uporządkowany i transparentny - tak, aby Klient na każdym etapie miał pełną kontrolę nad tym, co powstaje, bez konieczności angażowania się w kwestie techniczne.
              <br /><br />
              Efektem jest wnętrze dopracowane w każdym detalu - spójne, funkcjonalne i gotowe do życia.
            </p>

            <div className="about__divider" /> 

            <p className="about__content__title">Informacje</p>
            <p className="about__content__description about__content__description--info">
                <p><strong>E-mail:</strong> <a href="mailto:projekt@kandstudio.pl">projekt@kandstudio.pl</a></p>
                <p><strong>Telefon:</strong> <a href="tel:+48668642807">(+48) 668 642 807</a></p>
                <p><strong>Godziny pracy:</strong> Poniedziałek - Piątek 09:00-18:00</p>
                <Link to="/contact">
                  <span className="arrow-link" />
                  Kontakt
                </Link>
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;