import React, { Component } from 'react';

import api from 'lib/api';

import Bio from 'components/Bio';
import FeaturedProject from 'components/FeaturedProject';
import Project from 'components/Project';

import styles from './styles.scss';

class Home extends Component {
  state = {
    curation: {},
  };

  componentDidMount() {
    // Get data for Home Page curation
    api.getEntries({ 'content_type': 'curation' }).then((response) => {
      const [page] = response.items;

      this.setState((prevState, props) => {
        return { curation: page };
      })
    });
  }

  render() {
    const { curation } = this.state;
    const { projects } = this.props;

    if (!curation || !curation.fields) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Bio text={curation.fields.bio} />
        <FeaturedProject content={curation.fields.featuredProject} />

        <div className={styles.projects}>
          {projects.map((project) => {
            return (
              <Project
                content={project}
                key={project.sys.id}
                sizes={{
                  s: { width: 460 },
                  m: { width: 295 },
                  l: { width: 460 },
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;