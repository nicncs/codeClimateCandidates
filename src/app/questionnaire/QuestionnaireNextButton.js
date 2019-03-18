import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const PROP_TYPES = {
  color: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
  labelPosition: PropTypes.string,
};

const DEFAULT_PROPS = {
  color: 'violet',
  content: 'Next',
  icon: 'chevron right',
  labelPosition: 'right',
};

export default function QuestionnaireNextButton(props) {
  return (
    <Button {...props} />
  );
}

QuestionnaireNextButton.propTypes    = PROP_TYPES;
QuestionnaireNextButton.defaultProps = DEFAULT_PROPS;
