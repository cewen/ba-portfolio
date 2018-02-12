import React, { Component } from 'react';

import CustomPropTypes from 'lib/CustomPropTypes';

import Asset from 'components/Asset';

import styles from './styles.scss';

class ImageFull extends Component {
  static propTypes = {
    content: CustomPropTypes.module.isRequired,
  };

  render() {
    const { images } = this.props.content.fields;
    const [image] = images;

    return (
      <section className={styles.container}>
        <Asset
          asset={image}
          sizes={{
            s: { width: 720 },
            m: { width: 1120 },
            l: { width: 1200 },
          }}
        />
      </section>
    );
  }
}

export default ImageFull;