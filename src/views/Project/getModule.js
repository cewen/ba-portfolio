import React from 'react';

import Image from 'components/modules/Image';
import ImageFull from 'components/modules/ImageFull';
import Section from 'components/modules/Section';

export default module => {
  const { type } = module.fields;
  const { id } = module.sys;

  console.log(type)
  switch (type) {
    case 'img-large':
    case 'img-small':
    case 'img-medium':
    case 'img-big':
      return <Image key={id} content={module} />;

    case 'img-full':
      return <ImageFull key={id} content={module} />;

    case 'section':
      return <Section key={id} content={module} />;

    default:
      return null;
  }
};