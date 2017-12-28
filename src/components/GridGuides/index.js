import React from 'react';

import './styles.scss';

function GridGuides() {
  const columns = [...new Array(6)].map((column, index) =>
    <div key={index.toString()} className={'gridColumn'} />);

  return (
    <div className={'gridGuides grid'}>
      
      <div className={'gridColumns'}>
        <div className={'gridCollapse'}>
          {columns}
        </div>
      </div>
    </div>
  );
}

export default GridGuides;