import PropTypes from 'prop-types';

export default PropTypes.shape({
  contentType: PropTypes.string,
  details: PropTypes.object,
  fileName: PropTypes.string,
  url: PropTypes.string
});