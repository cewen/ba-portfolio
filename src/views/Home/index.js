import React, { Component } from 'react';

import api from 'lib/api';

import Bio from 'components/Bio';
import FeaturedProject from 'components/FeaturedProject';

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

  render() {
    const { curation, projects } = this.state;

    if (!curation || !curation.fields) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Bio text={curation.fields.bio} />
        <FeaturedProject content={curation.fields.featuredProject} />

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