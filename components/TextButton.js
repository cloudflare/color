import styled from "@emotion/styled"

import {
  space,
  width,
  maxWidth,
  position,
  top,
  right,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const TextButton = styled.button(
  space,
  width,
  maxWidth,
  position,
  top,
  right,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    webkitAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  }
)

TextButton.defaultProps = {
  border: 0,
  bg: "transparent"
}

export default TextButton
