import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { destroy } from 'redux-form';
import { Divider, Header, Icon, Menu } from 'semantic-ui-react';

import { resetQuestionnaire, saveAnswers, submitAnswers } from 'api/questionnaire/questionnaire.actions';
import { optionsPropTypes } from 'api/question/question.models';
import questionTypeLookup from 'app/question/question-type-lookup';

import QuestionnaireForm from './QuestionnaireForm';
import QuestionnaireResults from './QuestionnaireResults';

import './QuestionnaireFormContainer.css';

export class QuestionnaireFormContainer extends Component {
  static propTypes = {
    formName: PropTypes.string,
    questionTypeLookup: PropTypes.object.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        question_type: PropTypes.string.isRequired,
        prompt: PropTypes.string,
        is_required: PropTypes.bool,
        min_char_length: PropTypes.number,
        max_char_length: PropTypes.number,
        options: optionsPropTypes,
      })
    ).isRequired,
  };

  static defaultProps = {
    formName: 'questionnaire',
    questionTypeLookup,
    questions: null,
  };

  static mapStateToProps = (state, props) => {
    const { questionnaire = {} } = state;
    const { questions = [], title } = questionnaire;

    return {
      questions,
      title,
    };
  };

  static mapDispatchToProps = {
    destroy,
    resetQuestionnaire,
    saveAnswers,
    submitAnswers,
  };

  state = {
    index: 0,
  };

  componentWillUnmount() {
    this.destroyForm();
  }

  destroyForm = () => {
    const { formName, destroy } = this.props;
    destroy(formName); 
  }

  setIndexState = (index, callback) => {
    this.setState((prevState, props) => ({
      index,
    }), callback);
  }

  nextIndex = (data) => {
    this.setIndexState(this.state.index + 1);
  }

  prevIndex = (data) => {
    this.setIndexState(this.state.index - 1);
  }

  getField = (question, index) => {
    const {
      id,
      question_type,
      prompt,
      is_required,      // validation
      min_char_length,  // validation
      max_char_length,  // validation
      options,          // checkbox & radio only
      custom_option,    // checkbox & radio only
      version,          // checkbox & radio only
    } = question;

    /**
     * Retrieve the question field configuration.
     * The question is expected to be part of a list of questions.
     * 
     * Normally, 'redux-form', when given name="answer", will mean that
     * .answer is a top-level and is not iterable.
     * 
     * By giving it the question[].answer format, it will interpret
     * each entry as a question array object element containing the .answer
     * property so that it can be iterable, like the original data structure.
     */
    const { [question_type]: questionType } = this.props.questionTypeLookup;
    const { component, normalize, validator } = questionType;

    let field = {
      component,
      id,
      label: prompt,
      name: `questions[${index}].answer`, // 'redux-form' magic
      validate: [],
    };

    if (!!is_required) {
      field.validate.push(validator.required);
      field.required = is_required;
    }

    switch (question_type) {
      case 'TextQuestion': {
        if (typeof min_char_length === 'number') {
          field.validate.push(validator.minLength(min_char_length, is_required));
        }

        if (typeof max_char_length === 'number') {
          field.validate.push(validator.maxLength(max_char_length, is_required));
          field.maxLength = max_char_length;
        }

        if (typeof normalize === 'function') {
          field.normalize = normalize;
        }

        break;
      }

      case 'RadioQuestion':
      case 'CheckboxQuestion': {
        const { behavesLike, columns, checkboxComponent } = questionType;

        field = {
          ...field,
          behavesLike,
          columns,
          checkboxComponent,
          version,
        };

        if (Array.isArray(options)) {
          field.options = options;
        }

        if (custom_option) {
          field.customOption = custom_option;
        }

        if (typeof normalize === 'function') {
          field.normalize = question_type === 'CheckboxQuestion'
            ? normalize(options || [])
            : normalize;
        }

        break;
      }

      default:
    }

    return field;
  }

  submitAnswers = (data) => {
    return this.props.submitAnswers(data);
  }

  saveAnswers = (data) => {
    return this.props.saveAnswers(data);
  }

  render() {
    const {
      title,
      questions,
      questionTypeLookup,
      resetQuestionnaire,
      formName,
    } = this.props;

    const { index } = this.state;
    const question = questions[index];

    return (
      <div className="questionnaire">
        <Menu
          icon
          secondary
          size="small"
        >
          <Menu.Item
            name="back"
            onClick={resetQuestionnaire}
            fitted
          >
            <Icon
              color="violet"
              link
              name="arrow left"
              onClick={resetQuestionnaire}
              size="big"
            />
          </Menu.Item>

          <Menu.Item
            className="questionnaire__title"
            name="title"
            fitted
          >
            <Header
              as="h1"
              className="questionnaire__header"
              content={title}
              textAlign="center"
            />
          </Menu.Item>
        </Menu>

        <Divider />

        {(index < questions.length)
          ? (
            <QuestionnaireForm
              className="questionnaire__form"
              fields={[ this.getField(question, index) ]}
              form={formName}
              onSubmit={this.submitAnswers}
              onSubmitSuccess={this.nextIndex}
              onPrevious={this.prevIndex}
              prevButtonProps={{ hidden: index === 0 }}
              nextButtonProps={{ content: index < questions.length - 1 ? 'Continue' : 'Finish!' }}
            />
          )
          : (
            <QuestionnaireResults
              {...{formName}}
              {...{questionTypeLookup}}
              className="questionnaire__results"
              onReset={resetQuestionnaire}
              onPrevious={this.prevIndex}
            />
          )
        }
      </div>
    );
  }
}

export default connect(
  QuestionnaireFormContainer.mapStateToProps,
  QuestionnaireFormContainer.mapDispatchToProps
)(QuestionnaireFormContainer);
