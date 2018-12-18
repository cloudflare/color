import styled from "react-emotion"

import {
  space,
  width,
  maxWidth,
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
  p: 0,
  bg: 'transparent'

}

export default TextButton
