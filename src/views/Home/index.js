import React, { Component } from 'react';

import api from 'lib/api';

import styles from './styles.scss';

class Home extends Component {
  state = {
    curation: {},
    projects: []
  };

  componentDidMount() {
    // Get data for Home Page curation
    api.getEntries({ 'content_type': 'curation' }).then((response) => {
      const [page] = response.items;

      this.setState((prevState, props) => {
        return { curation: page };
      })
    });

    // Get list of Projects
    api.getEntries({ 'content_type': 'project' }).then((response) => {
      this.setState((prevState, props) => {
        return { projects: response.items };
      })
    });
  }

  bio(curation) {
    
    return (
      <div className={styles.bio}>
        <p className={styles.bioText}>
          {curation.fields.bio}
        </p>
      </div>
    );
  }

  render() {
    const { curation, projects } = this.state;

    return (
      <div className={styles.container}>
        { curation && curation.fields && this.bio(curation) }

        <ul>
          {projects.map((project) => {
            return <li key={project.sys.id}>{project.fields.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;