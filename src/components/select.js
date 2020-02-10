
import React from 'react'

const Select = ({ options, onChange, className="" }) =>
  <select onChange={onChange} className={className} >
    {Object.keys(options).map(key =>
      <option key={key}>{options[key]}</option>
    )}
  </select>

export default Select
