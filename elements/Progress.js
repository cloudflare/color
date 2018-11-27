import styled from 'react-emotion'
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
