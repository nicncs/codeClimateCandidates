import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { Responsive } from 'semantic-ui-react';

import trimString from 'lib/string/trim-string';
import TextArea from 'lib/ui/textarea/TextArea';

import withField from './with-field';

export function required(value = '') {
  const message = 'Enter a reply.';
  return trimString(value).length > 0 && value.length > 0 ? undefined : message;
}

export function minLength(length = 0, isRequired = false) {
  return function validate(value = '') {
    if (!isRequired && value.length === 0) {
      return undefined;
    }

    const message = `Enter at least ${length} ${pluralize('characters', length)}.`;
    return value.length >= length ? undefined : message;
  }
}

export function maxLength(length = 0, isRequired = false) {
  return function validate(value = '') {
    if (!isRequired && value.length === 0) {
      return undefined;
    }

    const message = `Shorten your input to ${length} ${pluralize('characters', length)}.`;
    return value.length > length ? message : undefined;
  }
}

export function normalize(value = '') {
  return value;
}

export class TextQuestion extends Component {
  static propTypes = {
    rows: PropTypes.shape({
      sm: PropTypes.number.isRequired,
      md: PropTypes.number.isRequired,
    }),
    mdThreshold: PropTypes.number.isRequired,
  };

  static defaultProps = {
    rows: {
      sm: 3,
      md: 5,
    },
    mdThreshold: 768, 
  };

  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows.sm,
      autoHeight: true,
    };
  }

  setRows = (rows, callback) => {
    this.setState((prevState, props) => ({
      rows,
    }), callback);
  }

  setAutoHeight = (autoHeight, callback) => {
    this.setState((prevState, props) => ({
      autoHeight,
    }), callback);
  }

  handleChange = (event, data) => {
    const { value } = event.target;
    const autoHeight = value.lineCount() >= this.state.rows;
    this.props.input.onChange(event);
    this.setAutoHeight(autoHeight);
  }

  handleUpdate = () => {
    const { rows: rowLookup, mdThreshold } = this.props;
    const { md, sm } = rowLookup;

    const width = window.innerWidth;
    const rows = width >= mdThreshold ? md : sm;

    this.setRows(rows, () => {
      // HACK: for a split second, set `autoHeight = false` so that the rows will rerender.
      this.setAutoHeight(false, () => {
        this.setAutoHeight(true);
      });
    });
  }

  render() {
    const {
      input,

      // UI component
      mdThreshold,
      rows: rowLookup,
      ...props
    } = this.props;

    const {
      rows,
      autoHeight,
    } = this.state;

    return (
      <Responsive
        as={TextArea}
        {...props}
        {...input}
        {...{rows}}
        {...{autoHeight}}
        fireOnMount
        onUpdate={this.handleUpdate}
      />
    );
  }
}

export default withField(TextQuestion);
