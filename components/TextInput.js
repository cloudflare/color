import React from "react"
import styled from "react-emotion"
import theme from "../theme"

import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  color
} from "styled-system"

const Input = styled.input(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    outline: 0,
    boxSizing: "border-box",
    appearance: "none",
    webKitAppearance: "none",
    transition: "all .25s ease-in",
    ":focus": {
      borderColor: theme.colors.gray[3],
      transition: "border-color .2s ease-in"
    }
  }
)

const TextInput = ({ ...props }) => {
  return <Input {...props} />
}

TextInput.defaultProps = {
  type: "text",
  border: "1px solid",
  fontSize: 2,
  py: 2,
  px: 2,
  width: 1
}

export default TextInput
