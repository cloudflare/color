import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Section = styled.section(
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Section.defaultProps = {
  width: 1,
}

export default Section
