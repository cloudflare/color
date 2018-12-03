import styled from '@emotion/styled'
import {
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Progress = styled.progress(
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
  {},
)

Progress.defaultProps = {}

export default Progress
