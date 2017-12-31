import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

function GridGuides() {
  const columns = [...new Array(6)].map((column, index) =>
    <div key={index.toString()} className={styles.gridColumn} />);

  return (
    <div className={classnames(styles.gridGuides, styles.grid)}>

      <div className={styles.gridColumns}>
        <div className={styles.gridCollapse}>
          {columns}
        </div>
      </div>
    </div>
  );
}

export default GridGuides;