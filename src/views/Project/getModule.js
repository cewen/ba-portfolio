import React from 'react';

import ImageLarge from 'components/modules/ImageLarge';

export default module => {
  const { type } = module.fields;
  const { id } = module.sys;

  console.log(type)
  switch (type) {
    case 'img-large':
      return <ImageLarge key={id} content={module} />;

    default:
      return null;
  }
};