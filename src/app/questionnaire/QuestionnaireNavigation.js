import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider, Responsive } from 'semantic-ui-react';

import './QuestionnaireNavigation.css';

const PROP_TYPES = {
  className: PropTypes.string,  
};

const DEFAULT_PROPS = {
  className: 'questionnaire__navigation',
};

export default function QuestionnaireNavigation(props) {
  return (
    <Fragment>
      <Responsive 
        as={Divider}
        className="questionnaire__navigation__divider"
        minWidth={768}
      />
      <div {...props} />
    </Fragment>
  );
}

QuestionnaireNavigation.propTypes    = PROP_TYPES;
QuestionnaireNavigation.defaultProps = DEFAULT_PROPS;
