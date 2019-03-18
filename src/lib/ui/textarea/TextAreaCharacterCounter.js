import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PROP_TYPES = {
  baseCss: PropTypes.string.isRequired,
  warningThreshold: PropTypes.number,
};

export const DEFAULT_PROPS = {
  baseCss: 'textarea__char-counter',
  warningThreshold: 0.2,
};

export default function TextAreaCharacterCounter(props) {
  const {
    baseCss,
    length,
    maxLength,
    warningThreshold,
  } = props;

  const shouldWarn = !!warningThreshold ? ((maxLength - length) / maxLength) <= warningThreshold : false;
  const className = classNames(baseCss, {
    [`${baseCss}--limit`]: shouldWarn,
  });

  return (
    <div {...{className}}>
      {maxLength - length}
    </div>
  );
}

TextAreaCharacterCounter.propTypes    = PROP_TYPES;
TextAreaCharacterCounter.defaultProps = DEFAULT_PROPS;
