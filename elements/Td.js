import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Td = styled.td(
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {},
)

Td.defaultProps = {}

export default Td
