import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import SignInPage from 'pages/SignInPage';

class AuthRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={SignInPage} />
        <Redirect to="/auth" />
      </Switch>
    );
  }
}

export default AuthRoutes;
