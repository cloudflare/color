import styled from "@emotion/styled"
import {
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Div = styled.div(
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    transition: "all .25s ease-in"
  }
)

Div.defaultProps = {
  width: 1
}

export default Div
