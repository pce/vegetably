import { createRef } from "react"

const state = {
  pages: 3,
  paragraphs: [
    {
      page: 1,
      header: "Obst",
      image: "/miranda-fritz-NTvEVO77ris-unsplash.jpg",
      text: "Apfel, \nBirne...",
      table: {}
    },
    {
      page: 2,
      header: "Gemüse",
      image: "/jodie-morgan-v25z8P-CPB4-unsplash.jpg",
      text: "Brokkoli, \nBlumenkohl...",
      table: {
        'Aubergine': [[7,8,9,10],[]],
        'Blumenkohl	': [[5,6,7,8,9,10],[]],
        'Bohnen (grün)': [[7,8,9,10],[]],
        'Bohnen (dick)': [[6,7,8],[]],
        'Brokkoli': [[6,7,8,9,10],[]],
        'Steckrüben': [[8,9,10,11,12],[1,2,3,4]],
        'Erbsen': [[6,7,8],[]],
        'Fenchel': [[6,7,8,9,10,11],[]],
        'Grünkohl	': [[1,2,11,12],[]],
        'Gurke (Salatgurke)': [[6,7,8,9,10],[]],
        'Kartoffeln': [[6,7,8,9,10],[1,2,3,4,5,11,12]],
        'Kohlrabi': [[5,6,7,8,9,10],[]],
        'Kürbis': [[8,9,10,11],[12,1,2]],
        'Lauch (Frühlingszwieblen)': [[5,6,7,8,9,10],[]],
        'Mais': [[8,9,10],[]],
        'Mangold': [[5,6,7,8,9,10],[]],
        'Möhren / Karotten': [[6,7,8,9,10],[1,2,3,4,5,11,12]],
        'Paprika': [[7,8,9,10],[]],
        'Pastinaken': [[1,2,3,9,10,11,12],[4]],
        '_Kartoffeln': [[6,7,8,9,10,11],[]],
        '__Kartoffeln': [[6,7,8,9,10,11],[]],
        'Champignons': [[1,2,3,45,6,7,8,9,10,11,12],[]],
        'Lauch / Porree': [[1,2,3,45,6,7,8,9,10,11,12],[]],

      }
    },
    {
      page: 3,
      header: "Salat",
      image: "/agence-producteurs-locaux-damien-kuhn-fd05H8aHoXY-unsplash.jpg",
      text: "Eisberg, \nFeldsalat...",
      table: {
        'Chicorée': [1,2]
    }
  },
  ],
  top: createRef()
}

export default state
