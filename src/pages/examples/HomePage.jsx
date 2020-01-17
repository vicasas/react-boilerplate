/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Link, Typography } from '@material-ui/core'
import { LinkReact } from '../../routes/Links'

export default function App() {
  return (
    <>
      <Typography variant='h4'>React Boilerplate</Typography>
      <Typography variant='caption' gutterBottom>
        by Víctor Casas
      </Typography>
      <Box>
        <Link component={LinkReact} color='secondary'>
          Ir a React
        </Link>
      </Box>
    </>
  )
}
