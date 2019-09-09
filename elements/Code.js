import styled from '@emotion/styled'
import {
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Code = styled.code(
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
    display: 'block'
  },
)

Code.defaultProps = {}

export default Code
