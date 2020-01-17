/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Link } from '@material-ui/core'
import { LinkCrapp } from '../../routes/Links'
import logo from '../../images/redux.png'

export default function ReduxPage() {
  return (
    <>
      <div>
        <img src={logo} className='App-logo not-ani' alt='logo' />
      </div>
      <Box>
        <Link component={LinkCrapp} color='secondary'>
          Ir a Crapp
        </Link>
      </Box>
    </>
  )
}
