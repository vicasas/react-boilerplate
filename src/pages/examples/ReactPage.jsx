/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Link } from '@material-ui/core'
import { LinkRedux } from '../../routes/Links'
import logo from '../../logo.svg'
import '../../styles/components/App.css'

export default function ReactPage() {
  return (
    <>
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Box>
        <Link component={LinkRedux} color='secondary'>
          Ir a Redux
        </Link>
      </Box>
    </>
  )
}
