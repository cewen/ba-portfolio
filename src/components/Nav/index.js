import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

class Nav extends Component {
  static propTypes = {
    toggleIndex: PropTypes.func.isRequired,
    indexOpen: PropTypes.bool.isRequired,
  };

  render() {
    const { toggleIndex, indexOpen } = this.props;
    const text = indexOpen ? 'close' : 'index';
    const classes = classNames(styles.container, { [styles.black]: indexOpen });

    return (
      <div className={classes}>
        <Link to="/" className={styles.name}>brian-a</Link>

        <a className={styles.index} onClick={toggleIndex}>
          {text}
        </a>
      </div>
    );
  }
}

export default Nav;