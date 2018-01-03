import React, { Component } from 'react';

import styles from './styles.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.container}>
        <a href="mailto:brianagu@gmail.com" className={styles.link}>contact</a>
        <span className={styles.copyright}>&copy;2017–</span>
        <a href="https://instagram.com/brianagu" target="_blank" rel="noopener noreferrer" className={styles.link}>instagram</a>
      </footer>
    );
  }
}

export default Footer;