import PropTypes from 'prop-types';

// This isn't placed in an input component file because it's being shared by multiple input component types.
export const optionsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.number
    ]),
  })
);
