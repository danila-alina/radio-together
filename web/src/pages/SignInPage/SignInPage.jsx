import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userActions from 'resources/user/user.actions';

import * as SC from './SignInPage.styled';

class SignInPage extends React.Component {
  state = {
    showStep2: false,
    signIn: {
      login: '',
      password: '',
    },
    signUp: {
      login: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  };

  onSignInWithAppleClick = () => {
    const music = window.MusicKit.getInstance();
    music.authorize()
      .then((musicUserToken) => {
        this.setState({
          showStep2: true,
          musicUserToken,
        });
      });
  }

  onInputChange = form => (event) => {
    const { name, value } = event.target;
    this.setState(state => ({
      [form]: {
        ...state[form],
        [name]: value,
      },
    }));
  }

  onSignInButtonClick = () => {
    const { musicUserToken, signIn } = this.state;
    this.props.signIn(musicUserToken, signIn)
      .then((result) => {
        window.localStorage.setItem('token', result.token);
        this.props.setAuth();
        this.props.history.push('/');
      });
  }

  onSignUpButtonClick = () => {
    const { musicUserToken, signUp } = this.state;
    this.props.signUp(musicUserToken, signUp)
      .then((result) => {
        window.localStorage.setItem('token', result.token);
        this.props.setAuth();
        this.props.history.push('/');
      });
  }

  render() {
    const { showStep2, signIn, signUp } = this.state;

    if (showStep2) {
      return (
        <SC.PageStep2>
          <SC.Section>
            <SC.PageTitle>Radio Together</SC.PageTitle>
          </SC.Section>
          <SC.SectionsContainer>
            <SC.RegisterSection>
              <SC.Title white>
                <SC.SectionTitle>Do not have an account?</SC.SectionTitle>
                <SC.SectionTitle>Register right now.</SC.SectionTitle>
              </SC.Title>
              <SC.RegisterInput
                placeholder="Login"
                name="login"
                value={signUp.login}
                onChange={this.onInputChange('signUp')}
              />
              <SC.RegisterInput
                placeholder="First name"
                name="firstName"
                value={signUp.firstName}
                onChange={this.onInputChange('signUp')}
              />
              <SC.RegisterInput
                placeholder="Last name"
                name="lastName"
                value={signUp.lastName}
                onChange={this.onInputChange('signUp')}
              />
              <SC.RegisterInput
                placeholder="Password"
                type="password"
                name="password"
                value={signUp.password}
                onChange={this.onInputChange('signUp')}
              />
              <SC.SubmitButton onClick={this.onSignUpButtonClick}>Sign Up</SC.SubmitButton>
            </SC.RegisterSection>
            <SC.LogInSection>
              <SC.Title>
                <SC.SectionTitle>Log In</SC.SectionTitle>
              </SC.Title>
              <SC.LogInInput
                placeholder="Login"
                name="login"
                value={signIn.login}
                onChange={this.onInputChange('signIn')}
              />
              <SC.LogInInput
                placeholder="Password"
                type="password"
                name="password"
                value={signIn.password}
                onChange={this.onInputChange('signIn')}
              />
              <SC.SubmitButton
                colorful
                onClick={this.onSignInButtonClick}
              >
                Sign In
              </SC.SubmitButton>
            </SC.LogInSection>
          </SC.SectionsContainer>
        </SC.PageStep2>
      );
    }

    return (
      <SC.PageStep1>
        <SC.Main>
          <SC.PageTitle>Radio Together</SC.PageTitle>
          <SC.SignInButton onClick={this.onSignInWithAppleClick}>
            Sign in with Apple Music
          </SC.SignInButton>
        </SC.Main>
      </SC.PageStep1>
    );
  }
}

SignInPage.propTypes = {
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  setAuth: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  signIn: userActions.signIn,
  signUp: userActions.signUp,
  setAuth: userActions.setAuth,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPage));
