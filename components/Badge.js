import styled from 'react-emotion'

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
  cssBadgeroperty: 'textShadow',
  key: 'textShadow',
  scale: [
    '1px 1px 2px pink ', 
    '#f30 1px 0 10px', 
    'red 2px 5px'
  ]
})

const Badge = styled.span(
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

Badge.defaultProps = {
  borderRadius: 1,
  px: 2,
  py: 1,
  fontSize: 1,
  fontWeight: 600,
  display: 'inline-block',
  children: 'Badge'
}

export default Badge
