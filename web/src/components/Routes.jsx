import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'components/HomePage';
import MyAccountPage from 'components/MyAccountPage';
import MyMusicPage from 'components/MyMusicPage';
import RecommendationsPage from 'components/RecommendationsPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-account" component={MyAccountPage} />
        <Route path="/my-music" component={MyMusicPage} />
        <Route path="/recommendations" component={RecommendationsPage} />
      </Switch>
    );
  }
}

export default Routes;
