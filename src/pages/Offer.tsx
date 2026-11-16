import { useState } from "react";

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

type OfferExtra = {
  id: number;
  name: string;
  description: {
    items: string[];
  }
  content: {
    items: string[];
    priceText?: string;
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
      priceMin: 160,
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
        priceText: "Cena od 160 zł/m²",
      },
    },
    {
      id: 3,
      name: "Projekt Kompleksowy",
      priceMin: 220,
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
        priceText: "Cena od 220 zł/m²",
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

  const offersExtra: OfferExtra[] = [
    {
      id: 21,
      name: "Nadzór autorski",
      description: {
        items: [
          "Regularna kontrola przebiegu prac oraz wsparcie projektowe na etapie realizacji inwestycji.",
        ],
      },
      content: {
        items: [
          "Wizyty na budowie",
          "Kontrola zgodności realizacji z projektem",
          "Konsultacje dla wykonawców",
          "Weryfikacja kluczowych etapów prac",
          "Rozwiązywanie bieżących kwestii technicznych",
          "Raportowanie postępów realizacji"
        ],
        description: "",
        priceText: "od 2 000 zł / miesiąc",
      },
    },
    {
      id: 22,
      name: 'Realizacja „Pod Klucz"',
      description: {
        items: [
          "Usługa skierowana do osób, które chcą powierzyć cały proces jednemu partnerowi — od projektu aż po odbiór gotowego wnętrza.",
          "W tym modelu przejmuję pełną odpowiedzialność za organizację i koordynację inwestycji, dbając o każdy etap realizacji.",
        ],
      },
      content: {
        items: [
          "Kompleksowy projekt wnętrza",
          "Pełna koordynacja zamówień i dostaw",
          "Zarządzanie harmonogramem prac",
          "Stały kontakt z wykonawcami",
          "Kontrola jakości realizacji",
          "Rozwiązywanie bieżących kwestii technicznych",
          "Obsługa reklamacji i niezgodności",
          "Regularne raportowanie postępów prac",
          "Przekazanie gotowego, wykończonego wnętrza",
        ],
        description: "Najbardziej kompleksowa forma współpracy.",
        priceText: "Wycena indywidualna",
      },
    },
    {
      id: 23,
      name: 'Konsultacje projektowe',
      description: {
        items: [
          "Indywidualne spotkania przeznaczone dla osób, które potrzebują profesjonalnej porady bez konieczności realizacji pełnego projektu.",
        ],
      },
      content: {
        items: [
          "Konsultacje dotyczące układu funkcjonalnego,",
          "Dobór materiałów wykończeniowych,",
          "Dobór kolorystyki,",
          "Pomoc przy wyborze wyposażenia,",
          "Analizę projektu deweloperskiego,",
          "Konsultacje podczas zakupu nieruchomości,",
          "Odpowiedzi na bieżące pytania projektowe.",   
        ],
        description: "",
        priceText: "od 300 zł / godz.",
      },
    },
    {
      id: 24,
      name: 'Home Staging',
      description: {
        items: [
          "Usługa skierowana do właścicieli mieszkań i domów przygotowujących nieruchomość do sprzedaży lub wynajmu.",
          "Celem Home Stagingu jest zwiększenie atrakcyjności nieruchomości, skrócenie czasu sprzedaży oraz uzyskanie korzystniejszej ceny."
        ],
      },
      content: {
        items: [
          "Konsultację projektową,",
          "Analizę potencjału nieruchomości,",
          "Opracowanie koncepcji aranżacji,",
          "Dobór dodatków, dekoracji i oświetlenia,",
          "Zmianę aranżacji istniejącego wyposażenia,",
          "Organizację zakupów niezbędnych elementów wyposażenia i dekoracji,",
          "Koordynację dostaw oraz przygotowania wnętrza,",
          "Przygotowanie nieruchomości do profesjonalnej sesji fotograficznej.",
        ],
        description: "",
        priceText: "Wycena indywidualna",
      },
    },
    {
      id: 25,
      name: 'Tryb Priorytetowy',
      description: {
        items: [
          "Ze względu na indywidualny charakter każdego projektu oraz ograniczoną liczbę realizowanych inwestycji, terminy rozpoczęcia współpracy ustalane są zgodnie z aktualnym harmonogramem pracowni.",
          "Dla Klientów realizujących inwestycję w krótszym terminie lub potrzebujących pilnego wsparcia projektowego oferuję możliwość skorzystania z Trybu Priorytetowego."
        ],
      },
      content: {
        items: [
          "Rozpoczęcie prac projektowych następuje w ciągu maksymalnie 14 dni od podpisania umowy,",
          "Projekt otrzymuje najwyższy priorytet w bieżącym harmonogramie prac,",
          "Harmonogram projektowy dostosowywany jest do terminów realizacji inwestycji,",
          "Zapewniam zwiększoną dostępność oraz sprawniejszy proces komunikacji,",
          "Terminy spotkań i konsultacji ustalane są w pierwszej kolejności."
        ],
        description: "Dla Klientów, którzy potrzebują szybszego rozpoczęcia prac projektowych.",
        priceText: "",
      },
    },
  ];

  const shoppingProducts = [
    "Płytki ścienne i podłogowe",
    "Podłogi",
    "Farby i tapety",
    "Armaturę łazienkową",
    "Ceramikę sanitarną",
    "Oświetlenie",
    "Gniazda i włączniki",
    "Drzwi wewnętrzne",
    "Meble wolnostojące",
    "Tekstylia i dodatki dekoracyjne",
  ];

  const shoppingDetails = [
    "Szczegółowe zestawienia ilościowe",
    "Orientacyjne ceny produktów",
    "Rekomendowane miejsca zakupu",
    "Linki do produktów",
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

            <div className="offer__content__wrapper-title">
              <p className="offer__content__title">
                OFERTA
              </p>

              <div className="offer__content__benefits">

                <p className="offer__content__benefit">
                  Każdy projekt jest wyjątkowy, dlatego zakres współpracy dopasowuję do indywidualnych potrzeb Klienta oraz etapu inwestycji. Oferuję kilka poziomów współpracy - od opracowania układu funkcjonalnego po kompleksową realizację wnętrza „pod klucz”.
                </p>
              </div>
            </div>

            {offers.map((offer, index) => {
              const isOpen = openOffers.includes(offer.id);

              return (
                <div key={offer.id} id={`0${offer.id}`} className="offer__extra-padding-desktop">
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
                            <>
                            {benefit === "Dokumentacja zakupowa" ? 
                              <div
                                className="offer__content__benefit"
                                key={benefit}
                              >
                              <a href="#shopping-documentation" className="offer__content__benefit offer__content__benefit--link">
                                <span className="offer__content__benefit__dot" />
                                <span className="offer__content__benefit__text">
                                  {benefit}
                                </span>
                              </a>
                              </div>
                              :
                              <div
                                className="offer__content__benefit"
                                key={benefit}
                              >
                                <span className="offer__content__benefit__dot" />

                                <span className="offer__content__benefit__text">
                                  {benefit}
                                </span>
                              </div>
                             }
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`offer__divider ${
                      index === offers.length - 1
                        ? "offer__divider--last"
                        : ""
                    }`}
                  />
                </div>
              );
            })}

            <div className="offer__content__wrapper-title">
              <p className="offer__content__title">
              Usługi dodatkowe
              </p>

              <div className="offer__content__benefits">
                <p className="offer__content__benefit">
               Pakiety można rozszerzyć o dodatkowe usługi, które pozwalają ograniczyć zaangażowanie Inwestora i zapewniają jeszcze większy komfort podczas realizacji. Na indywidualne życzenie przygotowuję również spersonalizowany zakres współpracy, dostosowany do charakteru inwestycji oraz oczekiwań Klienta. W ramach takiej współpracy mogę przejąć dodatkowe obowiązki związane z organizacją, koordynacją i prowadzeniem inwestycji, zapewniając maksymalny komfort oraz kompleksowe wsparcie na każdym etapie realizacji. Zakres usługi oraz wycena ustalane są indywidualnie.
                </p>
              </div>
            </div>

            {offersExtra.map((offer, index) => {
              const isOpen = openOffers.includes(offer.id);

              return (
                <div key={offer.id} id={`0${offer.id}`} className="offer__extra-padding-desktop">
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
                        {offer.description.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                        <br />
                        <br />

                        <div className="offer__content__benefits__list">
                          {(offer.id === 21 || offer.id === 22 || offer.id === 25) ? "Zakres:" : "Usługa może obejmować:" }
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
                        {offer.id === 25 && 
                          <>
                          <br />
                          <br />
                          <div className="offer__description">
                                <span>Usługa dostępna jest wyłącznie dla ograniczonej liczby projektów w ciągu roku i zależy od aktualnej dostępności terminów.</span>
                                <span><strong>Tryb Priorytetowy dostępny za dodatkową opłatą ustaloną indywidualnie.</strong></span>
                          </div>
                          </>
                        }
                    </div>
                  </div>

                  <div
                      className={`offer__divider ${
                        index === offersExtra.length - 1
                          ? "offer__divider--last"
                          : ""
                      }`}
                    />
                </div>
              );
            })}

            <div className="offer__content__wrapper-title">
              <p className="offer__content__title">
              Informacje dodatkowe
              </p>

              <div className="offer__content__benefits">
                <p className="offer__content__benefit">
                Każdy projekt wyceniany jest indywidualnie w zależności od zakresu prac oraz stopnia skomplikowania inwestycji.
                </p>
                <br />
                <p className="offer__content__benefit">
                Podane ceny mają charakter orientacyjny.
                </p>
                <br />
                <p className="offer__content__benefit">
                 Minimalna wartość opracowania projektowego wynosi 3 000 zł netto.
                </p>
              </div>
            </div>

            <div id="shopping-documentation" className="offer__content__wrapper-title">
              <p className="offer__content__title">
              Co zawiera Dokumentacja Zakupowa?
              </p>

              <div className="offer__content__benefits">
                <p className="offer__content__benefit">
                Dokumentacja zakupowa stanowi zestawienie materiałów oraz elementów wyposażenia uwzględnionych w projekcie.
                </p>
                <br />
                <p className="offer__content__benefit">
                  W zależności od zakresu projektu może obejmować między innymi:
                </p>
                <br />

                {shoppingProducts.map((item) => (
                  <div className="offer__content__benefit" key={item}>
                    <span className="offer__content__benefit__dot" />
                    <span className="offer__content__benefit__text">
                      {item}
                    </span>
                  </div>
                ))}

                <br />
                <p className="offer__content__benefit">
                 Dla każdego elementu wskazywane są rekomendowane produkty oraz producenci zgodni z założeniami projektowymi.
                </p>
                <br />
                <p className="offer__content__benefit">
                  Oprócz rekomendowanych produktów dokumentacja zawiera również:
                </p>
                <br />

                {shoppingDetails.map((item) => (
                  <div className="offer__content__benefit" key={item}>
                    <span className="offer__content__benefit__dot" />
                    <span className="offer__content__benefit__text">
                      {item}
                    </span>
                  </div>
                ))}

                <br />
                <p className="offer__content__benefit">
                 Dzięki temu Klient otrzymuje nie tylko informację, co należy kupić, ale również gdzie może nabyć rekomendowane produkty. Dodatkowo w razie potrzeby oferuję wsparcie pozwalające sprawnie przeprowadzić cały proces zakupowy i ograniczyć ryzyko kosztownych pomyłek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OfferPage;
