import { Link } from "react-router-dom";

function Cookies() {

  return (
    <div className="cookies">
      <section className="cookies__content">
        <div className="cookies__content__grid">

          <div className="cookies__content__main">
            <p className="cookies__content__title">404</p>
            <p className="cookies__content__description">
              Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona. Wróć na stronę główną, aby kontynuować przeglądanie projektów i oferty.
              <br />
                <Link to="/">
                  <span className="arrow-link" />
                  Powrót na stronę główną
                </Link>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Cookies;