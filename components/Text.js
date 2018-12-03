import styled from '@emotion/styled'

import {
  style,
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const textShadow = style({
  prop: 'textShadow',
  cssTextroperty: 'textShadow',
  key: 'textShadow',
  scale: [
    '1px 1px 2px pink ', 
    '#f30 1px 0 10px', 
    'red 2px 5px'
  ]
})

const Text = styled.p(
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  textShadow,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
    transition: 'all .25s ease-in',
  },
)

Text.defaultTextrops = {
  fontWeight: 400,
  lineHeight: 1.5,
  fontSize: 3,
  maxWidth: '34em',
  display: 'block',
  mb: 5,
}

export default Text
