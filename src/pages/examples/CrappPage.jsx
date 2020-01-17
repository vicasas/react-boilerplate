/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Link } from '@material-ui/core'
import { LinkPhoto } from '../../routes/Links'
import logo from '../../logo-crapp.svg'

export default function CrappPage() {
  return (
    <>
      <div>
        <img src={logo} className='App-logo not-ani' alt='logo' />
      </div>
      <Box>
        <Link component={LinkPhoto} color='secondary'>
          Ir a Photos
        </Link>
      </Box>
    </>
  )
}
