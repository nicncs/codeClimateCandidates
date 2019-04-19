module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setValidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setValidities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setTriggeredState; });
/* unused harmony export setTriggeredStates */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var exampleInitialState = {
  values: {},
  validities: {},
  triggeredStates: {},
  form: {
    valid: true
  },
  message: {}
};
var actionTypes = {
  SET_MESSAGE: "SET_MESSAGE",
  SET_VALUE: "SET_VALUE",
  SET_VALIDITY: "SET_VALIDITY",
  SET_VALIDITIES: "SET_VALIDITIES",
  SET_TRIGGERED_STATE: "SET_TRIGGERED_STATE",
  SET_TRIGGERED_STATES: "SET_TRIGGERED_STATES"
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.SET_MESSAGE:
      return _objectSpread({}, state, {
        message: {
          title: action.title,
          message: action.message
        }
      });

    case actionTypes.SET_VALUE:
      return _objectSpread({}, state, {
        values: _objectSpread({}, state.values, _defineProperty({}, action.id, action.value))
      });

    case actionTypes.SET_VALIDITY:
      return _objectSpread({}, state, {
        validities: _objectSpread({}, state.validities, _defineProperty({}, action.id, action.validity))
      });

    case actionTypes.SET_VALIDITIES:
      var validities = _objectSpread({}, state.validities, action.validities);

      return _objectSpread({}, state, {
        validities: validities
      });

    case actionTypes.SET_TRIGGERED_STATE:
      return _objectSpread({}, state, {
        triggeredStates: _objectSpread({}, state.triggeredStates, _defineProperty({}, action.id, action.triggeredState))
      });

    case actionTypes.SET_TRIGGERED_STATES:
      var triggeredStates = _objectSpread({}, state.triggeredStates, action.triggeredStates);

      return _objectSpread({}, state, {
        triggeredStates: triggeredStates
      });

    default:
      return state;
  }
}; // ACTIONS

var setMessage = function setMessage(_ref) {
  var title = _ref.title,
      message = _ref.message;
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_MESSAGE,
      title: title,
      message: message
    });
  };
};
var setValue = function setValue(_ref2) {
  var id = _ref2.id,
      value = _ref2.value;
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_VALUE,
      id: id,
      value: value
    });
  };
};
var setValidity = function setValidity(_ref3) {
  var id = _ref3.id,
      validity = _ref3.validity;
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_VALIDITY,
      id: id,
      validity: validity
    });
  };
};
var setValidities = function setValidities(validities) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_VALIDITIES,
      validities: validities
    });
  };
};
var setTriggeredState = function setTriggeredState(_ref4) {
  var id = _ref4.id,
      triggeredState = _ref4.triggeredState;
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_TRIGGERED_STATE,
      id: id,
      triggeredState: triggeredState
    });
  };
};
var setTriggeredStates = function setTriggeredStates(triggeredStates) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_TRIGGERED_STATES,
      triggeredStates: triggeredStates
    });
  };
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, exampleInitialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a))));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Icon");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "underscore"
var external__underscore_ = __webpack_require__(1);
var external__underscore__default = /*#__PURE__*/__webpack_require__.n(external__underscore_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(9);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "recompose"
var external__recompose_ = __webpack_require__(2);
var external__recompose__default = /*#__PURE__*/__webpack_require__.n(external__recompose_);

// CONCATENATED MODULE: ./components/Form/CheckboxGroup/IECheckboxGroup.js





var IECheckboxGroup_IECheckboxGroup = function IECheckboxGroup(props) {
  var name = props.name,
      columns = props.columns,
      checkboxes = props.checkboxes,
      isEditable = props.isEditable,
      selectedValue = props.selectedValue,
      onAnyCheckboxChanged = props.onAnyCheckboxChanged; // checkboxes = [{title: 'value', value: 'value'},{title: 'value', value: 'value1'}];

  var checkboxGroup = checkboxes.map(function (checkbox, i) {
    var title = checkbox.title,
        name = checkbox.name,
        value = checkbox.value,
        onChange = checkbox.onChange;
    var atIndex = selectedValue.indexOf(value);
    var checked = atIndex > -1;
    var classNames = ["checkbox-wrapper col-xs-12", columns <= 12 && "col-sm-".concat(columns)];
    var wrapperCls = [checked && "checked", "checkbox-box-wrapper"];
    return external__react__default.a.createElement("div", {
      key: i,
      className: classNames.join(" "),
      onClick: function onClick(e) {
        if (!isEditable) return;
        var values = external__underscore__default.a.clone(selectedValue) || [];
        var indexAt = values.indexOf(value);
        var found = indexAt > -1;

        if (!found) {
          values.push(value);
        } else {
          values.splice(indexAt, 1);
        }

        onChange && onChange(e, {
          selectedValue: values,
          value: values,
          checked: !found
        });
        onAnyCheckboxChanged && onAnyCheckboxChanged(e, {
          index: i,
          value: values,
          checked: !found
        });
      }
    }, external__react__default.a.createElement("div", {
      className: "checkbox-label"
    }, external__react__default.a.createElement("div", {
      className: wrapperCls.join(" ")
    }, external__react__default.a.createElement("div", {
      className: "checkbox-box"
    }, checked && external__react__default.a.createElement("div", {
      className: "checked-box-shape"
    }))), title), external__react__default.a.createElement("input", {
      className: "checkbox-option",
      type: "checkbox",
      name: name,
      value: value,
      title: title,
      checked: checked,
      onChange: external__underscore__default.a.noop
    }));
  });
  return external__react__default.a.createElement("div", {
    className: "checkboxes-wrapper"
  }, checkboxGroup);
};

IECheckboxGroup_IECheckboxGroup.defaultProps = {
  checkboxes: [],
  selectedValue: [],
  isEditable: true
};
/* harmony default export */ var CheckboxGroup_IECheckboxGroup = (Object(external__recompose_["compose"])(Object(external__recompose_["withStateHandlers"])(function () {
  var timestamp = external__moment__default()().toISOString();
  var name = "checkbox".concat(timestamp);
  return {
    name: name
  };
}))(IECheckboxGroup_IECheckboxGroup));
// CONCATENATED MODULE: ./components/Form/CheckboxGroup/ErrorMessage.js


var ErrorMessage_ErrorMessage = function ErrorMessage(_ref) {
  var message = _ref.message;
  var classNames = ["input__message", message && "input__message--error"];
  return external__react__default.a.createElement("div", {
    className: classNames.join(" ")
  }, message);
};

/* harmony default export */ var CheckboxGroup_ErrorMessage = (ErrorMessage_ErrorMessage);
// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(10);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// CONCATENATED MODULE: ./components/Form/Label.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Label_LabelOnly =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LabelOnly, _React$Component);

  function LabelOnly() {
    _classCallCheck(this, LabelOnly);

    return _possibleConstructorReturn(this, (LabelOnly.__proto__ || Object.getPrototypeOf(LabelOnly)).apply(this, arguments));
  }

  _createClass(LabelOnly, [{
    key: "render",
    value: function render() {
      var classWarning = "warning";
      var _props = this.props,
          type = _props.type,
          className = _props.className,
          fieldname = _props.fieldname,
          title = _props.title,
          name = _props.name,
          size = _props.size,
          align = _props.align,
          lineHeight = _props.lineHeight,
          bold = _props.bold,
          italic = _props.italic,
          underlined = _props.underlined,
          isValid = _props.isValid,
          errorMessage = _props.errorMessage,
          _props$showComponent = _props.showComponent,
          showComponent = _props$showComponent === void 0 ? true : _props$showComponent,
          path = _props.path;
      var parent = fieldname.parent,
          current = fieldname.current;
      var classNames = ["df--input input__label", external__underscore__default.a.isString(className) && className, !isValid && classWarning, bold && "bold", italic && "italic", underlined && "underlined", typeof align === "string" ? "align-".concat(align) : "align-left"];
      lineHeight = typeof lineHeight === "number" ? "".concat(lineHeight, "px") : lineHeight;
      if (!showComponent || !title) return external__react__default.a.createElement("div", null);

      switch (size) {
        case "big":
          size = "1.75em";
          break;

        case "small":
          size = "0.6em";
          brek;

        default:
          size = null;
      }

      return external__react__default.a.createElement("div", {
        className: classNames.join(" ")
      }, external__react__default.a.createElement("div", {
        size: size,
        className: "input__label--text",
        style: {
          lineHeight: lineHeight,
          fontSize: size
        }
      }, title), external__react__default.a.createElement("div", {
        className: "input__message " + (errorMessage ? "input__message--error" : "")
      }, errorMessage));
    }
  }]);

  return LabelOnly;
}(external__react__default.a.Component);

