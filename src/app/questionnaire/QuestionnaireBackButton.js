import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import './QuestionnaireBackButton.css';

const PROP_TYPES = {
  basic: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  type: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
};

const DEFAULT_PROPS = {
  basic: true,
  color: 'violet',
  icon: 'chevron left',
  type: 'button',
  hidden: false,
};

export default function QuestionnaireBackButton({ hidden, ...props }) {
  if (hidden) {
    return null;
  }

  return (
    <Button
      {...props}
      className="questionnaire__back-button"
    />
  );
}

QuestionnaireBackButton.propTypes    = PROP_TYPES;
QuestionnaireBackButton.defaultProps = DEFAULT_PROPS;
