import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Layout from './layout'

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}
