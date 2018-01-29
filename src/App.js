import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import classNames from 'classnames';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './views/Home';
import Project from './views/Project';
import Index from './components/Index';
import GridGuides from './components/GridGuides';

import api from 'lib/api';

import styles from './App.scss';

class App extends Component {
  state = {
    projects: null,
    indexOpen: false,
  };

  toggleIndex = () => {
    const { indexOpen } = this.state;

    this.setState({ indexOpen: !indexOpen });
  }

  componentDidMount() {
    // Get list of Projects
    api.getEntries({ 'content_type': 'project' }).then((response) => {
      this.setState({ projects: response.items });
    });
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollIntoView()
  }

  render() {
    const { projects, indexOpen } = this.state;
    const classes = classNames({ [styles.black]: indexOpen });

    if (!projects) {
      return null;
    }

    return (
      <div className={classes}>
        <Nav projects={projects} toggleIndex={this.toggleIndex} indexOpen={indexOpen} />
        <div className={styles.content}>
          { !indexOpen && <Route exact path="/" render={props => <Home projects={projects} {...props} />} /> }
          { !indexOpen && <Route path="/:slug" render={props => <Project projects={projects} {...props} />} /> }
          { indexOpen && <Index projects={projects} toggleIndex={this.toggleIndex} /> }
        </div>
        <Footer indexOpen={indexOpen} />
        <GridGuides />
      </div>
    );
  }
}

export default App;
