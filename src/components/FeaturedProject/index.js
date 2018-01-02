import React, { Component } from 'react';
import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

import styles from './styles.scss';

class FeaturedProject extends Component {
  render() {
    const { content } = this.props;

    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.collapser}>
            <Picture
              className={styles.picture}
              asset={content.fields.thumbnail}
              sizes={{
                s: { width: 460 },
                m: { width: 410 },
                l: { width: 640 },
              }}
            />
            <div className={styles.info}>
              <h1 className={styles.title}>
                {content.fields.title}
              </h1>
              <h2 className={styles.details}>
                {content.fields.category}, {content.fields.year}
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturedProject.propTypes = {
  content: CustomPropTypes.project,
};

export default FeaturedProject;