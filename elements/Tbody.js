import styled from 'react-emotion'
import {space, width, fontSize, color} from 'styled-system'

const Tbody = styled.tbody(space, width, fontSize, color, {})

Tbody.defaultProps = {
  width: 1,
}

export default Tbody
