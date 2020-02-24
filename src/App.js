import React, { Suspense, useState } from "react"
import {
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";

// import lerp from "lerp"
// import Select from "./components/select"
import Select from 'react-select'


import AboutPage from "./pages/about_page";
import ArticlePage from "./pages/article_page";
import HomePage from "./pages/home_page";
import SeasonalCalenderPage from "./pages/seasonal_calendar_page";

import state from "./store"
import t from "./t9n"
import "./index.css"

import { ReactComponent as BurgerIcon} from './burger.svg';


const Navbar = () => {
  let history = useHistory();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onLangChange = selectedOption => {
    window.lang = selectedOption.value
    setSelectedOption(selectedOption)
    let url = '/' + window.lang + window.location.pathname.substring(3)
    history.push(url);
  }

  // const onRegionChange = event => {}

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

  const options = [
    { value: 'de', label: 'de' },
    { value: 'en', label: 'en' },
    { value: 'el', label: 'el' },
    { value: 'ja', label: 'ja' },
    { value: 'pl', label: 'pl' },
    { value: 'sv', label: 'sv' }
  ]

  return (<>
    <div className="nav" ref={state.top}>
      <h1 className="brand"><Link to={"/" + window.lang}>Vegetably</Link></h1>
        <nav id="main" className={isMobileNavOpen?'visible':''}>
          <ul>
            <li>
              <Link to={"/" + window.lang + "/seasonal-calendar"} onClick={() => setIsMobileNavOpen(false)}>{t('Saisonkalender')}</Link>
            </li>
            <li>
              <Link to={"/" + window.lang + "/about"}  onClick={() => setIsMobileNavOpen(false)} >{t('About')}</Link>
            </li>
          </ul>
        </nav>
        <BurgerIcon  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className={isMobileNavOpen?'open':''}   />

        <div className='nav__lang' >
          <Select
          value={selectedOption}
          onChange={onLangChange}
          options={options}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#B2705A',
              primary: '#3C4C4F',
            },
          })}
        /></div>

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
      {/* <Select options={{"0":'europe (continental)'}} onChange={onRegionChange} className='nav__lang'  /> */}
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
            <SeasonalCalenderPage />
          </Route>
          <Route path="/:lang/about">
            <AboutPage />
          </Route>
          <Route path="/:lang/:name" component={ArticlePage} />
          <Route path="/:lang?">
            <HomePage lang={lang} />
          </Route>
        </Switch>
    </Suspense>
  )
}


export default App