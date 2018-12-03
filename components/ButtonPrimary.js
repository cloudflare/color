import React from "react"
import styled from "@emotion/styled"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Button = styled.button(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "inherit",
    overflow: "visible",
    textTransform: "none",
    webkitAppearance: "button",
    transition: "background-color .25s ease-in",
    ":hover": {
      backgroundColor: "rgba(255,255,255,1)",
      cursor: "pointer"
    }
  }
)

Button.defaultProps = {
  bg: "rgba(255,255,255,.7)",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "100%",
  lineHeight: 1,
  m: 0,
  textAlign: "center"
}

const ButtonPrimary = ({ button, iconSize, ...props }) => {
  return (
    <Button {...props}>
      {props.align === "left" && <Icon size={iconSize} type={button} />}
      <Span height={16} display="inline-block" px={1}>
        {props.children}
      </Span>
      {props.align === "right" && <Icon size={16} type={button} />}
    </Button>
  )
}

ButtonPrimary.defaultProps = {
  borderRadius: 2,
  border: "1px solid transparent",
  py: 2,
  px: 3,
  fontSize: 2,
  button: "left",
  children: "Click",
  align: "left",
  iconSize: 16
}

export default ButtonPrimary
