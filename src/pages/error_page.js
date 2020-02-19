import React from 'react'
import {Helmet} from "react-helmet";
import { Text } from "../components/text"
import { MultilineText } from "../components/multiline_text"

const ErrorPage = () => {
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

export default ErrorPage
