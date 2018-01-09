import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

import styles from './styles.scss';

class Project extends Component {
  render() {
    const { content, sizes } = this.props;
    const { slug } = content.fields;

    return (
      <section className={styles.container}>
        <Link to={`/${slug}`} className={styles.picture}>
          <Picture
            asset={content.fields.thumbnail}
            sizes={sizes}
          />
        </Link>

        <h1 className={styles.title}>
          <Link to={`/${slug}`}>
            {content.fields.title}
          </Link>
        </h1>
        <h2 className={styles.details}>
          {content.fields.category}, {content.fields.year}
        </h2>
      </section>
    );
  }
}

Project.propTypes = {
  content: CustomPropTypes.project,
  sizes: CustomPropTypes.dimensions,
};

export default Project;