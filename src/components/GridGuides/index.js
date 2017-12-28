import React from 'react';

import './styles.scss';

function GridGuides() {
  const columns = [...new Array(12)].map((column, index) =>
    <div key={index.toString()} className={'gridColumn'} />);

  return (
    <div className={'gridGuides grid'}>
      <div className={'gridColumns'}>
        {columns}
      </div>
    </div>
  );
}

export default GridGuides;