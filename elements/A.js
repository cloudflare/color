import styled from "@emotion/styled"

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

const A = styled.a(
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
    textDecoration: "underline",
    transition: "opacity .25s ease-in-out",
    opacity: 1,
    ":hover": {
      cursor: "pointer",
      opacity: 0.75,
      transition: "opacity .25s ease-in-out"
    }
  }
)

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
  color: "gray.2"
}

export default ({ children, ...props }) => {
  return <A {...props}>{children}</A>
}
