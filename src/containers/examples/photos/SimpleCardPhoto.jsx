import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    width: '80%',
    marginBottom: '1.2rem',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function SimpleCardPhoto({ title, text }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h5' component='h2' align='left'>
          {title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary' align='left'>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Leer más</Button>
      </CardActions>
    </Card>
  )
}

SimpleCardPhoto.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
