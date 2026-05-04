import cover1 from "../media/projects/kamienica-001/cover.jpg";
import img1_0 from "../media/projects/kamienica-001/img0.jpg";
import img1_1 from "../media/projects/kamienica-001/img1.jpg";
import img1_2 from "../media/projects/kamienica-001/img2.jpg";
import img1_3 from "../media/projects/kamienica-001/img3.jpg";
import img1_4 from "../media/projects/kamienica-001/img4.jpg";
import img1_5 from "../media/projects/kamienica-001/img5.jpg";

import cover2 from "../media/projects/frosz-002/cover.jpg";
import img2_0 from "../media/projects/frosz-002/img0.jpg";
import img2_1 from "../media/projects/frosz-002/img1.jpg";
import img2_2 from "../media/projects/frosz-002/img2.jpg";
import img2_3 from "../media/projects/frosz-002/img3.jpg";
import img2_4 from "../media/projects/frosz-002/img4.jpg";

import cover3 from "../media/projects/skra-003/cover.jpg";
import img3_0 from "../media/projects/skra-003/img0.jpg";
import img3_1 from "../media/projects/skra-003/img1.jpg";
import img3_2 from "../media/projects/skra-003/img2.jpg";
import img3_3 from "../media/projects/skra-003/img3.jpg";
import img3_4 from "../media/projects/skra-003/img4.jpg";
import img3_5 from "../media/projects/skra-003/img5.jpg";

import cover4 from "../media/projects/krys-004/cover.jpg";
import img4_0 from "../media/projects/krys-004/img0.jpg";
import img4_1 from "../media/projects/krys-004/img1.jpg";
import img4_2 from "../media/projects/krys-004/img2.jpg";
import img4_3 from "../media/projects/krys-004/img3.jpg";

import cover5 from "../media/projects/mor-005/cover.jpg";
import img5_0 from "../media/projects/mor-005/img0.jpg";
import img5_1 from "../media/projects/mor-005/img1.jpg";
import img5_2 from "../media/projects/mor-005/img2.jpg";
import img5_3 from "../media/projects/mor-005/img3.jpg";
import img5_4 from "../media/projects/mor-005/img4.jpg";

export type Project = {
  number: string;
  title: string;
  style: string;
  location: string;
  description: string[];
  styleDescription: string;
  images: string[];
  cover: string;
  year: number;
  area: string;
};