Object.defineProperty(Label_LabelOnly, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "",
    fieldname: {},
    isValid: true,
    size: "normal"
  }
});
/* harmony default export */ var Label = (Label_LabelOnly);
// EXTERNAL MODULE: external "clean-deep"
var external__clean_deep_ = __webpack_require__(11);
var external__clean_deep__default = /*#__PURE__*/__webpack_require__.n(external__clean_deep_);

// EXTERNAL MODULE: external "validator"
var external__validator_ = __webpack_require__(12);
var external__validator__default = /*#__PURE__*/__webpack_require__.n(external__validator_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(3);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./store.js
var store = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Misc/form.js






var VALIDATOR_ERROR_MESSAGE = {
  isRequired: "This is a mandatory field",
  isRequiredFile: "This is a mandatory file"
};
var VALIDATOR = {
  isRequired: function isRequired(value) {
    return _isRequired(value);
  },
  isLength: external__validator__default.a.isLength
};

function _isRequired(value) {
  if (external__underscore__default.a.isNumber(value)) {
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


function cleanValue(value) {
  var emptyArrayToZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (external__underscore__default.a.isArray(value) || external__underscore__default.a.isObject(value)) {
    value = external__clean_deep__default()(value);
    if (emptyArrayToZero && external__underscore__default.a.isArray(value) && !value.length) value = value.length;
  } else if (typeof value === "string") {
    value = value.trim();
  } else if (external__underscore__default.a.includes([undefined, null], value)) {
    value = "";
  }

  return value;
}
/**
 * Function to validate form with given field ids
 * @param {Array} fields - Array of field ids
 * @param {Object} values - Object of field id as key paired with value
 */

function validateForm(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? [] : _ref$fields,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      _ref$triggeredStates = _ref.triggeredStates,
      triggeredStates = _ref$triggeredStates === void 0 ? {} : _ref$triggeredStates,
      _ref$FIELDS = _ref.FIELDS,
      FIELDS = _ref$FIELDS === void 0 ? {} : _ref$FIELDS;
  var validities = {};
  fields.forEach(function (id) {
    var validators = FIELDS[id].validators || [];
    var value = values[id];
    var validity;

    if (triggeredStates[id]) {
      validity = {
        isValid: true
      };
    } else {
      validity = validateInput({
        validators: validators,
        value: value
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

function validateInput(_ref2) {
  var _ref2$validators = _ref2.validators,
      validators = _ref2$validators === void 0 ? [] : _ref2$validators,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? null : _ref2$value;
  var errorMessage = "";
  value = cleanValue(value, false);
  if (!external__underscore__default.a.isArray(validators)) return {
    isValid: !errorMessage,
    errorMessage: errorMessage
  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _validator2 = _step.value;

      if (!external__underscore__default.a.isObject(value)) {
        //If value is not an object
        value = String(value);
        var min = _validator2.min,
            max = _validator2.max,
            pattern = _validator2.pattern,
            message = _validator2.message;

        if (external__underscore__default.a.isObject(_validator2) && !(min === null && max === null)) {
          if (!VALIDATOR.isLength(value, {
            min: min,
            max: max
          })) {
            if (value && external__underscore__default.a.isEqual(min, max)) {
              errorMessage = "Value should be exactly ".concat(max, " characters long.");
            } else if (value && min && max) {
              errorMessage = "Value should be ".concat(min, " to ").concat(max, " characters long.");
            } else if (value && min) {
              errorMessage = "Value should be at least ".concat(min, " characters long.");
            } else if (value && max) {
              errorMessage = "Value should not exceed ".concat(max, " character(s).");
            }
          }
        } else {
          // value to string, validator.js check string only
          if (!external__underscore__default.a.isObject(_validator2)) {
            // escape min and max
            if (_validator2 === "isRequired" && !VALIDATOR["isRequired"](value)) {
              errorMessage = "This is a mandatory field";
            } else if (_validator2 === "isRequiredFile" && !VALIDATOR["isRequired"](value)) {
              errorMessage = VALIDATOR_ERROR_MESSAGE["isRequiredFile"];
            } else if (value && !VALIDATOR[_validator2.trim()](value)) {
              errorMessage = "Value should be ".concat(VALIDATOR_ERROR_MESSAGE[_validator2]);
            }
          }
        }
      } else {
        // IS OBJECT / CHECKBOX / DROPDOWN ETC
        if (_validator2 === "isRequired" && external__underscore__default.a.isEmpty(value) && !external__underscore__default.a.isNumber(value)) {
          errorMessage = "This is a mandatory field";
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    isValid: !errorMessage,
    errorMessage: errorMessage
  };
}
var withFieldHandlers = Object(external__redux_["compose"])(Object(external__recompose_["shouldUpdate"])(function (current, next) {
  return !external__underscore__default.a.isEqual(current, next);
}), Object(external__recompose_["withHandlers"])({
  handleValueUpdate: function handleValueUpdate(_ref3) {
    var id = _ref3.id,
        _ref3$validators = _ref3.validators,
        validators = _ref3$validators === void 0 ? [] : _ref3$validators;
    return function (value, cb) {
      if (external__underscore__default.a.isString(value)) {
        value = value.trim();
      }

      store["a" /* default */].dispatch(Object(store["f" /* setValue */])({
        id: id,
        value: value
      }));
      var validity = validateInput({
        validators: validators,
        value: value
      });
      store["a" /* default */].dispatch(Object(store["e" /* setValidity */])({
        id: id,
        validity: validity
      }));
      cb(validity);
      return validity;
    };
  }
}), Object(external__recompose_["withPropsOnChange"])(["handleValueUpdate"], function (_ref4) {
  var handleValueUpdate = _ref4.handleValueUpdate;
  return {
    debouncedUpdate: external__underscore__default.a.debounce(handleValueUpdate, 100)
  };
}));
// CONCATENATED MODULE: ./components/Form/CheckboxGroup/index.js
function CheckboxGroup__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CheckboxGroup__typeof = function _typeof(obj) { return typeof obj; }; } else { CheckboxGroup__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CheckboxGroup__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CheckboxGroup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CheckboxGroup__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CheckboxGroup__createClass(Constructor, protoProps, staticProps) { if (protoProps) CheckboxGroup__defineProperties(Constructor.prototype, protoProps); if (staticProps) CheckboxGroup__defineProperties(Constructor, staticProps); return Constructor; }

function CheckboxGroup__possibleConstructorReturn(self, call) { if (call && (CheckboxGroup__typeof(call) === "object" || typeof call === "function")) { return call; } return CheckboxGroup__assertThisInitialized(self); }

function CheckboxGroup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CheckboxGroup__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var CheckboxGroup_BaseCheckboxGroup =
/*#__PURE__*/
function (_React$Component) {
  CheckboxGroup__inherits(BaseCheckboxGroup, _React$Component);

  function BaseCheckboxGroup(props) {
    var _this;

    CheckboxGroup__classCallCheck(this, BaseCheckboxGroup);

    _this = CheckboxGroup__possibleConstructorReturn(this, (BaseCheckboxGroup.__proto__ || Object.getPrototypeOf(BaseCheckboxGroup)).call(this, props));
    Object.defineProperty(CheckboxGroup__assertThisInitialized(_this), "classWarning", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "warning"
    });
    _this.props = props;
    _this.state = {
      value: props.value,
      isValid: props.isValid,
      errorMessage: props.errorMessage
    };
    _this.handleChange = _this.handleChange.bind(CheckboxGroup__assertThisInitialized(_this));
    _this.handleFieldChange = _this.props.handleValueUpdate && _this.props.handleValueUpdate.bind(CheckboxGroup__assertThisInitialized(_this));
    return _this;
  }

  CheckboxGroup__createClass(BaseCheckboxGroup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (prevProps.isValid !== props.isValid && !external__underscore__default.a.isUndefined(props.isValid)) {
        this.setState({
          isValid: props.isValid,
          errorMessage: props.errorMessage
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e, data) {
      var _this2 = this;

      var value = data.value;
      this.setState({
        value: value
      }); // withFieldHandlers

      if (external__underscore__default.a.isFunction(this.handleFieldChange)) {
        var validity = this.handleFieldChange(value, function (validity) {
          _this2.setState(_objectSpread({}, validity));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid,
          errorMessage = _state.errorMessage;
      var _props = this.props,
          className = _props.className,
          fieldname = _props.fieldname,
          type = _props.type,
          id = _props.id,
          title = _props.title,
          label = _props.label,
          name = _props.name,
          options = _props.options,
          onChange = _props.onChange,
          isEditable = _props.isEditable,
          columns = _props.columns,
          showComponent = _props.showComponent,
          path = _props.path;
      var onAnyCheckboxChanged = onChange;
      var classNames = ["df--input input__checkbox", external__underscore__default.a.isString(className) && className, !isValid && this.classWarning, !isEditable && "noteditable"];

      if (!external__underscore__default.a.isArray(value)) {
        value = []; // console.error('\'value\' for Checkbox has to be an array');
      }

      if (!showComponent) return external__react__default.a.createElement("div", null);
      return external__react__default.a.createElement("div", {
        className: classNames.join(" "),
        id: id
      }, label && external__react__default.a.createElement(Label, _extends({
        className: "input__label--top"
      }, label)), external__react__default.a.createElement(CheckboxGroup_IECheckboxGroup, {
        name: "checkbox",
        columns: columns,
        checkboxes: options,
        isEditable: isEditable,
        selectedValue: value,
        onAnyCheckboxChanged: function onAnyCheckboxChanged(e, data) {
          onChange && onChange(e, data);

          _this3.handleChange(e, data);
        }
      }), external__react__default.a.createElement(CheckboxGroup_ErrorMessage, {
        message: errorMessage
      }));
    }
  }]);

  return BaseCheckboxGroup;
}(external__react__default.a.Component);

Object.defineProperty(CheckboxGroup_BaseCheckboxGroup, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    value: [],
    className: "",
    fieldname: {},
    label: {},
    options: [],
    isValid: true,
    isEditable: true,
    showComponent: true,
    onChange: external__underscore__default.a.noop
  }
});
/* harmony default export */ var CheckboxGroup = (Object(external__recompose_["compose"])(withFieldHandlers)(CheckboxGroup_BaseCheckboxGroup));

// CONCATENATED MODULE: ./components/Misc/index.js
var NULL_VALUE_TEXT = "N/A";
// CONCATENATED MODULE: ./components/Form/InputWithLabel.js
function InputWithLabel__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { InputWithLabel__typeof = function _typeof(obj) { return typeof obj; }; } else { InputWithLabel__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return InputWithLabel__typeof(obj); }

function InputWithLabel__extends() { InputWithLabel__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return InputWithLabel__extends.apply(this, arguments); }

function InputWithLabel__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { InputWithLabel__defineProperty(target, key, source[key]); }); } return target; }

function InputWithLabel__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function InputWithLabel__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InputWithLabel__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function InputWithLabel__createClass(Constructor, protoProps, staticProps) { if (protoProps) InputWithLabel__defineProperties(Constructor.prototype, protoProps); if (staticProps) InputWithLabel__defineProperties(Constructor, staticProps); return Constructor; }

function InputWithLabel__possibleConstructorReturn(self, call) { if (call && (InputWithLabel__typeof(call) === "object" || typeof call === "function")) { return call; } return InputWithLabel__assertThisInitialized(self); }

function InputWithLabel__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function InputWithLabel__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var InputWithLabel_InputWithLabel =
/*#__PURE__*/
function (_React$Component) {
  InputWithLabel__inherits(InputWithLabel, _React$Component);

  function InputWithLabel(props) {
    var _this;

    InputWithLabel__classCallCheck(this, InputWithLabel);

    _this = InputWithLabel__possibleConstructorReturn(this, (InputWithLabel.__proto__ || Object.getPrototypeOf(InputWithLabel)).call(this, props));
    _this.state = {
      value: props.value,
      isValid: props.isValid,
      errorMessage: props.errorMessage
    };

    _this.delay = function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    }();

    _this.handleChange = _this.handleChange.bind(InputWithLabel__assertThisInitialized(_this));
    _this.handleFieldChange = _this.props.debouncedUpdate && _this.props.debouncedUpdate.bind(InputWithLabel__assertThisInitialized(_this));
    return _this;
  }

  InputWithLabel__createClass(InputWithLabel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props; // isValid

      if (prevProps.isValid !== props.isValid && !props.isValid) {
        this.setState({
          isValid: props.isValid,
          errorMessage: props.errorMessage
        });
      } // value


      if (props.value !== this.state.value && props.value !== prevProps.value) {
        this.setState({
          value: props.value
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e, data) {
      var _this2 = this;

      var value = data.value;
      this.setState({
        value: value
      }); // withFieldHandlers

      if (external__underscore__default.a.isFunction(this.handleFieldChange)) {
        var validity = this.handleFieldChange(value, function (validity) {
          _this2.setState(InputWithLabel__objectSpread({}, validity));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid,
          errorMessage = _state.errorMessage;
      var topClass = "input__label--top";
      var outerClass = "outer";
      var classWarning = "warning";
      var _props = this.props,
          id = _props.id,
          className = _props.className,
          fieldname = _props.fieldname,
          type = _props.type,
          title = _props.title,
          name = _props.name,
          label = _props.label,
          placeholder = _props.placeholder,
          _onChange = _props.onChange,
          message = _props.message,
          isPassword = _props.isPassword,
          isEditable = _props.isEditable,
          showComponent = _props.showComponent,
          path = _props.path;
      var parent = fieldname.parent,
          current = fieldname.current; // handle "0" so that it show "0" value

      value = !value && external__underscore__default.a.isNumber(value) ? String(value) : value;
      var labelTitle = label.title || "Label";
      var labelPosition = !label.position ? "top" : label.position;
      var classNames = ["df--input input-text-label", external__underscore__default.a.isString(className) && className, !isValid && classWarning, !isEditable && "noteditable", labelPosition !== "top" && "labeled", !value && !isEditable && "null-value"];
      var fieldClassNames = ["input-text", labelPosition !== "top" ? "side-label" : ""];
      if (!showComponent) return external__react__default.a.createElement("div", null);
      return external__react__default.a.createElement("div", {
        className: classNames.join(" "),
        id: id
      }, labelPosition === "top" && external__react__default.a.createElement(Label, InputWithLabel__extends({
        className: topClass
      }, label)), isEditable && external__react__default.a.createElement("div", {
        className: fieldClassNames.join(" ")
      }, labelPosition === "left" && external__react__default.a.createElement("div", {
        className: "text-label note-left basic"
      }, labelTitle), external__react__default.a.createElement("input", {
        className: "field-input",
        value: value,
        name: name,
        placeholder: placeholder,
        type: isPassword ? "password" : "text",
        onChange: function onChange(e) {
          var value = e.target.value;
          var data = {
            value: value,
            path: path,
            fieldname: current
          }; // setLocalValue(value)

          _this3.handleChange(e, data);

          _onChange(e, data);
        },
        onBlur: function onBlur(e) {
          var data = {
            value: e.target.value,
            path: path,
            fieldname: current
          };

          if (e.target.value !== value) {
            _this3.delay(function () {
              _this3.handleChange(e, data);
            }, 0);
          }
        }
      }), labelPosition === "right" && external__react__default.a.createElement("div", {
        className: "text-label note-right basic"
      }, labelTitle)), !isEditable && external__react__default.a.createElement("div", {
        className: fieldClassNames.join(" ")
      }, labelPosition === "left" && external__react__default.a.createElement("div", {
        className: "text-label note-left basic"
      }, labelTitle), external__react__default.a.createElement("div", {
        className: "input-value-display field-label"
      }, value || NULL_VALUE_TEXT), labelPosition === "right" && external__react__default.a.createElement("div", {
        className: "text-label note-right basic"
      }, labelTitle)), external__react__default.a.createElement("div", {
        className: "input__message " + (errorMessage ? "input__message--error" : "")
      }, errorMessage));
    }
  }]);

  return InputWithLabel;
}(external__react__default.a.Component);
Object.defineProperty(InputWithLabel_InputWithLabel, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "",
    fieldname: {},
    label: {},
    placeholder: "",
    isValid: true,
    isEditable: true,
    showComponent: true,
    onChange: external__underscore__default.a.noop
  }
});
/* harmony default export */ var Form_InputWithLabel = (Object(external__redux_["compose"])(withFieldHandlers)(InputWithLabel_InputWithLabel));
// EXTERNAL MODULE: external "react-dropzone"
var external__react_dropzone_ = __webpack_require__(15);
var external__react_dropzone__default = /*#__PURE__*/__webpack_require__.n(external__react_dropzone_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Icon"
var Icon_ = __webpack_require__(6);
var Icon__default = /*#__PURE__*/__webpack_require__.n(Icon_);

// CONCATENATED MODULE: ./components/Form/DragDropUpload.js
var _value;

function DragDropUpload__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DragDropUpload__typeof = function _typeof(obj) { return typeof obj; }; } else { DragDropUpload__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DragDropUpload__typeof(obj); }

function DragDropUpload__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { DragDropUpload__defineProperty(target, key, source[key]); }); } return target; }

function DragDropUpload__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DragDropUpload__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DragDropUpload__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DragDropUpload__createClass(Constructor, protoProps, staticProps) { if (protoProps) DragDropUpload__defineProperties(Constructor.prototype, protoProps); if (staticProps) DragDropUpload__defineProperties(Constructor, staticProps); return Constructor; }

function DragDropUpload__possibleConstructorReturn(self, call) { if (call && (DragDropUpload__typeof(call) === "object" || typeof call === "function")) { return call; } return DragDropUpload__assertThisInitialized(self); }

function DragDropUpload__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DragDropUpload__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var DragDropUpload_DragDropUpload =
/*#__PURE__*/
function (_React$Component) {
  DragDropUpload__inherits(DragDropUpload, _React$Component);

  function DragDropUpload(props) {
    var _this;

    DragDropUpload__classCallCheck(this, DragDropUpload);

    _this = DragDropUpload__possibleConstructorReturn(this, (DragDropUpload.__proto__ || Object.getPrototypeOf(DragDropUpload)).call(this, props));
    Object.defineProperty(DragDropUpload__assertThisInitialized(_this), "classWarning", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "warning"
    });
    _this.props = props;
    _this.state = {
      value: props.value,
      isValid: props.isValid,
      errorMessage: props.errorMessage
    };
    _this.handleChange = _this.handleChange.bind(DragDropUpload__assertThisInitialized(_this));
    _this.handleFieldChange = _this.props.handleValueUpdate && _this.props.handleValueUpdate.bind(DragDropUpload__assertThisInitialized(_this));
    return _this;
  }

  DragDropUpload__createClass(DragDropUpload, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (prevProps.isValid !== props.isValid && !external__underscore__default.a.isUndefined(props.isValid)) {
        this.setState({
          isValid: props.isValid,
          errorMessage: props.errorMessage
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e, data) {
      var _this2 = this;

      var onChange = this.props.onChange;
      var value = data.value;
      this.setState({
        value: value
      });
      onChange(value); // withFieldHandlers

      if (external__underscore__default.a.isFunction(this.handleFieldChange)) {
        var validity = this.handleFieldChange(value, function (validity) {
          _this2.setState(DragDropUpload__objectSpread({}, validity));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid,
          errorMessage = _state.errorMessage;
      var _props = this.props,
          id = _props.id,
          dropzoneActive = _props.dropzoneActive,
          isEditable = _props.isEditable,
          showComponent = _props.showComponent,
          fileType = _props.fileType,
          Files = _props.Files,
          title = _props.title,
          onRemove = _props.onRemove,
          onError = _props.onError,
          checkUploadedFile = _props.checkUploadedFile,
          setDropzoneActive = _props.setDropzoneActive;
      var file = Files[fileType] || {};
      var accept = file.accept;
      var classNames = ["df--input input-drag-drop-upload", !isEditable && "noteditable", !isValid && "warning"];
      var dropzoneRef = external__react__default.a.createRef();
      if (!showComponent) return external__react__default.a.createElement("span", null);
      return external__react__default.a.createElement("div", {
        className: classNames.join(" "),
        id: id
      }, external__react__default.a.createElement(Label, {
        title: title,
        bold: "true"
      }), !value && external__react__default.a.createElement("div", {
        className: "upload-area"
      }, external__react__default.a.createElement(external__react_dropzone__default.a, {
        className: "upload-dropzone field-input",
        disabled: !dropzoneActive,
        multiple: false,
        accept: accept,
        ref: dropzoneRef,
        onDrop: function onDrop(acceptedFiles, rejectedFiles) {
          // more than one file
          if (acceptedFiles.length > 1) {
            onError({
              type: "file",
              files: acceptedFiles
            });
            return;
          }

          if (rejectedFiles.length) {
            onError({
              type: "reject",
              files: rejectedFiles
            });
            return;
          }

          var file = acceptedFiles[0];
          var reader = new FileReader();
          var passed = checkUploadedFile(file);
          if (!passed) return; // show error message

          if (external__underscore__default.a.isString(passed)) {
            onError({
              type: "file",
              message: passed
            });
            return;
          }

          setDropzoneActive(false);

          _this3.handleChange(null, {
            value: file
          }); // Get base64 and generate preview


          reader.addEventListener("load", function () {
            var image = new Image();
            image.height = 100;
            image.title = file.name;
            image.src = this.result;
          }, false);
          reader.readAsDataURL(file);
        }
      }), external__react__default.a.createElement("div", {
        className: "upload-plus-icon"
      }, external__react__default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return dropzoneRef.current.open();
        }
      }, "Choose File")), external__react__default.a.createElement("div", {
        className: "input__message " + (errorMessage ? "input__message--error" : "")
      }, errorMessage)), value && external__react__default.a.createElement("div", {
        className: "upload-file"
      }, external__react__default.a.createElement("div", {
        className: "filename-box field-input"
      }, value.name), external__react__default.a.createElement("span", {
        className: "close-btn",
        title: "Remove File",
        onClick: function onClick(e) {
          _this3.setState({
            value: null
          });

          setDropzoneActive(true);
          external__underscore__default.a.isFunction(onRemove) && onRemove({
            value: value,
            id: id
          });
        }
      }, external__react__default.a.createElement("img", {
        src: "./static/images/actions/trash.svg"
      }))));
    }
  }]);

  return DragDropUpload;
}(external__react__default.a.Component);

Object.defineProperty(DragDropUpload_DragDropUpload, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (_value = {
    isValid: true,
    fileType: "jpg_or_pdf",
    isEditable: true,
    showComponent: true
  }, DragDropUpload__defineProperty(_value, "fileType", []), DragDropUpload__defineProperty(_value, "onChange", external__underscore__default.a.noop), DragDropUpload__defineProperty(_value, "onRemove", external__underscore__default.a.noop), DragDropUpload__defineProperty(_value, "onError", external__underscore__default.a.noop), _value)
});
var withFileFormatProps = Object(external__redux_["compose"])(Object(external__recompose_["withProps"])(function (_ref) {
  var _ref$fileType = _ref.fileType,
      fileType = _ref$fileType === void 0 ? "jpg_or_pdf" : _ref$fileType;
  return {
    fileType: fileType,
    Files: {
      jpg_or_pdf: {
        accept: ".pdf, .jpeg, .jpg",
        formats: ["pdf", "jpeg", "jpg"],
        regex: /^image\/(jpe?g)$|^application\/(pdf)$/i
      },
      all: {
        accept: "*",
        regex: /.*/
      }
    },
    defaultLimitedFileSize: 5,
    limitedFileSizeUnit: "MB",
    UnitCalculation: 1024 * 1024
  };
}));
/* harmony default export */ var Form_DragDropUpload = (Object(external__redux_["compose"])(withFileFormatProps, Object(external__recompose_["withStateHandlers"])(function () {
  return {
    dropzoneActive: true
  };
}, {
  setDropzoneActive: function setDropzoneActive() {
    return function (dropzoneActive) {
      return {
        dropzoneActive: dropzoneActive
      };
    };
  }
}), Object(external__recompose_["withHandlers"])({
  checkUploadedFile: function checkUploadedFile(_ref2) {
    var fileType = _ref2.fileType,
        limitedFileSizeUnit = _ref2.limitedFileSizeUnit,
        UnitCalculation = _ref2.UnitCalculation,
        Files = _ref2.Files,
        showErrorMessage = _ref2.showErrorMessage;
    return function (file) {
      if (!file) return false;
      var limitedFileSizeByType = {
        pdf: 5,
        jpg: 2,
        jpeg: 2
      };
      var extension = file.name.split(".").pop();
      var type = file.type;
      var name = file.name;
      var size = file.size;
      var limitedFileSize = (limitedFileSizeByType[extension] || 5) * UnitCalculation;
      var regex = Files[fileType].regex;
      var isValidFormat = regex ? type.match(regex) : false;
      var isValidFileSize = size <= limitedFileSize;
      var currentSize = (size / UnitCalculation).toFixed(2);

      if (!isValidFormat) {
        var message = "Allowed formats are pdf and jpg/jpeg only";
        external__underscore__default.a.isFunction(showErrorMessage) && showErrorMessage(message);
        return message;
      } else if (!isValidFileSize) {
        var _message = "Allowed file size is ".concat(limitedFileSizeByType[extension], "\n                ").concat(limitedFileSizeUnit, ".\n                Current file size is ").concat(currentSize, " ").concat(limitedFileSizeUnit);

        external__underscore__default.a.isFunction(showErrorMessage) && showErrorMessage(_message);
        return _message;
      }

      return true;
    };
  }
}), withFieldHandlers)(DragDropUpload_DragDropUpload));
// CONCATENATED MODULE: ./components/Message.js



var Message_Message = function Message(_ref) {
  var title = _ref.title,
      message = _ref.message,
      onClose = _ref.onClose,
      closed = _ref.closed,
      setClosed = _ref.setClosed;
  var cls = ["message-box", closed && "closed"];
  return external__react__default.a.createElement("div", {
    className: cls.join(" ")
  }, title && external__react__default.a.createElement("div", {
    className: "title"
  }, title), message && external__react__default.a.createElement("div", {
    className: "message"
  }, message), external__react__default.a.createElement("div", {
    className: "close-btn",
    onClick: function onClick(e) {
      setClosed(true);
      onClose && onClose();
    }
  }, "\u2715"));
};

/* harmony default export */ var components_Message = (Object(external__recompose_["compose"])(Object(external__recompose_["withStateHandlers"])(function () {
  return {
    closed: false
  };
}, {
  setClosed: function setClosed() {
    return function (closed) {
      return {
        closed: closed
      };
    };
  }
}))(Message_Message));
// CONCATENATED MODULE: ./components/Form/TextArea.js
function TextArea__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TextArea__typeof = function _typeof(obj) { return typeof obj; }; } else { TextArea__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TextArea__typeof(obj); }

function TextArea__extends() { TextArea__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TextArea__extends.apply(this, arguments); }

function TextArea__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { TextArea__defineProperty(target, key, source[key]); }); } return target; }

