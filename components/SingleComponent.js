import React from "react"
import styled from "react-emotion"

import {
  style,
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
  boxShadow,
} from 'styled-system'

const textShadow = style({
  prop: 'textShadow',
  cssProperty: 'textShadow',
  key: 'textShadow',
  scale: [
    '1px 1px 2px pink ', 
    '#f30 1px 0 10px', 
    'red 2px 5px'
  ]
})

const SingleComponent = styled.a(
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
  boxShadow,
  textShadow,
  {
    transition: 'all .5s ease-in',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  },
)

SingleComponent.defaultProps = {
  fontWeight: 600,
  fontSize: 2,
  display: 'inline-block',
}

export default SingleComponent
