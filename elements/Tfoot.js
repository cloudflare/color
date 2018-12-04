import styled from 'react-emotion'
import {space, width, fontSize, color} from 'styled-system'

const Tfoot = styled.tfoot(space, width, fontSize, color, {})

Tfoot.defaultProps = {
  width: 1,
}

export default Tfoot
