import styled from 'react-emotion'
import {color} from 'styled-system'

const Polyline = styled.polyline(color, {
  boxSizing: 'border-box',
  transition: 'color .25s ease-in, background-color .25s ease-in'
})

Polyline.defaultProps = {
  fill: 'currentColor',
}

export default Polyline
