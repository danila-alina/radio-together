import React from 'react';

import Routes from 'components/Routes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import { Layout, Main } from './App.styled';

class App extends React.Component {
  render() {
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
}

export default App;
