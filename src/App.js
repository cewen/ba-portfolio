import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
      </div>
    );
  }
}

export default App;
