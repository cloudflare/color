import styled from '@emotion/styled'
import {
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Textarea = styled.textarea(
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    overflow: 'auto',
    boxSizing: 'border-box',
  },
)

Textarea.defaultProps = {}

export default Textarea
