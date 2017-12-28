import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';
import GridGuides from './components/GridGuides';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <GridGuides />
      </div>
    );
  }
}

export default App;
