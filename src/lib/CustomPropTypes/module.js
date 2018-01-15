import PropTypes from 'prop-types';
import asset from './asset';

export default PropTypes.shape({
  fields: PropTypes.shape({
    cmsTitle: PropTypes.string,
    images: PropTypes.arrayOf(asset),
    title: PropTypes.string,
    type: PropTypes.string,
  }),
  sys: PropTypes.object,
});