import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'lib/CustomPropTypes';

const SIZE_MAP = {
  s: 320,
  m: 720,
  l: 1120,
};

class Picture extends Component {
  srcSet(size) {
    const src = this.src(size);
    const media = `(min-width: ${SIZE_MAP[size]}px)`;

    return src ? <source srcSet={src} media={media} /> : null;
  }

  src(size) {
    const { sizes, asset } = this.props;
    const { width, height } = sizes[size];

    let url = `${asset.fields.file.url}?w=${width}`;

    if (height) {
      return `${url}&h=${height}`;
    }

    return url;
  }

  render() {
    const { alt, className, sizes } = this.props;

    return (
      <picture className={className}>
        {sizes.l && this.srcSet('l')}
        {sizes.m && this.srcSet('m')}
        <img src={this.src('s')} alt={alt} />
      </picture>
    )
  }
};

Picture.propTypes = {
  sizes: PropTypes.shape({
    s: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
    m: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
    l: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
  }).isRequired,
  asset: CustomPropTypes.asset.isRequired,
  className: PropTypes.string,
};

Picture.defaultPropTypes = {
  className: '',
};

export default Picture;
