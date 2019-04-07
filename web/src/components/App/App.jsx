import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from 'components/Routes';
import AuthRoutes from 'components/AuthRoutes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';

import * as userActions from 'resources/user/user.actions';
import * as userSelectors from 'resources/user/user.selectors';

import * as SC from './App.styled';

class App extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const { isAuthorised } = this.props;

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
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthorised: userSelectors.getAuth(state),
});

const mapDispatchToProps = {
  getUserInfo: userActions.getUserInfo,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
