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

const TextLink = styled.a(
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
    transition: ".25s ease-in color",
    boxSizing: "border-box",
    textDecoration: "none",
    ":hover": {
      color: "blue.2",
      transition: ".25s ease-in color"
    },
    ":focus": {
      color: "blue.2",
      transition: ".25s ease-in color"
    }
  }
)

TextLink.defaultProps = {
  bg: "transparent",
  color: "blue.4",
  href: "#0"
}

export default TextLink
