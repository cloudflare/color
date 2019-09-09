import styled from '@emotion/styled'
import theme from '../theme'
import {
  space,
  width,
  height,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Progress = styled.progress(
  space,
  width,
  height,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    overflow: 'hidden',
    webkitAppearance: 'none',
    appearance: 'none',
    verticalAlign: 'top',
  }, 
)

Progress.defaultProps = {
  width: 1,
  height: 8,
  max: 100,
  value: 64,
}

export default Progress
