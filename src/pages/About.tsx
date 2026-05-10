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
              KAND.studio to autorskie biuro projektowe, które tworzę z pasją, zaangażowaniem i pełnym oddaniem najwyższym standardom. Specjalizuję się w kompleksowych, nowoczesnych rozwiązaniach projektowych, w których każdy detal ma znaczenie. Moje podejście łączy estetykę z funkcjonalnością, a nadrzędną wartością pozostaje jakość - zarówno w koncepcji, jak i w realizacji.<br /><br />
              Wyróżniam się dbałością o detale i konsekwentnym dążeniem do perfekcji. Tworzę wnętrza z klasą i charakterem - dopracowane, eleganckie i skrojone na miarę codziennych potrzeb użytkowników. Dzięki transparentnej współpracy i wysokiej kulturze projektowej moje biuro zyskało opinię rzetelnego i niezawodnego partnera w świecie architektury wnętrz.<br /><br />
            </p>

            <p className="about__content__title">O mnie</p>
            <p className="about__content__description">
              <span>Kamil Niemiec</span>
              <br className="mobile" />
              <br className="mobile" />
              <img src={AboutMe} className="about__content__img mobile" />
              <br />
              <br />
              Każdy projekt to dla mnie indywidualna historia - dlatego z pełną uwagą wsłuchuję się w potrzeby klientów, doradzam na wszystkich etapach współpracy i konsekwentnie dążę do realizacji ich wizji. Kluczowe znaczenie mają dla mnie precyzja, staranność oraz spójność estetyczna, co przekłada się na wysokie zadowolenie klientów i długofalowe relacje oparte na zaufaniu.<br /><br />
              Każde zlecenie traktuję indywidualnie, z pełnym profesjonalizmem i zaangażowaniem - tak, aby efekt końcowy nie tylko spełniał, ale często przekraczał oczekiwania. Fundamentem mojej pracy są odpowiedzialność, relacja z klientem oraz zaufanie, które buduję od pierwszego spotkania aż po finalne oddanie projektu.
            </p>

            <p className="about__content__title">Informacje</p>
            <p className="about__content__description about__content__description--info">
                <p><strong>E-mail:</strong> projekt@kandstudio.pl</p>
                <p><strong>Telefon:</strong> (+48) 668 642 807</p>
                <p><strong>Godziny pracy:</strong> Poniedziałek - Piątek 09:00-18:00</p>
                <Link to="/contact">Kontakt</Link>
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;