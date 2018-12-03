import styled from '@emotion/styled'
import {
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Textarea = styled.textarea(
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    overflow: 'auto',
  },
)

Textarea.defaultProps = {}

export default Textarea
