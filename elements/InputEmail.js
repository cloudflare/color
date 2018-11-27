import styled from 'react-emotion'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  color,
} from 'styled-system'

const InputEmail = styled.input(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

InputEmail.defaultProps = {
  type: 'email',
}

export default InputEmail
