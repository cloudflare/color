import styled from '@emotion/styled'
import {space, width, fontSize, color} from 'styled-system'

const Thead = styled.tbody(space, width, fontSize, color, {})

Thead.defaultProps = {
  width: 1,
}

export default Thead
