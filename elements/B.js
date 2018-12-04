import styled from 'react-emotion'
import {space, width, display, fontSize, fontWeight, color} from 'styled-system'

const B = styled.b(space, width, display, fontSize, fontWeight, color, {})

B.defaultProps = {
  fontWeight: 'bolder',
}

export default B
