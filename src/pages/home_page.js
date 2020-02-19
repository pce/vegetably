
import React from 'react'
import {Helmet} from "react-helmet";
import t from "../t9n"
import state from "../store"
import { Text } from "../components/text"
import { MultilineText } from "../components/multiline_text"
// import Image from "./components/image"


const HomePage = ({lang}) => {
  const text = t(state.home.teaser_month[new Date().getMonth()].text)

  return (
    <>
      <Helmet>
        <title>Vegetably :: Home</title>
        <link rel="canonical" href={`https://vegetably.com/{lang}`} />
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


export default HomePage
