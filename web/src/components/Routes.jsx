import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'components/HomePage';
import MyAccountPage from 'components/MyAccountPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-account" component={MyAccountPage} />
      </Switch>
    );
  }
}

export default Routes;
