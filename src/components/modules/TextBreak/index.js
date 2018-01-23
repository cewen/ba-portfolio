import React, { Component } from 'react';
import classNames from 'classnames';

import CustomPropTypes from 'lib/CustomPropTypes';

import styles from './styles.scss';

class Section extends Component {
  static propTypes = {
    content: CustomPropTypes.module.isRequired,
  };

  render() {
    const { content } = this.props;
    const { alignment } = content.fields;
    const classes = classNames(styles.container, { [styles.left]: alignment === 'left' });

    return (
      <section className={classes}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {content.fields.title}
          </h1>
          <p className={styles.description}>
            {content.fields.description}
          </p>
        </div>
      </section>
    );
  }
}

export default Section;