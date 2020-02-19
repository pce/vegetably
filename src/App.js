import React, { Suspense } from "react"
import {
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";

import {Helmet} from "react-helmet";
// import lerp from "lerp"
import { Text } from "./components/text"
import { MultilineText } from "./components/multiline_text"
import { Table } from "./components/table"
import Select from "./components/select"
// import Image from "./components/image"
import state from "./store"
import t from "./t9n"
import "./index.css"


function Paragraph({text, image, table, multiLineText, index, id}) {
  return (
    <div className="paragraph" ref={state.seasonalCalender[index][id]} >
      <Text value={t(text)} />
      {/* <Image src={image} /> */}
      <Table data={table} />
      {/* <MultilineText value={multiLineText} /> */}
    </div>
  )
}


const Navbar = () => {
  let history = useHistory();

  const onLangChange = (event) => {
    window.lang = event.target.value
    let url = '/' + window.lang + window.location.pathname.substring(3)
    history.push(url);
  }

  const handleSubPageClick = id => {

    if (id === 'top') {
      state.top.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return
    }

    state.seasonalCalender.map(item => {
      if (item.id === id) {
        item[item.id].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      return item
    })
  }

  return (<>
    <div className="nav" ref={state.top}>
      <h1 className="brand"><Link to={"/" + window.lang}>Vegetably</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to={"/" + window.lang + "/seasonal-calendar"}>{t('Saisonkalender')}</Link>
            </li>
            <li>
              <Link to={"/" + window.lang + "/about"}>{t('About')}</Link>
            </li>
          </ul>
        </nav>
      <Select options={{de:'de', en:'en', el:'el', ja:'ja', pl:'pl', sv:'sv'}} onChange={onLangChange} className='nav__lang'  />
    </div>
    <button
      type="button"
      className="btn btn__float"
      onClick={() => handleSubPageClick('top')}
      >
        {'^'}
    </button>
    {("/" + window.lang + "/seasonal-calendar" === window.location.pathname) && (
    <div className="subnav">
      <ul>
      {state.seasonalCalender.map(item => {
        return <button
        type="button"
        className="btn"
        onClick={() => handleSubPageClick(item.id)}
        >
          {t(item.header)}
        </button>
        }
      )}
      </ul>
    </div>
    )}

  </>)
}

function SeasonalCalender() {
  const regionIndex = 0
  return (
    <>
      <Helmet>
        <title>Vegetably :: {t('Saisonkalender')}</title>
      </Helmet>
      <div className="content">
      {state.seasonalCalender.map((item, index) =>
        <Paragraph id={item.id} index={index} text={item.header} image={item.image} table={item.table[regionIndex]} multiLineText={item.text} />
      )}
      </div>
      <footer className="bottom-left">&copy; 2020 vegetably.com</footer>
    </>
  )
}

function E404 () {
  return (
  <>
    <Helmet>
      <title>Vegetably :: 404</title>
    </Helmet>
    <div className="content home">
      <Text value="Ooops, missing content" />
      <MultilineText value={"Sorry, we coundn't find anything"} />
    </div>
    <footer className="bottom-left">&copy; 2020 vegetably.com</footer>
  </>)
}


function Item(props) {
  const name = t(props.match.params.name)
  if (!name) {
    return <E404 />
  }
  return <>
    <h1>{name}</h1>
  </>
}

/*
function ItemLink({text}) {
  return (<h2>
      <a href={`/${window.lang}/${text.toLowerCase()}`} >{text}</a>
    </h2>)
}
*/

function Home({lang}) {

  const text = t(state.home.teaser_month[new Date().getMonth()].text)

  return (
    <>
      <Helmet>
        <title>Vegetably :: Home</title>
      </Helmet>
      <div className="content home">
        <Text value={state.home[lang].header} />
        <Text value={text} tag='h2' />
        {/* <ItemLink text={slugOf(text)} /> */}
        {/* <Image src={state.home[lang].image} className="home" /> */}
        <MultilineText value={state.home[lang].text} />
      </div>
      <footer className="bottom-left">&copy; 2020 vegetably.com</footer>
    </>
  )
}

function About() {
  // <link rel="canonical" href="https://vegetably.com/" />
  // TODO load content by slug/url
  return (<>
    <Helmet>
      <title>Vegetably :: {t('About')}</title>
    </Helmet>
    <div className="content">
      <h2>About</h2>
      <h3>disclaimer</h3>
      <p>
        The information contained in this website is for general information purposes only.
        <br/>
        The information is provided by "vegetably.com" and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        <br/>
        In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        <br/>
        Through this website you are able to link to other websites which are not under the control of "vegetably.com". We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        <br/>
        Every effort is made to keep the website up and running smoothly. However, "vegetably.com" takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
      </p>
      </div>
    <footer className="bottom-left">&copy; 2020 vegetably.com</footer>
  </>
  )
}


function App() {

  let { lang } = useParams();

  if (lang) {
    window.lang = lang
  } else {
    lang = window.location.pathname.substring(1, 3) || 'de'
    if (lang !== window.lang) {
      window.lang = lang
    }
  }

  return (
    <Suspense fallback={<div center className="loading" children="Loading..." />}>
        <Navbar  />
          <Switch>
            <Route path="/:lang/seasonal-calendar">
              <SeasonalCalender />
            </Route>
            <Route path="/:lang/about">
              <About />
            </Route>
            <Route path="/:lang/:name" component={Item} />
            <Route path="/:lang?">
              <Home lang={lang} />
            </Route>
          </Switch>
    </Suspense>
  )
}


export default App