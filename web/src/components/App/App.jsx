import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from 'components/Routes';
import AuthRoutes from 'components/AuthRoutes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';

import * as userSelectors from 'resources/user/user.selectors';
import * as currentTrackSelectors from 'resources/currentTrack/currentTrack.selectors';

import * as SC from './App.styled';

class App extends React.Component {
  render() {
    const { isAuthorised, isConfiguredInstance } = this.props;

    if (!isConfiguredInstance) {
      return null;
    }

    if (isAuthorised) {
      return (
        <SC.Layout>
          <SideMenu />
          <SC.Main>
            <Header />
            <Routes />
          </SC.Main>
        </SC.Layout>
      );
    }
    return <AuthRoutes />;
  }
}

App.propTypes = {
  isAuthorised: PropTypes.bool.isRequired,
  isConfiguredInstance: PropTypes.bool,
};

App.defaultProps = {
  isConfiguredInstance: false,
};

const mapStateToProps = state => ({
  isAuthorised: userSelectors.getAuth(state),
  isConfiguredInstance: currentTrackSelectors.isInstanceConfigured(state),
});

const mapDispatchToProps = {};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
