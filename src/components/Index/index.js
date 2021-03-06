import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

import arrow from 'assets/images/arrow-white-icon.svg';
import styles from './styles.scss';

class Index extends Component {
  static propTypes = {
    curation: CustomPropTypes.curation.isRequired,
    toggleIndex: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(CustomPropTypes.project).isRequired,
  };

  project = project => {
    const { fields, sys } = project;
    const { toggleIndex } = this.props;

    return (
      <section className={styles.project} key={sys.id}>
        <Link to={`/${fields.slug}`} className={styles.picture} onClick={toggleIndex}>
          <Picture
            asset={fields.thumbnail}
            sizes={{
              s: { width: 225 },
              m: { width: 180 },
              l: { width: 280 },
            }}
          />
        </Link>
        <h1 className={styles.title}>
          <Link to={`/${fields.slug}`} onClick={toggleIndex}>
            {fields.title}
          </Link>
        </h1>
        <span className={styles.info}>
          {fields.category}, {fields.year}
        </span>
      </section>
    );
  }

  render() {
    const { curation, projects } = this.props;
    const { featuredProject } = curation.fields;

    return (
      <section className={styles.container}>
        <div className={styles.collapse}>
          <div className={styles.content}>
            <h1 className={styles.header}>
              <img src={arrow} className={styles.arrow} alt="" />Project Index
            </h1>
            { this.project(featuredProject) }
            { projects.filter(project => project.sys.id !== featuredProject.sys.id).map(this.project) }
          </div>
        </div>
      </section>
    );
  }
}

export default Index;