import React from 'react'
import FilterLink from '../containers/FilterLink'

const pStyle = {
  fontSize: '15px',
  margin: '25px 0 0 0'
}

const Footer = () => (
  <p style={pStyle}>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer