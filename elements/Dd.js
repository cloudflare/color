import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Dd = styled.dd(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  {},
)

Dd.defaultProps = {}

export default Dd
