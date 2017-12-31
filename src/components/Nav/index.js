import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

class Nav extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.name}>
          <Link to="/">brian-a</Link>
        </div>
      </div>
    );
  }
}

export default Nav;