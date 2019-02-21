import React from 'react';

import Routes from 'components/Routes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import { Layout, Main, Page } from './App.styled';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <SideMenu />
        <Main>
          <Header />
          <Page>
            <Routes />
          </Page>
        </Main>
      </Layout>
    );
  }
}

export default App;
