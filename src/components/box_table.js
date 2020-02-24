import React from 'react'

import t from "../t9n"


const BoxTable = ({data, selected, size=12}) => {
  const table = []
  const cells = []
  const xCells = size
  // Table Head
  cells.push(<div className="boxtable__cell boxtable__cell__label">{" "}</div>)
  Array(xCells).fill(1).map((_, index)=> {
    let classNames = ""
    if (selected === index) {
      classNames = "boxtable__cell__current "
    }
    classNames += "boxtable__cell boxtable__cell__value "
    return cells.push(<div className={classNames}>{index+1}</div>)
  })
  table.push (<div className="boxtable__row">{cells}</div>)
  // Table Data
  Object.keys(data).map((val, _) => {
    const cells = []
    cells.push(<div className="boxtable__cell boxtable__cell__label">{t(val)}</div>)
    let values = data[val][0]
    let invalues = data[val][1]
    Array(xCells).fill(1).map((_, index)=> {
      let classNames  = "boxtable__cell "
      if (values.includes(index+1)) {
        classNames += "boxtable__cell__first "
      } else if (invalues.includes(index+1)) {
        classNames += "boxtable__cell__second "
      } else {
        if (selected === index) {
          classNames += "boxtable__cell__current "
        }
        classNames += "boxtable__cell__value "
      }
      return cells.push(<div className={classNames}>{" "}</div>)
    })
    return table.push (<div className="boxtable__row">{cells}</div>)
  })
  return <div className="boxtable__table">{table}</div>
}

export { BoxTable }