function TextArea__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TextArea__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TextArea__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TextArea__createClass(Constructor, protoProps, staticProps) { if (protoProps) TextArea__defineProperties(Constructor.prototype, protoProps); if (staticProps) TextArea__defineProperties(Constructor, staticProps); return Constructor; }

function TextArea__possibleConstructorReturn(self, call) { if (call && (TextArea__typeof(call) === "object" || typeof call === "function")) { return call; } return TextArea__assertThisInitialized(self); }

function TextArea__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TextArea__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var TextArea_DFTextArea =
/*#__PURE__*/
function (_React$Component) {
  TextArea__inherits(DFTextArea, _React$Component);

  function DFTextArea(props) {
    var _this;

    TextArea__classCallCheck(this, DFTextArea);

    _this = TextArea__possibleConstructorReturn(this, (DFTextArea.__proto__ || Object.getPrototypeOf(DFTextArea)).call(this, props));
    _this.state = {
      value: props.value,
      isValid: props.isValid,
      errorMessage: props.errorMessage
    };

    _this.delay = function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    }();

    _this.handleChange = _this.handleChange.bind(TextArea__assertThisInitialized(_this));
    _this.handleFieldChange = _this.props.debouncedUpdate && _this.props.debouncedUpdate.bind(TextArea__assertThisInitialized(_this));
    return _this;
  }

  TextArea__createClass(DFTextArea, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props; // isValid

      if (prevProps.isValid !== props.isValid && !props.isValid) {
        this.setState({
          isValid: props.isValid,
          errorMessage: props.errorMessage
        });
      } // value


      if (props.value !== this.state.value && props.value !== prevProps.value) {
        this.setState({
          value: props.value
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e, data) {
      var _this2 = this;

      var value = data.value;
      this.setState({
        value: value
      }); // withFieldHandlers

      if (external__underscore__default.a.isFunction(this.handleFieldChange)) {
        var validity = this.handleFieldChange(value, function (validity) {
          _this2.setState(TextArea__objectSpread({}, validity));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid,
          errorMessage = _state.errorMessage;
      var topClass = "input__label--top";
      var outerClass = "outer";
      var classWarning = "warning";
      var _props = this.props,
          id = _props.id,
          className = _props.className,
          fieldname = _props.fieldname,
          type = _props.type,
          title = _props.title,
          name = _props.name,
          label = _props.label,
          placeholder = _props.placeholder,
          _onChange = _props.onChange,
          message = _props.message,
          isPassword = _props.isPassword,
          isEditable = _props.isEditable,
          showComponent = _props.showComponent,
          path = _props.path;
      var parent = fieldname.parent,
          current = fieldname.current; // handle "0" so that it show "0" value

      value = !value && external__underscore__default.a.isNumber(value) ? String(value) : value;
      var labelTitle = label.title || "Label";
      var labelPosition = !label.position ? "top" : label.position;
      var classNames = ["df--input input__textarea", external__underscore__default.a.isString(className) && className, !isValid && classWarning, !isEditable && "noteditable", labelPosition !== "top" && "labeled", !value && !isEditable && "null-value"];
      var fieldClassNames = ["input-text", labelPosition !== "top" ? "side-label" : ""];
      if (!showComponent) return external__react__default.a.createElement("div", null);
      return external__react__default.a.createElement("div", {
        className: classNames.join(" "),
        id: id
      }, labelPosition === "top" && external__react__default.a.createElement(Label, TextArea__extends({
        className: topClass
      }, label)), isEditable && external__react__default.a.createElement("div", {
        className: fieldClassNames.join(" ")
      }, labelPosition === "left" && external__react__default.a.createElement("div", {
        className: "text-label note-left basic"
      }, labelTitle), external__react__default.a.createElement("textarea", {
        className: "field-textarea",
        value: value,
        name: name,
        placeholder: placeholder,
        onChange: function onChange(e) {
          var value = e.target.value;
          var data = {
            value: value,
            path: path,
            fieldname: current
          }; // setLocalValue(value)

          _this3.handleChange(e, data);

          _onChange(e, data);
        },
        onBlur: function onBlur(e) {
          var data = {
            value: e.target.value,
            path: path,
            fieldname: current
          };

          if (e.target.value !== value) {
            _this3.delay(function () {
              _this3.handleChange(e, data);
            }, 0);
          }
        }
      }), labelPosition === "right" && external__react__default.a.createElement("div", {
        className: "text-label note-right basic"
      }, labelTitle)), !isEditable && external__react__default.a.createElement("div", {
        className: fieldClassNames.join(" ")
      }, labelPosition === "left" && external__react__default.a.createElement("div", {
        className: "text-label note-left basic"
      }, labelTitle), external__react__default.a.createElement("div", {
        className: "input-value-display field-label"
      }, value || NULL_VALUE_TEXT), labelPosition === "right" && external__react__default.a.createElement("div", {
        className: "text-label note-right basic"
      }, labelTitle)), external__react__default.a.createElement("div", {
        className: "input__message " + (errorMessage ? "input__message--error" : "")
      }, errorMessage));
    }
  }]);

  return DFTextArea;
}(external__react__default.a.Component);
Object.defineProperty(TextArea_DFTextArea, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "",
    fieldname: {},
    label: {},
    placeholder: "",
    isValid: true,
    isEditable: true,
    showComponent: true,
    onChange: external__underscore__default.a.noop
  }
});
/* harmony default export */ var TextArea = (Object(external__redux_["compose"])(withFieldHandlers)(TextArea_DFTextArea));
// CONCATENATED MODULE: ./components/Misc/Fields.js
var payload = {
  "title": "This is a title for the form Header",
  "questions": [{
    "id": 2447,
    "question_type": "TextQuestion",
    "prompt": "What is your first answer?",
    "is_required": false,
    "min_char_length": 15
  }, {
    "id": 2448,
    "question_type": "TextQuestion",
    "prompt": "What is your second answer?",
    "is_required": true,
    "min_char_length": 20
  }, {
    "id": 2500,
    "question_type": "TextQuestion",
    "prompt": "What is your third answer?",
    "is_required": true,
    "min_char_length": 1
  }, {
    "id": "preferred_opt",
    "question_type": "CheckBoxQuestion",
    "prompt": "What is your preferred opt?",
    "options": [{
      title: "Option 1",
      value: "option1"
    }, {
      title: "Option 2",
      value: "option2"
    }, {
      title: "Option 3",
      value: "option3"
    }],
    "is_required": true
  }, {
    "id": "upload_file",
    "fileType": "jpg_or_pdf",
    "question_type": "UploadFileQuestion",
    "prompt": "What is your upload file",
    "isRequiredFile": true
  }, {
    "id": "textbox",
    "question_type": "TextBoxQuestion",
    "prompt": "What is your fourth answer?",
    "is_required": true,
    "min_char_length": 10
  }]
};
var Fields_FIELDS = {};

