import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Routes from 'components/Routes';
import AuthRoutes from 'components/AuthRoutes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';

import { setAuth } from 'resources/user/user.actions';
import { getAuth } from 'resources/user/user.selectors';

import { Layout, Main } from './App.styled';

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token'); // eslint-disable-line
    if (token) {
      this.props.setAuth();
    }
  }

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
  setAuth: PropTypes.func.isRequired,
  isAuthorised: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isAuthorised: getAuth(state),
}), {
  setAuth,
})(App);
