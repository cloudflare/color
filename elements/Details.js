import styled from 'react-emotion'
import {
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
} from 'styled-system'

const Details = styled.details(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {},
)

Details.defaultProps = {
  display: 'block',
}

export default Details
