import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
} from 'styled-system'

const Label = styled.label(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  {},
)

Label.defaultProps = {}

export default Label
