import React, { Component } from 'react';

import CustomPropTypes from 'lib/CustomPropTypes';
import BTE from 'lib/BTE';

import Asset from 'components/Asset';

import styles from './styles.scss';


class ImageThreeColumn extends Component {
  static propTypes = {
    content: CustomPropTypes.module.isRequired,
  };

  state = {
    contentHeight: '',
  };

  getHeight() {
    const breakpoints = BTE.getBreakpoints();
    const { imageOne, imageTwo } = this;

    if (!imageOne || !imageTwo) {
      return;
    }

    if (breakpoints.m) {
      const height = imageOne.offsetHeight + imageTwo.offsetHeight + 120;
      this.setState({ contentHeight: height });
    } else {
      this.setState({ contentHeight: '' });
    }
  };

  componentDidMount() {
    BTE.monitorImagesLoad();
    BTE.monitorResize();
    BTE.on('imagesLoaded', this.getHeight.bind(this));
    BTE.on('resize', this.getHeight.bind(this));

    this.getHeight();
  }

  componentWillUnmount() {
    BTE.remove('imagesLoaded', this.getHeight.bind(this));
    BTE.remove('resize', this.getHeight.bind(this));
  }

  render() {
    const [one, two, three] = this.props.content.fields.images;
    const { contentHeight } = this.state;

    const sizes = {
      s: { width: 460 },
      m: { width: 295 },
      l: { width: 280 },
    };

    return (
      <section className={styles.container}>
        <div className={styles.content} style={{height: contentHeight}}>
          <div className={styles.picture} ref={el => this.imageOne = el}>
            <Asset
              asset={one}
              sizes={sizes}
            />
          </div>
          <div className={styles.picture} ref={el => this.imageTwo = el}>
            <Asset
              asset={two}
              sizes={sizes}
            />
          </div>
          <div className={styles.picture}>
            <Asset
              asset={three}
              sizes={sizes}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ImageThreeColumn;