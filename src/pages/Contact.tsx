import { Link } from "react-router-dom";

function Contact() {

  return (
    <div className="contact">
      <section className="contact__content">
        <div className="contact__content__grid">
          <div className="contact__content__main">
            <p className="contact__content__title">Kontakt</p>
            <p className="contact__content__description">Współpracę z Klientem rozpoczynam od wstępnej konsultacji, która stanowi fundament całego procesu projektowego. Ten etap pozwala na szczegółowe omówienie założeń oraz oczekiwań wobec przyszłego wnętrza. Skupiam się na poznaniu estetycznych preferencji, funkcjonalnych potrzeb oraz stylu życia Inwestora, co umożliwia stworzenie projektu.</p>
            
            <div className="contact__content__description contact__content__description--info">
                <p><strong>E-mail:</strong><a href="mailto:projekt@kandstudio.pl">projekt@kandstudio.pl</a></p>
                <p><strong>Telefon:</strong><a href="tel:+48668642807">(+48) 668 642 807</a></p>
                <p><strong>Godziny pracy:</strong> Poniedziałek - Piątek 09:00-18:00</p>
                <p><strong>Social Media:</strong></p>
                <a href="https://www.instagram.com/kand.studio/" target="_blank">
                  <div className="contact__icon"></div>
                </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;