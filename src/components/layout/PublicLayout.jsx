import React from 'react'
import PropTypes from 'prop-types'

export default function PublicLayout({ children }) {
  return (
    <div className='App'>
      <header className='App-header'>{children}</header>
    </div>
  )
}

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
