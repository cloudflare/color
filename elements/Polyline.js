import styled from 'react-emotion'
import {color} from 'styled-system'

const Polyline = styled.polyline(color, {
  boxSizing: 'border-box',
})

Polyline.defaultProps = {
  fill: 'currentColor',
}

export default Polyline