export const projects: Project[] = [
  {
    number: "001",
    title: "Stone Heritage Residence",
    style: "Modern Heritage",
    location: "Kraków, Polska",
    description: [
        "Projekt tej kamienicy w centrum Krakowa to świadome połączenie historii z nowoczesnym, rzeźbiarskim podejściem do wnętrza. Zamiast konkurować z istniejącą architekturą, wnętrze zostało zbudowane wokół materiału, który naturalnie wpisuje się w kontekst miejsca - kamienia.",
        "To on nadaje ton całej przestrzeni. Pojawia się nie tylko jako wykończenie, ale jako główny element kompozycyjny - ciężki wizualnie, a jednocześnie precyzyjnie opracowany w formie. Zestawiony z miękkim, rozproszonym światłem tworzy kontrast, który buduje atmosferę wnętrza.",
        "Zieleń, naturalne drewno i stonowana paleta kolorystyczna uzupełniają całość, nadając przestrzeni spokój i ponadczasowość. Detale zostały ograniczone do minimum, dzięki czemu materiały i światło przejmują główną rolę.",
        "To wnętrze nie próbuje dominować nad historią miejsca - ono ją podkreśla i interpretuje na nowo."
    ],
    styleDescription:
      "Styl oparty na zestawieniu historycznego kontekstu z nowoczesną, minimalistyczną formą. Kluczową rolę odgrywają naturalne materiały - przede wszystkim kamień - traktowane w sposób rzeźbiarski. Całość dopełnia świadomie zaprojektowane światło, które wydobywa fakturę i buduje klimat wnętrza.",
    cover: cover1,
    images: [img1_0, img1_1, img1_2, img1_3, img1_4, img1_5],
    year: 2026,
    area: "Mieszkanie 100",
  },
  {
    number: "002",
    title: "Silent Stone House",
    style: "Modern Organic",
    location: "Dębica, Polska",
      description: [
        "Ten dom powstał z myślą o równowadze między surowością materiału a miękkością światła. To przestrzeń, w której kamień nie jest tylko wykończeniem - staje się rzeźbą, a światło jej naturalnym dopełnieniem.",
        "W całym projekcie dominują naturalne struktury, wyraźna faktura i organiczne formy. Każdy element został zaprojektowany tak, aby podkreślać autentyczność materiałów i ich niedoskonałości - bo to one budują charakter wnętrza.",
        "Światło odgrywa tu kluczową rolę. Nie jest jedynie funkcjonalne, ale prowadzi użytkownika przez przestrzeń, wydobywa głębię faktur i nadaje rytm całemu wnętrzu. Efekt to spokojna, wyważona atmosfera, która działa bardziej na zmysły niż na pierwsze wrażenie.",
        "To dom, który nie krzyczy - ale zostaje w pamięci.",
    ],
    styleDescription:
      "Połączenie surowych, naturalnych materiałów z minimalistyczną formą i rzeźbiarskim podejściem do detalu. Styl oparty na kontraście: ciężar kamienia zestawiony z lekkością światła, prostota brył z organiczną nieregularnością.",
    cover: cover2,
    images: [img2_0, img2_1, img2_2, img2_3, img2_4],
    year: 2026,
    area: "Dom 300",
  },
  {
    number: "003",
    title: "Sculpted Light Residence",
    style: "Modern Classic",
    location: "Tarnów, Polska",
      description: [
        "Projekt wnętrza opiera się na świadomej grze światła, proporcji i rzeźbiarskiej formy. Klasyczne elementy architektoniczne zostały zachowane jako tło, a współczesne interwencje wprowadzono w sposób subtelny i precyzyjny.",
        "Przestrzeń została zaprojektowana jak galeria - z wyraźnymi osiami widokowymi, spokojną kompozycją i ograniczoną paletą materiałów. Kamień pojawia się jako akcent, podkreślający wybrane punkty wnętrza, natomiast światło nadaje całości rytm i głębię.",
        "Minimalizm nie jest tu celem samym w sobie - to narzędzie, które pozwala wybrzmieć detalom, fakturom i proporcjom. Każdy element ma swoje miejsce, a całość buduje atmosferę spokoju i ponadczasowej elegancji.",
    ],
    styleDescription:
      "Połączenie klasycznej architektury z nowoczesnym, minimalistycznym podejściem do formy. Styl oparty na świetle, proporcji i selektywnym użyciu materiałów, z wyraźnym odniesieniem do estetyki galerii sztuki. ",
    cover: cover3,
    images: [img3_0, img3_1, img3_2, img3_3, img3_4, img3_5],
    year: 2025,
    area: "Dom 220",
  },
  {
    number: "004",
    title: "Warm Timber House",
    style: "Warm Minimalism",
    location: "Warszawa, Polska",
      description: [
        "Ten dom został zaprojektowany jako spokojna, ciepła przestrzeń do życia, w której naturalne materiały grają główną rolę.",
        "Drewno, miękkie tkaniny i stonowana kolorystyka budują atmosferę komfortu i wyciszenia. Widoczne belki stropowe nadają wnętrzu charakter i wprowadzają element autentyczności, jednocześnie definiując rytm całej przestrzeni.",
        "Światło - zarówno naturalne, jak i sztuczne - zostało zaprojektowane w sposób subtelny, tak aby podkreślać faktury i materiały, a nie dominować wnętrza. Całość opiera się na prostych formach i ograniczonej liczbie elementów, co pozwala zachować wizualny spokój.",
        "To przestrzeń, która nie imponuje na siłę - tylko daje poczucie równowagi i komfortu na co dzień.",
    ],
    styleDescription:
      "Styl oparty na naturalnych materiałach, ciepłej palecie barw i prostych formach. Kluczowe są tu proporcja, światło i autentyczność materiałów, które razem budują spokojną, ponadczasową przestrzeń.",
    cover: cover4,
    images: [img4_0, img4_1, img4_2, img4_3],
    year: 2025,
    area: "Mieszkanie 120",
  },
  {
    number: "005",
    title: "Monochrome Apartment",
    style: "Monochrome Modern Design",
    location: "Kraków, Polska",
      description: [
        "To mieszkanie w Krakowie zostało zaprojektowane w oparciu o wyraźny kontrast i czystą, uporządkowaną formę.",
        "Dominują tu czernie, biele oraz naturalne odcienie kamienia, które razem tworzą spójną, ponadczasową bazę. Materiały zostały dobrane tak, aby podkreślać elegancję wnętrza, ale bez zbędnego przepychu.",
        "Kamień pojawia się jako mocny akcent - na wyspie kuchennej i ścianach - nadając przestrzeni charakter i wizualną głębię. Z kolei drewno wprowadza subtelne ocieplenie, równoważąc chłodniejszą paletę kolorystyczną.",
        "Całość opiera się na prostych liniach, czytelnych podziałach i dobrze zaprojektowanym świetle, które podkreśla geometrię wnętrza i buduje jego atmosferę.",
        "To przestrzeń nowoczesna, funkcjonalna i świadomie zredukowana do tego, co naprawdę potrzebne.",
    ],
    styleDescription:
      "Styl oparty na kontraście, prostocie i wysokiej jakości materiałach. Minimalizm wzbogacony o wyraźne akcenty kamienia i światła, tworzący elegancką, miejską przestrzeń.",
    cover: cover5,
    images: [img5_0, img5_1, img5_2, img5_3, img5_4],
    year: 2025,
    area: "Mieszkanie 55",
  },
];