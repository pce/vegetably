import React from 'react'

import t from "../t9n"

/*
  table: [{
        'Dill': [[0,0,.6,.7,.8, 1, 0.5,0], [0.3,.2]],
  }]
*/

const BoxFloatTable = ({data, selected, size=12}) => {
  const table = []
  const cells = []
  // 12 months
  const xCells = size
  // Table Head
  cells.push(<div className="boxtable__cell boxtable__cell__label">{" "}</div>)
  // default Header 1,2,3,...
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
  Object.keys(data).map((val, index) => {
    const cells = []
    cells.push(<div className="boxtable__cell boxtable__cell__label">{t(val)}</div>)
    // 2 arrays, 1st array values first
    let values = data[val][0]
    let invalues = data[val][1]
    Array(xCells).fill(1).map((_, index)=> {
      let height = 0
      let classNames  = "cell "
      if (selected === index) {
        classNames += "curmonth "
      }
      if (typeof values[index] !== 'undefined' && values[index] > 0) {
        height = values[index] * 12
        classNames += "outmonth "
      } else if (typeof invalues[index] !== 'undefined' && invalues[index] > 0) {
        height = invalues[index] * 12
        classNames += "inmonth "
      } else {
        classNames += "month "
      }
      if (height > 0) {
        return cells.push(<div className={classNames} style={{height:height}}>{" "}</div>)
      } else {
        return cells.push(<div className={classNames} >{" "}</div>)
      }
    })
    return table.push (<div className="boxtable__row">{cells}</div>)
  })
  return <div className="boxtable__table">{table}</div>
}

export { BoxFloatTable }