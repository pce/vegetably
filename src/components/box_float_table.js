import React from 'react'

import t from "../t9n"

/*
  table: [{
        'Dill': [[0,0,.6,.7,.8, 1, 0.5,0], [0.3,.2]],
  }]
*/

const BoxFloatTable = ({data}) => {
  const table = []
  const cells = []
  // 12 months
  const xCells = 12
  // const currentCell = data.current
  const curMonth = new Date().getMonth()
  // Table Head
  cells.push(<div className="cell label">{" "}</div>)
  // default Header 1,2,3,...
  Array(xCells).fill(1).map((_, month)=> {
    let classNames = ""
    if (curMonth === month) {
      classNames = "curmonth "
    }
    classNames += "cell month "
    return cells.push(<div className={classNames}>{month+1}</div>)
  })
  table.push (<div className="row">{cells}</div>)
  // Table Data
  Object.keys(data).map((val, index) => {
    const cells = []
    cells.push(<div className="cell label">{t(val)}</div>)
    // 2 arrays, 1st array values first
    let months = data[val][0]
    let inmonths = data[val][1]
    Array(xCells).fill(1).map((i, month)=> {
      let height = 0
      let classNames  = "cell "
      if (curMonth === month) {
        classNames += "curmonth "
      }
      if (typeof months[month] !== 'undefined' && months[month] > 0) {
        height = months[month] * 12
        classNames += "outmonth "
      } else if (typeof inmonths[month] !== 'undefined' && inmonths[month] > 0) {
        height = inmonths[month] * 12
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
    return table.push (<div className="row">{cells}</div>)
  })
  return <div className="table">{table}</div>
}

export { BoxFloatTable }