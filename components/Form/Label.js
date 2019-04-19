import React from "react";
import ReactDOM from "react-dom";
import _ from "underscore";

import { compose, pure } from "recompose";
import { connect } from "react-redux";

class LabelOnly extends React.Component {
  static defaultProps = {
    className: "",
    fieldname: {},
    isValid: true,
    size: "normal",
  };

  render() {
    let classWarning = "warning";
    let {
      type,
      className,
      fieldname,
      // option
      title,
      name,
      size,
      align,
      lineHeight,
      bold,
      italic,
      underlined,
      isValid,
      errorMessage,
      // utils
      showComponent = true,
      path,
    } = this.props;
    let { parent, current } = fieldname;
    let classNames = [
      "df--input input__label",
      _.isString(className) && className,
      !isValid && classWarning,
      bold && "bold",
      italic && "italic",
      underlined && "underlined",
      typeof align === "string" ? `align-${align}` : "align-left",
    ];

    lineHeight = typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight;

    if (!showComponent || !title) return <div />;
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
    return (
      <div className={classNames.join(" ")}>
        <div
          size={size}
          className="input__label--text"
          style={{
            lineHeight: lineHeight,
            fontSize: size,
          }}>
          {title}
        </div>

        <div className={"input__message " + (errorMessage ? "input__message--error" : "")}>
          {errorMessage}
        </div>
      </div>
    );
  }
}

export default LabelOnly;
