import { createRef } from "react"

const state = {
  pages: ['home', 'about', 'seasonalCalender'],
  home: {
    teaser_month: {
      0:  {text: 'Chicorée'},
      1:  {text: 'Feldsalat'},
      2:  {text: 'Spinat'},
      3:  {text: 'Rhabarber'},
      4:  {text: 'Aubergine'},
      5:  {text: 'Blaubeeren / Heidelbeeren'},
      6:  {text: 'Brokkoli'},
      7:  {text: 'Zucchini'},
      8:  {text: 'Radicchio'},
      9:  {text: 'Lauch / Porree'},
      10: {text: 'Rosenkohl'},
      11: {text: 'Grünkohl'},
    },
    de: {
      header: "Gemüse des Monats",
      text: "Zur Planung der nächsten Mahlzeit mit Freilandware nach saisonaler Verfügbarkeit",
    },
    en: {
      header: "Vegetable of the month",
      text: "To plan the next meal based on seasonal availability"
    },
    pl: {
      header: "Warzywo miesiąca",
      text: "Aby zaplanować następny posiłek w zależności od sezonowości"
    },
    ja: {
      header: "今月の野菜",
      text: "季節の空室状況に基づいて次の食事を計画するには"
    },
    el: {
      header: "Φυτικά του μήνα",
      text: "Να προγραμματίσετε το επόμενο γεύμα με βάση την εποχική διαθεσιμότητα"
    },
    sv: {
      header: "Månadens grönsaker",
      text: "Att planera nästa måltid baserat på säsongens tillgänglighet"
    }
  },
  /*
  // draft
  about: {
    de: {
      header: "About",
      paragraphs: [
        {text: {value:"disclaimer", tag:'h2'}},
        {text: {value:'The information contained in this website is for general information purposes only.'
      +
      '\nThe information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
      +
      '\nIn no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
      +
      '\nThrough this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      +
      '\nEvery effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
        }}]
    },
    en: {
      header: "About",
      text: 'The information contained in this website is for general information purposes only.'
      +
      '\nThe information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
      +
      '\nIn no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
      +
      '\nThrough this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      +
      '\nEvery effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
    },
    pl: {
      header: "About",
      text: 'The information contained in this website is for general information purposes only.'
      +
      '\nThe information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
      +
      '\nIn no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
      +
      '\nThrough this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      +
      '\nEvery effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
    },
    ja: {
      header: "About",
      text: 'The information contained in this website is for general information purposes only.'
      +
      '\nThe information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
      +
      '\nIn no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
      +
      '\nThrough this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      +
      '\nEvery effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
    },
    el: {
      header: "About",
      text: 'The information contained in this website is for general information purposes only.'
      +
      '\nThe information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
      +
      '\nIn no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
      +
      '\nThrough this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      +
      '\nEvery effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
    },
    sv: {
      header: "About",
      text: 'The information contained in this website is for general information purposes only.'
      +
      '\nThe information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.'
      +
      '\nIn no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'
      +
      '\nThrough this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      +
      '\nEvery effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
    }
  },*/
  seasonalCalender: [
    {
      subpage1: createRef(),
      id: "subpage1",
      header: "Obst",
      image: "/miranda-fritz-NTvEVO77ris-unsplash.jpg",
      text: "Welches Obst hat wann Saison, \nregional und saisonal...",
      // TODO make tables with regions switch, not country or language
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
      subpage2: createRef(),
      id: "subpage2",
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
      subpage3: createRef(),
      id: "subpage3",
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
      subpage4: createRef(),
      id: "subpage4",
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
}

export default state
