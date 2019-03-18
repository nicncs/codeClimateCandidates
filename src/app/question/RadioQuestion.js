import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Checkbox from 'lib/ui/checkbox/Checkbox';

import withField from './with-field';

export function required(value) {
  return !!value ? undefined : 'Choose an option.';
}

export function normalize(value) {
  return value;
}

export class RadioQuestion extends Component {
  static propTypes = {
    customOption: PropTypes.bool.isRequired,
    options: PropTypes.array,
    version: PropTypes.number.isRequired,
  };

  static defaultProps = {
    customOption: false,
    options: [],
    version: 1,
  };

  handleBlur = (event) => {
    const { onBlur, value } = this.props.input;
    onBlur(value);
  }

  render() {
    const {
      input: {
        onFocus,  // ignore this event handler
        onBlur,   // ignore this event handler
        ...input
      },
      customOption,
      options,
      onBlur: _onBlur, // use this in a custom event handler
      version,    // presentation style

      ...props
    } = this.props;

    const className = classNames('margin-top-0', 'radio-question', {
      [`v${version}`]: true,
    });

    return (
      <Checkbox.Group
        {...input}
        {...props}
        {...{options}}
        {...{className}}
      />
    );
  }
}

export default withField(RadioQuestion);
