import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from '../components/Authorized';

function AuthRoute ({ component: Component, render, authority, redirectPath, ...rest}) {

  return (
    <Authorized authority={authority} noMatch={<Redirect to={redirectPath}></Redirect>}>
      <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
    </Authorized>
  )

}


export default AuthRoute;