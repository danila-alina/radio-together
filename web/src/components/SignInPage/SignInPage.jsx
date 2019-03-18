import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn, setAuth } from 'resources/user/user.actions';

import {
  Page, Main, Title, SignInButton,
} from './SignInPage.styled';

class SignInPage extends React.Component {
  onSignInClick = () => {
    this.props.signIn()
      .then((result) => {
        window.localStorage.setItem('token', result.token);
        this.props.setAuth();
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <Page>
        <Main>
          <Title>Radio Together</Title>
          <SignInButton onClick={this.onSignInClick}>
            Sign in with iTunes
          </SignInButton>
        </Main>
      </Page>
    );
  }
}

SignInPage.propTypes = {
  signIn: PropTypes.func.isRequired,
  setAuth: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(state => ({}), {
  signIn,
  setAuth,
})(SignInPage));
