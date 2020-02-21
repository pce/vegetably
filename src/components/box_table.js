import React from 'react'

import t from "../t9n"


const BoxTable = ({data}) => {
  const table = []
  const cells = []
  const curMonth = new Date().getMonth()
  // Table Head
  cells.push(<div className="cell label">{" "}</div>)
  Array(12).fill(1).map((_, month)=> {
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
    let months = data[val][0]
    let inmonths = data[val][1]
    Array(12).fill(1).map((i, month)=> {
      let classNames  = "cell "
      if (months.includes(month+1)) {
        classNames += "outmonth "
      } else if (inmonths.includes(month+1)) {
        classNames += "inmonth "
      } else {
      if (curMonth === month) {
        classNames += "curmonth "
      }
      classNames += "month "
      }
      return cells.push(<div className={classNames}>{" "}</div>)
    })
    return table.push (<div className="row">{cells}</div>)
  })
  return <div className="table">{table}</div>
}

export { BoxTable }