var flattenJson = function flattenJson() {
  var questions = payload["questions"];
  questions.map(function (question) {
    var key = question.id;
    var obj = {};
    var combineValidators = [];
    obj["id"] = question.id;
    obj["questionType"] = question.question_type;
    obj["label"] = {};
    obj["label"]["title"] = question.prompt;
    obj["label"]["className"] = "bold";

    if (question.is_required) {
      combineValidators.push("isRequired");
    }

    if (question.min_char_length) {
      var minCharLength = {};
      minCharLength["min"] = question.min_char_length;
      combineValidators.push(minCharLength);
    }

    if (question.isRequiredFile) {
      combineValidators.push("isRequiredFile");
    }

    obj["validators"] = combineValidators;

    switch (question.question_type) {
      case "TextQuestion":
        obj["placeholder"] = question.prompt;
        break;

      case "UploadFileQuestion":
        obj["fileType"] = question.fileType;
        break;

      case "CheckBoxQuestion":
        obj["options"] = question.options;
        break;

      case "TextBoxQuestion":
        obj["placeholder"] = question.prompt;
        break;

      default:
        break;
    }

    Fields_FIELDS[key] = obj;
  });
};

flattenJson();
var header = payload["title"];
/* harmony default export */ var Fields = (Fields_FIELDS);
var FieldsByView = [["2447"], ["2448"], ["2500"], ["preferred_opt"], ["upload_file"], ["textbox"]];
// EXTERNAL MODULE: external "react-addons-css-transition-group"
var external__react_addons_css_transition_group_ = __webpack_require__(16);
var external__react_addons_css_transition_group__default = /*#__PURE__*/__webpack_require__.n(external__react_addons_css_transition_group_);

