import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import AnswerNotProvided from './AnswerNotProvided';

const PROP_TYPES = {
  answer: PropTypes.string,
};

const DEFAULT_PROPS = {
  answer: null,
};

export default function TextAnswer(props) {
  const { answer } = props;

  if (!answer) {
    return (
      <AnswerNotProvided />
    );
  }

  return (
    <Markdown source={answer} />
  );
}

TextAnswer.propTypes    = PROP_TYPES;
TextAnswer.defaultProps = DEFAULT_PROPS;
