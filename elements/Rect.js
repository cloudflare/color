import styled from '@emotion/styled'
import {color} from 'styled-system'

const Rect = styled.rect(color, {
  boxSizing: 'border-box',
  transition: 'color .25s ease-in, background-color .25s ease-in'
})

Rect.defaultProps = {
  fill: 'currentColor',
}

export default Rect
