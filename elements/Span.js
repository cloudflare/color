import styled from 'react-emotion'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
} from 'styled-system'

const Span = styled.span(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  {},
)

Span.defaultProps = {}

export default Span
