import QuestionnaireService from './questionnaire.service';

export const SET_QUESTIONNAIRE = '@@app/questionnaire/SET_QUESTIONNAIRE';
export function setQuestionnaire(questionnaire) {
  return {
    type: SET_QUESTIONNAIRE,
    payload: questionnaire,
  };
}

export const RESET_QUESTIONNAIRE = '@@app/questionnaire/RESET_QUESTIONNAIRE';
export function resetQuestionnaire() {
  return {
    type: RESET_QUESTIONNAIRE,
  };
}

export const SUBMIT_ANSWERS = '@@app/questionnaire/SUBMIT_ANSWERS';
export function submitAnswers(data) {
  return function withStore(dispatch, getState) {
    dispatch({
      type: SUBMIT_ANSWERS,
      payload: data,
    });

    return QuestionnaireService.submit(data);
  }
}

export const SAVE_ANSWERS = '@@app/questionnaire/SAVE_ANSWERS';
export function saveAnswers(data) {
  return {
    type: SAVE_ANSWERS,
  };
}
