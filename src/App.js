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
    curation: null,
    projects: null,
    indexOpen: false,
  };

  toggleIndex = () => {
    const { indexOpen } = this.state;

    this.setState({ indexOpen: !indexOpen });
  }

  componentDidMount() {
    // Get data for Home Page curation
    // This is done here instead of in Home because Index component needs the Featured Project
    api.getEntries({ 'content_type': 'curation' }).then((response) => {
      const [page] = response.items;

      this.setState({ curation: page });
    });

    // Get list of Projects
    api.getEntries({ 'content_type': 'project' }).then((response) => {
      this.setState({ projects: response.items });
    });
  }

  componentDidUpdate() {
    const { projects } = this.state;

    if (projects) {
      ReactDOM.findDOMNode(this).scrollIntoView()
    }
  }

  render() {
    const { curation, projects, indexOpen } = this.state;
    const classes = classNames({ [styles.black]: indexOpen });

    if (!projects) {
      return null;
    }

    return (
      <div className={classes}>
        <Nav projects={projects} toggleIndex={this.toggleIndex} indexOpen={indexOpen} />
        <div className={styles.content}>
          { !indexOpen && <Route exact path="/" render={props => <Home curation={curation} projects={projects} {...props} />} /> }
          { !indexOpen && <Route path="/:slug" render={props => <Project projects={projects} {...props} />} /> }
          { indexOpen && <Index curation={curation} projects={projects} toggleIndex={this.toggleIndex} /> }
        </div>
        <Footer indexOpen={indexOpen} />
        <GridGuides />
      </div>
    );
  }
}

export default App;
