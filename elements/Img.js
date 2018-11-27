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
    display: 'block',
    maxWidth: '100%',
    borderStyle: 'none',
  },
)

Img.defaultProps = {
  width: 1,
}

export default Img
