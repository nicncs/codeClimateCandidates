import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Header, List } from 'semantic-ui-react';

import QuestionnaireBackButton from './QuestionnaireBackButton';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import QuestionnaireNavigation from './QuestionnaireNavigation';
import QuestionnaireResultsAnsweredQuestion from './QuestionnaireResultsAnsweredQuestion';

import './QuestionnaireResults.css';

const PROP_TYPES = {
  formName: PropTypes.string.isRequired,
  questionnaire: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};

const DEFAULT_PROPS = {
  formName: null,
  questionnaire: null,
  values: null,
};

const mapStateToProps = (state, props) => {
  const { questionnaire = {} } = state;
  const { formName } = props;
  const values = formValueSelector(formName)(state, 'questions', '');

  return {
    questionnaire,
    values,
  };
}

const mapDispatchToProps = {

};

export function QuestionnaireResults(props) {
  const {
    className,
    onPrevious,
    onReset,
    prevButtonProps,
    questionTypeLookup,
    questionnaire,
    values,
  } = props;

  const hasResults = !!values && !!questionnaire;

  return (
    <div {...{className}}>
      <Header
        content="Your answers"
        size="large"
        textAlign="center"
      />

      <List
        className={`${className}__list`}
        ordered
      >
        {!hasResults ? null : questionnaire.questions
          .map((question, index) => ({ question, answer: values.questions[index] }))
          .map(({ question, answer }, index) => (
            <QuestionnaireResultsAnsweredQuestion
              key={question.id}
              question={question.prompt}
              questionOptions={question.options}
              answer={!!answer ? answer.answer : null}
              answerComponent={questionTypeLookup[question.question_type].answerComponent}
            />
          )
        )}
      </List>

      <QuestionnaireNavigation>
        <QuestionnaireBackButton
          floated="left"
          onClick={onPrevious}
          {...prevButtonProps}
        />
        <QuestionnaireNextButton
          content="Start over"
          floated="right"
          icon="repeat"
          onClick={onReset}
        />
      </QuestionnaireNavigation>
    </div>
  );
}

QuestionnaireResults.propTypes    = PROP_TYPES;
QuestionnaireResults.defaultProps = DEFAULT_PROPS;
QuestionnaireResults.mapStateToProps = mapStateToProps;
QuestionnaireResults.mapDispatchToProps = mapDispatchToProps;

export default connect(
  QuestionnaireResults.mapStateToProps,
  QuestionnaireResults.mapDispatchToProps
)(QuestionnaireResults);
