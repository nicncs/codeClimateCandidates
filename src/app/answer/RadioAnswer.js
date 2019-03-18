import React from 'react';
import PropTypes from 'prop-types';

import { optionsPropTypes } from 'api/question/question.models';

import AnswerNotProvided from './AnswerNotProvided';

const PROP_TYPES = {
  answer: PropTypes.array,
  options: optionsPropTypes,
};

const DEFAULT_PROPS = {
  answer: [],
  options: [],
};

export default function RadioAnswer(props) {
  const { answer, options } = props;
  const optionLookup = options.reduce((lookup, option) => ({
    ...lookup,
    [option.value]: option.label,
  }), {});
  const answerLabel = optionLookup[answer];

  if (!answerLabel) {
    return (
      <AnswerNotProvided />
    );
  }

  return (
    <div>{answerLabel}</div>
  );
}

RadioAnswer.propTypes    = PROP_TYPES;
RadioAnswer.defaultProps = DEFAULT_PROPS;
