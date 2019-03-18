import React from 'react';
import classNames from 'classnames';

import './HelpBlock.css';

/**
 * Error message stateless functional component
 * for withField() enhanced components.
 */
export default function HelpBlock({ className: css, hasError, errorMessage }) {
  if (!hasError) {
    return null;
  }

  const baseCss = [css, 'help-block'].filter(value => value).join('__');
  const className = classNames(baseCss, {
    [`${baseCss}--error`]: hasError,
  });

  return (
    <span {...{className}}>
      {errorMessage}
    </span>
  );
}
