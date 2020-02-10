import React from 'react'

const Text = ({ value, tag='h1' }) => {
  const Tag = tag
  return <Tag>{value}</Tag>
}

export { Text }
