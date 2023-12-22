import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import PropPage from '../pages/PropPage'
import ContactPage from '../pages/ContactPage'
function AppRouter() {
  return (
    <Fragment>
         <Switch>
         <Route exact path="/"><HomePage/></Route>
         <Route exact path="/about"><AboutPage/></Route>
         <Route exact path="/prop"><PropPage/></Route>
         <Route exact path="/contact"><ContactPage/></Route>
         </Switch>
    </Fragment>
  )
}

export default AppRouter