// EXTERNAL MODULE: ./components/Audio/bubble.wav
var bubble = __webpack_require__(17);
var bubble_default = /*#__PURE__*/__webpack_require__.n(bubble);

// EXTERNAL MODULE: ./components/Audio/swoosh.wav
var swoosh = __webpack_require__(18);
var swoosh_default = /*#__PURE__*/__webpack_require__.n(swoosh);

// CONCATENATED MODULE: ./pages/App.js



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function App__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { App__defineProperty(target, key, source[key]); }); } return target; }

function App__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function App__extends() { App__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return App__extends.apply(this, arguments); }
















var LAST_VIEW_NUM = external__underscore__default.a.size(Fields) + 1;

var App_App = function App(_ref) {
  var progress = _ref.progress,
      view = _ref.view,
      next = _ref.next,
      prev = _ref.prev,
      showActionButtons = _ref.showActionButtons,
      disabledNextButton = _ref.disabledNextButton,
      FIELDS = _ref.FIELDS,
      swooshAu = _ref.swooshAu,
      values = _ref.values,
      validities = _ref.validities,
      message = _ref.message,
      dispatch = _ref.dispatch,
      nextPage = _ref.nextPage,
      prevPage = _ref.prevPage,
      hasNextPage = _ref.hasNextPage,
      hasPrevPage = _ref.hasPrevPage,
      removeFieldValue = _ref.removeFieldValue,
      uploadFile = _ref.uploadFile,
      removeFileById = _ref.removeFileById,
      handleFileError = _ref.handleFileError,
      setDisabledNextButton = _ref.setDisabledNextButton;
  var wrapperCls = ["wrapper"];
  var formCls = ["dynamic-form", progress !== 0 && "in-progress"];
  var leftButtonCls = ["form-action-button left", !hasPrevPage() && "disabled"];
  var rightButtonCls = ["form-action-button right", !hasNextPage() && "disabled", disabledNextButton && "disabledNext"];
  var currentTrans = "slide-left";
  var newTrans = "slide-left-next";

  if (prev) {
    currentTrans = "slide-right-next";
    newTrans = "slide-right";
  }

  var arrIndex = view - 1;
  return external__react__default.a.createElement("div", {
    className: wrapperCls.join(" ")
  }, (message.title || message.message) && external__react__default.a.createElement(components_Message, {
    title: message.title,
    message: message.message,
    onClose: function onClose() {
      swooshAu && swooshAu.play();
      setTimeout(function () {
        dispatch(Object(store["b" /* setMessage */])({}));
      }, 1000);
    }
  }), external__react__default.a.createElement("div", {
    className: "header company-logo-wrapper"
  }, external__react__default.a.createElement("a", {
    href: "/"
  }, external__react__default.a.createElement("img", {
    className: "company-logo",
    alt: "company-logo",
    src: "./static/images/client/logo.png"
  }))), external__react__default.a.createElement("div", {
    className: "body"
  }, external__react__default.a.createElement("div", {
    className: "form-viewer"
  }, external__react__default.a.createElement("h1", {
    className: "dynamic-form-title"
  }, header), external__react__default.a.createElement("form", {
    className: formCls.join(" "),
    autoComplete: "off"
  }, showActionButtons && [external__react__default.a.createElement("div", {
    className: "form-buttons-group desktop",
    key: "1"
  }, external__react__default.a.createElement("div", {
    className: leftButtonCls.join(" "),
    onClick: prevPage,
    id: "prev"
  }, external__react__default.a.createElement("img", {
    src: "./static/images/actions/back.svg",
    style: {
      width: "15px"
    }
  }), "\xA0Prev"), external__react__default.a.createElement("div", {
    className: rightButtonCls.join(" "),
    onClick: nextPage,
    id: "next"
  }, "Next\xA0", external__react__default.a.createElement("img", {
    src: "./static/images/actions/next.svg",
    style: {
      width: "15px"
    }
  }))), external__react__default.a.createElement("div", {
    className: "form-buttons-group mobile",
    key: "2",
    id: "prev"
  }, external__react__default.a.createElement("div", {
    className: leftButtonCls.join(" "),
    onClick: prevPage
  }, "PREV"), external__react__default.a.createElement("div", {
    className: rightButtonCls.join(" "),
    onClick: nextPage,
    id: "next"
  }, "NEXT"))], external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 1 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 1 ? 500 : 750,
    transitionLeaveTimeout: view !== 1 ? 500 : 750
  }, view === 1 && App_showField(arrIndex, values, validities, setDisabledNextButton)), external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 2 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 2 ? 500 : 750,
    transitionLeaveTimeout: view !== 2 ? 500 : 750
  }, view === 2 && App_showField(arrIndex, values, validities, setDisabledNextButton)), external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 3 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 3 ? 500 : 750,
    transitionLeaveTimeout: view !== 3 ? 500 : 750
  }, view === 3 && App_showField(arrIndex, values, validities, setDisabledNextButton)), external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 4 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 4 ? 500 : 750,
    transitionLeaveTimeout: view !== 4 ? 500 : 750
  }, view === 4 && App_showField(arrIndex, values, validities)), external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 5 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 5 ? 500 : 750,
    transitionLeaveTimeout: view !== 5 ? 500 : 750
  }, view === 5 && App_showField(arrIndex, values, validities, setDisabledNextButton, uploadFile, removeFileById, handleFileError, removeFieldValue)), external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 6 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 6 ? 500 : 750,
    transitionLeaveTimeout: view !== 6 ? 500 : 750
  }, view === 6 && App_showField(arrIndex, values, validities, setDisabledNextButton)), external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: view !== 7 ? currentTrans : newTrans,
    transitionEnterTimeout: view !== 7 ? 500 : 750,
    transitionLeaveTimeout: view !== 7 ? 500 : 750
  }, view === 7 && external__react__default.a.createElement("div", {
    id: "review",
    className: "form-body"
  }, external__react__default.a.createElement("div", {
    className: "form-row col-lg-12"
  }, external__react__default.a.createElement("div", {
    className: "col-sm-12 col-md-12"
  }, external__react__default.a.createElement(TextArea, App__extends({}, FIELDS["2447"], {
    value: values["2447"],
    isEditable: false
  })))), external__react__default.a.createElement("div", {
    className: "form-row col-lg-12"
  }, external__react__default.a.createElement("div", {
    className: "col-sm-12 col-md-12"
  }, external__react__default.a.createElement(TextArea, App__extends({}, FIELDS["2448"], {
    value: values["2448"],
    isEditable: false
  })))), external__react__default.a.createElement("div", {
    className: "form-row col-lg-12"
  }, external__react__default.a.createElement("div", {
    className: "col-sm-12 col-md-12"
  }, external__react__default.a.createElement(TextArea, App__extends({}, FIELDS["2500"], {
    value: values["2500"],
    isEditable: false
  })))), external__react__default.a.createElement("div", {
    className: "form-row col-lg-12"
  }, external__react__default.a.createElement("div", {
    className: "col-sm-12 col-md-12"
  }, external__react__default.a.createElement(CheckboxGroup, App__extends({}, FIELDS["preferred_opt"], {
    value: values["preferred_opt"],
    isEditable: false
  })))), external__react__default.a.createElement("div", {
    className: "form-row col-lg-12"
  }, external__react__default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, external__react__default.a.createElement(Form_DragDropUpload, App__extends({}, App__objectSpread({}, FIELDS["upload_file"], {
    title: FIELDS["upload_file"].label.title
  }), {
    value: values["upload_file"]
  })))), external__react__default.a.createElement("div", {
    className: "form-row col-lg-12"
  }, external__react__default.a.createElement("div", {
    className: "col-sm-12 col-md-12"
  }, external__react__default.a.createElement(Form_InputWithLabel, App__extends({}, FIELDS["textbox"], {
    value: values["textbox"],
    isEditable: false
  }))))))))), external__react__default.a.createElement("div", {
    className: "footer"
  }));
};

