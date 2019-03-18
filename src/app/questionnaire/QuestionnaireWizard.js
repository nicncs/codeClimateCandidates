import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { questionnaires } from 'api/questionnaire/questionnaire.data';
import { setQuestionnaire } from 'api/questionnaire/questionnaire.actions';

import QuestionnaireSelection from './QuestionnaireSelection';
import QuestionnaireFormContainer from './QuestionnaireFormContainer';

export class QuestionnaireWizard extends Component {
  static propTypes = {
    hasQuestionnaire: PropTypes.bool.isRequired,
    questionnaires: PropTypes.array.isRequired,
  };

  static defaultProps = {
    hasQuestionnaire: false,
    questionnaires,
  };

  static mapStateToProps = (state, props) => {
    const { questionnaire } = state;
    const hasQuestionnaire = questionnaire.questions.length > 0;

    return {
      questionnaires,
      hasQuestionnaire,
    };
  };

  static mapDispatchToProps = {
    setQuestionnaire,
  };

  setQuestionnaire = (event, data) => {
    const { index } = data;
    const { questionnaires, setQuestionnaire } = this.props;
    setQuestionnaire(questionnaires[index]);
  }

  render() {
    const {
      hasQuestionnaire,
      questionnaires,
    } = this.props;

    if (!hasQuestionnaire) {
      return (
        <QuestionnaireSelection
          {...{questionnaires}}
          onSelect={this.setQuestionnaire}
        />
      );
    }

    return (
      <QuestionnaireFormContainer />
    );
  }
}

export default connect(
  QuestionnaireWizard.mapStateToProps,
  QuestionnaireWizard.mapDispatchToProps
)(QuestionnaireWizard);
