import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user.isAuthenticated;
  return(
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect  to="/" />
        )
      }
    />
  );
}

export default PrivateRoute;