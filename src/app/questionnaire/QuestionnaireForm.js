import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Form } from 'semantic-ui-react';

import QuestionnaireBackButton from './QuestionnaireBackButton';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import QuestionnaireNavigation from './QuestionnaireNavigation';

const PROP_TYPES = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.any,
  fields: PropTypes.arrayOf( // Assume that there can be more than one field per form.
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
      options: PropTypes.array,
   })
  ).isRequired,
};

const DEFAULT_PROPS = {
  handleSubmit: null,
  submitting: false,
  error: null,
  fields: [],
};

export function QuestionnaireForm(props) {
  const {
    // redux-form
    handleSubmit,
    submitting,
    error,

    // UI component
    className,
    fields,
    onPrevious,
    prevButtonProps,
    nextButtonProps,
  } = props;

  return (
    <Form
      {...{className}}
      {...{error}}
      loading={submitting}
      onSubmit={handleSubmit}
    >
      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
        />
      ))}

      <QuestionnaireNavigation>
        <QuestionnaireBackButton
          floated="left"
          onClick={onPrevious}
          {...prevButtonProps}
        />
        <QuestionnaireNextButton
          floated="right"
          type="submit"
          {...nextButtonProps}
        />
      </QuestionnaireNavigation>
    </Form>
  );
}

QuestionnaireForm.propTypes    = PROP_TYPES;
QuestionnaireForm.defaultProps = DEFAULT_PROPS;

export default reduxForm({
  destroyOnUnmount: false,
})(QuestionnaireForm);
