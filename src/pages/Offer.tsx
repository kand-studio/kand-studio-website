import { useMemo, useState } from "react";

type Offer = {
  id: number;
  name: string;
  priceMin: number;
  priceMax: number;
  content: {
    items: string[];
    priceText: string;
    description?: string;
  };
};

type Result = {
  min: number;
  max: number;
};

function OfferPage() {
  const offers: Offer[] = [
    {
      id: 1,
      name: "Funkcjonalny",
      priceMin: 70,
      priceMax: 100,
      content: {
        items: [
          "Rzuty układu funkcjonalnego z wyposażeniem",
          "Przedstawienie proponowanej kolorystyki i materiałów",
          "Spis gładzi i podłóg (bez metrażu)",
        ],
        description: "Dla osób, które chcą zobaczyć koncepcję wnętrza bez pełnej dokumentacji.",
        priceText: "Cena od 70 zł/m²",
      },
    },
    {
      id: 2,
      name: "Koncepcyjny",
      priceMin: 150,
      priceMax: 200,
      content: {
        items: [
          "Konsultacje",
          "Rzuty układu funkcjonalnego z wyposażeniem",
          "Przedstawienie proponowanej kolorystyki i materiałów",
          "Wizualizacje 3D o charakterze poglądowym",
          "Uproszczony rysunek techniczny z zaznaczeniem układu gładzi ściennych",
          "Spis gładzi i podłóg (bez metrażu)",
        ],
        description: "Spójna koncepcja wnętrza bez pełnej dokumentacji technicznej.",
        priceText: "Cena od 150 zł/m²",
      },
    },
    {
      id: 3,
      name: "Wykonawczy",
      priceMin: 210,
      priceMax: 290,
      content: {
        items: [
          "Inwentaryzacja",
          "Konsultacje",
          "Rzuty układu funkcjonalnego z wyposażeniem",
          "Przedstawienie proponowanej kolorystyki i materiałów",
          "Wizualizacje 3D o charakterze poglądowym",
          "Rzuty techniczne określające układy ścian, sufitów podwieszanych i ścianek dekoracyjnych",
          "Układ płytek oraz pełny spis gładzi i podłóg z podanym metrażem",
          "Rzuty określające położenie przyłączy wodno-kanalizacyjnych oraz ich ewentualne przesunięcia",
          "Rzuty określające położenie przyłączy elektrycznych",
          "Przekroje techniczne projektowanych zabudów meblowych",
          "Podstawowa lista zakupów wyposażenia wraz z organizacją zamówień",
          "Wizyty w sklepach branżowych, prezentowanie materiałów i wyposażenia na żywo oraz omówienie i przedstawienie zalet i wad wybranych produktów",
          "Omówienie projektu z wykonawcami",
          "Druk projektu dla Inwestora",
        ],
        description:"Dokładna dokumentacja techniczna i pełna kontrola projektu.",
        priceText: "Cena od 210 zł/m²",
      },
    },
    {
      id: 4,
      name: "Premium",
      priceMin: 290,
      priceMax: 360,
      content: {
        items: [
          "Inwentaryzacja",
          "Konsultacje",
          "Rzuty układu funkcjonalnego z wyposażeniem",
          "Przedstawienie proponowanej kolorystyki i materiałów",
          "Wizualizacje 3D o charakterze poglądowym",
          "Rzuty techniczne określające układy ścian, sufitów podwieszanych i ścianek dekoracyjnych",
          "Rysunki rozwiązań szczegółowych (jeśli są konieczne) w skali 1:1",
          "Układ płytek oraz pełny spis gładzi i podłóg z podanym metrażem",
          "Rzuty określające położenie przyłączy wodno-kanalizacyjnych oraz ich ewentualne przesunięcia (zaznaczone również na przekrojach)",
          "Rzuty określające położenie przyłączy elektrycznych, (elektryka zaznaczona również na przekrojach)",
          "Przekroje techniczne wszystkich pomieszczeń, widoki projektowanych ścian oraz zabudów meblowych",
          "Rysunki techniczne mebli, wymiarowanie mebli autorskich",
          "Rozszerzona lista zakupów wyposażenia wraz z organizacją zamówień i dostaw oraz kontrolą ustalonego budżetu",
          "Wizyty w sklepach branżowych, prezentowanie materiałów i wyposażenia na żywo oraz omówienie i przedstawienie zalet i wad wybranych produktów",
          "Pełna opieka poprojektowa związana ze stałym kontaktem z wykonawcami oraz wizytami na budowie dając pełną kontrolę prac budowlano-wykończeniowych",
          "Cotygodniowe raporty zrealizowanych prac wykończeniowych",
          "Druk projektu dla wykonawców",
          "Druk projektu oraz GiftBox dla Inwestora",
        ],
        description:"Pełna obsługa projektu od A do Z wraz z nadzorem realizacji.",
        priceText: "Cena od 290 zł/m²",
      },
    },
  ];

  const [selectedOffer, setSelectedOffer] = useState<Offer>(offers[0]);

  const [kitchenArea, setKitchenArea] = useState<string>("");
  const [otherArea, setOtherArea] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string>("");

  const calculate = (offer: Offer) => {
    const kitchen = Number(kitchenArea) || 0;
    const other = Number(otherArea) || 0;

    const totalArea = kitchen + other;

    if (totalArea <= 0) {
      setResult(null);
      setError("Podaj metraż większy niż 0 m²");
      return;
    }

    if (totalArea > 10000) {
      setResult(null);
      setError("Maksymalny metraż to 10 000 m²");
      return;
    }

    setError("");

    const weightedArea = kitchen * 1.2 + other;

    const min = offer.priceMin * weightedArea;
    const max = offer.priceMax * weightedArea;

    setResult({ min, max });
  };

  const formatPrice = (value: number) =>
    value.toLocaleString("pl-PL", {
      style: "currency",
      currency: "PLN",
    });

  return (
    <div className="offer">
      <section className="offer__content">
        <div className="offer__content__grid">
          <aside className="offer__content__sidebar">
            <div className="offer__content__selected">
              <h4>Kalkulator wyceny</h4>
              <p className="offer__content__label">Wybrany pakiet:</p>
              <div className="offer__select">
                <button
                  className="offer__select__trigger"
                  onClick={() => setIsSelectOpen((prev) => !prev)}
                >
                  <span>{selectedOffer.name}</span>

                  <span
                    className={`offer__select__arrow ${
                      isSelectOpen ? "offer__select__arrow--open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`offer__select__dropdown ${
                    isSelectOpen ? "offer__select__dropdown--open" : ""
                  }`}
                >
                  {offers.map((offer) => (
                    <button
                      key={offer.id}
                      className={`offer__select__option ${
                        selectedOffer.id === offer.id
                          ? "offer__select__option--active"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedOffer(offer);
                        setIsSelectOpen(false);

                        if (kitchenArea || otherArea) {
                          calculate(offer);
                        } else {
                          setResult(null);
                        }
                      }}
                    >
                      <div>
                        <p>{offer.name}</p>
                        <span>{offer.content.priceText}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="offer__calculator">
              <p className="offer__content__label">
                Kuchnia / Łazienka (m²)
              </p>

              <input
                className="offer__calculator__input"
                type="number"
                value={kitchenArea}
                onChange={(e) => setKitchenArea(e.target.value)}
              />

              <p className="offer__content__label">
                Pozostałe pomieszczenia (m²)
              </p>

              <input
                className="offer__calculator__input"
                type="number"
                value={otherArea}
                onChange={(e) => setOtherArea(e.target.value)}
              />

              <button
                className="offer__calculator__button"
                onClick={() => calculate(selectedOffer)}
              >
                Oblicz
              </button>
            </div>

            {error && (
              <p className="offer__calculator__error">{error}</p>
            )}

            {result && (
            <div className="offer__calculator__result--wrapper">
                <div className="offer__calculator__result fade-in">
                  <span>Szacunkowy koszt:</span>

                  <p>
                    {formatPrice(result.min)} – {formatPrice(result.max)}
                  </p>
                </div>
                  <p className="offer__content__label">
                    Przedziały cenowe przedstawione na stronie mają charakter
                    orientacyjny i służą wyłącznie celom poglądowym. Ostateczna
                    wycena projektu może się różnić i zostanie przedstawiona po
                    przeprowadzeniu rozmowy wstępnej.
                  </p>
                </div>
              )}
          </aside>

          <div className="offer__content__main">
          {offers.map((offer) => (
            <>
              <p className="offer__content__title-benefits">
                <span>Pakiet {offer.name}</span>
                <span>{offer.content.priceText}</span>
              </p>

              <div className="offer__content__label">
                {offer.content.description}
              </div>

              <div className="offer__content__benefits">
                <div className="offer__content__benefits__list">
                  {offer.content.items.map((benefit) => (
                    <div className="offer__content__benefit" key={benefit}>
                      <span className="offer__content__benefit__dot" />

                      <span className="offer__content__benefit__text">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="offer__divider" /> 

            </>
          ))}
              <p className="offer__content__title">
                  INFORMACJE DOTYCZĄCE WYCENY
              </p>

              <div className="offer__content__benefits">
                  <p className="offer__content__benefit">
                    Przy projekcie całego mieszkania/domu (wszystkich pomieszczeń należących do inwestora) oferujemy dodatkowe 2% rabatu “RABAT dla CAŁOŚCI - RC”.
                  </p>
                  <br />
                  <p className="offer__content__benefit">
                    Płatności następują w ratach i są one dostosowane do wartości projektu. Czas realizacji projektu zależny jest od ilości pomieszczeń oraz wybranego pakietu projektowego.
                  </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OfferPage;