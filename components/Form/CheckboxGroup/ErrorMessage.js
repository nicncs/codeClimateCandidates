import React from "react";

const ErrorMessage = ({ message }) => {
  const classNames = ["input__message", message && "input__message--error"];
  return <div className={classNames.join(" ")}>{message}</div>;
};

export default ErrorMessage;
