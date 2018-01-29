import React, { Component } from 'react';
import PropTypes from 'prop-types';

import arrow from 'assets/images/arrow-icon.svg';
import styles from './styles.scss';

class Bio extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;

    return (
      <div className={styles.bio}>
        <p className={styles.bioText}>
          {text}
          <img src={arrow} className={styles.arrow} alt="" />
        </p>
      </div>
    );
  }
}

export default Bio;