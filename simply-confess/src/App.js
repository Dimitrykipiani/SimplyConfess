import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Privacy from '../src/components/Privacy/Privacy';
import Contact from '../src/components/Contact/Contact';
import CreateStory from '../src/components/CreateStory/CreateStory';

function App() {
  return (
    <div className="App">
      <Layout>        
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/yourstory" component={CreateStory} />
        </Switch>
      </Layout>      
    </div>
  );
}

export default App;
