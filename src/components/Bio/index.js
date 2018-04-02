import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

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
        <ReactMarkdown className={styles.bioText} source={text} />
        <img src={arrow} className={styles.arrow} alt="" />
      </div>
    );
  }
}

export default Bio;