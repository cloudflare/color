import styled from 'react-emotion'
import {
  space,
  display,
  width,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Address = styled.address(
  space,
  display,
  width,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {},
)

Address.defaultProps = {}

export default Address
