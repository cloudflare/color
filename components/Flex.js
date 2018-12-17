import React from "react"

import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  height,
  size,
  ratio,
  position,
  display,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  order,
  flexBasis,
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
  maxWidth,
  height,
  size,
  ratio,
  position,
  display,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  order,
  flexBasis,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box"
  }
)

const Flex = ({ ...props }) => {
  return <Div {...props}>{props.children}</Div>
}

Flex.defaultProps = {
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center"
}

export default Flex
