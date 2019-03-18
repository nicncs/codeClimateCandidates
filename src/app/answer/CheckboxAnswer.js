import React from 'react';
import PropTypes from 'prop-types';

import joinString from 'lib/string/join-string';

import { optionsPropTypes } from 'api/question/question.models';

const PROP_TYPES = {
  answer: PropTypes.array,
  options: optionsPropTypes,
};

const DEFAULT_PROPS = {
  answer: [],
  options: [],
};

export default function CheckboxAnswer(props) {
  const { answer: answers, options } = props;
  const optionLookup = options.reduce((lookup, option) => ({
    ...lookup,
    [option.value]: option.label,
  }), {});
  const answerLabels = answers.map((answer) => optionLookup[answer.toString()]);

  return (
    <div>{joinString(answerLabels, ', ', true)}</div>
  );
}

CheckboxAnswer.propTypes    = PROP_TYPES;
CheckboxAnswer.defaultProps = DEFAULT_PROPS;
