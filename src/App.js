
import React, { Suspense, useEffect, useRef, useMemo } from "react"
// import lerp from "lerp"
import { Text } from "./components/text"
import { MultilineText } from "./components/multiline_text"
import state from "./store"
import "./index.css"
import Select from "./components/select"


/** { image, index, offset, factor, header, aspect, text }*/
function Paragraph({text, image, multiLineText}) {
  return (
    <div className="paragraph">
      <Text value={text} />
      <Image src={image} />
      <MultilineText value={multiLineText} />
    </div>
  )
}

const onLangChange = () => {

}

const Image = ({src}) => {
  return (<img src={src} />)
}

const Navbar = () => {
  return (<>
    <div className="nav">
      <Select options={{de:'de', en:'en', gr:'gr', jp:'jp', pl:'pl'}} onChange={onLangChange} className='nav__lang'  />
    </div>
  </>)
}

function Content() {
  return (
    <>
      <Navbar />
      {state.paragraphs.map(i =>
        <Paragraph text={i.header} image={i.image} multiLineText={i.text} />
      )}
      <footer className="bottom-left">&copy;</footer>
    </>
  )
}


function App() {
  // const scrollArea = useRef()
  // const onScroll = e => (state.top.current = e.target.scrollTop)
  // useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Suspense fallback={<div center className="loading" children="Loading..." />}>
        <Content />
      </Suspense>
    </>
  )
}

export default App