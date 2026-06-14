import { Link } from "react-router-dom";

function Error() {

  return (
    <div className="error">
      <section className="error__content">
        <div className="error__content__grid">

          <div className="error__content__main">
            <p className="error__content__title">404</p>
            <p className="error__content__description">
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

export default Error;