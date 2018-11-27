import styled from 'react-emotion'
import {color} from 'styled-system'

const Rect = styled.rect(color, {
  boxSizing: 'border-box',
  transition: 'color .25s ease-in'
})

Rect.defaultProps = {
  fill: 'currentColor',
}

export default Rect