var withFields = Object(external__recompose_["compose"])(Object(external__recompose_["withProps"])(function () {
  return {
    FIELDS: Fields
  };
}));
var withAudio = Object(external__recompose_["compose"])(Object(external__recompose_["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var bubbleAu = new Audio(bubble_default.a);
    var swooshAu = new Audio(swoosh_default.a);
    var _props = this.props,
        bAu = _props.bubbleAu,
        sAu = _props.swooshAu;

    if (!bAu) {
      this.setState({
        bubbleAu: bubbleAu
      });
    }

    if (!sAu) {
      this.setState({
        swooshAu: swooshAu
      });
    }
  }
}));
var withTriggerFieldHandler = Object(external__recompose_["compose"])( // values dependancy
Object(external__react_redux_["connect"])(function (state) {
  return {
    triggeredStates: state.triggeredStates
  };
}, function (dispatch) {
  return {
    hideField: function hideField(id) {
      dispatch(Object(store["c" /* setTriggeredState */])({
        id: id,
        triggeredState: true
      }));
    },
    showField: function showField(id) {
      dispatch(Object(store["c" /* setTriggeredState */])({
        id: id,
        triggeredState: false
      }));
    }
  };
}));
/* harmony default export */ var pages_App = __webpack_exports__["default"] = (Object(external__recompose_["compose"])(Object(external__react_redux_["connect"])(function (state) {
  return {
    values: state.values,
    validities: state.validities,
    message: state.message
  };
}), Object(external__recompose_["defaultProps"])({
  view: 1,
  max: 7
}), withAudio, withTriggerFieldHandler, Object(external__recompose_["withStateHandlers"])(function (_ref2) {
  var view = _ref2.view,
      max = _ref2.max;
  return {
    progress: 0,
    view: view,
    max: max,
    showActionButtons: true,
    disabledNextButton: false,
    uploadedFiles: {}
  };
}, {
  uploadFile: function uploadFile(_ref3) {
    var uploadedFiles = _ref3.uploadedFiles;
    return function (_ref4) {
      var id = _ref4.id,
          file = _ref4.file;
      return {
        uploadedFiles: App__objectSpread({}, uploadedFiles, App__defineProperty({}, id, file))
      };
    };
  },
  removeFileById: function removeFileById(_ref5) {
    var uploadedFiles = _ref5.uploadedFiles;
    return function (id) {
      return {
        uploadedFiles: App__objectSpread({}, uploadedFiles, App__defineProperty({}, id, null))
      };
    };
  },
  incrementView: function incrementView(_ref6) {
    var max = _ref6.max,
        view = _ref6.view;
    return function () {
      if (view < max) {
        view += 1;
        return {
          view: view,
          next: true,
          prev: false
        };
      }
    };
  },
  decrementView: function decrementView(_ref7) {
    var view = _ref7.view;
    return function () {
      if (view > 1) {
        view -= 1;
        return {
          view: view,
          next: false,
          prev: true
        };
      }
    };
  },
  lastView: function lastView(_ref8) {
    var view = _ref8.view;
    return function () {
      if (view !== LAST_VIEW_NUM) {
        return {
          view: LAST_VIEW_NUM
        };
      }
    };
  },
  setShowActionButtons: function setShowActionButtons() {
    return function (show) {
      return {
        showActionButtons: show
      };
    };
  },
  setDisabledNextButton: function setDisabledNextButton() {
    return function (disabled) {
      return {
        disabledNextButton: disabled
      };
    };
  }
}), Object(external__recompose_["withHandlers"])({
  validate: function validate(_ref9) {
    var dispatch = _ref9.dispatch,
        values = _ref9.values,
        triggeredStates = _ref9.triggeredStates;
    return function (ids) {
      var validities = validateForm({
        fields: ids,
        values: values,
        triggeredStates: triggeredStates,
        FIELDS: Fields
      });
      dispatch(Object(store["d" /* setValidities */])(validities));
      return validities;
    };
  },
  hideError: function hideError(_ref10) {
    var dispatch = _ref10.dispatch;
    return function () {
      dispatch(Object(store["b" /* setMessage */])({}));
    };
  },
  showFieldError: function showFieldError(_ref11) {
    var dispatch = _ref11.dispatch;
    return function (_ref12) {
      var name = _ref12.name,
          message = _ref12.message;
      dispatch(Object(store["b" /* setMessage */])({
        title: external__react__default.a.createElement("div", null, external__react__default.a.createElement(Icon__default.a, {
          name: "exclamation"
        }), "Oops"),
        message: external__react__default.a.createElement("div", null, name, " - ", message)
      }));
    };
  },
  removeFieldValue: function removeFieldValue(_ref13) {
    var dispatch = _ref13.dispatch;
    return function (id) {
      dispatch(Object(store["f" /* setValue */])({
        id: id
      }));
    };
  },
  handleFileError: function handleFileError(_ref14) {
    var dispatch = _ref14.dispatch;
    return function (error) {
      var message;

      if (error.type === "file" && error.files) {
        message = external__react__default.a.createElement("div", null, "Upload Error - Does not accept more than 1 files, given ", files.length, " files");
      } else if (error.type === "file" && error.message) {
        message = external__react__default.a.createElement("div", null, "Upload Error - ", error.message);
      } else if (error.type === "reject") {
        message = external__react__default.a.createElement("div", null, "Upload Error - Invalid file type");
      }

      dispatch(Object(store["b" /* setMessage */])({
        title: external__react__default.a.createElement("div", null, external__react__default.a.createElement(Icon__default.a, {
          name: "exclamation"
        }), "Oops"),
        message: message
      }));
    };
  }
}), Object(external__recompose_["withHandlers"])({
  hasNextPage: function hasNextPage(_ref15) {
    var max = _ref15.max,
        view = _ref15.view;
    return function () {
      return view < max;
    };
  },
  hasPrevPage: function hasPrevPage(_ref16) {
    var view = _ref16.view;
    return function () {
      return view > 1;
    };
  },
  nextPage: function nextPage(_ref17) {
    var view = _ref17.view,
        bubbleAu = _ref17.bubbleAu,
        validate = _ref17.validate,
        incrementView = _ref17.incrementView,
        hideError = _ref17.hideError,
        showFieldError = _ref17.showFieldError;
    return (
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var fieldIds, found, validities, cont, name, message;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bubbleAu && bubbleAu.play();
                fieldIds = FieldsByView[view - 1] || [];
                found = false;
                validities = validate(fieldIds);
                fieldIds.forEach(function (id) {
                  var isValid = validities[id] && validities[id].isValid;

                  if (!isValid && !found) {
                    found = id;
                  }
                });

                if (found) {
                  _context.next = 14;
                  break;
                }

                cont = true;

                if (cont) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                incrementView();
                hideError();
                setTimeout(scrollTop, 200);
                _context.next = 17;
                break;

              case 14:
                name = Fields[found].label.title;
                message = validities[found].errorMessage;
                showFieldError({
                  name: name,
                  message: message
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))
    );
  },
  prevPage: function prevPage(_ref19) {
    var progress = _ref19.progress,
        decrementView = _ref19.decrementView,
        bubbleAu = _ref19.bubbleAu,
        setDisabledNextButton = _ref19.setDisabledNextButton;
    return function () {
      if (progress !== 0) {
        return;
      }

      bubbleAu && bubbleAu.play();
      decrementView();
      setDisabledNextButton(false);
      setTimeout(scrollTop, 200);
    };
  }
}), withFields)(App_App));

