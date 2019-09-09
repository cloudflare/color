import styled from '@emotion/styled'
import {
  space,
  width,
  display,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Form = styled.form(
  space,
  width,
  display,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Form.defaultProps = {}

export default Form
