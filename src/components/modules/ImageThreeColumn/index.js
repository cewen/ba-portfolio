import React, { Component } from 'react';

import CustomPropTypes from 'lib/CustomPropTypes';
import BTE from 'lib/BTE';

import Picture from 'components/Picture';

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

    if (!this.imageOne || !this.imageTwo) {
      return;
    }

    if (breakpoints.m) {
      const height = this.imageOne.el.offsetHeight + this.imageTwo.el.offsetHeight + 120;
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
        <div className={styles.content} ref={ el => this.content = el} style={{height: contentHeight}}>
          <Picture
            ref={el => this.imageOne = el}
            className={styles.picture}
            asset={one}
            sizes={sizes}
          />
          <Picture
            ref={el => this.imageTwo = el}
            className={styles.picture}
            asset={two}
            sizes={sizes}
          />
          <Picture
            className={styles.picture}
            asset={three}
            sizes={sizes}
          />
        </div>
      </section>
    );
  }
}

export default ImageThreeColumn;