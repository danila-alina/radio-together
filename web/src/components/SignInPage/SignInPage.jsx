import React from 'react';

import {
  Page, Main, Title, SignInButton,
} from './SignInPage.styled';

class SignInPage extends React.Component {
  onSignInClick = () => {
    localStorage.setItem('auth', true);
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

export default SignInPage;
