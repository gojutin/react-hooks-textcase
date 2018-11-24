import 'react';
import PropTypes from 'prop-types';

function If(props) {
  if (props.condition) {
    return props.children;
  }
  return null;
}

If.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default If;
