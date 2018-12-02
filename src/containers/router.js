import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import MainPage from './MainPage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import Starwars from './Starwars';

function CustomRouter({ location }) {
  return (
    <Switch>
      <Route exact path={ '/page-one' } component={ PageOne } />
      <Route exact path={ '/main-page' } component={ MainPage } />
      <Route exact path={ '/page-two' } component={ PageTwo } />
      <Route exact path={ '/starwars' } component={ Starwars } />

      <Redirect from={ '/' } to={ '/main-page' } />
    </Switch>
  )
}

export default ( CustomRouter );