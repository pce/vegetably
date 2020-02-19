
import React from 'react'
import t from "../t9n"

import ErrorPage from "./error_page"


function ArticlePage(props) {
    const name = t(props.match.params.name)
    if (!name) {
      return <ErrorPage />
    }
    return <>
      <h1>{name}</h1>
    </>
  }

  /*
  function ArticleLink({text}) {
    return (<h2>
        <a href={`/${window.lang}/${text.toLowerCase()}`} >{text}</a>
      </h2>)
  }
  */

  export default ArticlePage