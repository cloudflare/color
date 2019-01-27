import styled from 'react-emotion'
import {
  space,
  width,
  display,
  textAlign,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
} from 'styled-system'

const H4 = styled.h4(
  space,
  width,
  display,
  textAlign,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  {
    boxSizing: 'border-box',
  },
)

H4.defaultProps = {}

export default H4
