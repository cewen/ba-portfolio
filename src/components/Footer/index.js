import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

class Footer extends Component {
  static propTypes = {
    indexOpen: PropTypes.bool.isRequired,
  };

  render() {
    const { indexOpen } = this.props;
    const classes = classNames(styles.container, { [styles.black]: indexOpen });

    return (
      <footer className={classes}>
        <a href="mailto:brianagu@gmail.com" className={styles.link}>contact</a>
        <span className={styles.copyright}>&copy;2017–</span>
        <a href="https://instagram.com/brianagu" target="_blank" rel="noopener noreferrer" className={styles.link}>instagram</a>
      </footer>
    );
  }
}

export default Footer;