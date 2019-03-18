import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TextArea as TextAreaComponent } from 'semantic-ui-react';
import classNames from 'classnames';

import TextAreaCharacterCounter from './TextAreaCharacterCounter';

export default class TextQuestion extends Component {
  static propTypes = {
    baseCss: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
  };

  static defaultProps = {
    baseCss: 'textarea',
    maxLength: null,
  };

  render() {
    const {
      baseCss,
      className: _className,
      ...props
    } = this.props;
    const {
      maxLength,
      value,
    } = props;

    const className = classNames(_className, baseCss, {
      [`${baseCss}--max-length`]: !!maxLength,
    });

    return (
      <Fragment>
        <TextAreaComponent
          {...props}
          {...{className}}
        />
        {maxLength && (
          <TextAreaCharacterCounter
            {...{maxLength}}
            length={value.length}
          />
        )}
      </Fragment>
    );
  }
}
