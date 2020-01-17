/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Link } from '@material-ui/core'
import { LinkCrapp } from '../../routes/Links'
import PhotoContainer from '../../containers/examples/photos'

export default function PhotoPage() {
  return (
    <>
      <Box mb={2}>
        <Link component={LinkCrapp} color='secondary'>
          Ir atrás
        </Link>
      </Box>
      <PhotoContainer />
    </>
  )
}
