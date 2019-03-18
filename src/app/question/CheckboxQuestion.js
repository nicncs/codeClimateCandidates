import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Checkbox from 'lib/ui/checkbox/Checkbox';

import withField from './with-field';

export function required(values = []) {
  return values.length > 0 ? undefined : 'Choose an option.';
}

export function normalize(options = []) {
  return function withOptions(values) {
    // Sort the array of selected values according to the original sequence.
    return options
      .filter((option) => values.indexOf(option.value.toString()) >= 0)
      .map((option) => option.value);
  }
}

export class CheckboxQuestion extends Component {
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

    const className = classNames('margin-top-0', 'checkbox-question', {
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

export default withField(CheckboxQuestion);
