import React from "react"
import styled from '@emotion/styled'

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

import theme from "../theme"

const A = styled.a(
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
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    transition: "background-color .25s ease-in",
    ":hover": {
      backgroundColor: theme.colors.blue[2],
      transition: "background-color .25s ease-out",
      cursor: "pointer"
    }
  }
)

const ButtonLink = ({ variant, icon, align, ...props }) => {
  const iconSizeCompute = props.fontSize - 1
  const iconSize = theme.fontSizes[iconSizeCompute]

  switch (variant) {
    case 1:
      return (
        <A {...props}>
          {icon && align === "left" && (
            <Span pr={2}>
              <Icon color="black" size={iconSize} type={icon} />
            </Span>
          )}
          <Span style={{ whiteSpace: "nowrap" }} lineHeight={1}>
            {props.children}
          </Span>
          {icon && align === "right" && (
            <Span pl={2}>
              <Icon color="black" size={iconSize} type={icon} />
            </Span>
          )}
        </A>
      )
  }
}

ButtonLink.defaultProps = {
  align: "left",
  fontSize: 2,
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "0px solid currentColor",
  borderRadius: 2,
  bg: "blue.4",
  color: "white",
  textAlign: "center",
  px: 3,
  py: 2,
  variant: 1
}

export default ButtonLink
