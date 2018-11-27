import glamorous from 'glamorous'
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

const Text = glamorous.p(
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
    textAlign: 'left',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  },
)

Text.defaultProps = {
  fontWeight: 400,
  fontSize: 3,
  maxWidth: '34em',
  display: 'block',
  mb: 5,
}

export default Text
