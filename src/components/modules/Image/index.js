import React, { Component } from 'react';
import classNames from 'classnames';

import CustomPropTypes from 'lib/CustomPropTypes';

import Asset from 'components/Asset';

import styles from './styles.scss';

class Image extends Component {
  static propTypes = {
    content: CustomPropTypes.module.isRequired,
  };

  sizes() {
    const { type } = this.props.content.fields;

    switch (type.replace('img-', '')) {
      case 'small':
        return {
          s: { width: 460 },
        };

      case 'medium':
        return {
          s: { width: 460 },
          m: { width: 640 },
        };

      case 'large':
        return {
          s: { width: 720 },
          m: { width: 640 },
          l: { width: 1000 },
        };

      case 'big':
        return {
          s: { width: 720 },
          m: { width: 640 },
          l: { width: 820 },
        };

      default:
        return null;
    }
  }

  render() {
    const { images, alignment, type } = this.props.content.fields;
    const [image] = images;

    const classes = classNames(styles.container, {
      [styles.small]: type === 'img-small',
      [styles.medium]: type === 'img-medium',
      [styles.large]: type === 'img-large',
      [styles.big]: type === 'img-big',
      [styles.left]: alignment === 'left',
      [styles.right]: alignment === 'right',
    });

    return (
      <section className={classes}>
        <div className={styles.content}>
          <Asset
            className={styles.picture}
            asset={image}
            sizes={this.sizes()}
          />
        </div>
      </section>
    );
  }
}

export default Image;