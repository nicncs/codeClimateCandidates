import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import getDisplayName from 'recompose/getDisplayName';
import classNames from 'classnames';

import HelpBlock from 'lib/ui/helpblock/HelpBlock';

export default function withField(EnhanceableComponent, withRef) {
  class WithField extends Component {
    render() {
      const {
        // semantic-ui-react
        children,
        content,
        control,
        disabled,
        inline,
        label,
        hint,
        required,
        width,
        as: AsComponent,
        className: css,

        // redux-form
        meta: { touched, error },

        // passed to the component
        forwardedRef,
        componentProps,
        ...props
      } = this.props;

      const baseCss = 'sui-rf';
      const className = classNames(baseCss, {
        [css]: !!css,
      });

      const { name } = props.input;
      const hasError = !!touched && !!error; // Show `error` only when the field has been `touched`.

      const formFieldProps = {
        error: hasError,
        required,
        inline,
        width,
        className,
      };

      const enhanceableComponentProps = {
        id: name,
        ref: forwardedRef,
        disabled,
        ...props,
        ...componentProps,
      };

      const helpBlockProps = {
        hasError,
        className: baseCss,
        errorMessage: error,
      };

      return (
        <Form.Field {...formFieldProps}>
          {label && (
            <label htmlFor={name}>{label}</label>
          )}

          <EnhanceableComponent {...enhanceableComponentProps} />
          <HelpBlock {...helpBlockProps} />

          {hint && (
            <label>{hint}</label>
          )}
        </Form.Field>
      );
    }
  }

  WithField.displayName = `withField(${getDisplayName(EnhanceableComponent)})`;

  if (withRef) {
    return React.forwardRef((props, ref) => {
      return (
        <WithField {...props} forwardedRef={ref} />
      );
    });
  }

  return WithField;
}
