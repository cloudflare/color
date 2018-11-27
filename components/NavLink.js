import styled from "react-emotion"
import {
  space,
  width,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const NavLink = styled.a(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    opacity: 0.8,
    ":hover": {
      cursor: "pointer",
      opacity: 1,
      transition: "opacity .2s ease-in"
    },
    ":focus": {
      cursor: "pointer",
      opacity: 1,
      transition: "opacity .2s ease-in"
    }
  }
)

NavLink.defaultProps = {
  fontSize: 2,
  fontWeight: 700,
  color: "gray.1",
  bg: "transparent",
  display: "inline-block",
  lineHeight: 1.5
}

export default NavLink
