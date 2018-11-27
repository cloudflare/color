import styled from 'react-emotion'
import {color} from 'styled-system'

const Polygon = styled.polygon(color, {
  boxSizing: 'border-box',
})

Polygon.defaultProps = {
  fill: 'currentColor',
}

export default Polygon
