import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from 'components/Routes';
import AuthRoutes from 'components/AuthRoutes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';

import { getAuth } from 'resources/user/user.selectors';

import { Layout, Main } from './App.styled';

class App extends React.Component {
  render() {
    const { isAuthorised } = this.props;

    if (isAuthorised) {
      return (
        <Layout>
          <SideMenu />
          <Main>
            <Header />
            <Routes />
          </Main>
        </Layout>
      );
    }
    return <AuthRoutes />;
  }
}

App.propTypes = {
  isAuthorised: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthorised: getAuth(state),
});

export default withRouter(connect(mapStateToProps)(App));
