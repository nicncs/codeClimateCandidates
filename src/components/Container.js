import * as React from "react";
import { css } from "@emotion/core";

const Container = ({
  tag: Tag = "div",
  children,
  className = null,
  yAlign,
  xAlign,
  isColumn,
  ...props
}) => (
  <Tag
    css={[css(buildWrapperStyles(xAlign, yAlign, isColumn)), className]}
    {...props}
  >
    {children}
  </Tag>
);

function buildWrapperStyles(xAlign, yAlign, isColumn) {
  // Unified x and y axes intuitive alignment for flex's
  // row & column
  let alignItems = yAlign;
  let justifyContent = xAlign;
  let flexDirection = null;

  if (isColumn) {
    flexDirection = "column";
    alignItems = xAlign;
    justifyContent = yAlign;
  }

  return {
    position: "relative",
    display: "flex",
    flexDirection, // default is 'row'
    alignItems, // default is 'stretch'
    justifyContent // default is 'flex-start'
  };
}

export default Container;
