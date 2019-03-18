import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const PROP_TYPES = {
  question: PropTypes.string,
  answer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
};

const DEFAULT_PROPS = {
  question: '',
  answer: null,
};

export default function QuestionnaireResultsAnsweredQuestion(props) {
  const {
    question,
    questionOptions: options,
    answer,
    answerComponent: AnswerComponent,
    ...rest
  } = props;

  let answerProps = {
    answer,
    options,
  };

  return (
    <List.Item {...rest}>
      <List.Header>{question}</List.Header>
      <div>
        <AnswerComponent {...answerProps} />
      </div>
    </List.Item>
  );
}

QuestionnaireResultsAnsweredQuestion.propTypes    = PROP_TYPES;
QuestionnaireResultsAnsweredQuestion.defaultProps = DEFAULT_PROPS;
