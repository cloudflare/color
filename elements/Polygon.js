import styled from '@emotion/styled'
import {color} from 'styled-system'

const Polygon = styled.polygon(color, {
  boxSizing: 'border-box',
  transition: 'color .25s ease-in, background-color .25s ease-in'
})

Polygon.defaultProps = {
  fill: 'currentColor',
}

export default Polygon
