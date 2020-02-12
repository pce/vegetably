
const t9n = {
    'de': {
        'Saisonkalender':'Saisonkalender',
        'About':'Über',
    },
    'en': {
        'Saisonkalender':'Calendar',
        'About':'About',
    },
}

const t = (key) => {
  const lang = window.lang || 'de'
  return t9n[lang][key]
}

export default t
