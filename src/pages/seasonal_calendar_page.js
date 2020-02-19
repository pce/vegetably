import React from 'react'
import {Helmet} from "react-helmet";
import { Text } from "../components/text"
import { BoxTable } from "../components/box_table"

import t from "../t9n"
import state from "../store"

const Paragraph = ({text, image, table, multiLineText, index, id}) => {
  return (
    <div className="paragraph" ref={state.seasonalCalender[index][id]} >
      <Text value={t(text)} />
      {/* <Image src={image} /> */}
      <BoxTable data={table} />
      {/* <MultilineText value={multiLineText} /> */}
    </div>
  )
}

const SeasonalCalenderPage = () => {
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
export default SeasonalCalenderPage