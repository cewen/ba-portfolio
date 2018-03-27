import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from 'lib/CustomPropTypes';

import Bio from 'components/Bio';
import FeaturedProject from 'components/FeaturedProject';
import Project from 'components/Project';

import styles from './styles.scss';

class Home extends Component {
  static propTypes = {
    curation: CustomPropTypes.curation.isRequired,
    projects: PropTypes.arrayOf(CustomPropTypes.project).isRequired,
  };

  render() {
    const { curation, projects } = this.props;

    if (!curation || !curation.fields) {
      return null;
    }

    const { featuredProject } = curation.fields;

    return (
      <div className={styles.container}>
        <Bio text={curation.fields.bio} />
        <FeaturedProject content={featuredProject} />

        <div className={styles.projects}>
          {projects.filter(project => project.sys.id !== featuredProject.sys.id).map(project => {
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