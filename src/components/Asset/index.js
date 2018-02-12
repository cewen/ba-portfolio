import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';

class Asset extends Component {
  static propTypes = {
    asset: CustomPropTypes.asset.isRequired,
    sizes: PropTypes.shape({
      s: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
      m: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
      l: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
    }),
    className: PropTypes.string,
  };

  static defaultPropTypes = {
    sizes: null,
    className: '',
  };

  render() {
    const { className } = this.props;
    const { file } = this.props.asset.fields;

    if (file.contentType.includes('video')) {
      return <video playsInline autoPlay muted loop src={file.url} className={className} />;
    }

    return <Picture {...this.props} />
  }
}

export default Asset;