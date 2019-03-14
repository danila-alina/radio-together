import React from 'react';

import Routes from 'components/Routes';
import AuthRoutes from 'components/AuthRoutes';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import { Layout, Main } from './App.styled';

const isAuthed = localStorage.getItem('auth');

class App extends React.Component {
  render() {
    if (isAuthed) {
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

export default App;
