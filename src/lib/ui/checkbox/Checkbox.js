import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from 'semantic-ui-react';

import CheckboxGroup from './CheckboxGroup';

export default class Checkbox extends Component {
  static Group = CheckboxGroup;

  render() {
    return (
      <CheckboxComponent {...this.props} />
    );
  }
}
