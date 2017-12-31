import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Bio extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.bio}>
        <p className={styles.bioText}>
          {text}
        </p>
      </div>
    );
  }
}

Bio.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Bio;