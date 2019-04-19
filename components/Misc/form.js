import ObjectClean from "clean-deep";
import validator from "validator";
import _ from "underscore";
import { compose } from "redux";
import store, { setValue, setValidity } from "../../store";
import { withHandlers, withPropsOnChange, shouldUpdate } from "recompose";

const VALIDATOR_ERROR_MESSAGE = {
  isRequired: "This is a mandatory field",
  isRequiredFile: "This is a mandatory file",
};

const VALIDATOR = {
  isRequired: value => isRequired(value),
  isLength: validator.isLength,
};

function isRequired(value) {
  if (_.isNumber(value)) {
    return true;
  }
  return value;
}

/**
 * Clean up data.
 * ObjectClean removes null/undefined values from arrays and objects.
 * return 0 for empty array
 * @param {*} value
 */
export function cleanValue(value, emptyArrayToZero = true) {
  if (_.isArray(value) || _.isObject(value)) {
    value = ObjectClean(value);
    if (emptyArrayToZero && _.isArray(value) && !value.length) value = value.length;
  } else if (typeof value === "string") {
    value = value.trim();
  } else if (_.includes([undefined, null], value)) {
    value = "";
  }
  return value;
}

/**
 * Function to validate form with given field ids
 * @param {Array} fields - Array of field ids
 * @param {Object} values - Object of field id as key paired with value
 */
export function validateForm({ fields = [], values = {}, triggeredStates = {}, FIELDS = {} }) {
  const validities = {};
  fields.forEach(id => {
    const validators = FIELDS[id].validators || [];
    const value = values[id];
    let validity;
    if (triggeredStates[id]) {
      validity = { isValid: true };
    } else {
      validity = validateInput({
        validators,
        value,
      });
    }
    validities[id] = validity;
  });
  return validities;
}

/**
 * Function to validate value with given vaidators
 * @param {Array} validators - Array of validators
 * @param {any} value - Value to be validated
 */
export function validateInput({ validators = [], value = null }) {
  let errorMessage = "";
  value = cleanValue(value, false);
  if (!_.isArray(validators)) return { isValid: !errorMessage, errorMessage };

  for (let validator of validators) {
    if (!_.isObject(value)) {
      //If value is not an object
      value = String(value);
      const { min, max, pattern, message } = validator;
      if (_.isObject(validator) && !(min === null && max === null)) {
        if (!VALIDATOR.isLength(value, { min, max })) {
          if (value && _.isEqual(min, max)) {
            errorMessage = `Value should be exactly ${max} characters long.`;
          } else if (value && min && max) {
            errorMessage = `Value should be ${min} to ${max} characters long.`;
          } else if (value && min) {
            errorMessage = `Value should be at least ${min} characters long.`;
          } else if (value && max) {
            errorMessage = `Value should not exceed ${max} character(s).`;
          }
        }
      } else {
        // value to string, validator.js check string only
        if (!_.isObject(validator)) {
          // escape min and max
          if (validator === "isRequired" && !VALIDATOR["isRequired"](value)) {
            errorMessage = "This is a mandatory field";
          } else if (validator === "isRequiredFile" && !VALIDATOR["isRequired"](value)) {
            errorMessage = VALIDATOR_ERROR_MESSAGE["isRequiredFile"];
          } else if (value && !VALIDATOR[validator.trim()](value)) {
            errorMessage = `Value should be ${VALIDATOR_ERROR_MESSAGE[validator]}`;
          }
        }
      }
    } else {
      // IS OBJECT / CHECKBOX / DROPDOWN ETC
      if (validator === "isRequired" && _.isEmpty(value) && !_.isNumber(value)) {
        errorMessage = "This is a mandatory field";
      }
    }
  }

  return { isValid: !errorMessage, errorMessage };
}

export const withFieldHandlers = compose(
  shouldUpdate((current, next) => {
    return !_.isEqual(current, next);
  }),
  withHandlers({
    handleValueUpdate: ({ id, validators = [] }) => (value, cb) => {
      if (_.isString(value)) {
        value = value.trim();
      }
      store.dispatch(
        setValue({
          id,
          value,
        }),
      );
      const validity = validateInput({
        validators,
        value,
      });
      store.dispatch(
        setValidity({
          id,
          validity,
        }),
      );
      cb(validity);
      return validity;
    },
  }),
  withPropsOnChange(["handleValueUpdate"], ({ handleValueUpdate }) => ({
    debouncedUpdate: _.debounce(handleValueUpdate, 100),
  })),
);
