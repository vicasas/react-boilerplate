import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/examples/HomePage'
import CrappPage from '../pages/examples/CrappPage'
import ReactPage from '../pages/examples/ReactPage'
import ReduxPage from '../pages/examples/ReduxPage'
import PhotoPage from '../pages/examples/PhotoPage'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/crapp' exact component={CrappPage} />
      <Route path='/react' exact component={ReactPage} />
      <Route path='/redux' exact component={ReduxPage} />
      <Route path='/photo' exact component={PhotoPage} />
    </Switch>
  )
}
