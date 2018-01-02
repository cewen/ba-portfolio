import React, { Component } from 'react';
import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

import styles from './styles.scss';

class Project extends Component {
  render() {
    const { content, sizes } = this.props;

    return (
      <section className={styles.container}>
        <Picture
          className={styles.picture}
          asset={content.fields.thumbnail}
          sizes={sizes}
        />
        <h1 className={styles.title}>
          {content.fields.title}
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