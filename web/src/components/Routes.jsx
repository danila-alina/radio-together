import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MyAccountPage from 'pages/MyAccountPage';
import MyMusicPage from 'pages/MyMusicPage';
import RecommendationsPage from 'pages/RecommendationsPage';
import PlaylistPage from 'pages/PlaylistPage';
import SearchResultsPage from 'pages/SearchResultsPage';
import ProfilePage from 'pages/ProfilePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-account" component={MyAccountPage} />
        <Route path="/my-music" component={MyMusicPage} />
        <Route path="/recommendations" component={RecommendationsPage} />
        <Route path="/playlist/:playlistId" component={PlaylistPage} />
        <Route
          path="/search-tracks/:searchValue"
          component={props => <SearchResultsPage key={props.match.url} {...props} />}
        />
        <Route path="/profile/:userId" component={ProfilePage} />
      </Switch>
    );
  }
}

export default Routes;
