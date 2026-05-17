import { useMemo, useState } from "react";

type Offer = {
  id: number;
  name: string;
  priceMin: number;
  priceMax: number;
  content: {
    items: string[];
    priceText: string;
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
          "__description__Dla osób, które chcą zobaczyć koncepcję wnętrza bez pełnej dokumentacji.",
        ],
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
          "__description__Spójna koncepcja wnętrza bez pełnej dokumentacji technicznej.",
        ],
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
          "__description__Dokładna dokumentacja techniczna i pełna kontrola projektu.",
        ],
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
          "__description__Pełna obsługa projektu od A do Z wraz z nadzorem realizacji.",
        ],
        priceText: "Cena od 290 zł/m²",
      },
    },
  ];

  const [selectedOffer, setSelectedOffer] = useState<Offer>(offers[0]);
  const [kitchenArea, setKitchenArea] = useState<string>("");
  const [otherArea, setOtherArea] = useState<string>("");

  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string>("");
  const [animKey, setAnimKey] = useState(0);

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

  const allFeatures = useMemo(() => {
    return Array.from(
      new Set(
        offers.flatMap((offer) =>
          offer.content.items.filter(
            (item) => !item.startsWith("__description__")
          )
        )
      )
    );
  }, [offers]);

  return (
    <div className="offer">
      <section className="offer__content">
        <div className="offer__content__grid">
          <div className="offer__content__main">
            <p className="offer__content__title">Pakiety</p>

            <div className="offer__packages">
              {offers.map((offer) => {
                const description = offer.content.items.find((item) =>
                  item.startsWith("__description__")
                );

                const features = offer.content.items.filter(
                  (item) => !item.startsWith("__description__")
                );

                return (
                  <div key={offer.id} className="offer__package">
                    <div className="offer__package__top">
                      <h2>{offer.name}</h2>

                      <p className="offer__package__description">
                        {description?.replace("__description__", "")}
                      </p>

                      <p className="offer__package__price">
                        {offer.content.priceText}
                      </p>
                    </div>

                    <ul className="offer__package__list">
                      {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="offer__calculator">
              <p className="offer__content__title">Wycena</p>

              <div className="offer__calculator__form">
                <div className="offer__calculator__field">
                  <p className="offer__content__label">Pakiet</p>

                  <select
                    className="offer__calculator__select"
                    value={selectedOffer.id}
                    onChange={(e) => {
                      const selected = offers.find(
                        (offer) => offer.id === Number(e.target.value)
                      );

                      if (selected) {
                        setSelectedOffer(selected);
                      }
                    }}
                  >
                    {offers.map((offer) => (
                      <option key={offer.id} value={offer.id}>
                        {offer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="offer__calculator__field">
                  <p className="offer__content__label">
                    Kuchnia / Łazienka (m²)
                  </p>

                  <input
                    className="offer__calculator__input"
                    type="number"
                    value={kitchenArea}
                    onChange={(e) => setKitchenArea(e.target.value)}
                  />
                </div>

                <div className="offer__calculator__field">
                  <p className="offer__content__label">
                    Pozostałe pomieszczenia (m²)
                  </p>

                  <input
                    className="offer__calculator__input"
                    type="number"
                    value={otherArea}
                    onChange={(e) => setOtherArea(e.target.value)}
                  />
                </div>
              </div>

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
              <>
                <div className="offer__calculator__result fade-in">
                  <span>Szacunkowy koszt:</span>

                  <p>
                    {formatPrice(result.min)} –{" "}
                    {formatPrice(result.max)}
                  </p>
                </div>

                <p className="offer__content__label">
                  Przedziały cenowe przedstawione na stronie mają charakter
                  orientacyjny i służą wyłącznie celom poglądowym.
                  Ostateczna wycena projektu może się różnić i zostanie
                  przedstawiona po przeprowadzeniu rozmowy wstępnej.
                </p>
              </>
            )}

            <div className="offer__comparison">
              <p className="offer__content__title">Porównanie pakietów</p>
              <table className="offer__comparison__table">
                <thead>
                  <tr>
                    <th>Zakres</th>

                    {offers.map((offer) => (
                      <th key={offer.id}>
                        <div className="offer__comparison__header">
                          <span>{offer.name}</span>
                          <span>{offer.content.priceText}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {allFeatures.map((feature) => (
                    <tr key={feature}>
                      <td>{feature}</td>

                      {offers.map((offer) => {
                        const hasFeature =
                          offer.content.items.includes(feature);

                        return (
                          <td key={offer.id}>
                            {hasFeature ? "✔" : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default OfferPage;