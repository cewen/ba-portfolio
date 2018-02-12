import React, { Component } from 'react';

import CustomPropTypes from 'lib/CustomPropTypes';

import Asset from 'components/Asset';

import styles from './styles.scss';

class ImageTwoColumn extends Component {
  static propTypes = {
    content: CustomPropTypes.module.isRequired,
  };

  render() {
    const [one, two] = this.props.content.fields.images;

    const sizes = {
      s: { width: 460 },
      m: { width: 295 },
      l: { width: 460 },
    };

    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <Asset
            className={styles.picture}
            asset={one}
            sizes={sizes}
          />
          <Asset
            className={styles.picture}
            asset={two}
            sizes={sizes}
          />
        </div>
      </section>
    );
  }
}

export default ImageTwoColumn;