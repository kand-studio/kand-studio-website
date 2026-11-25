
function Contact() {

  return (
    <div className="contact">
      <section className="contact__content">
        <div className="contact__content__grid">
          <div className="contact__content__main">
            <p className="contact__content__title">Kontakt</p>
            <p className="contact__content__description">
              Każdy projekt rozpoczyna się od rozmowy.
              <br /><br />
              To właśnie podczas pierwszego kontaktu poznaję Państwa potrzeby, oczekiwania oraz zakres planowanej inwestycji. Dzięki temu mogę zaproponować najbardziej odpowiedni model współpracy oraz wstępnie określić harmonogram prac.
              <br /><br />
              Jeżeli planują Państwo budowę, remont lub wykończenie wnętrza i poszukują kompleksowego wsparcia projektowego, zapraszam do kontaktu.
              <br /><br />
              Chętnie poznam Państwa potrzeby i pokażę, jak wygląda cały proces — od pierwszej koncepcji aż po realizację wymarzonego wnętrza. 
            </p>
            
            <div className="contact__content__description contact__content__description--info">
                <p><strong>E-mail:</strong><a href="mailto:projekt@kandstudio.pl">projekt@kandstudio.pl</a></p>
                <p><strong>Telefon:</strong><a href="tel:+48668642807">(+48) 668 642 807</a></p>
                <p><strong>Godziny pracy:</strong> Poniedziałek - Piątek 09:00-18:00</p>
                <p><strong>Social Media:</strong></p>
                <a href="https://www.instagram.com/kand.studio/" target="_blank" rel="noreferrer">
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
 