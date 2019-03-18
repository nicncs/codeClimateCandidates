import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import questionnaire, { INITIAL_STATE as QUESTIONNAIRE_INITIAL_STATE } from 'api/questionnaire/questionnaire.reducer';

export const INITIAL_STATE = {
  questionnaire: QUESTIONNAIRE_INITIAL_STATE,
};

const rootReducer = combineReducers({
  questionnaire,
  form,
});

export default rootReducer;
