import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";

import MainPage from './MainPage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function CustomRouter({ location }) {
  return (
    <Switch>
      <Route exact path={ '/page-one' } component={ PageOne } />
      <Route exact path={ '/main-page' } component={ MainPage } />
      <Route exact path={ '/page-two' } component={ PageTwo } />

      <Redirect from={ '/' } to={ '/main-page' } />
    </Switch>
  )
}

export default withRouter( CustomRouter );