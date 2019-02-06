import styled from "react-emotion"

import {
  style,
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const textShadow = style({
  prop: "textShadow",
  cssProperty: "textShadow",
  key: "textShadow",
  scale: ["1px 1px 2px pink ", "#f30 1px 0 10px", "red 2px 5px"]
})

const Text = styled.p(
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  textShadow,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    transition: "all .1s ease-in"
  }
)

Text.defaultProps = {
  fontWeight: 400,
  lineHeight: 1.5,
  fontSize: 3,
  maxWidth: "34em",
  display: "block",
  mb: 5
}

export default Text
