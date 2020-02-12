
import React, { Suspense } from "react"
import {
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// useEffect, useRef, useMemo
import {Helmet} from "react-helmet";
// import lerp from "lerp"
import { Text } from "./components/text"
import { MultilineText } from "./components/multiline_text"
import state from "./store"
import "./index.css"
import Select from "./components/select"
import t from "./t9n"


/** { image, index, offset, factor, header, aspect, text }*/
function Paragraph({text, image, table, multiLineText}) {
  return (
    <div className="paragraph">
      <Text value={text} />
      {/* <Image src={image} /> */}
      <Table data={table} />
      {/* <MultilineText value={multiLineText} /> */}
    </div>
  )
}

const onLangChange = (event) => {
  window.lang = event.target.value
}

const Table = ({data}) => {
  const table = []

  const cells = []
  // Table Head
  cells.push(<div className="cell label">{" "}</div>)
  Array(12).fill(1).map((i, month)=> {
    cells.push(<div className="cell month">{month+1}</div>)
  })
  table.push (<div className="row">{cells}</div>)

  // Table Data
  Object.keys(data).map((val, index) => {

      const cells = []
      cells.push(<div className="cell label">{val}</div>)

      let months = data[val][0]
      let inmonths = data[val][1]


      Array(12).fill(1).map((i, month)=> {
        if (months.includes(month+1)) {
          cells.push(<div className="cell outmonth">{" "}</div>)
        } else if (inmonths.includes(month+1)) {
          cells.push(<div className="cell inmonth">{" "}</div>)
        } else {
          cells.push(<div className="cell month">{" "}</div>)
        }
      })

      table.push (<div className="row">{cells}</div>)
    }
  )


  return <div className="table">{table}</div>
}

const Image = ({src}) => {
  return (<img src={src} />)
}

const Navbar = ({lang}) => {
  return (<>
    <div className="nav">
      <h1 className="brand">Vegetably</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/" + lang + "/"}>{t('Saisonkalender')}</Link>
            </li>
            <li>
              <Link to={"/" + lang + "/about"}>{t('About')}</Link>
            </li>
          </ul>
        </nav>
      <Select options={{de:'de', en:'en', gr:'gr', jp:'jp', pl:'pl'}} onChange={onLangChange} className='nav__lang'  />
    </div>
  </>)
}

function Content() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vegetably</title>
        <link rel="canonical" href="https://vegetably.com" />
      </Helmet>
      <div className="content">
      {state.paragraphs.map(i =>
        <Paragraph text={i.header} image={i.image} table={i.table} multiLineText={i.text} />
      )}
      </div>
      <footer className="bottom-left">&copy; 2020 vegetably.com</footer>
    </>
  )
}


function About() {
  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Vegetably</title>
      <link rel="canonical" href="https://vegetably.com" />
    </Helmet>
    <div className="content">
      <h2>About</h2>
      </div>
    <footer className="bottom-left">&copy; 2020 vegetably.com</footer>
  </>
  )
}


function App() {

  let { lang } = useParams();

  if (lang)
    window.lang = lang
  else
    lang = 'de'


  // const scrollArea = useRef()
  // const onScroll = e => (state.top.current = e.target.scrollTop)
  // useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Suspense fallback={<div center className="loading" children="Loading..." />}>
          <Navbar lang={lang} />
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/:lang/about">
                <About />
              </Route>
              <Route path="/:lang?">
                <Content />
              </Route>
            </Switch>

      </Suspense>
    </>
  )
}



export default App