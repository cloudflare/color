import styled from 'react-emotion'
import {color, display, width, maxWidth, height} from 'styled-system'

const Svg = styled.svg(color, display, width, maxWidth, height, {
  boxSizing: 'border-box',
  transition: 'color .25s ease-in'
})

Svg.defaultProps = {
  fill: 'currentColor'
}

export default Svg
