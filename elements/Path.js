import styled from 'react-emotion'
import {color} from 'styled-system'

const Path = styled.path(color, {
  boxSizing: 'border-box',
  transition: 'color .25s ease-in'
})

Path.defaultProps = {
  fill: 'currentColor',
}

export default Path
