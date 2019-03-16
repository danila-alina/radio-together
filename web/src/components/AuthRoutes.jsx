import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignInPage from 'components/SignInPage';

class AuthRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={SignInPage} />
      </Switch>
    );
  }
}

export default AuthRoutes;
