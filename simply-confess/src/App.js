import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from '../src/components/Home/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
