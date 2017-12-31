import PropTypes from 'prop-types';
import file from './file';

export default PropTypes.shape({
  fields: PropTypes.shape({
    description: PropTypes.string,
    file, 
    title: PropTypes.string
  }),
  sys: PropTypes.object
});