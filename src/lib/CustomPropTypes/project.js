import PropTypes from 'prop-types';
import asset from './asset';

export default PropTypes.shape({
  fields: PropTypes.shape({
    category: PropTypes.string,
    credits: PropTypes.arrayOf(PropTypes.string),
    descriptionBody: PropTypes.string,
    descriptionHeader: PropTypes.string,
    hero: asset,
    honors: PropTypes.arrayOf(PropTypes.string),
    intro: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    thumbnail: asset,
    title: PropTypes.string,
    year: PropTypes.string
  }),
  sys: PropTypes.object
});