import React from 'react';

import ImageLarge from 'components/modules/ImageLarge';
import Section from 'components/modules/Section';

export default module => {
  const { type } = module.fields;
  const { id } = module.sys;

  console.log(type)
  switch (type) {
    case 'img-large':
      return <ImageLarge key={id} content={module} />;

    case 'section':
      return <Section key={id} content={module} />

    default:
      return null;
  }
};