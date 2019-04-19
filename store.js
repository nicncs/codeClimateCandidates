import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const exampleInitialState = {
  values: {},
  validities: {},
  triggeredStates: {},
  form: {
    valid: true,
  },
  message: {},
};

export const actionTypes = {
  SET_MESSAGE: "SET_MESSAGE",
  SET_VALUE: "SET_VALUE",
  SET_VALIDITY: "SET_VALIDITY",
  SET_VALIDITIES: "SET_VALIDITIES",
  SET_TRIGGERED_STATE: "SET_TRIGGERED_STATE",
  SET_TRIGGERED_STATES: "SET_TRIGGERED_STATES",
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message: {
          title: action.title,
          message: action.message,
        },
      };
    case actionTypes.SET_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          [action.id]: action.value,
        },
      };
    case actionTypes.SET_VALIDITY:
      return {
        ...state,
        validities: {
          ...state.validities,
          [action.id]: action.validity,
        },
      };
    case actionTypes.SET_VALIDITIES:
      const validities = {
        ...state.validities,
        ...action.validities,
      };

      return {
        ...state,
        validities,
      };
    case actionTypes.SET_TRIGGERED_STATE:
      return {
        ...state,
        triggeredStates: {
          ...state.triggeredStates,
          [action.id]: action.triggeredState,
        },
      };
    case actionTypes.SET_TRIGGERED_STATES:
      const triggeredStates = {
        ...state.triggeredStates,
        ...action.triggeredStates,
      };

      return {
        ...state,
        triggeredStates,
      };
    default:
      return state;
  }
};

// ACTIONS
export const setMessage = ({ title, message }) => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_MESSAGE, title, message });
  };
};
export const setValue = ({ id, value }) => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_VALUE, id, value });
  };
};
export const setValidity = ({ id, validity }) => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_VALIDITY, id, validity });
  };
};
export const setValidities = validities => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_VALIDITIES, validities });
  };
};
export const setTriggeredState = ({ id, triggeredState }) => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_TRIGGERED_STATE, id, triggeredState });
  };
};
export const setTriggeredStates = triggeredStates => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_TRIGGERED_STATES, triggeredStates });
  };
};

export default createStore(
  reducer,
  exampleInitialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
