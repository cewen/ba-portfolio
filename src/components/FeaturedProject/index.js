import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

import styles from './styles.scss';

class FeaturedProject extends Component {
  render() {
    const { content } = this.props;
    const { slug } = content.fields;

    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.collapser}>
            <Link to={`/${slug}`} className={styles.picture}>
              <Picture
                asset={content.fields.thumbnail}
                sizes={{
                  s: { width: 460 },
                  m: { width: 410 },
                  l: { width: 640 },
                }}
              />
            </Link>

            <div className={styles.info}>
              <h1 className={styles.title}>
                <Link to={`/${slug}`}>
                  {content.fields.title}
                </Link>
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