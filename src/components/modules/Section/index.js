import React, { Component } from 'react';
import classNames from 'classnames';

import CustomPropTypes from 'lib/CustomPropTypes';

import Asset from 'components/Asset';

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
          <div className={styles.info}>
            <h1 className={styles.title}>
              {content.fields.title}
            </h1>
            <p className={styles.description}>
              {content.fields.description}
            </p>
          </div>

          <Asset
            className={styles.picture}
            asset={content.fields.images[0]}
            sizes={{
              s: { width: 660 },
              m: { width: 460 },
            }}
          />
        </div>
      </section>
    );
  }
}

export default Section;