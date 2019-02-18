import React from 'react';

import Header from 'components/Header';
import { Layout } from './App.styled';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
      </Layout>
    );
  }
}

export default App;