function getValidity(validity) {
  if (external__underscore__default.a.isUndefined(validity)) {
    return true;
  } else {
    var _validity$isValid = validity.isValid,
        isValid = _validity$isValid === void 0 ? true : _validity$isValid;
    return isValid;
  }
}

function getErrorMessage() {
  var validity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errorMessage = validity.errorMessage;
  return errorMessage;
} //t = current time
//b = start value
//c = change in value
//d = duration


Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function scrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

function scrollTop() {
  var element = document.body;
  if (document.scrollingElement) element = document.scrollingElement;
  scrollTo(element, 0, 1000);
}

function App_showField(arrIndex, values, validities, setDisabledNextButton, uploadFile, removeFileById, handleFileError, removeFieldValue) {
  var field = external__react__default.a.createElement("div", null);
  var key = FieldsByView[arrIndex];
  var qType = Fields[key]["questionType"];

  if (qType === "TextQuestion") {
    field = external__react__default.a.createElement("div", {
      className: "form-body"
    }, external__react__default.a.createElement("div", {
      className: "form-row col-lg-12"
    }, external__react__default.a.createElement("div", {
      className: "col-sm-12 col-md-12"
    }, external__react__default.a.createElement(TextArea, App__extends({}, Fields[key], {
      value: values[key],
      isValid: getValidity(validities[key]),
      errorMessage: getErrorMessage(validities[key]),
      onChange: function onChange(e, data) {
        setDisabledNextButton(false);

        if (getValidity(validities[key])) {
          setDisabledNextButton(false);
        } else {
          setDisabledNextButton(true);
        }
      }
    })))), external__react__default.a.createElement("div", {
      className: "form-separator"
    }));
  }

  if (qType === "TextBoxQuestion") {
    field = external__react__default.a.createElement("div", {
      className: "form-body"
    }, external__react__default.a.createElement("div", {
      className: "form-row col-lg-12"
    }, external__react__default.a.createElement("div", {
      className: "col-sm-12 col-md-12"
    }, external__react__default.a.createElement(Form_InputWithLabel, App__extends({}, Fields[key], {
      value: values[key],
      isValid: getValidity(validities[key]),
      errorMessage: getErrorMessage(validities[key]),
      onChange: function onChange(e, data) {
        setDisabledNextButton(false);

        if (getValidity(validities[key])) {
          setDisabledNextButton(false);
        } else {
          setDisabledNextButton(true);
        }
      }
    })))), external__react__default.a.createElement("div", {
      className: "form-separator"
    }));
  }

  if (qType === "CheckBoxQuestion") {
    field = external__react__default.a.createElement("div", {
      className: "form-body"
    }, external__react__default.a.createElement("div", {
      className: "form-row col-lg-12"
    }, external__react__default.a.createElement("div", {
      className: "col-sm-12 col-md-12"
    }, external__react__default.a.createElement(CheckboxGroup, App__extends({}, Fields[key], {
      value: values[key],
      isValid: getValidity(validities[key]),
      errorMessage: getErrorMessage(validities[key])
    })))), external__react__default.a.createElement("div", {
      className: "form-separator"
    }));
  }

  if (qType === "UploadFileQuestion") {
    field = external__react__default.a.createElement("div", {
      className: "form-body"
    }, external__react__default.a.createElement("div", {
      className: "form-row col-lg-12"
    }, external__react__default.a.createElement("div", {
      className: "col-sm-12 col-md-12"
    }, external__react__default.a.createElement("h3", {
      className: "form-header"
    }, "Documents Upload"), "File format must be either JPG (with maximum file size of 2MB) or PDF (with maximum file size of 5MB)", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null))), external__react__default.a.createElement("div", {
      className: "form-row col-lg-12"
    }, external__react__default.a.createElement("div", {
      className: "col-sm-12 col-md-6"
    }, external__react__default.a.createElement(Form_DragDropUpload, App__extends({}, App__objectSpread({}, Fields[key], {
      title: Fields[key].label.title
    }), {
      value: values[key],
      isValid: getValidity(validities[key]),
      errorMessage: getErrorMessage(validities[key]),
      onChange: function onChange(file) {
        // set file
        uploadFile({
          id: "upload_file",
          file: file
        });
      },
      onRemove: function onRemove() {
        removeFileById(key);
        removeFieldValue(key);
      },
      onError: handleFileError
    })))));
  }

  return field;
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("clean-deep");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b610a9da3d1621e396a325d3ecaedd60.wav";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e455f7ff6f72491d74edaf358348491d.wav";

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);