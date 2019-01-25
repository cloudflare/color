import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Img = styled.img(
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    borderStyle: 'none',
  },
)

Img.defaultProps = {
  width: 1,
  display: 'block',
  maxWidth: '100%'
}

export default Img
