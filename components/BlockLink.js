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
    textDecoration: "none",
    transition: "opacity .25s ease-in-out",
    opacity: 1,
    ":hover": {
      cursor: "pointer",
      opacity: 0.8,
      transition: "opacity .25s ease-in-out"
    }
  }
)

A.defaultProps = {
  display: "block",
  lineHeight: "1.5",
  bg: "transparent",
  color: "gray.2",
  fontWeight: 700
}

export default React.forwardRef(({ children, ...props }, ref) => {
  return (
    <A {...props} ref={ref}>
      {children}
    </A>
  )
})
