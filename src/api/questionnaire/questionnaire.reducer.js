import {
  SET_QUESTIONNAIRE,
  RESET_QUESTIONNAIRE,
  SUBMIT_ANSWERS,
  SAVE_ANSWERS,
} from './questionnaire.actions';

export const INITIAL_STATE = {
  title: null,
  questions: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_QUESTIONNAIRE:
      return {
        ...state,
        title: action.payload.title,
        questions: action.payload.questions,
      };

    case RESET_QUESTIONNAIRE:
      return INITIAL_STATE;

    case SUBMIT_ANSWERS:
      return {
        ...state,
      };

    case SAVE_ANSWERS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
