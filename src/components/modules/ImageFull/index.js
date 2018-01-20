import React, { Component } from 'react';

import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

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
        <Picture
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