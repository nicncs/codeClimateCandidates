import React from "react";
import _ from "underscore";
import Label from "./Label";

import { NULL_VALUE_TEXT } from "../Misc/";
import { compose } from "redux";
import { withFieldHandlers } from "../Misc/form";

export class DFTextArea extends React.Component {
  static defaultProps = {
    className: "",
    fieldname: {},
    label: {},
    placeholder: "",
    isValid: true,
    isEditable: true,
    showComponent: true,
    onChange: _.noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isValid: props.isValid,
      errorMessage: props.errorMessage,
    };

    this.delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();
    this.handleChange = this.handleChange.bind(this);
    this.handleFieldChange = this.props.debouncedUpdate && this.props.debouncedUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    // isValid
    if (prevProps.isValid !== props.isValid && !props.isValid) {
      this.setState({
        isValid: props.isValid,
        errorMessage: props.errorMessage,
      });
    }

    // value
    if (props.value !== this.state.value && props.value !== prevProps.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  handleChange(e, data) {
    const { value } = data;
    this.setState({
      value,
    });
    // withFieldHandlers
    if (_.isFunction(this.handleFieldChange)) {
      const validity = this.handleFieldChange(value, validity => {
        this.setState({
          ...validity,
        });
      });
    }
  }

  render() {
    let { value, isValid, errorMessage } = this.state;
    const topClass = "input__label--top";
    const outerClass = "outer";
    const classWarning = "warning";
    let {
      id,
      className,
      fieldname,
      // option
      type,
      title,
      name,
      label,
      placeholder,
      // isValid,
      // errorMessage,
      onChange,
      message,
      isPassword,
      isEditable,
      // utils
      showComponent,
      path,
    } = this.props;
    const { parent, current } = fieldname;
    // handle "0" so that it show "0" value
    value = !value && _.isNumber(value) ? String(value) : value;
    const labelTitle = label.title || "Label";
    const labelPosition = !label.position ? "top" : label.position;
    const classNames = [
      "df--input input__textarea",
      _.isString(className) && className,
      !isValid && classWarning,
      !isEditable && "noteditable",
      labelPosition !== "top" && "labeled",
      !value && !isEditable && "null-value",
    ];
    const fieldClassNames = ["input-text", labelPosition !== "top" ? "side-label" : ""];

    if (!showComponent) return <div />;

    return (
      <div className={classNames.join(" ")} id={id}>
        {labelPosition === "top" && <Label className={topClass} {...label} />}

        {isEditable && (
          <div className={fieldClassNames.join(" ")}>
            {labelPosition === "left" && (
              <div className="text-label note-left basic">{labelTitle}</div>
            )}

            <textarea
              className="field-textarea"
              value={value}
              name={name}
              placeholder={placeholder}
              onChange={e => {
                const value = e.target.value;
                const data = {
                  value,
                  path,
                  fieldname: current,
                };
                // setLocalValue(value)
                this.handleChange(e, data);
                onChange(e, data);
              }}
              onBlur={e => {
                const data = {
                  value: e.target.value,
                  path,
                  fieldname: current,
                };
                if (e.target.value !== value) {
                  this.delay(() => {
                    this.handleChange(e, data);
                  }, 0);
                }
              }}
            />

            {labelPosition === "right" && (
              <div className="text-label note-right basic">{labelTitle}</div>
            )}
          </div>
        )}
        {!isEditable && (
          <div className={fieldClassNames.join(" ")}>
            {labelPosition === "left" && (
              <div className="text-label note-left basic">{labelTitle}</div>
            )}

            <div className="input-value-display field-label">{value || NULL_VALUE_TEXT}</div>

            {labelPosition === "right" && (
              <div className="text-label note-right basic">{labelTitle}</div>
            )}
          </div>
        )}

        <div className={"input__message " + (errorMessage ? "input__message--error" : "")}>
          {errorMessage}
        </div>
      </div>
    );
  }
}

export default compose(withFieldHandlers)(DFTextArea);
