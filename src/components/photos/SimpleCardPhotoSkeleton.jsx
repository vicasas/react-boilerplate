import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

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

export default function SimpleCardPhotoSkeleton() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Skeleton height={24} style={{ marginBottom: 6 }} />
        <Skeleton height={12} style={{ marginBottom: 6 }} />
        <Skeleton height={12} style={{ marginBottom: 6 }} />
        <Skeleton height={12} style={{ marginBottom: 6 }} />
      </CardContent>
      <CardActions>
        <Skeleton height={34} width='8%' style={{ marginBottom: 6 }} />
      </CardActions>
    </Card>
  )
}
