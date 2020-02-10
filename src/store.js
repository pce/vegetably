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
      table: {}
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
