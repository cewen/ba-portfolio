import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

import styles from './styles.scss';

class Index extends Component {
  static propTypes = {
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
    const { projects } = this.props;

    return (
      <section className={styles.container}>
        <div className={styles.collapse}>
          <div className={styles.content}>
            <h1 className={styles.header}>
              Project Index
            </h1>
            { projects.map(this.project) }
          </div>
        </div>
      </section>
    );
  }
}

export default Index;