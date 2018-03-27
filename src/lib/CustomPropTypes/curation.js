import PropTypes from 'prop-types';
import project from './project';

export default PropTypes.shape({
  fields: PropTypes.shape({
    bio: PropTypes.string,
    cmsTitle: PropTypes.string,
    featuredProject: project
  }),
  sys: PropTypes.object
});