import { useEffect, useState } from "react";

type Offer = {
  id: number;
  name: string;
  priceMin: number;
  priceMax: number;
  description?: string;
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
      name: "Pakiet Funkcjonalny",
      priceMin: 60,
      priceMax: 100,
      description: "To pierwszy i najważniejszy etap projektowania, którego celem jest stworzenie ergonomicznego i przemyślanego układu wnętrza, dopasowanego do stylu życia oraz potrzeb przyszłych użytkowników.",
      content: {
        items: [
          "Konsultacja projektowa",
          "Analiza potrzeb i oczekiwań",
          "Układ funkcjonalny wnętrza",
          "Propozycje zmian ścian działowych i otworów drzwiowych",
          "Rzuty z rozmieszczeniem wyposażenia"
        ],
        description:
          "Dla osób, które potrzebują profesjonalnego wsparcia w zaplanowaniu przestrzeni.",
        priceText: "Cena od 60 zł/m²",
      },
    },
    {
      id: 2,
      name: "Pakiet Koncepcyjny",
      priceMin: 150,
      priceMax: 200,
      description: "Pakiet pozwala określić kierunek stylistyczny projektu oraz zwizualizować finalny efekt przy pomocy realistycznych wizualizacji.",
      content: {
        items: [
          "Koncepcja stylistyczna wnętrza",
          "Dobór materiałów, kolorystyki i wyposażenia",
          "Wizualizacje 3D",
          "Wstępne zestawienie materiałów wykończeniowych",
        ],
        description:
          "Dla osób, które chcą zobaczyć przyszłe wnętrze jeszcze przed rozpoczęciem realizacji.",
        priceText: "Cena od 150 zł/m²",
      },
    },
    {
      id: 3,
      name: "Projekt Kompleksowy",
      priceMin: 260,
      priceMax: 290,
      description: "To rozwiązanie dla osób, które oczekują kompletnego projektu wnętrza, dopracowanego zarówno pod względem estetycznym, jak i technicznym. Oprócz pełnej dokumentacji projektowej zapewniam również bieżące wsparcie podczas procesu zakupowego oraz realizacji projektu.",
      content: {
        items: [
          "Inwentaryzacja pomieszczeń",
          "Kompleksowa dokumentacja techniczna",
          "Projekty instalacji elektrycznych i wodno-kanalizacyjnych",
          "Projekty sufitów podwieszanych i oświetlenia",
          "Projekty ścian dekoracyjnych oraz układów płytek",
          "Projekty mebli wykonywanych na wymiar",
          "Dokumentacja zakupowa",
          "Pomoc przy wyborze materiałów i wyposażenia",
          "Konsultacje zakupowe",
          "Konsultacje dla wykonawców dotyczące dokumentacji projektowej",
          "Wsparcie przy rozwiązywaniu problemów pojawiających się podczas prac wykończeniowych",
        ],
        description:
          "Najczęściej wybierana forma współpracy.",
        priceText: "Cena od 260 zł/m²",
      },
    },
    // {
    //   id: 4,
    //   name: "Projekt Kompleksowy + Opieka Projektowa",
    //   priceMin: 310,
    //   priceMax: 370,
    //   content: {
    //     items: [
    //       "Inwentaryzacja",
    //       "Konsultacje",
    //       "Rzuty układu funkcjonalnego z wyposażeniem",
    //       "Przedstawienie proponowanej kolorystyki i materiałów",
    //       "Wizualizacje 3D o charakterze poglądowym",
    //       "Rzuty techniczne określające układy ścian, sufitów podwieszanych i ścianek dekoracyjnych",
    //       "Rysunki rozwiązań szczegółowych (jeśli są konieczne) w skali 1:1",
    //       "Układ płytek oraz pełny spis gładzi i podłóg z podanym metrażem",
    //       "Rzuty określające położenie przyłączy wodno-kanalizacyjnych oraz ich ewentualne przesunięcia (zaznaczone również na przekrojach)",
    //       "Rzuty określające położenie przyłączy elektrycznych, (elektryka zaznaczona również na przekrojach)",
    //       "Przekroje techniczne wszystkich pomieszczeń, widoki projektowanych ścian oraz zabudów meblowych",
    //       "Rysunki techniczne mebli, wymiarowanie mebli autorskich",
    //       "Rozszerzona lista zakupów wyposażenia wraz z organizacją zamówień i dostaw oraz kontrolą ustalonego budżetu",
    //       "Wizyty w sklepach branżowych, prezentowanie materiałów i wyposażenia na żywo oraz omówienie i przedstawienie zalet i wad wybranych produktów",
    //       "Pełna opieka poprojektowa związana ze stałym kontaktem z wykonawcami oraz wizytami na budowie dając pełną kontrolę prac budowlano-wykończeniowych",
    //       "Cotygodniowe raporty zrealizowanych prac wykończeniowych",
    //       "Druk projektu dla wykonawców",
    //       "Druk projektu oraz GiftBox dla Inwestora",
    //     ],
    //     description:
    //       "Pełna obsługa projektu od A do Z wraz z nadzorem realizacji.",
    //     priceText: "Cena od 290 zł/m²",
    //   },
    // },
  ];

  const [selectedOffer, setSelectedOffer] = useState<Offer>(offers[0]);

  const [kitchenArea, setKitchenArea] = useState<string>("");
  const [otherArea, setOtherArea] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [priorityService, setPriorityService] = useState(false);

  const [result, setResult] = useState<Result | null>(null);

  const [error, setError] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const [openOffers, setOpenOffers] = useState<number[]>([]);

  const calculate = (offer: Offer) => {
    const kitchen = Number(kitchenArea) || 0;
    const other = Number(otherArea) || 0;

    const totalArea = kitchen + other;

    if (totalArea <= 0) {
      setResult(null);
      setInfo("");
      setError("Podaj metraż większy niż 0 m²");
      return;
    }

    if (totalArea > 400) {
      setResult(null);
      setError("");
      setInfo(
        "Przy projektach o wielkości ponad 400m² sugerowana jest wycena indywidualna."
      );
      return;
    }

    setError("");
    setInfo("");

    let weightedArea: number;

    if (totalArea < 10) {
      // minimalna wycena za 10 m²

      if (kitchen > 0) {
        weightedArea = 10 * 1.2;
      } else {
        weightedArea = 10;
      }
    } else {
      weightedArea = kitchen * 1.2 + other;
    }

    const multiplier = priorityService ? 1.3 : 1;

    const min = offer.priceMin * weightedArea * multiplier;
    const max = offer.priceMax * weightedArea * multiplier;

    setResult({ min, max });
  };

  const formatPrice = (value: number) =>
    value.toLocaleString("pl-PL", {
      style: "currency",
      currency: "PLN",
    });

    // automatyczne odświeanie calc

    // useEffect(() => {
    //   if (kitchenArea || otherArea) {
    //     calculate(selectedOffer);
    //   }
    // }, [
    //   kitchenArea,
    //   otherArea,
    //   priorityService,
    //   selectedOffer,
    // ]);

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
                onChange={(e) => {
                  const value = e.target.value;

                  if (/^\d*([.,]\d{0,1})?$/.test(value)) {
                    setKitchenArea(value);
                  }
                }}
              />

              <p className="offer__content__label">
                Pozostałe pomieszczenia (m²)
              </p>

              <input
                className="offer__calculator__input"
                type="number"
                value={otherArea}
                onChange={(e) => {
                  const value = e.target.value;

                  if (/^\d*([.,]\d{0,1})?$/.test(value)) {
                    setOtherArea(value);
                  }
                }}
              />

              <label className="offer__calculator__checkbox">
                <input
                  type="checkbox"
                  checked={priorityService}
                  onChange={(e) => setPriorityService(e.target.checked)}
                />
                <span>Usługa priorytetowa</span>
              </label>

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

            {info && (
              <p className="offer__calculator__disclaimer">{info}</p>
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

            <p className="offer__content__title">
              OFERTA
            </p>

            <div className="offer__content__benefits">

              <p className="offer__content__benefit">
                Każdy projekt jest wyjątkowy, dlatego zakres współpracy dopasowuję do indywidualnych potrzeb Klienta oraz etapu inwestycji. Oferuję kilka poziomów współpracy - od opracowania układu funkcjonalnego po kompleksową realizację wnętrza „pod klucz”.
              </p>
            </div>

            <div className="offer__divider" />

            {offers.map((offer) => {
              const isOpen = openOffers.includes(offer.id);

              return (
                <div key={offer.id} id={`0${offer.id}`}>
                  <button
                    className="offer__content__title-benefits offer__content__title-benefits--mobile"
                    onClick={() => {
                      setOpenOffers((prev) =>
                        prev.includes(offer.id)
                          ? prev.filter((id) => id !== offer.id)
                          : [...prev, offer.id]
                      );
                    }}
                  >
                    <span>{offer.name}</span>

                    <span className="offer__content__price">
                      {offer.content.priceText}
                    </span>

                    <span
                      className={`offer__select__arrow offer__select__arrow--benefit ${
                        isOpen ? "offer__select__arrow--open" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`offer__content__accordion ${
                      isOpen ? "offer__content__accordion--open" : ""
                    }`}
                  >
                    <div>
                      <div className="offer__content__label">
                        {offer.content.description}
                      </div>

                      <div className="offer__content__benefits">

                        <div className="offer__description">
                          {offer.description}
                        </div>

                        <br />
                        <br />

                        <div className="offer__content__benefits__list">
                          Zakres: 
                          {offer.id === 2 && 
                            <a href="#01" className="offer__content__benefit offer__content__benefit--link">
                              <span className="offer__content__benefit__dot" />
                              <span className="offer__content__benefit__text">
                                Wszystko z Pakietu Funkcjonalnego
                              </span>
                            </a>
                          }
                          {offer.id === 3 && 
                            <a href="#02" className="offer__content__benefit offer__content__benefit--link">
                              <span className="offer__content__benefit__dot" />
                              <span className="offer__content__benefit__text">
                                Wszystko z Pakietu Koncepcyjnego
                              </span>
                            </a>
                          }

                          {offer.content.items.map((benefit) => (
                            <div
                              className="offer__content__benefit"
                              key={benefit}
                            >
                              <span className="offer__content__benefit__dot" />

                              <span className="offer__content__benefit__text">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="offer__divider" />
                </div>
              );
            })}

            <p className="offer__content__title">
             Usługi dodatkowe
            </p>

            <div className="offer__content__benefits">
              <p className="offer__content__benefit">
                Projekt bez czekania w kolejce - do miesiąca czasu.
              </p>
            </div>

            <div className="offer__divider" />

            <p className="offer__content__title">
             USŁUGA PRIORYTETOWA
            </p>

            <div className="offer__content__benefits">
              <p className="offer__content__benefit">
                Projekt bez czekania w kolejce - do miesiąca czasu.
              </p>
            </div>

            <div className="offer__divider" />


            <p className="offer__content__title">
              INFORMACJE DOTYCZĄCE WYCENY
            </p>


            <div className="offer__content__benefits">

              <p className="offer__content__benefit">
                Płatności następują w ratach i są one dostosowane do wartości
                projektu. Czas realizacji projektu zależny jest od ilości
                pomieszczeń oraz wybranego pakietu projektowego.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OfferPage;