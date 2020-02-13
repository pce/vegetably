import { createRef } from "react"

const state = {
  pages: 3,
  home: {
      de: {
        image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
        header: "Gemüse des Monats",
        text: "Zur Planung der nächsten Mahlzeit nach saisonaler Verfügbarkeit"
      },
      en: {
        image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
        header: "Vegetable of the month",
        text: "To plan the next meal based on seasonal availability"
      },
      pl: {
        image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
        header: "Vegetable of the month",
        text: "To plan the next meal based on seasonal availability"
      },
      ja: {
        image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
        header: "Vegetable of the month",
        text: "To plan the next meal based on seasonal availability"
      },
      gr: {
        image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
        header: "Vegetable of the month",
        text: "To plan the next meal based on seasonal availability"
      },
      sv: {
        image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
        header: "Vegetable of the month",
        text: "To plan the next meal based on seasonal availability"
      }
  },
  paragraphs: [
    {
      page: 1,
      region: 'de',
      header: "Obst",
      image: "/miranda-fritz-NTvEVO77ris-unsplash.jpg",
      text: "Welches Obst hat wann Saison, \nregional und saisonal...",
      table: {
        'Apfel':	[[8,9,10,11],[1,2,3,4,5,12]],
        'Aprikose':	[[7,8],[]],
        'Birne':	[[8,9,10],[11,12]],
        'Blaubeeren / Heidelbeeren':	[[6,7,8,9],[]],
        'Brombeeren':	[[7,8,9],[]],
        'Erdbeeren':	[[5,6,7],[]],
        'Himbeeren':	[[6,7,8],[]],
        'Holunderbeeren / Flieder':	[[9,10],[]],
        'Johannisbeeren':	[[6,7,8],[]],
        'Kirschen':	[[6,7,8],[]],
        'Mirabellen':	[[7,8,9],[]],
        'Pflaumen':	[[7,8,9],[]],
        'Quitten':	[[9,10,11],[]],
        'Rhabarber':	[[4,5,6],[]],
        'Stachelbeeren':	[[6,7,8],[]],
        'Wassermelonen':	[[8,9],[]],
        'Weintrauben':	[[9,10,11],[]],
        'Zwetschgen':	[[7,8,9,10],[]],
      }
    },
    {
      page: 2,
      region: 'de',
      header: "Gemüse",
      image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
      text: "Welches Gemüse hat wann Saison, \nregional und saisonal...",
      table: {
        'Aubergine': [[7,8,9,10],[]],
        'Blumenkohl': [[5,6,7,8,9,10],[]],
        'Bohnen (grün)': [[7,8,9,10],[]],
        'Bohnen (dick)': [[6,7,8],[]],
        'Brokkoli': [[6,7,8,9,10],[]],
        'Champignons': [[1,2,3,45,6,7,8,9,10,11,12],[]],
        'Erbsen': [[6,7,8],[]],
        'Fenchel': [[6,7,8,9,10,11],[]],
        'Grünkohl': [[1,2,11,12],[]],
        'Gurke (Salatgurke)': [[6,7,8,9,10],[]],
        'Kartoffeln': [[6,7,8,9,10],[1,2,3,4,5,11,12]],
        'Kohlrabi': [[5,6,7,8,9,10],[]],
        'Kürbis': [[8,9,10,11],[12,1,2]],
        'Lauch (Frühlingszwiebeln)': [[5,6,7,8,9,10],[]],
        'Lauch / Porree': [[1,2,3,45,6,7,8,9,10,11,12],[]],
        'Mais': [[8,9,10],[]],
        'Mangold': [[5,6,7,8,9,10],[]],
        'Möhren / Karotten': [[6,7,8,9,10],[1,2,3,4,5,11,12]],
        'Paprika': [[7,8,9,10],[]],
        'Pastinaken': [[1,2,3,9,10,11,12],[4]],
        'Radieschen': [[5,6,7,8,9,10],[]],
        'Rosenkohl': [[1,2,3,10,11,12],[]],
        'Rote Bete': [[7,8,9,10,11],[1,2,3,4,12]],
        'Rotkohl': [[6,7,8,9,10,11],[1,2,3,4,5,12]],
        'Schwarzwurzeln': [[1,2,10,11,12],[]],
        'Spargel': [[4,5,6],[]],
        'Spinat': [[3,4,5],[9,10,11]],
        'Spitzkohl': [[5,6],[]],
        'Staudensellerie': [[7,8,9,10],[]],
        'Steckrüben': [[8,9,10,11,12],[1,2,3,4]],
        'Tomaten': [[7,8,9,10],[]],
        'Topinambur': [[1,2,3,10,11,12],[]],
        'Weißkohl': [[6,7,8,9,10,11],[12,1,2,3,4]],
        'Wirsingkohl': [[1,2,5,6,7,8,9,10,11,12],[3]],
        'Zucchini': [[6,7,8,9],[]],
        'Zuckerschoten': [[6,7,8],[]],
        'Zwiebeln': [[7,8,9,10],[1,2,3,4,5,6,11,12]],
      }
    },
    {
      page: 3,
      region: 'de',
      header: "Salat",
      image: "/agence-producteurs-locaux-damien-kuhn-fd05H8aHoXY-unsplash.jpg",
      text: "Welcher Salat hat wann Saison, \nregional und saisonal...",
      table: {
        'Batavia': [[5,6,7,8,9], []],
        'Chicorée': [[1,2,3,4,10,11,12], []],
        'Eichblattsalat': [[5,6,7,8,9,10], []],
        'Eisbergsalat': [[6,7,8,9,10], []],
        'Endiviensalat': [[5,6,7,8,9,10,12], []],
        'Feldsalat': [[1,2,3,4,10,11,12], []],
        'Kopfsalat': [[5,6,7,8,9,10], []],
        'Lollo Rosso': [[4,5,6,7,8,9], []],
        'Portulak': [[1,2,3,4,7,8,9,10,11,12], []],
        'Radicchio': [[8,9,10,11], [12,1,2]],
        'Romana': [[6,7,8,9,10,11], []],
        'Rucola': [[4,5,6,7,8,9], []],
      }
    },
    {
      page: 4,
      region: 'de',
      header: "Kräuter",
      image: "/agence-producteurs-locaux-damien-kuhn-fd05H8aHoXY-unsplash.jpg",
      text: "Welches Kraut hat wann Saison, \nregional und saisonal...",
      table: {
        'Dill': [[6,7,8], []],
        'Majoran': [[6,7], []],
        'Minze': [[1,2,3,4,5,6,7,8,9,10,11,12], []],
        'Oregano': [[6,7,8,9], []],
        'Rosmarin': [[6,7,8,9], []],
        'Schnittlauch': [[3,4,5,6,7,8,9], []],
        'Thymian': [[5,6,7,8,9], []],
      }
    },
  ],
  top: createRef()
}

export default state
