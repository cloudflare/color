import React from "react"
import styled from "react-emotion"

import {
  space,
  width,
  height,
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

import theme from "../theme"

const Button = styled.button(
  space,
  width,
  height,
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
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    cursor: "pointer"
  }
)

const ButtonIcon = ({ variant, icon, iconSize, ...props }) => {
  switch (variant) {
    case 1:
      return (
        <Button {...props}>
          <Icon color="inherit" size={iconSize} type={icon} />
        </Button>
      )
  }
}

ButtonIcon.defaultProps = {
  display: "flex",
  height: 32,
  width: 32,
  alignItems: "center",
  justifyContent: "center",
  border: "0px solid currentColor",
  textAlign: "center",
  bg: "transparent",
  color: "black",
  variant: 1,
  borderRadius: 9999
}

export default ButtonIcon
