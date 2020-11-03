import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login/login.js';
import routeInfoList from './routeInfoList.js';
import AuthRoute from './AuthRoute.js';
import NotFound from '../pages/NotFound/NotFound.js';


export default class AppRouter extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          { routeInfoList.map(routeInfo => {
            return (<AuthRoute
              key={routeInfo.name}
              path={routeInfo.path}
              component={routeInfo.component} 
              authority={routeInfo.authority} 
              redirectPath={routeInfo.redirect}>
              </AuthRoute>) 
          }) }
          <Redirect from="/" to="/home"></Redirect>
          <Route component={NotFound} ></Route>
        </Switch>
      </HashRouter>
    );
  }
}
