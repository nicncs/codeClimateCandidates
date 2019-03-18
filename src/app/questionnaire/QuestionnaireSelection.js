import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Header, Menu } from 'semantic-ui-react';
import noop from 'lodash/noop';
import pluralize from 'pluralize';

import './QuestionnaireSelection.css';

const PROP_TYPES = {
  questionnaires: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const DEFAULT_PROPS = {
  questionnaires: [],
  onSelect: noop,
};

export default function QuestionnaireSelection(props) {
  const { questionnaires, onSelect } = props;
  const items = questionnaires.map((questionnaire, index) => ({
    header: (
      <Header
        color="violet"
        content={questionnaire.title}
      />
    ),
    description: `Contains ${questionnaire.questions.length} ${pluralize('question', questionnaire.questions.length)}`,
    fluid: true,
    link: true,
    onClick: onSelect,
    index,
  }));

  return (
    <div className="questionnaire__selector">
      <Menu
        icon
        secondary
        size="small"
      >
        <Menu.Item
          className="questionnaire__selector__title"
          name="title"
          fitted
        >
          <Header
            as="h1"
            className="questionnaire__header"
            content="Choose your questionnaire"
            textAlign="center"
          />
        </Menu.Item>
      </Menu>

      <Divider />

      <Card.Group
        {...{items}}
        className="questionnaire__selector__cards"
      />
    </div>
  );
}

QuestionnaireSelection.propTypes    = PROP_TYPES;
QuestionnaireSelection.defaultProps = DEFAULT_PROPS;
